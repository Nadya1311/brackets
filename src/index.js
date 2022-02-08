module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closedBrackets= [];
  const arr= [];

 
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closedBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    if (closedBrackets.includes(str[i])){

      const openPairs = openBrackets[closedBrackets.indexOf(str[i])];
      if (arr[arr.length - 1] === openPairs ){
        arr.splice(-1,1);
      } else {
        arr.push(str[i]);
      }

    } else {
      arr.push(str[i]);
    }
  }
  return arr.length === 0;
}
