// function searchByWeight(people) {
//   let userInputWeight = promptFor("How much does the person weigh in pounds?");

//   let newArray = people.filter(function (el) {
//     if(el.weight == userInputWeight) {
//       alert(el.firstName + " " + el.lastName);
//       return true;

//     }
//     else{
//       return false;
//     }
//     // return true if el.height matches userInputHeight
//   });

//   return newArray;
// }

// function searchByAge(people) {
//  let userInputAge = prompt("How old are they in years?");
//  dobToAge(people);
//  let ageArray = people.filter(function (el) {
//     if(el.age == userInputAge) {
//       alert(el.firstName + " " + el.lastName);
//       return true;
//     }
//     else{
//       return false;
//     }
//   });

//   return ageArray;
// }


// function dobToAge(people){
//   let dobArray = people.filter(function (el) {
//     let today = new Date();
//     let age = Date.parse(today) - Date.parse(el.dob);
//     let realAge = age / 31556952000;
//     Math.floor(realAge);
//     });


// }

// function dobToAge(people){
//   let dobArray = people.map(function (el) {
//     let today = new Date();
//     let age = Date.parse(today) - Date.parse(el.dob);
//     let realAge = age / 31556952000;
//     realAge = Math.floor(realAge);
//     el.age = realAge;
//     return el;
//   });

// console.log(dobArray);
// }


//Info about the person
//crate a function that will show the persons info after they enter a name.
//in order to show the right info, the correct number of the array must corespond with the name they typed in
//call the function that gets the name
//set up a variable that gets the arrays from the data
//set up a if else statement that will see if the array matches with the name



//function that gives the user the family of the person they typed in
//current spouse, parents, desendants, siblings
//cuurent spouse: idenified by id 
//parents: id array
//siblings: same parents array
//desendants: persons id appears in another index .parents array



//   let spouse = people.filter(function (el){
//     if(el.currentSpouse == el.id){
//       alert(el.firstName + el.lastName);
//       return true;
//     else{
//       return false;
//     }  
//    }
//   });
// }


// function familyInfo(person, people){
//   let spouses = people.filter(function(el){
//     if(person[0].id === el.currentSpouse) {
//       // el.currentSpouse = el.firstName + el.lastName;

//       console.log(person[0]);
//       console.log(el);
//       return true;
//     }
//     else{
//       return false;
//     }
//   });
//   return spouses;

// }
function display2(data){
let call = display(data);
let traitResults = multipleTraits(data, call);
// let answer = multipleTraits();
displayPeople(traitResults);
}



function prompt1(people){
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  searchByTraits2(people);
  return userSearchChoice;
}

//send choice into searchByTraight2
function searchByTraits2(people) {
  //put prompt in a different function
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let lowerCase = userSearchChoice.toLowerCase();
  let splittingWords = lowerCase.split();
  let filteredPeople;
  //let goBack = splittingWords.slice();
 for(i = 0; i < splittingWords.length; i++ ){
  let string = splittingWords.toString();
  if(string[i]=== "height"){
     people = searchByHeight(people);
     return filteredPeople
  }
  else if(string[i]==="weight"){
    people = searchByWeight(people);
   } 

   else if(string[i]==="eye color"){
    people = searchByEyeColor(people);
   } 
  else if(string[i]==="gender"){
     people = searchByGender(people);
   } 
  else if(string[i]==="age"){
    people = searchByAge(people);
   } 
  else if(string[i]==="occupation"){
    people = searchByOccupation(people);
   } 

  switch(splittingWords[i]) {
    case "height":
      filteredPeople = searchByHeight(people);
      return filteredPeople;
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      break;
    case "gender":
      filteredPeople = searchByGender(people);
      break;
    case "age":
      filteredPeople = searchByAge(people);
      break;
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits2(people);
      break;
    }
  }  
searchByTraits2(filteredPeople);
  //let foundPerson = filteredPeople[0];

 // mainMenu(foundPerson, people);

}


// function searchByMultiple(people){
//   let userInput = prompt("How many traits do you want to search by '1' '2' '3' '4' or '5'?")
//   let answer;

//   switch(userInput){
//     case "1":
//     answer = searchByTraits(people)
//     case "2":
//     answer = 
//   }


// }

function searchByHeight(people) {
  let userInputHeight = prompt("How tall is this person in inches?");

  var heightArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
  });
  return heightArray;
}

function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh in pounds?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
  });
  return newArray;
}

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    let person = searchByName(people);
    spouseInfo(people, person);
    descendantsInfo(people, person);
    siblingsInfo(people, person);
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}



function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();
  let person = people.filter(function (el) {
    if(firstName == el.firstName.toLowerCase() && lastName == el.lastName.toLowerCase()){
      alert("Name: " + el.firstName + " " + el.lastName + "\n" + "\n" + 

        "Gender: "+ el.gender + "\n" +
       "Date of Birth: " + el.dob + "\n" + 
        "Height: " + el.height + "\n" +
        "Weight: " + el.weight + "\n" + 
        "Eye Color: " + el.eyeColor + "\n" +
        "Occupation: " + el.occupation);
      return true;
    }
    else{
      return false;
    }
  });

  return person[0];

}

// function spouseInfo(people, person){
//   let spouse = people.filter(function(el){ 
//     if(person.id === el.currentSpouse) {


function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What color is their eyes?");

  let eyeColorArray = people.filter(function (el) {
    if(el.eyeColor === userInputEyeColor) {
      return true;
    }
  });
  return eyeColorArray;
}

function searchByGender(people) {
  let userInputGender = prompt("what is their gender?");
  let genderArray = people.filter(function (el) {
    if(el.gender == userInputGender) {
      return true;
    }
  });
  return genderArray;
}

function searchByAge(people) {
 let userInputAge = prompt("How old are they in years?");
 dobToAge(people);
 let ageArray = people.filter(function (el) {
    if(el.age == userInputAge) {
      return true;
    }
    else{
      return false;
    }

  });
  // alert("This person's spouse is:")
  // displayPeople(spouse)
  return ageArray;
}

function descendantsInfo(people, person){
  let descendants = people.filter(function(el){
    if(person.id == el.parents[0]  || person.id == el.parents[1] ){
      return true;
    }
  });
  return ageArray;
}

function dobToAge(people){
  let dobArray = people.map(function (el) {
    let today = new Date();
    let age = Date.parse(today) - Date.parse(el.dob);
    let realAge = age / 31556952000;
    realAge = Math.floor(realAge);
    el.age = realAge;
    return el;
  });

}


function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the persons occupation?");
  let occupationArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
  });
 return occupationArray;
}


//search by multiple traits
//leave very sepcific directions in the alert
//speorate each word from one another - deal with commas - use split will turn into array
//connect each word with correct function 
//use a for loop to run through the typed in words
//

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    familyInfo(people);
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function display(people){
  let userSearchChoice = prompt("You can enter 1 to 5 traits, 'height', 'weight', 'eye color', 'gender', 'age', and 'occupation'." + "\n" + "If you type in 2 or more traits, separate the traits by one space and nothing else. ENTER EYE COLOR AS THIS: eyecolor");
  let lowerCase = userSearchChoice.toLowerCase();
  let splittingWords = lowerCase.split(" ");
  return splittingWords;
}

function multipleTraits(people, splittingWords){
  // let userSearchChoice = prompt("You can enter 1 to 5 traits, 'height', 'weight', 'eye color', 'gender', 'age', and 'occupation'." + "\n" + "If you type in 2 or more seporate the traits by one space and nothing else.");
  // let lowerCase = userSearchChoice.toLowerCase();
  // let splittingWords = lowerCase.split(" ");
  let filteredPeople = people;
  for (let i = 0; i < splittingWords.length; i++) {
    switch(splittingWords[i]) {
    case "height":
      filteredPeople = searchByHeight(filteredPeople);
      continue;
    case "weight":
      filteredPeople = searchByWeight(filteredPeople);
      continue;
    case "eyecolor":
      filteredPeople = searchByEyeColor(filteredPeople);
      continue;
    case "gender":
      filteredPeople = searchByGender(filteredPeople);
      continue;
    case "age":
      filteredPeople = searchByAge(filteredPeople);
      continue;
    case "occupation":
      filteredPeople = searchByOccupation(filteredPeople);
      continue;
    default:
      alert("You entered an invalid search type! Please try again.");
      display(people);
      continue;
    }
  } 
  return filteredPeople;
}
// =======
//       alert("This person's descentdants are:")
//       displayPeople(descendants)
//    return descendants;
// }

function siblingsInfo(people, person){
  let siblings = people.filter(function(el){
    if(person.parents[0 || 1] == el.parents[0 || 1] && person.id != el.id){
        return true;
      }
      else{
        return false;
      }

  });
    // alert("This person's siblings are:")
    // displayPeople(siblings)
  return siblings;
}
//   let spouse = people.filter(function (el){
//     if(el.currentSpouse == el.id){
//       alert(el.firstName + el.lastName);
//       return true;
//     else{
//       return false;
//     }  
//    }
//   });
// }


// function familyInfo(person, people){
//   let spouses = people.filter(function(el){
//     if(person[0].id === el.currentSpouse) {
//       // el.currentSpouse = el.firstName + el.lastName;

//       console.log(person[0]);
//       console.log(el);
//       return true;
//     }
//     else{
//       return false;
//     }
//   });
//   return spouses;

// }

// function app(people){
//   var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
//   switch(searchType){
//     case 'yes':
//     //searchByName(people);
//     let person = searchByName(people);
//     //console.log(person);
//     spouseInfo(people, person);
//     desendantsInfo(people, person);
//     siblingsInfo(people, person);
//     displayfamily(people, person);
//     break;
//     case 'no':
//     searchByTraits(people);
//     break;
//     default:
//     alert("Wrong! Please try again, following the instructions dummy. :)");
//     app(people); // restart app
//     break;
//   }
// }


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
