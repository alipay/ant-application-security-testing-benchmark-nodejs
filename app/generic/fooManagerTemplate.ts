import { fooManagerImpl } from './fooManagerImpl';

class fooManagerTemplate<Q,T>{
	constructor() {
		this.fmimpl = new fooManagerImpl<Q, T>();
	}
	fmimpl:fooManagerImpl<Q,T>;
	execute(req:Q,res:T){
		return this.fmimpl.doBar(req, res);
	}
}

export {fooManagerTemplate}
