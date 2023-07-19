import {X,Y} from './interfaceDemo'

class XYImpl implements X,Y{
	q:number;
	w:string;
	r:string;
	hi():void{
		console.log("hello world");
	}
	say(param:string):string{
		return this.w+this.r+param;
	}
	constructor(q:number,w:string,r:string) {
		this.q=q;
		this.w=w;
		this.r=r;
	}

}

class XImpl implements X{
	q:number;
	w:string;
	say(param:string):string{
		return this.w+param;
	}
	constructor(q:number,w:string) {
		this.q=q;
		this.w=w;
	}
}

export { XYImpl,XImpl }
