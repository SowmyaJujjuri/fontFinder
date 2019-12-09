var update = document.getElementById('update');

function changeFont(){
  console.log()
  var drop = document.getElementById('inputFont').value;
  if(drop != 10) {
    window.location.replace('/'+String(drop));
  }
}

update.addEventListener('click', changeFont);
