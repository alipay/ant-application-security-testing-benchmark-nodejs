class Person{
  constructor() {
    this.name = "abc";
    this.id = 0;
    this.taint = "taint";
  }
  setName(name){
    this.name=name;
  }

  setId(id){
    this.id=id;
  }

  getName(){
    return this.name;
  }

  getId(){
    return this.id;
  }

  AA(){
    return this.taint;
  }

  BB(){
    return this.id;
  }
}

module.exports = Person;
