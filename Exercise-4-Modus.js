function cariModus(arr) {
    // you can only write your code here!
    counter = 0;
    modus = -1;
    for(var i = 0;i<arr.length;i++){
        var tempCount = 0;
        for(j = 0;j<arr.length;j++){
            if(arr[i]===arr[j] && i!==j){
                tempCount++
            }
        }
        if(tempCount>counter){
            counter = tempCount;
            modus = arr[i];
            tempCount = 0;
        }else if(tempCount === arr.length-1){
            modus = -1;
        }
    }
    return modus;
}
  
  //10,4,5,2,4
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1