// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// sum function
function sum(a, b) {
    let ans = (parseInt(a) + parseInt(b));
    return (isNaN(ans)) ? 0 : ans;
}

// isTrue function
function isTrue(bool) {
    return (bool === true);
}

// isFalse function
function isFalse(bool) {
    return (bool === false);
}

// notBool function
function notBool(bool) {
    return !bool;
}

// addOne function
function addOne(a) {
    return a++;
}

// isEven function
function isEven(a) {
    return (a % 2 == 0);
}

// isIdentical function
function isIdentical(a, b) {
    return (a === b);
}

// isEqual function
function isEqual(a,b) {
    return (a == b);
}

// or function
function or(a,b) {
    return (a || b);
}

// and function
function and(a,b) {
    return (a && b);
}

// concat function
function concat(a,b) {
    let tempA = a;
    let tempB = b;
  
    if (!isNaN(a)) {
      tempA = tempA.toString();
    }
  
    if (!isNaN(b)) {
      tempB = tempB.toString();
    }

    return (tempA + tempB);
};

// isVowel function
function isVowel(a) {
    if (!isNaN(a)) {
      return false;
    } else if (typeof a === "boolean") {
      return false;
    } else if (a == null) {
      return false;
    } else {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(a.toLowerCase()) !== -1;
    }
}

// add function
function add(a,b) {
    return parseInt(a)+parseInt(b);
}

// isEven