import { fooManagerInterface } from './fooManagerInterface';
import { SinkC } from '../service/sinkC';

class fooManagerImpl<Q,T> implements fooManagerInterface<Q,T>{
	doBar(param1:Q,param2:T){
		let sinkC:SinkC= new SinkC();
		return sinkC.sink5(String(param1)+String(param2));
	}
}

export {fooManagerImpl}
