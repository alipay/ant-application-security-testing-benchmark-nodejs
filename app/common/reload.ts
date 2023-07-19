function add(param1:string,param2:string): string
function add(param1:number,param2:number): number

function add(param1: string|number,param2: string|number){
	if(typeof param1 === 'string' && typeof param2 === 'string'){
		return param1+param2;
	}
	else if(typeof param1 === 'number' && typeof param2 === 'number'){
		return param1+param2;
	}
	else{
		return param1.toString()+param2.toString();
	}
}

export {add}
