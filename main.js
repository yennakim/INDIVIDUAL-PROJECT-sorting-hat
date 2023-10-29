const students = [
  {
  id: 1,
  name: "Godric Gryffindor",
  house: "Gryffindor"
},
{
  id: 2,
  name: "Salazar Slytherin",
  house: "Slytherin"
},
{
  id: 3,
  name: "Helga Hufflepuff",
  house: "Hufflepuff"
},
{
  id: 4,
  name: "Rowena Ravenclaw",
  house: "Ravenclaw"
}
];

const introBtn = document.querySelector("#introBtn");
const form = document.querySelector("form");
const enrolledStudents = document.querySelector("#enrolledStudents");

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

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
renderToDom("#studentForm", domString);
}


/* Form on DOM
let domString = "";
domString += `Student Name: <div class="form-floating mb-3">
<input type="text" class="form-control " id="studentName" placeholder="Harry Potter">
<label for="studentName">Name</label>
</div>`;
form.innerHTML = domString;

*/

introBtn.addEventListener("click", () => {
  formOnDom();
});

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
</div>`
  }
  renderToDom("#enrolledStudents", domString);
}

cardsOnDom(students);
