function nbYear(p0, percent, aug, p) {
  
  for (let i = 0; p0 <= p; i += 1) {
    p0 = p0 * percent / 100 + aug;
  }
  return i;
  }


console.log(nbYear(1500000, 0.25, 1000, 2000000));
