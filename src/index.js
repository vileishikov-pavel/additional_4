module.exports = function multiply(first, second) {
  var result = '', results = [];

  if (first.length > second.length) {
    var temp = second; second = first; first = temp;
  }

  for (var i = 0, len = first.length; i < len; i++) {
    result = simpleMultiply( second, parseInt(first.pop()) ) + repeatZeros(i);

    results.push(result);
  }

  return results.reduce(function (prev, next) {
    return sum(prev, next);
  });
}

function simpleMultiply (num, factor) {
  var result = '', midRes = 0, mem = 0;

  for (var i = 0, len = num.length; i < len; i++) {
    midRes = +num.pop() + mem;

    if (midRes > 9) {
      mem = Math.floor(midRes / 10);
      midRes = midRes % 10;
    } else {
      mem = 0;
    }

    result = midRes + result;
  }

  if (mem) { result = mem + result; }

  return result;
}

function sum(num1, num2) {
  var sum = 0, mem = 0, result = '', len1 = num1.length, len2 = num2.length;

  if (len1 > len2) {
    num2 = repeatZeros(len1 - len2) + num2;
  } else if (len2 > len1) {
    num1 = repeatZeros(len2 - len1) + num1;
  }

  for (var i = 0; i < len1; i++) {
    sum = +num1.splice(-1) + +num2.splice(-1) + mem;

    if (sum > 9) {
      mem = 1; sum = sum - 10;
    } else {
      mem = 0;
    }

    result = sum + result;
  }

  if (mem) { result = mem + result; }

  return result;
}

function repeatZeros (count) {
  return new Array(count + 1).join('0');
}
