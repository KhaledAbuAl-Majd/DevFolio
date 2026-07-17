const words = [
  "Freelance",
  "Developer",
];

let wordIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing");

function typeWord() {

    if(charIndex < words[wordIndex].length){

        typingText.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWord,100);

    }else{

        setTimeout(deleteWord,1000);
    }
}

function deleteWord(){

    if(charIndex > 0){

        typingText.textContent =
        words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteWord,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeWord,200);
    }
}

typeWord();