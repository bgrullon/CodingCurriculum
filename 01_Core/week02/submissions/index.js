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
  for(var i = 1; i < 6; i++){
    if (document.getElementById(i.toString()).checked == true){
      toppings += " " + document.getElementById(i.toString()).value;
    }
  }
  inputArr[4] = toppings;

  alert(inputArr[0] + " " + inputArr[1] + "\nGender: " + inputArr[2]
        + "\nFavorite Esport: " + inputArr[3] + "\nFavorite Pizza toppings:" + inputArr[4]);

}
