var chosenHead = document.getElementById('chosen-header');
var paired = document.getElementById('paired-para');

var pairedHead = document.getElementById('paired-header');
var chosen = document.getElementById('chosen-para');

var doggo = document.getElementById('doggo');

function changeFont(idx){
  chosenHead.style.fontFamily = fontData[idx].font;
  chosen.style.fontFamily = fontData[idx].font;
  pairedHead.style.fontFamily = fontData[idx].fontPairing;
  paired.style.fontFamily = fontData[idx].fontPairing;
  doggo.style.fontFamily = fontData[idx].fontPairing;
}

var drop = document.getElementById('inputFont').onchange = changeFont(this.value);
