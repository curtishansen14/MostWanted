/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
// NOTE: fix the display function

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let person;
  switch(searchType){
    case 'yes':
    let person = searchByName(people);

    displayFamily(people, person);
    break;
    case 'no':
    let anything = display2(data);
    if(anything.length == 1){
      mainMenu(anything, people); 
    }
    else{
      display2(anything);
    }
    
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

function display2(data){
let call = display(data);
let traitResults = multipleTraits(data, call);
displayPeople(traitResults);
return traitResults;
}

function display(people){
  let userSearchChoice = prompt("You can enter 1 to 5 traits, 'height', 'weight', 'eye color', 'gender', 'age', and 'occupation'." + "\n" + "If you type in 2 or more traits, separate the traits by one space and nothing else. ENTER EYE COLOR AS THIS: eyecolor");
  let lowerCase = userSearchChoice.toLowerCase();
  let splittingWords = lowerCase.split(" ");
  return splittingWords;
}

function multipleTraits(people, splittingWords){
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

  let weightArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
  });


  return weightArray;

}


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


// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  person = person[0];

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    displayFamily(people, person);
    break;
    case "descendants":
    let descendants = descendantsInfo(people, person)
    displayPeople(descendants);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    alert("You typed in something wrong");
    mainMenu(person, people);
    return mainMenu(person, people); // ask again
  }
}


function spouseInfo(people,person){
  let spouse = people.filter(function(el){
    if (person.id == el.currentSpouse){
      return true;
    }
  });
  return spouse;
}

function parentInfo(people, person){
  let parents = people.filter(function(el){
      if (el.id  == person.parents[0] || el.id == person.parents[1]){
      return true; 
    }
      else {
        false;
      }
  });
  return parents;
}


function descendantsInfo(people, person){
  let descendants = people.filter(function(el){
    for (let i = 0; i < el.parents.length; i++){
          if(person.id == el.parents[i]){
            return true;
      }
  }
  });
  for (let i = 0; i < descendants.length; i++){
    descendants = descendants.concat(descendantsInfo(people, descendants[i]));
  }
   return descendants;
}

function siblingsInfo(people, person){
  let siblings = people.filter(function(el){
    for (let i = 0; i < el.parents.length; i++) {
    if(person.parents[0] == el.parents[i] && person.id != el.id){
        return true;
      }
    if (person.parents[1] == el.parents[i] && person.id != el.id){
        return true;
      }    
      else{
        return false;
      }
    }
  });
  return siblings;
}


function displayFamily(people, person){
  let spouse = spouseInfo(people, person);
  let parents = parentInfo(people, person);
  let descendants = descendantsInfo(people, person);
  let siblings = siblingsInfo(people, person);

  alert("This person's spouse is "); 
  displayPerson(spouse);
  alert("This person's parents are: "); 
  displayPeople(parents);
  alert("This person's descendants are: ");
  displayPeople(descendants);
  alert("This person's siblings are: ");
  displayPeople(siblings);
}

// alerts a list of people
function displayPeople(people){
  let result = alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
  return result;
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



function displayPerson(person){
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: "+ person.gender + "\n" ;
  personInfo += "Date of Birth: " + person.dob + "\n" ;
  personInfo += "Height: " + person.height + "\n" ;
  personInfo += "Eye Color: " + person.eyeColor + "\n" ;
  personInfo += "Occupation: " + person.occupation;  
  alert(personInfo);
}
