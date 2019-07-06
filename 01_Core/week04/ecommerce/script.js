leftButton = () => {
  var leftId = parseInt(document.getElementById("feature-inner").childNodes[3].id.slice(8,10));
  var rightId = parseInt(document.getElementById("feature-inner").childNodes[7].id.slice(8,10));
  var leftCard, rightCard, middleCard;



  if (leftId >= 1 && rightId < 12){

    leftCard = leftId + 1;
    middleCard = leftId + 2;
    rightCard = leftId + 3;


    document.getElementById(`feature-${leftId+2}`).id = `feature-${rightCard}`;
    document.getElementById(`feature-${leftId+1}`).id = `feature-${middleCard}`;
    document.getElementById(`feature-${leftId}`).id = `feature-${leftCard}`;
  }

}
rightButton = () => {
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

}
