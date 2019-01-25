/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var navMat = document.getElementById('matCount');
navMat.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var navMsg = document.getElementById('msgCount');
navMsg.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var divFull = document.getElementById('fullname');
divFull.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var divAge = document.getElementById('age');
divAge.innerHTML = '63 Years Old';

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var newDiv = document.createElement('div');
newDiv.id = 'job';
newDiv.innerHTML = 'Clown and Restauranteur';
data.appendChild(newDiv);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var divHobbies = document.createElement('div');
divHobbies.id = 'hobbies';
divHobbies.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
data.appendChild(divHobbies);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var divLoc = document.createElement('div');
divLoc.id = 'location';
divLoc.innerHTML = 'Honolulu, HI';
data.appendChild(divLoc);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var divWants = document.createElement('div');
divWants.id = 'wants';
divWants.innerHTML = 'Looking for a Mrs. McDonald.';
data.appendChild(divWants);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var aboutMe = document.createElement('p');
aboutMe.id = 'pro2';
aboutMe.innerHTML = "I like long romantic walks and picnics by the beach with any meal combo you'd like from McDonalds. I also love kids and animals.";
profile.appendChild(aboutMe);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var nameElem = document.getElementsByClassName('firstName');
nameElem[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var ageElem = document.getElementsByClassName('otherAge');
ageElem[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var statusElem = document.getElementsByClassName('status');
statusElem[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

nameElem[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

ageElem[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto

 nameElem[2].innerHTML = 'Rina';
 ageElem[2].innerHTML = 25;
 statusElem[2].innerHTML = 'In a Relationship';
 
 var mottoElem = document.getElementsByClassName('motto');
 mottoElem[2].innerHTML = 'git work, git paid';


