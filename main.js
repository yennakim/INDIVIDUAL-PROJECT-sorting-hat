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

const introBtn = document.querySelector("#introBtn");
const enrolledStudents = document.querySelector("#enrolledStudents");
const formDiv = document.querySelector("#studentForm");

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
//  console.log(newStudentObj.name);
//  console.log(newStudentObj.house);

})

};

const randomize = () => {
  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  const randomHouse = Math.floor(Math.random() * houses.length);
  console.log(houses[randomHouse]);
}
/* Form on DOM
let domString = "";
domString += `Student Name: <div class="form-floating mb-3">
<input type="text" class="form-control " id="studentName" placeholder="Harry Potter">
<label for="studentName">Name</label>
</div>`;


*/



const cardsOnDom = (array) => {
  let domString = "";
  for (student of students) {
    domString += `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">${student.house}</p>
        <a href="#" class="btn btn-danger">Expel</a>
      </div>
    </div>
  </div>
</div>`;
  }
 enrolledStudents.innerHTML = domString;
};




introBtn.addEventListener("click", () => {
  formOnDom();
});

cardsOnDom(students);
