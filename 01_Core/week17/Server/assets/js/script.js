
////////////////////////////////////////////////////////////////
/*

Buttons for Feature section of main page to cycle left and right through cards

*/
////////////////////////////////////////////////////////////////


rightButton = () => {
  //get ID of current card in left and right position
  var leftId = parseInt(document.getElementById("feature-inner").childNodes[3].id.slice(8, 10));
  var rightId = parseInt(document.getElementById("feature-inner").childNodes[7].id.slice(8, 10));
  var leftCard, rightCard, middleCard;


  //if statement to make sure not to pass first or last card
  if (leftId >= 1 && rightId < 12) {

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
  var leftId = parseInt(document.getElementById("feature-inner").childNodes[3].id.slice(8, 10));
  var rightId = parseInt(document.getElementById("feature-inner").childNodes[7].id.slice(8, 10));
  var leftCard, rightCard, middleCard;



  if (leftId > 1 && rightId <= 12) {

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

Turn DIM on and show product detail page

*/
////////////////////////////////////////////////////////////////
const dimmerPage = document.getElementsByClassName('status-page');

dim = (code) => {
  var x = document.getElementById("dimmer"),
    y = document.querySelector(".status-page");
  if (x.style.display == "" || x.style.display === "none") {
    x.style.display = "Block";
    y.style.display = "flex";
  }


  document.getElementById(`feature-D`).style.backgroundImage = `url(../assets/Images/${code}.jpg)`

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
class customerInfo {
  constructor(firstName, lastName, customerAddress, country, phone, email) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.customerAddress = customerAddress,
    this.country = country,
    this.phone = phone,
    this.email = email
  }
}


contactValid = () => {
  var customer = new customerInfo;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  customer.firstName = document.getElementById("fName").value;
  customer.lastName = document.getElementById("lName").value;
  customer.email = document.getElementById("email").value;
  customer.phone = document.getElementById("tel").value;
  customer.customerAddress = "404 error Street";
  customer.country = "USA";

  if (document.getElementById("fName").value === "") {
    let notValid = document.getElementById("fName");
    notValid.placeholder = "Please enter Name!";
    notValid.focus();
  } else if (document.getElementById("lName").value === "") {
    let notValid = document.getElementById("lName");
    notValid.placeholder = "Please enter Name!";
    notValid.focus();
  } else if (document.getElementById("email").value === "") {
    let notValid = document.getElementById("email");
    notValid.placeholder = "Please enter Email!";
    notValid.focus();
  } else if (!document.getElementById("email").value.match(mailformat)) {
    let notValid = document.getElementById("email");
    notValid.value = "";
    notValid.placeholder = "Email must be Valid!";
    notValid.focus();
  } else if (document.getElementById("tel").value.length > 10 ||
    document.getElementById("tel").value.length < 10) {
    notValid = document.getElementById("tel");
    notValid.value = "";
    notValid.placeholder = "Invalid Number!";
    notValid.focus();
  }

  console.log(customer);

  console.log("Sumbitted")
  fetch("http://localhost:8080/customer", {
      method: 'POST',
      body: JSON.stringify(customer)
    })
    .catch(error => console.error("Error:", error))


};

////////////////////////////////////////////////////////////////
/*

Admin page listener and validation

*/
////////////////////////////////////////////////////////////////
var adminOptions = document.getElementById("inventory");

var labelsAndInputs = [
  "cardName_L",
  "cost_L",   
  "cardType_L",
  "element_L",
  "rarity_L", 
  "cardSet_L",
  "code_L",
  "price_L",  
  "featured_L",
  "cardName",
  "cost",    
  "cardType",
  "element", 
  "rarity",  
  "cardSet",
  "code",     
  "price",  
  "featured"  
]
function adminListen() {
  adminOptions.addEventListener("change", function(){
    if (adminOptions.value == "Add"){
      for (i = 0; i < labelsAndInputs.length; i++){
        document.getElementById(labelsAndInputs[i]).style.display = "block";
      }
      document.getElementById(adminOptions.value).style.display = "block";
      document.getElementById("View").style.display = "none";
      document.getElementById("Update").style.display = "none";
      document.getElementById("Delete").style.display = "none";
    }else if (adminOptions.value == "Delete"){
      for (i = 0; i < labelsAndInputs.length; i++){
        document.getElementById(labelsAndInputs[i]).style.display = "none";
      }
      document.getElementById("Add").style.display = "none";
      document.getElementById("View").style.display = "none";
      document.getElementById("Update").style.display = "none";

      document.getElementById(adminOptions.value).style.display = "block";
      document.getElementById("code_L").style.display = "block";
      document.getElementById("code").style.display = "block";
    }else if (adminOptions.value == "View"){
      for (i = 0; i < labelsAndInputs.length; i++){
        document.getElementById(labelsAndInputs[i]).style.display = "none";
      }
      document.getElementById("Add").style.display = "none";
      document.getElementById("Delete").style.display = "none";
      document.getElementById("Update").style.display = "none";

      document.getElementById(adminOptions.value).style.display = "block";
    }else if (adminOptions.value == "None"){
      for (i = 0; i < labelsAndInputs.length; i++){
        document.getElementById(labelsAndInputs[i]).style.display = "none";
      }
      document.getElementById("Add").style.display = "none";
      document.getElementById("View").style.display = "none";
      document.getElementById("Update").style.display = "none";
      document.getElementById("Delete").style.display = "none";
    }
  })
}



////////////////////////////////////////////////////////////////
/*

BackEnd communication 

*/
////////////////////////////////////////////////////////////////

class cardInfo {
  constructor(cardId, cost, cardName, cardType, element, rarity, cardSet, code, price, featured, outofstock) {
    this.cardId = cardId,
      this.cost = cost,
      this.cardName = cardName,
      this.cardType = cardType,
      this.element = element,
      this.rarity = rarity,
      this.cardSet = cardSet,
      this.code = code,
      this.price = price,
      this.featured = featured,
      this.outofstock = outofstock
  }
}

dbEntry = () => {
  var card = new cardInfo;

  card.cost = parseFloat(document.getElementById("cost").value);
  card.cardName = document.getElementById("cardName").value;
  card.cardType = document.getElementById("cardType").value;
  card.element = document.getElementById("element").value;
  card.rarity = document.getElementById("rarity").value;
  card.cardSet = document.getElementById("cardSet").value;
  card.code = document.getElementById("code").value;
  card.price = parseFloat(document.getElementById("price").value);
  card.featured = document.getElementById("featured").checked;


  console.log(card)
  console.log("Sumbitted")
  fetch("http://localhost:8080/write", {
      method: 'POST',
      body: JSON.stringify(card)
    })
    .catch(error => console.error("Error:", error))

};

dbUpdate = () => {
  var card = new cardInfo;

  card.cost = parseFloat(document.getElementById("cost").value);
  card.cardName = document.getElementById("cardName").value;
  card.cardType = document.getElementById("cardType").value;
  card.element = document.getElementById("element").value;
  card.rarity = document.getElementById("rarity").value;
  card.cardSet = document.getElementById("cardSet").value;
  card.code = document.getElementById("code").value;
  card.price = parseFloat(document.getElementById("price").value);
  card.featured = document.getElementById("featured").checked;

  console.log("Sumbitted")
  fetch("http://localhost:8080/update", {
      method: 'POST',
      body: JSON.stringify(card)
    })
    .catch(error => console.error("Error:", error))

};

dbDelete = () => {
  var card = new cardInfo;

  card.cost = parseFloat(document.getElementById("cost").value);
  card.cardName = document.getElementById("cardName").value;
  card.cardType = document.getElementById("cardType").value;
  card.element = document.getElementById("element").value;
  card.rarity = document.getElementById("rarity").value;
  card.cardSet = document.getElementById("cardSet").value;
  card.code = document.getElementById("code").value;
  card.price = parseFloat(document.getElementById("price").value);
  card.featured = document.getElementById("featured").checked;

  console.log("Sumbitted")
  fetch("http://localhost:8080/delete", {
      method: 'POST',
      body: JSON.stringify(card)
    })
    .catch(error => console.error("Error:", error))

};


dbView = () => {

  console.log("Sumbitted")
  fetch("http://localhost:8080/read")
    .then(result => {
      return result.json()
    })
    .then(cards => {
      console.log(cards)
    })
    .catch(error => {
      console.log("error:")
      console.log(error)
    })
};

////////////////////////////////////////////////////////////////
/*

Page rendering

*/
////////////////////////////////////////////////////////////////

window.onload = function(){
  displayCards();
}


////////////////////////////////////////////////////////////////
/*

product display and filtering

*/
////////////////////////////////////////////////////////////////
const productPage = document.getElementsByClassName('products');

//fuction to organize and insert cards into DOM
insertCards = (apiList, productDOM) => {
  for (let i = 0; i < apiList.length; i++) {

    let card = `
    <div id="feature-${i}" class="card bg-img grid-item_${i}" onclick="dim('${apiList[i].Code}')"></div>
    `
    productDOM[0].innerHTML += card;

    document.getElementById(`feature-${i}`).style.backgroundImage = `url(../assets/Images/${apiList[i].Code}.jpg)`
  }

}


displayCards = () => {
 

  fetch("http://localhost:8080/read")
    .then(result => {
      return result.json()
    })
    .then(cards => {

      insertCards(cards, productPage);

    })
    .catch(error => {
      _ = error;
    })
}

filtering = () => {

  let ele = document.getElementById("element").value;
  let typ = document.getElementById("cardtype").value;

  productPage[0].innerHTML = "";


  console.log("Sumbitted")
  fetch("http://localhost:8080/read")
    .then(result => {
      return result.json()
    })
    .then(cards => {
      let filteredCards;

      if (ele == "None") {
        filteredCards = cards.filter(e => e.Element != ele);
      } else {
        filteredCards = cards.filter(e => e.Element == ele);
      }
      
      if (typ == "None") {
        filteredCards = filteredCards.filter(t => t.Cardtype != typ);
      } else {
        filteredCards = filteredCards.filter(t => t.Cardtype == typ);
      }

      insertCards(filteredCards, productPage);

    })
    .catch(error => {
      console.log("atFiltererror:")
      console.log(error)
    })

}

////////////////////////////////////////////////////////////////
/*

directory for mobile

*/
////////////////////////////////////////////////////////////////

collapse = () => {
  let nav = document.getElementById("colCon");
  let footer = document.getElementById("hide-footer");
  let content = document.getElementById("hide-pages");


  if (nav.style.display == "none" || nav.style.display == "") {
    nav.style.display = "block";
    footer.style.display = "block";
    content.style.display = "none";
  } else {
    nav.style.display = "none";
    footer.style.display = "none";
    content.style.display = "block";
  }

}



/*

static header and nav
change filter location

then rendor in GO



*/






////////