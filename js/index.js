//select html elements
const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

//do you need an array
const quotes = [
    {name:'Les Brown',
    quote:'Other people\'s opinion of you does not have to become your reality'
    },
    {name: 'Steve Harvey',
    quote:'Failure is a great teacher, and I think when you make mistakes and you recover from them and you treat them as valuable learning experiences, then you\'ve got something to share.'
    },
    {name:'Tony Robbins',
    quote:'In essence, if we want to direct our lives, we must take control of our consistent actions. It\'s not what we do once in a while that shapes our lives, but what we do consistently.'
    },
    {name:'William Dryer',
    quote:'If you change the way you look at things, the things you look at change.'
    }
    ];
//Event and function
quoteBtn.addEventListener('click', quoteGenerator);
//function
function quoteGenerator(){
    let randomQuote = Math.floor(Math.random()*quotes.length);
    quote.innerHTML= quotes[randomQuote].quote;
    quoteAuthor.innerHTML= quotes[randomQuote].name
}