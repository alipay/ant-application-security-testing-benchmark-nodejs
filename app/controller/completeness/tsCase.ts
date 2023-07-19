const Controller = require('egg').Controller;
import {SinkC} from "../../service/sinkC"
import {XX,YY} from "../../common/interfaceDemo"
import {XImpl,XYImpl} from "../../common/interfaceImpl"
import {fooManagerTemplate} from '../../generic/fooManagerTemplate';
import {add} from '../../common/reload'
import {MyNameSpace} from '../../common/namespace';

class tsCase extends Controller{
	//type
	async case0187(){
		const a:string = this.ctx.query.a;
		let sinkC:SinkC= new SinkC();
		const res:string = sinkC.sink5(a);
		this.ctx.body = `Output: \n${res}`;
	}

	//type as
	async case0188(){
		const a = "hello" as string;
		let w = <string> "world";
		var taint:string = this.ctx.query.a;
		let p = a+" "+w+" "+taint;
		let sinkC:SinkC= new SinkC();
		const res:string = sinkC.sink5(p);
		this.ctx.body = `Output: \n${res}`;
	}

	//union type
	async case0189(){
		const a:string|number = this.ctx.query.a;
		let sinkC:SinkC= new SinkC();
		const res:string = sinkC.sink3(a);
		this.ctx.body = `Output: \n${res}`;
	}

	//intersection type
	async case0190(){
		const xy:XX&YY = {
			q:123,
			w:"hello",
			r:this.ctx.query.a
		}
		let sinkC:SinkC= new SinkC();
		const res:string = sinkC.sink3(xy);
		this.ctx.body = `Output: \n${res}`;
	}

	//interface implement
	async case0191(){
		const a:string = this.ctx.query.a;
		const xImpl = new XImpl(1,"hello");
		const temp:string=xImpl.say(a);
		let sinkC:SinkC= new SinkC();
		const res:string = sinkC.sink5(temp);
		this.ctx.body = `Output: \n${res}`;
	}

	//interface mixin
	async case0192(){
		const a:string = this.ctx.query.a;
		const xyImpl = new XYImpl(1,"hello","world");
		const temp:string=xyImpl.say(a);
		let sinkC:SinkC= new SinkC();
		const res:string = sinkC.sink5(temp);
		this.ctx.body = `Output: \n${res}`;
	}

	//generic
	async case0193(){
		const s:string = this.ctx.query.s;
		const a = this.ctx.query.a;
		const obj = new fooManagerTemplate<string,number>();
		const res = obj.execute(s,a);
		this.ctx.body = `Output: \n${res}`;
	}

	//reload
	async case0194(){
		const s = this.ctx.query.s;
		const a = this.ctx.query.a;
		const res=add(s,a);
		this.ctx.body = `Output: \n${res}`;
	}

	//namespace
	async case0195(){
		const a = this.ctx.query.a;
		const res=MyNameSpace.returnParam(a);
		this.ctx.body = `Output: \n${res}`;
	}

}

module.exports=tsCase;
