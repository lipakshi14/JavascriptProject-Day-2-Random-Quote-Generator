 const quoteText=document.querySelector(".quote"),
 authorName = document.querySelector(".author .name"),
 quoteButton = document.querySelector("button"),
 soundBtn = document.querySelector(".sound"),
 copyBtn = document.querySelector(".copy"),
 igBtn = document.querySelector(".ig");
 

function randomQuote(){
    quoteButton.classList.add("loading");
        quoteButton.innerHTML="Loading Quote....";
      fetch("https://api.quotable.io/random").then(res=> res.json()).then(result =>{ 
        quoteText.innerHTML=result.content;
        authorName.innerHTML=result.author; 
        quoteButton.innerHTML="New Quote";
        quoteButton.classList.remove("loading");
      });
}

soundBtn.addEventListener("click",()=>{
    // SpeechSynthesisUtterance is a web api that represent a speech request
    let speech = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`); // speak method speak the speech 
    speechSynthesis.speak(speech);
});

copyBtn.addEventListener("click",()=>{
    //copying the quote text on copyBtn click
    //writeText() writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
});

// igBtn.addEventListener("click",()=>{
//     let igurl = 'https://instagram.com/intent/post?url=${quoteText.innerText}';
//     window.open(igurl,"_blank");
// });


 quoteButton.addEventListener("click",randomQuote);
