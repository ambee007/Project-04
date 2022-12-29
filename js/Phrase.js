/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const codeLetter = document.querySelectorAll("key");
const li = document.createElement("li");
let displayPhrase = [];


class Phrase {
    constructor(phrase){
        this.phrase =  phrase;
    }
addPhraseToDisplay (
//     // for each letter within the phrase, create an li element
//     // do we do this by taking the length of the phrase and then creating that many li elements? 
//     // we would need to do for each letter that isn't ' ' so it creates an li elemebt for the letters
//     // and then whenever there is a blank space, we need to create a blank space. 
//     // should this be a Regex for each LETTER, it is an li and for each BLANK SPACE, it's a blank space baby?
//     // use space and letter CSS classes for this part

//take the phrase, and break it out into a new array of strings
//map over the new array to create a new li class that "show" 
displayPhrase = Array.from(phrase).forEach(alert)
)


// //checkLetter(
//     //checks to see if the letter selected by the player matches a letter in the phrase;)

// //showMatchedLetter(
//     //displays the correctly guessed letter use hide and show )
};



const ernie = new Phrase ('this is a phrase');



console.log(ernie)
console.log(ernie.displayPhrase)

//when you refresh, the phrase to display must change from show to hide everything 
//before picking a random newphrase