function cariMedian(arr) {
    // you can only write your code here!
    var nilaiAtas = 0;
    var nilaiBawah = 0;
    var median = 0;

    if(arr.length%2===1){
        median = (arr.length+1)/2-1;
        return arr[median];
    }else{
        nilaiAtas = arr.length/2;
        nilaiBawah = nilaiAtas - 1;
        return median = (arr[nilaiAtas]+arr[nilaiBawah])/2;
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5