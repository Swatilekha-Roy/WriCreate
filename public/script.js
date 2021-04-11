// Quotes

    let quotes = [
  "'You are in a zoo, except that you're the one they are clicking pictures of as you are strutting around, confused by the bars around you.",
  "'What's a spaceship without a driver? You, Dunbolt, are out to show them that you don't need drivers, huh.'",
  "'I am adding no blood to this bloody mary, just so you know.'",
  "'What's the tree house up there writing about you and that one time you farted thinking nobody noticed?'",
  "'You are the last person left on Earth.'",
  "'You are the last control subject in Dr. Frank's crazy maggot eating experiment.'",
  "'You just had the trip of your lifetime but you still feel out of place.'",
  "'You just found a fortune cookie on the floor, and picked it up. You gasp loudly when you read what's written on the note.'",
  "'To err is human, to slur is sailor (especially when you are being chased down by a fleet of pirates!'",
  "'Hello, I am Death and it's officially time for us to get acquainted.'",
  "'Stop repeating yourself! Stop repeating yourself! Stop repeating yourself!'",
  "'Why Me? You ask the kidnapper to which he replies,'I am saving you from something out there.''",
  "'You just chance upon a lottery and a break up on the same evening. Damn, what a price!'",
  "'Tell me your secret fantasy.'",
  "'To kill, or not to kill- that is the question.'",
  "'Fire on fire would normally kill us but this much desire, together we're winners (Thank you, Sam Smith!!)'",
  "'Sweet poison is thy love.'",
  "'Write a poem that doesn't have any pronouns.'",
  "'It's funny that you laugh when all I am thinking about is strangling you.'",
  "'It was love at first bite, write about any two food items falling in love.'",
  "'You and an alien are having a conversation. On Mars. Yep.'",
  "'I guess I am a vampire but I am kind of blood intolerant. What do I survive on?'"
  ]

// Get random quote and display 

function getQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}

var generatedQuote = document.getElementById('newQuoteSection').innerHTML;

// Tweet quote on click

function tweetQuote() {
  var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote);
  window.open(tweetUrl);
}

// Share prompt on Facebook

var url = window.location.href;

function shareQuote() {
  window.open('https://www.facebook.com/sharer/sharer.php?href=' + url,
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
}




/* Like counter */


var like=document.getElementById("like");
// var b=document.getElementsByTagName("body");
var flg=0;
// function likestory(){
//   console.log(flg);

//   if(flg<1){
//     document.getElementById("like").style.background="white";
//     document.getElementById("like").to
//     flg=1;
//   }

//   else if(flg>0){
//     document.getElementById("like").style.background="yellow";
//     flg=0;
//   }
// }



// like.onclick=function(){
//   ;
// }





/* Game speech */

       var noun1, adjective1, noun2, storyOutput;

      function getInput(){
        noun1 = document.getElementById("noun1").value;
        adjective1 = document.getElementById("adjective1").value;
        noun2 = document.getElementById("noun2").value;

        storyOutput = ("Once upon a time there was a " + noun1 + ", that is very-very " + adjective1 + ". It loves doing " + noun2 + ".");

        document.getElementById("output").innerHTML = storyOutput;
      }
        
     
        var voiceList = document.querySelector('#voiceList');
        var btnSpeak = document.querySelector('#btnSpeak');
        var synth = window.speechSynthesis;
        var voices = [];

        PopulateVoices();
        if(speechSynthesis !== undefined){
            speechSynthesis.onvoiceschanged = PopulateVoices;
        }

        btnSpeak.addEventListener('click', ()=> {
            var toSpeak = new SpeechSynthesisUtterance(storyOutput);
            var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
            voices.forEach((voice)=>{
                if(voice.name === selectedVoiceName){
                    toSpeak.voice = voice;
                }
            });
            synth.speak(toSpeak);
        });

        function PopulateVoices(){
            voices = synth.getVoices();
            var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
            voiceList.innerHTML = '';
            voices.forEach((voice)=>{
                var listItem = document.createElement('option');
                listItem.textContent = voice.name;
                listItem.setAttribute('data-lang', voice.lang);
                listItem.setAttribute('data-name', voice.name);
                voiceList.appendChild(listItem);
            });

            voiceList.selectedIndex = selectedIndex;
        }