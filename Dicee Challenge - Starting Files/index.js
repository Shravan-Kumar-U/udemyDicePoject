const randomNumber1 = Math.floor((Math.random()*6)+1)
const randomNumber2 = Math.floor((Math.random()*6)+1)
const h1 = document.querySelector("h1");
console.log(h1);
const imgOne = document.querySelector(".img1");
const hello = document.querySelector(".img2");
console.log(hello);
console.log(randomNumber1);
switch (randomNumber1) {
    case 1:
        let imgO = new Image();
        imgO.src='../images/dice1.png';
        imgOne.replaceWith(imgO)
        
        break;
    case 2:
        let imgTwo = new Image();
        imgTwo.src='../images/dice2.png';
        imgOne.replaceWith(imgTwo)


        break;
    case 3:
        let imageThree = new Image();
        imageThree.src='../images/dice3.png';
        imgOne.replaceWith(imageThree)


        break;
    case 4:
        let four  = new Image();
        four.src='../images/dice4.png';
        imgOne.replaceWith(four);


        break;
    case 5:
        let five = new Image();
        five.src='../images/dice5.png';
        imgOne.replaceWith(five);
        break;
    case 6:
        let six = new Image();
        six.src='../images/dice6.png';
        imgOne.replaceWith(six);
        break;


    default:
        alert("nothing special")
        break;
}

switch (randomNumber2) {
    case 1:
        let imgO = new Image();
        imgO.src='../images/dice1.png';
        hello.replaceWith(imgO)
        
        break;
    case 2:
        let imgTwo = new Image();
        imgTwo.src='../images/dice2.png';
        hello.replaceWith(imgTwo)


        break;
    case 3:
        let imageThree = new Image();
        imageThree.src='../images/dice3.png';
        hello.replaceWith(imageThree)


        break;
    case 4:
        let four  = new Image();
        four.src='../images/dice4.png';
        hello.replaceWith(four);


        break;
    case 5:
        let five = new Image();
        five.src='../images/dice5.png';
        hello.replaceWith(five);
        break;
    case 6:
        let six = new Image();
        six.src='../images/dice6.png';
        hello.replaceWith(six);
        break;


    default:
        alert("nothing special")
        break;
    
        
  
}


if(randomNumber1>randomNumber2){
    h1.innerText="Player 1 Wins 🚩";

}else if(randomNumber1 == randomNumber2){
    h1.innerHTML="Draw!!!";
}else{
    h1.innerHTML="Player 2 Wins 🚩"
}