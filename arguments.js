function sum() {
  const numbers = Array.from(arguments);
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// const sum = (...args) => {
//   const numbers = args;
//   let total = 0;
//
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// };

Function.prototype.myBind = function () {
  const args = Array.from(arguments);
  const that = this;
  return function() {
    const args2 = Array.from(arguments);
    return that.apply(args[0], args.slice(1).concat(args2));
  };
};


// myBind with fat_arrow
Function.prototype.myBind = function (...args) {
  return (...args2) => {
    return this.apply(args[0], args.slice(1).concat(args2));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}




//curriedSum
function curriedSum(numArgs){
  const numbers = [];
  const _curriedSum = (number) => {
    numbers.push(number);
    if (numbers.length === numArgs) {
      let total = 0;
      numbers.forEach(function(el) {
        total += el;
      });
      return total;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
}

// const total = curriedSum(4);
// console.log(total(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  const collection  = [];
  const that = this;
  const _innerFunction = function (num) {
    collection.push(num);
    if (collection.length >= numArgs) {
      return that(...collection);
    } else {
      return _innerFunction;
    }
  };
  return _innerFunction;
};


Function.prototype.curry = function(numArgs) {
  const collection  = [];
  const _innerFunction = (num) => {
    collection.push(num);
    if (collection.length >= numArgs) {
      return this(...collection);
    } else {
      return _innerFunction;
    }
  };
  return _innerFunction;
};

function sumThree(one, two, three){
  return (one + two + three);
}


console.log(sumThree.curry(3)(2)(2)(2));
