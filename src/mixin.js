const sayMixin = {
  say(phrase) { console.log(phrase); }
}
const sayHiMixin = {
  __proto__: sayMixin,  // inherit another mixin
  sayHi() { super.say("Hello " + this.name); }  // 'super' here is searched from '__proto__' regardless of the context
}

class Person {}
class User extends Person { // User can't inhetrit any other classes
  constructor(name) { super(name); this.name = name; }
}
Object.assign(User.prototype, sayHiMixin)   //mixin by copying method
new User("Taro").sayHi();


// mixin event manager
const eventMixin = {
  // menu.on('select', function(args) { ... })
  on(eventName, handler) {
    this._eventHandlers ??= {};             // Array of events
    this._eventHandlers[eventName] ??= [];  // Array of handlers
    this._eventHandlers[eventName].push(handler);
  },

  // menu.off('select', handler)
  off(eventName, handler) {
    let handlers = this?._eventHandlers?.[eventName];
    if (!handlers) return;
    for(let i = 0; i < handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);  // delete handlers[i] and rollback the search index
      }
    }
  },

  // this.trigger('select', data1, data2);
  trigger(eventName, ...args) {
    const event = this?._eventHandlers?.[eventName];
    if (!event) return;  // if event doesn't exist
    event.forEach(handler => handler.apply(this, args));
  }
};

class Menu {
  choose (value) { this.trigger("select", value); }
}

Object.assign(Menu.prototype, eventMixin);
const menu = new Menu();
const event1 = value => console.log("Value selected1: " + value);
const event2 = value => console.log("Value selected2: " + value);
console.log("no event");
menu.choose("123");
console.log("set event1 event2");
menu.on("select", event1);
menu.on("select", event2);
menu.choose("123");
console.log("delete event1");
menu.off("select", event1);
menu.choose("123");
console.log("delete event2");
menu.off("select", event2);
menu.choose("123");