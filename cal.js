function soma(a, b){
  return a+b;
}
function subt(a, b){
  return a-b;
}
function mult(a, b){
  return a*b;
}
function div(a, b){
  if (b!=0) {
    return a/b;
  }
}
function piso(a){
  return Math.floor(a);
}
function teto(a){
  return Math.ceil(a)
}

module.exports = {
  soma,
  mult,
  subt,
  div,
  piso,
  teto
}