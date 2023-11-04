const students = [
  {
    id: 1,
    name: "Godric Gryffindor",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Salazar Slytherin",
    house: "Slytherin",
  },
  {
    id: 3,
    name: "Helga Hufflepuff",
    house: "Hufflepuff",
  },
  {
    id: 4,
    name: "Rowena Ravenclaw",
    house: "Ravenclaw",
  },
];

const expelledArray = [
  {id: students.length + 10,
  name: "Moldy Voldy",
  house: "No one Nose",}];

const expel = (array) => {
  let domString = "";
  for (taco of array) {
    domString += `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${taco.name}</h5>
        <p class="card-text">House: ${taco.house}</p>
      </div>
    </div>
  </div>
</div>`;

  }
  console.log(student)
  expelledStudents.innerHTML = domString;
};



const introBtn = document.querySelector("#introBtn");
const enrolledStudents = document.querySelector("#enrolledStudents");
const formDiv = document.querySelector("#studentForm");
const expelledStudents = document.querySelector("#expelledStudents");
const gryffindor = document.querySelector("#gryffindorBtn");
const slytherin = document.querySelector("#slytherinBtn");
const hufflepuff = document.querySelector("#hufflepuffBtn");
const ravenclaw = document.querySelector("#ravenclawBtn");

 // TODO: EXPEL



 const randomize = () => {
  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  const randomHouse = Math.floor(Math.random() * houses.length);
  return houses[randomHouse];
};


const cardsOnDom = (array) => {
  let domString = "";
  for (student of array) {
    domString += `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">House: ${student.house}</p>
        <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
      </div>
    </div>
  </div>
</div>`;
  }
  enrolledStudents.innerHTML = domString;
};

const formOnDom = () => {
  let domString = "";
  domString += `<div class="card">
<div class="card-body">
<form>
Student Name:<div class="form-floating mb-3">
<input type="text" class="form-control" id="studentName" placeholder="studentName" required>
<label for="studentName">Name</label>
<button type="submit" class="btn btn-primary">Sort</button>
</form>
</div>
</div>
</div>`;
  formDiv.innerHTML = domString;
  const form = document.querySelector("form");
  console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newStudentObj = {
      id: students.length + 1,
      name: document.querySelector("#studentName").value,
      house: randomize(),
    };
    console.log(newStudentObj.name);
     console.log(newStudentObj.house);

    students.push(newStudentObj);
    cardsOnDom(students);
    form.reset();
  });
};

const filter = (array, houseString) => {
  let newHouseArray = [];

  for(const students of array) {
    if(students.house === houseString) {
      newHouseArray.push(students);
    }
  }
  console.log(newHouseArray);

   cardsOnDom(newHouseArray);
   console.log(cardsOnDom(newHouseArray));
}

enrolledStudents.addEventListener("click", () => {
  if (event.target.id.includes("delete")) {
    const [, id] = event.target.id.split("--");

    const index = students.findIndex((obj) => obj.id === Number(id));
    const removedStudent = students.splice(index, 1);
    console.log(removedStudent);
    expelledArray.push(removedStudent[0])    
    cardsOnDom(students);
    expel(expelledArray);
    console.log(expelledArray)
  }
})



gryffindor.addEventListener("click", () => {
  filter(students, "Gryffindor");
});

slytherin.addEventListener("click", () => {
  filter(students, "Slytherin");
})

hufflepuff.addEventListener("click", () => {
  filter(students, "Hufflepuff");
})

ravenclaw.addEventListener("click", () => {
  filter(students, "Ravenclaw");
})



introBtn.addEventListener("click", () => {
  formOnDom();
});



const startApp = () => {
  cardsOnDom(students);

}

startApp();
