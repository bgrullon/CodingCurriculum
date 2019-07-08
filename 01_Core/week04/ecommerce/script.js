////////////////////////////////////////////////////////////////
/*

Buttons for Feature section of main page to cycle left and right through cards

*/
////////////////////////////////////////////////////////////////


rightButton = () => {
  //get ID of current card in left and right position
  var leftId = parseInt(document.getElementById("feature-inner").childNodes[3].id.slice(8,10));
  var rightId = parseInt(document.getElementById("feature-inner").childNodes[7].id.slice(8,10));
  var leftCard, rightCard, middleCard;


  //if statement to make sure not to pass first or last card
  if (leftId >= 1 && rightId < 12){

    leftCard = leftId + 1;
    middleCard = leftId + 2;
    rightCard = leftId + 3;

    //change ID of the 3 featured cards
    document.getElementById(`feature-${leftId+2}`).id = `feature-${rightCard}`;
    document.getElementById(`feature-${leftId+1}`).id = `feature-${middleCard}`;
    document.getElementById(`feature-${leftId}`).id = `feature-${leftCard}`;
  }
};

leftButton = () => {
  var leftId = parseInt(document.getElementById("feature-inner").childNodes[3].id.slice(8,10));
  var rightId = parseInt(document.getElementById("feature-inner").childNodes[7].id.slice(8,10));
  var leftCard, rightCard, middleCard;



  if (leftId > 1 && rightId <= 12){

    leftCard = rightId - 3;
    middleCard = rightId - 2;
    rightCard = rightId - 1;


    document.getElementById(`feature-${rightId-2}`).id = `feature-${leftCard}`;
    document.getElementById(`feature-${rightId-1}`).id = `feature-${middleCard}`;
    document.getElementById(`feature-${rightId}`).id = `feature-${rightCard}`;
  }
};

////////////////////////////////////////////////////////////////
/*

Button to toggle filter open and close

*/
////////////////////////////////////////////////////////////////

 filterBtn = () => {
  var x = document.querySelector(".filters"),
      y = document.querySelector(".filter-wrap");
    //check for empty space since that seems to be windows default value
  if (x.style.display == "" || x.style.display === "none" ) {
    x.style.display = "Block";
    y.style.width = "200px";
  } else {
    x.style.display = "none";
    y.style.width = "1px";
  }
};

////////////////////////////////////////////////////////////////
/*

Turn DIM on and show product detail page

*/
////////////////////////////////////////////////////////////////

dim = () => {
  var x = document.getElementById("dimmer"),
      y = document.querySelector(".status-page");
  if (x.style.display == "" || x.style.display === "none"){
    x.style.display = "Block";
    y.style.display = "flex";
  }
};

////////////////////////////////////////////////////////////////
/*

HIDE product detail page and remove DIM

*/
////////////////////////////////////////////////////////////////

undim = () => {
  document.getElementById("dimmer").style.display = "none";
  document.querySelector(".status-page").style.display = "none";
};

////////////////////////////////////////////////////////////////
/*

Contact form information validation

*/
////////////////////////////////////////////////////////////////

contactValid = () => {
  var contactInfo = [],
  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  contactInfo[0] = document.getElementById("fName").value;
  contactInfo[1] = document.getElementById("lName").value;
  contactInfo[2] = document.getElementById("email").value;
  contactInfo[3] = document.getElementById("tel").value;

  if (document.getElementById("fName").value === ""){
    let notValid = document.getElementById("fName");
    notValid.placeholder = "Please enter Name!";
    notValid.focus();
  }else if (document.getElementById("lName").value === ""){
    let notValid = document.getElementById("lName");
    notValid.placeholder = "Please enter Name!";
    notValid.focus();
  }else if (document.getElementById("email").value === ""){
    let notValid = document.getElementById("email");
    notValid.placeholder = "Please enter Email!";
    notValid.focus();
  }else if (!document.getElementById("email").value.match(mailformat)){
    let notValid = document.getElementById("email");
    notValid.value = "";
    notValid.placeholder = "Email must be Valid!";
    notValid.focus();
  }else if (document.getElementById("tel").value.length > 10 ||
            document.getElementById("tel").value.length < 10 ){
    notValid = document.getElementById("tel");
    notValid.value = "";
    notValid.placeholder = "Invalid Number!";
    notValid.focus();
  }

};















////////
