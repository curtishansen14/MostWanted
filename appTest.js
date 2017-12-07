function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh in pounds?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      alert(el.firstName + " " + el.lastName);
      return true;

    }
    else{
      return false;
    }
    // return true if el.height matches userInputHeight
  });

  return newArray;
}


searchByWeight(data);