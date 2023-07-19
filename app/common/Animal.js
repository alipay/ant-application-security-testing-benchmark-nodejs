class Animal{
  constructor(variety,size) {
    this.variety=variety;
    this.size=size;
  }
  AA(){
    return this.variety;
  }
  returnTaint(param){
    return 1;
  }
}

module.exports=Animal
