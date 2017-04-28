

// Set the prototype of the Surrogate (Surrogate.prototype = SuperClass.prototype)
// Set Subclass.prototype = new Surrogate()
// Set Subclass.prototype.constructor = Subclass

Function.prototype.inherits = function (object) {
  function Surrogate () {}
  Surrogate.prototype = object.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
