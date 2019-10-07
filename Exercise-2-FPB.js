function fpb(angka1, angka2) {
    // you can only write your code here!
    var habisDibagi = 0;
    var angkaKecil = 0;
    if(angka1<angka2){
        angkaKecil = angka1;
        angkaBesar = angka2;
    }else{
        angkaKecil = angka2;
        angkaBesar = angka1;
    }

    for(i=1;i<angkaKecil;i++){
        if(angkaKecil%i === 0 && angkaBesar%i === 0 ){
            habisDibagi = i;
        }
    }
    return habisDibagi;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1