let nameInput = document.getElementById("websiteName"),
    urlInput = document.getElementById("websiteURL"),
    btnSubmit = document.querySelector(".btn-outline-dark"),
    list = [];

if (localStorage.getItem("Bookmark") == null) list = [];
else {
    list = JSON.parse(localStorage.getItem("Bookmark"))
    display();
}
/************************************function Add***********************/
function Bookmarker() {
    if (checkName() && checkUrl()) {
        let name1 = nameInput.value,
            url = urlInput.value,
            arr = { input1: name1, input2: url };
        list.push(arr);
        display();
        localStorage.setItem("Bookmark", JSON.stringify(list))
        clear();
        btnSubmit.setAttribute('disabled', 'true')
    }
}
/*************************** function Clear **********************/
function clear() {
    nameInput.value = "";
    urlInput.value = "";
}
/*************************** function Display **********************/
function display() {
    let container = `  `;
    for (let i = 0; i < list.length; i++) {
        console.log(list)
        container +=
            `<div  class="content2 mb-3  p-3 w-100 d-flex  justify-content-between "  >
              <p id="bookmarkList" class="mr-5">`+ list[i].input1 + `</p>
             <div>
             <a  class="btn btn-outline-primary mr-3 " href=`+ list[i].input2 + ` >visit</a>
             <a onclick="Delete(`+ i + `)" class="btn btn-outline-danger mr-3 ">Delete</a>
             </div>
             </div>
            `
    }
    document.getElementById("websiteInfo").innerHTML = container;

}
/*************************** function Delete **********************/
function Delete(BIndex) {
    list.splice(BIndex, 1);
    display();
    localStorage.setItem("Bookmark", JSON.stringify(list));

}


/**************************validation****************************/
/********************************Start Validation****************************/
function checkName() {
    let regName = /^[A-Z][a-z]{3,8}$/
    return regName.test(nameInput.value);
}

function checkUrl() {
    let regUrl = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9#-._~:/?%&=]*)?$/;
    return regUrl.test(urlInput.value);
}


/********************************Name Validation****************************/

function nameValidation() {
    if (checkName() && checkUrl()) {
        btnSubmit.removeAttribute('disabled');
    }
    else { btnSubmit.setAttribute('disabled', 'true') }
}
nameInput.addEventListener('keyup', nameValidation);

/********************************Email Validation****************************/

function urlValidation() {
    if (checkName() && checkUrl()) {
        btnSubmit.removeAttribute('disabled')
    }
    else { btnSubmit.setAttribute('disabled', 'true') }

}
urlInput.addEventListener('keyup', urlValidation);



/********************************End Validation****************************/



