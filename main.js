import {$} from "jquery"

  //array of colors in (rgb)
  let count = 0
  let colorcolor = ["rgb(255,0,0)", "rgb(255,165,0)", "rgb(255,255,0)", "rgb(0,100,0)", "rgb(0, 71, 171)", "rgb(195, 177, 225)", "rgb(75, 0, 130)"]
  let x = []
 let inputValue 
  

 //start screen -> show start screen and hide the rest 
const showStart = () => {

  $(".start").show("slow");
  $(".score").hide();
  $(".board").hide(); 
  count = 0
};


// game screen -> show game screen and hide the rest
const showBoard = () => {
  $(".board").show("slow");
  $(".start").hide();
  $(".score").hide();
   makeSquare() 
};

const showMedium = () => {
  $(".board1").show("slow");
  $(".start").hide();
  $(".score").hide();
  makeMoreSquares()
}
//score screen -> show score screen and hide the rest
const showScore = () => {
  $(".score").show("slow");
  $(".start").hide();
  $(".board").hide();
  $(".board1").hide()
  //scoreBoard()
};

const countDownTimer = () => {
  let timeleft = 15;
  let downloadTimer = setInterval(function(){
  //if time = 0 or lesser, clear the interval and show "finished"
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
    showScore();
    scoreBoard();
  } else {
    //or else -> keep showing text of "timeleft"
    document.getElementById("countdown").innerHTML = timeleft + " sec";
  }
  // minus 1 everytime
  
  timeleft -= 1;
  //interval = 1000 milliseconds = 1 second
}, 1000);
}


const makeSquare = () => {

  //$("#submit-button").on("click", () => {
  document.getElementById("welcome").innerHTML = "Welcome " + inputValue

  //})
  //countdown timer
  // setInterval(function, milleseconds)
  
document.getElementById("score").innerHTML = "Score " + count;

//get the squares which created in HTML
    const getBox = document.getElementsByClassName('square');
    
    //pick color randomly from the array of colors 
        let randomcolors = colorcolor[Math.floor(Math.random() * colorcolor.length)]
    // from the color picked from randomcolors, split it and make changes to the rgb
        let oddcolor = randomcolors.split(/[(\)]/)
        console.log(oddcolor)
        let changeToInt = oddcolor[1].split(",").map(element => (parseInt(element)))
        console.log(changeToInt)

        //rgb of odd color is slightly different from randomcolors
        let randomRgb = 70 + (Math.floor(Math.random() * 100))
        //changeToInt[2] = randomRgb
        const rgbCode = "rgb" + "(" + changeToInt[0] + "," + changeToInt[1] + "," + randomRgb + ")"
        console.log(rgbCode)

        //create 1 random number within 0-9 (9 boxes)
        let randomnumbers = Math.floor(Math.random() * 9)
         console.log(randomnumbers)
        for ( let i=0; i< getBox.length; i++ ) {
        // if the random number is not equal to the index of the box -> random color
        // will be assigned
          if (getBox[i] !== getBox[randomnumbers]) {
            getBox[i].style.backgroundColor = randomcolors
            //if the random number is equal to index of the box -> odd color
            //will be assigned
          } else
          getBox[randomnumbers].style.backgroundColor = rgbCode
        }
        //when user click on the box
        $(".square").on("click", () => {
          //clearInterval(downloadTimer);
          //get the index of box being clicked
          let indexClicked = $(event.target).index(this);
          console.log(indexClicked + "hi")
          if (indexClicked === randomnumbers) {
            count++
            makeSquare()
          //indexClicked = -1
          //randomnumbers = -2
          }       
      })
      }


      const makeMoreSquares = () => {
        document.getElementById("welcome1").innerHTML = "Welcome " + inputValue
        let timeleft1 = 15;
        
        let downloadTimer1 = setInterval(function(){
        //if time = 0 or lesser, clear the interval and show "finished"
        if(timeleft1 <= 0){
       clearInterval(downloadTimer1);
       document.getElementById("countdown1").innerHTML = "Finished";
       //clearInterval(downloadTimer1);
      showScore();
    
      } else {
     //or else -> keep showing text of "timeleft"
      document.getElementById("countdown1").innerHTML = timeleft1 + " sec";
  
      }
  // minus 1 everytime
  timeleft1 -= 1;
  
  //interval = 1000 milliseconds = 1 second
}, 1000);

document.getElementById("score1").innerHTML = "Score " + count;
const getMoreBoxes = document.getElementsByClassName('square1');

//console.log(randomnum1)
    
        
          function random_bg_color(){
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            return bgColor;
        }
        let randomnum1 = Math.floor(Math.random()*25)
          for (let k = 0; k < getMoreBoxes.length; k++) {
            
            const oneSquare = document.getElementById('square2')
            //if (oneSquare[k] === getMoreBoxes[randomnum1]) {
            oneSquare.style.backgroundColor = getMoreBoxes[randomnum1].style.backgroundColor
           // } else {
            getMoreBoxes[k].style.backgroundColor = random_bg_color();
            console.log(random_bg_color)
            }

              
      
        $(".square1").on("click", () => {
          
          //get the index of box being clicked
          let indexClicked1 = $(event.target).index(this);
          console.log(indexClicked1 + "index num")
          console.log(randomnum1 + "randomnum")
          
          if (indexClicked1 === randomnum1) {
            count++
            console.log(count)
            
            makeMoreSquares()
            
          }       
      })        
    }
      

      const scoreBoard = () => {
        let yourScore = document.getElementById("yourscoreis").innerHTML = "Your score is " + count
        let tbodyRef = document.getElementById("table").getElementsByTagName("tbody")[0];
        let newRow = tbodyRef.insertRow();
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(inputValue + " : " + count);
        
        newCell.appendChild(newText)
        
      }
  

  
  
const main = () => {
 
  $("#startButton").on("click", () => {
    inputValue = $("#input-box").val();
    console.log(inputValue);
    $("#input-box").val("");
    showBoard()
    countDownTimer();
  })
  $("#mediumbutton").on("click", () => {
    inputValue = $("#input-box").val();
    console.log(inputValue);
    $("#input-box").val("");
    showMedium()
  })
 // $("#gameButton").on("click", showScore)
  $("#restartButton").on("click", showStart)
};


$(main);
