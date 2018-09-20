module.exports = function solveEquation(equation) {
  // your implementation
  
  // ax2 + bx + c
  let a, b, c, d,
      x1, x2, 
      result,
      quadraticEquation,
      quadraticEquationArr;
  
  quadraticEquation = equation.replace(/(\s\*\s)+/g,'').replace(/(-\s)/g, '-').replace(/(\+\s)/g, '+');
  quadraticEquationArr = quadraticEquation.split(' ');
  
  quadraticEquationArr.forEach(item => {
    if (item.search(/\x\^2/ig) !== -1) {
      a = item.replace(/x\^2/i, '');
    } else if(item.search(/x/ig) !== -1) {
      b = item.replace(/x/i, '');
    } else {
      c = item;
    }
  })
  
  d = Math.sqrt(b*b - 4*a*c);

  x1 = Math.round((-b - d)/(2*a));
  x2 = Math.round((-b + d)/(2*a));

  if (x1 < x2) {
    result = [x1, x2]
  } else {
    result = [x2, x1];
  }
  
  return result;
}
