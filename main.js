import $ from "jquery"
$("body").append('<h2></h2>') //append once only
  $('h2').text("")// ? score
  //array of colors in (rgb)
  let count = 0
  let colorcolor = ["rgb(255,0,0)", "rgb(255,165,0)", "rgb(255,255,0)", "rgb(0,100,0)", "rgb(0, 71, 171)", "rgb(195, 177, 225)", "rgb(75, 0, 130)"]
  let x = []
 let inputValue 
 

 //start screen -> show start screen and hide the rest 
const showStart = () => {
  location.reload()
  // $(".start").show("slow");
  // $(".score").hide();
  // $(".board").hide(); 
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
};


const makeSquare = () => {

  //$("#submit-button").on("click", () => {
  document.getElementById("welcome").innerHTML = "Welcome " + inputValue

  //})
  //countdown timer
  // setInterval(function, milleseconds)
  let timeleft = 3;
  let downloadTimer = setInterval(function(){
  //if time = 0 or lesser, clear the interval and show "finished"
  if(timeleft <= 0){
    //clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
    showScore();
  } else {
    //or else -> keep showing text of "timeleft"
    document.getElementById("countdown").innerHTML = timeleft + " sec";
  }
  // minus 1 everytime
  
  timeleft -= 1;
  //interval = 1000 milliseconds = 1 second
}, 1000);
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
          clearInterval(downloadTimer);
          //get the index of box being clicked
          const indexClicked = $(event.target).index(this);
          console.log(indexClicked)
          
          
          //if the index of box being clicked is equal to the 
          //random number/odd color
          // const allNumbers = document.getElementsByClassName("square")
          // for (let j = 0; j < allNumbers.length; j++) {
          if (indexClicked === randomnumbers) {
            count++
            
            console.log(count)
            //it will keep repeating
            console.log(indexClicked)
            console.log(randomnumbers) 
           
            //indexClicked.splice(0, indexClicked.length)
            makeSquare()
            
          } 
          else if (indexClicked !== randomnumbers) {
          return false
          //alert("oh no")
          
          }
        
      })
      }
  

      
      const makeMoreSquares = () => {
        document.getElementById("welcome1").innerHTML = "Welcome " + inputValue
        let timeleft = 5;
        let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
        document.getElementById("countdown1").innerHTML = "Finished";
      showScore();
      } else {
     document.getElementById("countdown1").innerHTML = timeleft + " sec";
  }
  timeleft -= 1;  
}, 1000);
document.getElementById("score1").innerHTML = "Score " + count;
const getMoreBoxes = document.getElementsByClassName('square1');
let randomcolors = colorcolor[Math.floor(Math.random() * colorcolor.length)]
    
        let oddcolor = randomcolors.split(/[(\)]/)
        console.log(oddcolor)
        let changeToInt = oddcolor[1].split(",").map(element => (parseInt(element)))
        console.log(changeToInt)
        let randomRgb = 70 + (Math.floor(Math.random() * 100))
        const rgbCode = "rgb" + "(" + changeToInt[0] + "," + changeToInt[1] + "," + randomRgb + ")"
        console.log(rgbCode)
        let randomnumbers = Math.floor(Math.random() * 25)
         console.log(randomnumbers)
        for ( let i=0; i< getMoreBoxes.length; i++ ) {
        // if the random number is not equal to the index of the box -> random color
        // will be assigned
          if (getMoreBoxes[i] !== getMoreBoxes[randomnumbers]) {
            getMoreBoxes[i].style.backgroundColor = randomcolors
            //if the random number is equal to index of the box -> odd color
            //will be assigned
          } else
          getMoreBoxes[randomnumbers].style.backgroundColor = rgbCode
        }
        
        const game = () => {
          clearInterval(downloadTimer);
          const indexClicked = $(event.target).index(this);
          if (indexClicked === randomnumbers) {
            count++
            showMedium();
          } else showScore()
        }
        const element = document.getElementsByClassName("square1");
        element.addEventListener("click", game());
        //when user click on the box
        // $(".square").on("click", () => {
        
          
        //   console.log(indexClicked)   
          

      }

  
  
const main = () => {
 
  $("#startButton").on("click", () => {
    inputValue = $("#input-box").val();
    console.log(inputValue);
    $("#input-box").val("");
    showBoard()
  })
  $("#mediumbutton").on("click", () => {
    inputValue = $("#input-box").val();
    console.log(inputValue);
    $("#input-box").val("");
    showMedium()
  })
  $("#gameButton").on("click", showScore)
  $("#restartButton").on("click", showStart)
//showStart();

//   inputValue = $("#input-box").val();
//   console.log(inputValue);
//   $("#input-box").val("");

};


$(main);