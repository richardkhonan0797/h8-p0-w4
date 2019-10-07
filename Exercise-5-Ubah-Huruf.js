function ubahHuruf(kata) {
    // you can only write your code here!
    var str = []
    for(i=0;i<kata.length;i++){
        var ascii = kata.charCodeAt(i);
        var newLetter = String.fromCharCode(ascii+1);
        str.push(newLetter);
    }
    res = str.join("");
    return res;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu