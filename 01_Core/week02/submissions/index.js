function getInput(){
  var inputArr = [];
  var toppings = "";
  inputArr[0] = document.getElementById("firstName").value;
  inputArr[1] = document.getElementById("lastName").value;
  if(document.getElementById("male").checked == true){
    inputArr[2] = "Male";
  }else if(document.getElementById("female").checked == true){
    inputArr[2] = "female";
  }else {
    inputArr[2] = "N/A";
  }
  inputArr[3] = document.getElementById("esport").value;
  for(let i = 1; i < 6; i++){
    if (document.getElementById(i.toString()).checked == true){
      toppings += " " + document.getElementById(i.toString()).value;
    }
  }
  inputArr[4] = toppings;

  alert(inputArr[0] + " " + inputArr[1] + "\nGender: " + inputArr[2]
        + "\nFavorite Esport: " + inputArr[3] + "\nFavorite Pizza toppings:" + inputArr[4]);

}


function getNameList() {
  var nameArray = [],
    nameList = [],
    lastNameFirst = [],
    html, newHtml;
//remove previous ordered list in div from UI
  var elem = document.getElementById("displayNames");
  elem.remove();
//re add ordered list to UI
  document.querySelector("#very-hard2").insertAdjacentHTML('beforeend', '<ol id="displayNames"> </ol>');

  let names = document.getElementById("nameList").value;
  //remove whitespace
  nameArray = names.split(", ");

  console.log(nameArray);

  class FullNames{
    constructor (fName, lName){
      this.fName = fName,
      this.lName = lName;
    }
  }
//loop to swap the positions of first and last name
  for(let i = 0; i < nameArray.length; i++){
    let name = [],
    nameObj;
    name = nameArray[i].split(" ");
    nameObj = new FullNames(name[0], name[1]);
    nameList.push(nameObj);
    lastNameFirst.push(`${nameList[i].lName}, ${nameList[i].fName}`);
  }
  lastNameFirst.sort();

  html = '<li>%name%</li>';
//inject html to show ordered list
  for (let i = 0; i < lastNameFirst.length; i++) {
    newHtml = html.replace('%name%', `${lastNameFirst[i]}`);
    document.querySelector("#displayNames").insertAdjacentHTML('beforeend', newHtml);
  }


}
