// var fonts = ["Arial", "Arial Black", "Arial Black", "Arial", "Comic Sans MS", "Impact", "Impact", "Comic Sans MS", "Lucida Sans Unicode", "Tahoma", "Tahoma", "Lucida Sans Unicode", "Trebuchet MS", "Verdana", "Verdana", "Trebuchet MS", "Courier New", "Lucida Console", "Lucida Console", "Courier New"];
//
// var chosenHead = document.getElementsByClassName('chosen-header');
// var paired = document.getElementsByClassName('paired-para');
//
// var pairedHead = document.getElementsByClassName('paired-header');
// var chosen = document.getElementsByClassName('chosen-para');
//
// var doggo = document.getElementsByClassName('doggo');
//
// function changeFont(idx){
//   chosenHead.style.fontFamily = "Comic Sans MS";
//   chosen.style.fontFamily = "Comic Sans MS";
//   pairedHead.style.fontFamily = "Comic Sans MS";
//   paired.style.fontFamily = "Comic Sans MS";
//   doggo.style.fontFamily = "Comic Sans MS";
// }

// console.log(var drop = document.getElementsByClassName('inputFont'));

// var drop = document.getElementsByClassName('inputFont').onchange = window.location.replace('/'+this.value);

var update = document.getElementById('update');

function changeFont(){
  console.log()
  var drop = document.getElementById('inputFont').value;
  window.location.replace('/'+String(drop));

}

update.addEventListener('click', changeFont);
