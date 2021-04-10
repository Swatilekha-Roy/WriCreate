// Quotes

    let quotes = [
  "'When the going gets tough, the tough use JavaScript'",
  "'To code or not to code, that is the question'",
  "'There is more than one type of coder, but they all started at zero'",
  "'Give me your kisses, and your pull requests'",
  "'Gitter done!'",
  "'How many functions does it take to change the world?'",
  "'You had me at Hello World'",
  "'Take me to your GitHub profile'",
  "'Every error is a chance to learn'",
  "'I owe it all to @freeCodeCamp'",
  "'Stop repeating yourself! Stop repeating yourself! Stop repeating yourself!'",
  "'Mmmmm, Vanilla JavaScript'",
  "'Hold me close and make me responsive'",
  "'Tell me your secret function'",
  "'There is more than one way to write a function'",
  "'You're an array of sunshine'",
  "'Whisper sweet functions in my ear'",
  "'Don't tell anyone, but I really hate IE6'",
  "'!false === it's funny because it's true'",
  "'It was love at first byte'",
  "'@ossia made me do it!'",
  "'I function better at night'"
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



