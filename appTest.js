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

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
    case "eye color":
      filteredPeople = searchByEyeColor(people);
    case "gender":
      filteredPeople = searchByGender(people);
    case "age":
      filteredPeople = searchByAge(people);
    case "occupation":
      filteredPeople = searchByOccupation(people);
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}

function searchByHeight(people) {
  let userInputHeight = prompt("How tall is this person in inches?");

  let heightArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      alert(el.firstName + " " + el.lastName);
      return true;
    }
    else{
      return false;
    }
  });

}

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
  });

  return newArray;
}


function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What color is their eyes?");

  let eyeColorArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      alert(el.firstName + " " + el.lastName);
      return true;
    }
    else{
      return false;
    }
  });

  return eyeColorArray;
}

function searchByGender(people) {
  let userInputGender = prompt("what is their gender?");
  let genderArray = people.filter(function (el) {
    if(el.gender == userInputGender) {
      alert(el.firstName + " " + el.lastName);
      return true;
    }
    else{
      return false;
    }
  });

  return genderArray;
}

function searchByAge(people) {
 let userInputAge = prompt("How old are they in years?");
 dobToAge(people);
 let ageArray = people.filter(function (el) {
    if(el.age == userInputAge) {
      alert(el.firstName + " " + el.lastName);
      return true;
    }
    else{
      return false;
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
      alert(el.firstName + " " + el.lastName);
      return true;
    }
    else{
      return false;
    }
  });

 return occupationArray
}


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

function spouseInfo(people, person){
  let spouse = people.filter(function(el){ 
    if(person.id === el.currentSpouse) {

      return true;
    }
    else{
      return false;
    }

  });
  alert("This person's spouse is:")
  displayPeople(spouse)
  return spouse
}

// function descendantsInfo(people, person){
//   let descendants = people.filter(function(el){
//     if(person.id == el.parents[0]  || person.id == el.parents[1] ){
//       return true;
//     }
//     else{
//       return false;
//     }
//   });
//       alert("This person's descentdants are:")
//       displayPeople(descendants)
//    return descendants;
//

function siblingsInfo(people, person){
  let siblings = people.filter(function(el){
    if(person.parents[0 || 1] == el.parents[0 || 1] && person.id != el.id){
        return true;
      }
      else{
        return false;
      }

  });
    alert("This person's siblings are:")
    displayPeople(siblings)
  return siblings;
}

function descendantsInfo(people, person){
    let descendants = people.filter(function(el){
  for ( i = 0; i<el.parents.length; i++){
         if (person.id == el.parents[i]){
          return true;
        }
          else {
            false;
         }
         let descendants = descendants.filter(function(el){
          for (i = 0; i<el.descendants.length; i++){
            if descendants.id == el.parents[i]{
              return true;
            }
            else {
              false;
            }
          }

         })
       }
            alert("This person's descentdants are:")
            displayPeople(descendants)
            return descendants
     })
  //         var descendants = people.map(function(el,[i],people){
  //           if (person.id == el.parents[i]){
  //             return true; 
  //           }
  //           else{
  //             return false;
  //           }
        
  // }
  }
  //let descendants = people.filter(function(el){
  //   if(person.id == el.parents[0]  || person.id == el.parents[1] ){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // });
  //     alert("This person's descentdants are:")
  //     displayPeople(descendants)

            //person.id == el.parents[i]{
         // }
      //descendants = descendantsInfo(people, descendants[i]);  // arr1.concat(arr2) all arrays together
//}
//}
//   return descendants;
//}


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


// send choice into searchByTraight2
// function searchByTraits2(people) {
//  //put prompt in a different function
//  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
//  let lowerCase = userSearchChoice.toLowerCase();
//  let splittingWords = lowerCase.split();
//  let filteredPeople;
//  //let goBack = splittingWords.slice();
// for(i = 0; i < splittingWords.length; i++ ){
//  let string = splittingWords.toString();
//  if(string[i]=== "height"){
//     people = searchByHeight(people);
//     return filteredPeople
//  }
//  else if(string[i]==="weight"){
//    people = searchByWeight(people);
//   } 

//   else if(string[i]==="eye color"){
//    people = searchByEyeColor(people);
//   }
//  else if(string[i]==="gender"){
//     people = searchByGender(people);
//   }
//  else if(string[i]==="age"){
//    people = searchByAge(people);
//   }
//  else if(string[i]==="occupation"){
//    people = searchByOccupation(people);
//   } 




//  switch(splittingWords[i]) {
//    case "height":
//      filteredPeople = searchByHeight(people);
//      return filteredPeople;
//      break;
//    case "weight":
//      filteredPeople = searchByWeight(people);
//      break;
//    case "eye color":
//      filteredPeople = searchByEyeColor(people);
//      break;
//    case "gender":
//      filteredPeople = searchByGender(people);
//      break;
//    case "age":
//      filteredPeople = searchByAge(people);
//      break;
//    case "occupation":
//      filteredPeople = searchByOccupation(people);
//      break;
//    default:
//      alert("You entered an invalid search type! Please try again.");
//      searchByTraits2(people);
//      break;
//    }
//  }  
// searchByTraits2(filteredPeople);
//  let foundPerson = filteredPeople[0];

// mainMenu(foundPerson, people);

// }