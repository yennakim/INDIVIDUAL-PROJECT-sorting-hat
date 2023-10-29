const sortBtn = document.querySelector("#sortBtn");
const form = document.querySelector("#studentForm");


const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

const formOnDom = () => {
  let domString = "";
domString += `Student Name: <div class="form-floating mb-3">
<input type="text" class="form-control" id="studentName" placeholder="Harry Potter">
<label for="studentName">Name</label>
</div>`;
renderToDom("#studentForm", domString);
}


formOnDom();
