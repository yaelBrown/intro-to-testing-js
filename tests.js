'use strict';

// Unit tests for the helloWorld function

// helloWorld
describe('helloWorld', function() {
  it('should be a defined function', function() {
    expect(typeof helloWorld).toBe('function');
  });
  it('should return a string when called', function() {
    expect(typeof helloWorld()).toBe("string");
  });
  it('should return the string "Hello, World!" when executed', function() {
    expect(helloWorld()).toBe("Hello, World!");
  });
  it("should never return 'undefined' when called", function() {
    expect(helloWorld()).not.toBe(undefined);
  });
});

// sum
describe('sum', function() {
  it('Should be a defined function', function() {
    expect(typeof sum).toBe('function');
  });
  it('Should return a number when called', function() {
    expect(typeof sum()).toBe("number");
  });
  it('Should return 0 if non-parseable number is entered', function() {
    expect(sum("apple", 12)).toEqual(0);
  });
});

// isTrue
describe('isTrue', function() {
  it('Should be a defined function', function() {
    expect(typeof isTrue).toBe('function');
  });
  it('Should return a boolean', function() {
    expect(typeof isTrue()).toBe("boolean");
  });
});

// isTrue
describe('isFalse', function() {
  it('Should be a defined function', function() {
    expect(typeof isFalse).toBe('function');
  });
  it('Should return a boolean', function() {
    expect(typeof isFalse()).toBe("boolean");
  });
});

// notBool 
describe('notBool', function() {
  it('Should be a defined function', function() {
    expect(typeof notBool).toBe('function');
  });
  it('Should return a boolean', function() {
    expect(typeof notBool()).toBe("boolean");
  });
  it('Should return false when true is passed and true when false is passed', function() {
    expect(notBool(true)).toBe(false);
  });
;});

// addOne
describe('addOne', () => {
  it('Should be  a defined function', function() {
    expect(typeof addOne).toBe('function');
  });
  it('Should return a number', function() {
    expect(typeof addOne()).toBe('number');
  });
  it('If non-number is passed, return NaN', function() {
    expect(addOne("apple")).toEqual(NaN);
  });
})

//isEven
describe('isEven', function() {
  it('Should be a defined function', function() {
    expect(typeof isEven).toBe('function');
  });
  it('Should return a boolean', function() {
    expect(typeof isEven()).toBe('boolean');
  });
  it('If odd number is passed it should return false', function() {
    expect(isEven(3)).toBe(false);
  })
  it('If even number is passed it should return true', function() {
    expect(isEven(2)).toBe(true);
  })
})

// isIdentical
describe('isIdentical', function() {
  it('Should be a defined function', function() {
    expect(typeof isIdentical).toBe('function');
  });
  it('Should return a boolean', function() {
    expect(typeof isIdentical()).toBe('boolean');
  });
  it('if True and "True" is passed should return false', function() {
    expect(isIdentical(true, "true")).toBe(false);
  });
});

// isEqual
describe('isEqual', function() {
  it('Should be a defined function', function() {
    expect(typeof isEqual).toBe('function');
  });
  it('Should return a boolean', function() {
    expect(typeof isEqual()).toBe('boolean');
  });
  it('if True and "True" is passed should return false', function() {
    expect(isEqual(true, "true")).toBe(false);
  });
});

// or
describe('or', function() {
  it('Should be a defined function', function() {
    expect(typeof or).toBe('function');
  });
  it('Should return a boolean', function() {
    expect(typeof or(true, true)).toBe('boolean');
  });
  it('if "True" and "False" is passed should return "True"', function() {
    expect(or(true, false)).toEqual(true);
  });
});

// and
describe('and', function() {
  it('Should be a defined function', function() {
    expect(typeof or).toBe('function');
  });
  it('Should return a boolean', function() {
    expect(typeof or(true, true)).toBe('boolean');
  });
  it('if "True" and "False" is passed should return "True"', function() {
    expect(or(true, false)).toEqual(true);
  });
});

// concat
describe('concat', function() {
  it('Should be a defined function', function() {
    expect(typeof concat).toBe('function');
  });
  it('Should return a string', function() {
    expect(typeof concat("apple", "samsung")).toBe('string');
  });
  it('Should convert numbers to strings and concatenate', function() {
    expect(concat(12, 27)).toEqual("1227");
  });
})