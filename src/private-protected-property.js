class CoffeeMachine {
  #waterAmount = 0;
  get waterAmount() {
    return this.#waterAmount;
  }
  set waterAmount(val) {
    if (val<0) {
      throw new Error("Negative water");
    }
    this.#waterAmount = val;
  }
}

let machine = new CoffeeMachine();
machine.waterAmount = 100;
console.log(machine.waterAmount);
machine.waterAmount = -10;
console.log(machine.waterAmount);