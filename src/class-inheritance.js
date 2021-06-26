class Animal {
  constructor(name) {
    this.speed  = 0;
    this.name   = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
  }
}

class Rabbit extends Animal { // inherit Animal
  //constructor(name, earLength) {
  //  // Rabbit can have its own constructor. Note that super() is mandatory because it creates 'this'.
  //  super(name);
  //  this.earLength = earLength;
  //}
  hide() {
    if(this.speed != 0) {
      console.log("Failed to hide!");
      return;
    }
    console.log(`${this.name} hides!`);
  }
  stop() {  // override stop()
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("Ninjin");  // constructor in Animal
rabbit.run(10); // run in Animal
rabbit.hide();  // hide in Rabbit
rabbit.run(10); // run in Animal
rabbit.stop();  // stop in Rabbit