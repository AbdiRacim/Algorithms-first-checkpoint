    let sentence = "Charisma is the perfume of the soul, and by the way it's my favorite perfume."
    let vowels= "aeiouy"
    let wordsNbr = 0
    let lettersNbr = 0
    let vowelsNbr= 0



    let charsNbr = sentence.length;

    for (let i = 0; i < sentence.length; i++) {
        
        if ( (sentence[i] !== " ") && (sentence[i] !== ",") && (sentence[i] !== ".") ) {
                lettersNbr = lettersNbr + 1; } 
            else if ( (sentence[i] == " ") || (sentence[i] = ".") || (sentence[i] !== ",")) {
                wordsNbr = wordsNbr + 1; 
            } 
            for (let j = 0; j < vowels.length; j++) {
                if (sentence[i] == vowels[j]) {
                    vowelsNbr = vowelsNbr + 1; 
                } 
            }
        }


    console.log("Your Sentence is :", sentence);

    console.log("Your sentence contains :", charsNbr, " character !");

    console.log("Your sentence contains :", lettersNbr, " lettres !");

    console.log("Your sentence contains :", wordsNbr, " words !");

    console.log("Your sentence contains :", vowelsNbr, " vowels !");

