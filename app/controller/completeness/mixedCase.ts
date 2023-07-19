const { Controller } = require('egg');
const SinkB = require('../../service/sinkB')
import { pick } from 'lodash';
const mysql = require('mysql')

const genBaseParams = (param) => {
	const {
		user,
		event: { functionName, name },
	} = param;
	return {
		operatorId: user?.userId || '',
		sourceApp: name,
		source: functionName
	};
};

class mixedCase extends Controller{ //derived from real business code (masked)

	//if statement +try statement +new statement
	async case041(){
		var a = this.ctx.query.a;
		const str = new String(a).toString();
		if(a === '1'){
			try{
				var res =this.ctx.service.sinkA.sink1(str);
				this.ctx.body = `Output: \n${res}`;
			}catch(e){
				//...
			}
		}
	}

	// object statement + try statement + Destructuring assignment
	async case042(){
		const { ctx } = this.ctx;
		try {
			ctx.body = {
				success: true,
				data: this.ctx.service.sinkA.sink1(ctx.cmd_str),
			};
			return `cmd_success, str is ${ctx.body.data.result}`;
		} catch (e) {
			return `cmd_failed, str is ${ctx.cmd_str}`;
		}
	}

	//multi-level object statement + try + Destructuring assignment
	async case043(){
		const { ctx } = this.ctx;
		try {
			ctx.body = {
				success: true,
				data: {
					result: this.ctx.service.sinkA.sink1(ctx.cmd_str),
				},
			};
			return `cmd_success, str is ${ctx.body.data.result}`;
		} catch (e) {
			return `cmd_failed, str is ${ctx.cmd_str}`;
		}
	}

	//try + Destructuring assignment
	async case044(){
		const { ctx } = this.ctx;
		try{
				const sinkB = new SinkB();
				var res = sinkB.sink2(ctx.cmd_str);
				this.ctx.body = `Output: \n${res}`;
			}catch (e) {
			//..
		}
	}

	// try + if +  object statement + func pass
	async case045(){
		const a = this.ctx.query.a;
		try {
			const obj= {
				success: true,
				data: {
					result: 'success',
					abc(param){
						const sinkB = new SinkB();
						return sinkB.sink2(param);
					}
				},
			}
			const res = obj.data.abc(a);
			return `cmd_success, str is ${res}`;
		} catch (e) {
			return `cmd_failed, str is ${a}`;
		}
	}

	// Destructuring assignment + multi service
	async case046(){
		const { cc } = this.ctx.params;
		const { __target__ } = cc;
		const a = this.service.complexService.execHttp.endex(__target__);
		return a;
	}

	// promise + require
	async case047() {
		try {
			const body = await new Promise((resolve, reject) => {
				require('child_process').exec(this.ctx.request.body.cmd, (error, stdout) => {
					if (error) {
						reject(error);
					}
					resolve(stdout);
				});
			});
			this.ctx.body = { success: true, body };
		} catch (error) {
			this.ctx.body = { success: false };
		}
	}

	// spread operator + obj expression + to sink
	async case048(){
		const apiParam  = this.ctx.query.a;
		const res = await this.ctx.service.sinkA.sink1({
			...apiParam,
		});
		return res;
	}

	//multi spread operator + obj expression in sink
	async case049(){
		const apiParam  = this.ctx.query.a;
		const paramB = this.ctx.query.b;
		const res = await this.ctx.service.sinkA.sink1({
			...apiParam,
			...paramB
		});
		return res;
	}

	//if statement + binary expression + ?.
	async case0410(){
		const animal = {
			cat: {
				name: this.ctx.query.a,
				color: 'black'
			},
			dog: {
				name: 'doggie'
			}
		}
		if(animal ?. cat ?. name || {}){
			const sinkB=new SinkB();
			const res = sinkB.sink2(animal.cat.name);
			this.ctx.body = `Output: \n${res}`;
		}
	}

	//if statement + ?. + Ternary expressions
	async case0411(){
		const animal = {
			cat: {
				name: this.ctx.query.a,
				color: 'black'
			},
			dog: {
				name: 'doggie'
			}
		}
		if(animal.dog.name){
			const sinkB=new SinkB();
			const res = sinkB.sink2(animal?.cat?.name ? animal.cat.name : animal.dog.name);
			this.ctx.body = `Output: \n${res}`;
		}
	}

	//?. + array
	async case0412(){
		const arr = ['1','2',this.ctx.query.a];
		const animal = {
			cat: {
				name: arr,
				color: 'black'
			},
			dog: {
				name: 'doggie'
			}
		}
		const sinkB=new SinkB();
		const res = sinkB.sink2(animal?.cat?.name?.[2]);
		this.ctx.body = `Output: \n${res}`;
	}

	//binary expression + binary expression + Destructuring assignment
	async case0413(){
		const { abc } = ( this.ctx.query.a && this.ctx.userInfo) || {};
		const params = {
			abc
		};
		const res = await this.ctx.service.sinkA.sink1(params);
		this.ctx.body = `Output: \n${res}`;
	}

	//spread operator + Destructuring assignment + binary expression
	async case0414(){
		const { abc } = (this.ctx.userId && this.ctx.userInfo);
		const params = {
			abc,
			...this.ctx.request.query,
		};
		const res = await this.ctx.service.sinkA.sink1(params);
		this.ctx.body = `Output: \n${res}`;
	}

	// spread operator + Destructuring assignment + third-party pack
	async case0415(){
		const { abc } = (this.ctx.userId && this.ctx.userInfo);
		const params = {
			...pick(abc, ['ipId', 'ipRoleId']),
			siteUserId: this.ctx.userInfo.Id,//mmm
		};
		const res = await this.ctx.service.sinkA.sink1(params);
		this.ctx.body = `Output: \n${res}`;
	}

	//arrow func statement + obj statement + spread operator
	async case0416(){
		const { other_params, params } = this.ctx.queries;
		const res = await this.ctx.service.sinkA.sink1({
			...genBaseParams(params),
			...other_params,
		});
		this.ctx.body = `Output: \n${res}`;
	}

	// Template string + arrow func statement
	async case0417(){
		const fuzzyStr = this.ctx.query.a;
		let sqlString = `
        SELECT uk_cluster_name,cluster_type
        FROM cluster
        WHERE uk_cluster_name LIKE '%${mysql.escape(fuzzyStr)}%'
      `
		const res = await this.ctx.service.sinkA.sink1(sqlString);
		this.ctx.body = `Output: \n${res}`;
	}

	//string operate + third-party pack + try statement
	async case0418(){
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'test',
		});
		try {
			connection.query('SELECT * FROM projects WHERE id =' + this.ctx.query.a, function (err) {
				if (err) throw err;
			});
			return "success";
		} catch (e) {
			return "fail";
		}
	}

	//for in + spread operator + arrow func statement
	async case0419(){
		const { params } = this.ctx.queries;
		var obj = {
			a:this.ctx.query.a,
			...genBaseParams(params),
		}
		var res="res:";
		for (let index in obj) {
			res += await this.ctx.service.sinkA.sink1(index);
		}
		this.ctx.body = `Output: \n${res}`;
	}

	//IIFE + spread operator + Destructuring assignment
	async case0420(){
		const { params } = this.ctx.params;
		var pp=(function(param) {
			// 块级作用域
			var a= param;
			var res="";
			for (var i = 0; i < 5; i++) {
				res += a;
			}
			return res;
		})({...params});
		const sinkB = new SinkB();
		var res = sinkB.sink2(pp);
		this.ctx.body = `Output: \n${res}`;
	}
}
module.exports = mixedCase;
