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

function descendantsInfo(people, person){
  let descendants = people.filter(function(el){
    if(person.id == el.parents[0]  || person.id == el.parents[1] ){
      return true;
    }
    else{
      return false;
    }
  });
      alert("This person's descentdants are:")
      displayPeople(descendants)
   return descendants;
}

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

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    //searchByName(people);
    let person = searchByName(people);
    //console.log(person);
    spouseInfo(people, person);
    desendantsInfo(people, person);
    siblingsInfo(people, person);
    displayfamily(people, person);
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
