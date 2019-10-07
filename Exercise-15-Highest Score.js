function highestScore(students) {
  // Code disini
  let arrStudents = [];
  for (let student of students) {
    let temp = [];
    temp.push(student.name);
    temp.push(student.score);
    temp.push(student.class);
    arrStudents.push(temp);
  }

  for (let i = 0; i < arrStudents.length; i++) {
    for (let j = 0; j < arrStudents.length; j++) {
      if (arrStudents[i][2] == arrStudents[j][2]) {
        if (arrStudents[i][1] > arrStudents[j][1]) {
          arrStudents.splice(j, 1);
        } else if (arrStudents[i][1] < arrStudents[j][1]) {
          arrStudents.splice(i, 1);
        }
      }
    }
  }

  let obj = {};
  for (let kelas of arrStudents) {
    if (kelas[2] in obj) {
      continue;
    } else {
      obj[kelas[2]] = {};
    }
  }

  for (let key in obj) {
    for (let i = 0; i < arrStudents.length; i++) {
      data = {};
      if (arrStudents[i][2] === key) {
        data.name = arrStudents[i][0];
        data.score = arrStudents[i][1];
        obj[key] = data;
      }
    }
  }
  return obj;
}

// TEST CASE
console.log(
  highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
