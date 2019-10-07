function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  var arrObj = []
  for (var penumpang of arrPenumpang) {
    harga = rute.indexOf(penumpang[2])-rute.indexOf(penumpang[1])
    var obj = {}
    obj.penumpang = penumpang[0]
    obj.naikDari = penumpang[1]
    obj.tujuan = penumpang[2]
    obj.harga = harga*2000
    arrObj.push(obj)
  }
  return arrObj;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
