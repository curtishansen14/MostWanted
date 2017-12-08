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




function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  let nameArray = people.filter(function (el) {
    if(firstName == el.firstName && lastName == el.lastName){
      return true;
    }
    else{
      return false;
    }
  });

  return nameArray;

}

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

searchByName(data);
