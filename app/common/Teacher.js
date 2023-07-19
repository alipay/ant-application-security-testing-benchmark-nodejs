const Person = require ("./Person")

class Teacher extends Person{
  constructor(name,id,taint) {
    super(name,id,taint);
    this.name=name;
    this.id=id;
    this.taint=taint;
  }

  getName(){
    return this.name;
  }

  getId(){
    return this.id;
  }

  AA(){
    return super.AA();
  }
  BB(){
    return super.BB();
  }

}

module.exports = Teacher;
