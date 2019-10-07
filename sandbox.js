function checkAB(num) {
    // you can only write your code here!
    for(let i=0;i<num.length-5;i++){
      let sliced = num.slice(i,i+5)
      if(sliced[0]==='a' && sliced[4]==='b' || sliced[0]==='b' && sliced[4]==='a'){
        return true
      }
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false