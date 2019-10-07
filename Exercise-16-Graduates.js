function graduates(students) {
  // Code disini
  let arrStudent = [];
  for (let student of students) {
    let temp = [];
    temp.push(student.name);
    temp.push(student.score);
    temp.push(student.class);
    arrStudent.push(temp);
  }
  for (let i = 0; i < arrStudent.length; i++) {
    if (arrStudent[i][1] <= 75) {
      arrStudent.splice(i, 1);
    }
  }
  var obj = {}
  for(let kelas of arrStudent){
      if(kelas[2] in obj){
          continue
      }else{
          obj[kelas[2]] = []
      }
  }
  for (let key in obj){
      for(let i=0;i<arrStudent.length;i++){
          let data = {}
          if(arrStudent[i][2]==key){
              data['name'] = arrStudent[i][0]
              data['score'] = arrStudent[i][1]
              obj[key].push(data)
          }
      }
  }
  return obj
}
console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
  graduates([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}
