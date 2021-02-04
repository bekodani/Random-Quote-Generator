const btn = document.getElementById('btn');
const imageElement = document.querySelector('.image-container > img');
const quoteElement = document.querySelector('.quotes');
const authorElement = document.querySelector('.author');
const target = document.querySelector('.container');

  const quotes = [

    { 
      quote: `"Nem mindegy, hogy mi célból hazudunk: hogy megőrzünk, vagy elpusztítunk-e vele valamit."`,
      author: "Friedrich Nietzsche",
      imageurl: './src/nietzsche.jpg'

    }, 
    {
      quote: `"A tenger szépsége nem csökken szemünkben attól, hogy tudjuk, olykor hajók süllyednek el."`,
      author: "Simone Weil",
      imageurl: './src/SimoneWeil.png'
    },
    {
      quote: `"Megláttam az angyalt a márványtömbben, és addig véstem, míg ki nem szabadítottam."`,
      author: "Michelangelo",
      imageurl: './src/michelangelo.jpg'
    },
    {
      quote: `"A sötétség nem tudja kiszorítani a sötétséget: ezt csak a fény képes megtenni. A gyűlölet nem tudja kiszorítani a gyűlöletet: ezt csak a szeretet teheti meg."`,
      author: "Martin Luther King",
      imageurl: './src/martinluther.jpg'
    },
    {
      quote: `"Mielőtt bosszút állnál valakin, két sírt áss!"`,
      author: "Konfuciusz",
      imageurl: './src/konfuciusz.jpg'
    },
    {
      quote: `"Ha igazán próbára akarod tenni egy ember jellemét, adj neki hatalmat."`,
      author: "Abraham Lincoln",
      imageurl: './src/lincoln.jpg'
    },
    {
      quote: `"Lenni annyi, mint szenvedni. Aki e tudás alól kibújik, a valóság elől való végtelen menekülésben elveszett."`,
      author: "Hamvas Béla",
      imageurl: './src/hamvas.jpg'
    },
    {
      quote: `Olyan sokáig voltak nonkorformisták, hogy végül megbuktak az utolsó normák is, melyek ellen még lázadni lehetett.“`,
      author: "Sławomir Mrożek",
      imageurl: './src/Mrozek.jpg'
    },
    {
      quote: `"Nincs olyan boldog élet, amelyben ne lenne egy kevés sötétség is. A boldogság nem jelent semmit, ha nem ellensúlyozza bánat. Nincs jang jin nélkül"`,
      author: "Carl Gustav Jung",
      imageurl: './src/jung.jpg'
    },
    {
      quote: `"Könnyebb száz világi vágyat meghódítani, mint egyről lemondani."`,
      author: "Gautama Sziddhártha",
      imageurl: './src/buddha.jpg'
    },
    {
      quote: `"Te magad légy a változás, amit látni szeretnél a világban!"`,
      author: "Mahatma Gandhi",
      imageurl: './src/gandhi.jpg'
    },
    {
      quote: `"Olyan világban élni, ahol senkinek sem bocsátanak meg, ahol mindenki kárhozatra van ítélve, annyi, mint a pokolban élni."`,
      author: "Milan Kundera",
      imageurl: './src/kundera.jpeg'
    },
    {
      quote: `"Az ügy, amely bűnben fogant, nem győzhet soha."`,
      author: "Henrik Ibsen",
      imageurl: './src/ibsen.jpg'
    },
    {
      quote: `"Egy társadalom civilizáltságának mértékét a rabokon lehet lemérni."`,
      author: "Fjodor Mihajlovics Dosztojevszkij",
      imageurl: './src/dosztojevszki.jpg'
    },
    {
      quote: `"Az őrültek társadalmában a betegek az egészségesek."`,
      author: "Philip K. Dick",
      imageurl: './src/philipkdick.jpg'
    },
    {
      quote: `"Az élet: szüntelen elterelés, úgyhogy még arra sem eszmélhetünk rá, mi mellett terel el."`,
      author: "Franz Kafka",
      imageurl: './src/kafka.jpg'
    },
  ];


function getNumber() {
    var random;

    do {
        random = Math.floor(Math.random() * quotes.length);
    } while (random === getNumber.last);
    getNumber.last = random;
    return random;
};

const colorOne = '#7aa22f';
const colorTwo = '#b0e3e1';
const colorThree = '#e5eca7';
const colorFour = '#f05933';
const colorFive = '#9784f6';
const colorSix = '#c565d2';

const colorArray = [colorOne, colorTwo, colorThree, colorFour, colorFive, colorSix];
 
function getColor() {
  var random2;

  do {
      random2 = Math.floor(Math.random() * colorArray.length);
  } while (random2 === getColor.last);
  getColor.last = random2;
  return random2;
};

function generator() {
    let random = getNumber();
    imageElement.src = quotes[random].imageurl;
    quoteElement.textContent = quotes[random].quote;
    authorElement.textContent = quotes[random].author;
    console.log(random)
}

function random_bg_color() {

let random2 = getColor();
var bgColor = colorArray[random2];
var fontColor = colorArray[random2];




console.log(colorArray[random2])
  document.body.style.background = bgColor;
  document.getElementById('quote-color').style.color = fontColor;
  document.getElementById('author-color').style.color = fontColor;
  document.getElementById('btn').style.background = bgColor;
  document.getElementById('img-border').style.borderColor = bgColor;
  }


btn.addEventListener('click',() => {
  generator();
  random_bg_color();
});

window.onload = generator();
window.onload = random_bg_color();



/* var player = target.animate([
  {opacity: '0'}
], 5000);
player.addEventListener('click', function(){
  target.style = '0'
}) */








