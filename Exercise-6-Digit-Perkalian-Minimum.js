function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktor = [];
    for(let i=1;i<=angka;i++){
        if(angka%i===0){
            faktor.push(i);
        }
    }
    
    var perkalian = []
    for(let i=0;i<faktor.length/2;i++){
        for(let j=faktor.length-1;j>i;j--){
            if(faktor[i]*faktor[j]===angka){
                perkalian.push([faktor[i],faktor[j]]);
            }
        }
    }
    if(angka === 1){
        let res = 2;
        return res;
    }
    var digit = perkalian[perkalian.length-1].toString().replace(/,/g,'');
    res = digit.length;

    return res;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2