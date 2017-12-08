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


  let spouse = people.filter(function (el){
    if(el.currentSpouse == el.id){
      alert(el.firstName + el.lastName);
      return true;
    else{
      return false;
    }  
   }
  });
}


function familyInfo(person, people){
  let spouses = people.filter(function(el){
    if(person[0].id === el.currentSpouse) {
      // el.currentSpouse = el.firstName + el.lastName;

      console.log(person[0]);
      console.log(el);
      return true;
    }
    else{
      return false;
    }
  });
  return spouses;

}