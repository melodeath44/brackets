module.exports = function check(str, bracketsConfig) {
  const array = str.split(',');
  const arrayReverse = array.reverse()
  let x
  let y
for(let i = 0; i < array.length; i++){
   x = array[i]
   
}
for(let o = 0; o < arrayReverse.length; o++){
   y = arrayReverse[o]
}
if(x === y){
  return true
}
 else return false



}
