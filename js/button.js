const menuButton = document.getElementById('1');
const creditButton = document.getElementById('2');
const socialButton = document.getElementById('3');
const etcButton = document.getElementById('4');

const creditDiv = document.getElementById('credit');
const menuDiv = document.getElementById('menu');
const socialDiv = document.getElementById('social');
const etcDiv = document.getElementById('etc');

const closeButton = document.getElementsByClassName('close');

let f1 = false
let f2 = false
let f3 = false
let f4 = false


// menu
menuButton.addEventListener('click', function() {
  if (menuDiv.style.display === 'block') {
    menuDiv.style.display = 'none';
  } else  {
    menuDiv.style.display = 'block';
  }


  if (f1 === false) {
    menuButton.classList.add('focused');
    f1 = true;
  } else {
    menuButton.classList.remove('focused');

    f1 = false;

  }

})

// credit
creditButton.addEventListener('click', function() {
  if (creditDiv.style.display === 'block') {
    creditDiv.style.display = 'none';
  } else  {
    creditDiv.style.display = 'block';
  }

  if (f2 === false) {
    creditButton.classList.add('focused');
    f2 = true;
  } else {
    creditButton.classList.remove('focused');

    f2 = false;

  }
})

// social
socialButton.addEventListener('click', function() {
  if (socialDiv.style.display === 'block') {
    socialDiv.style.display = 'none';
  } else  {
    socialDiv.style.display = 'block';
  }

  if (f3 === false) {
    socialButton.classList.add('focused');
    f3 = true;
  } else {
    socialButton.classList.remove('focused');

    f3 = false;

  }
})

// etc
etcButton.addEventListener('click', function() {
if (etcDiv.style.display === 'block') {
  etcDiv.style.display = 'none';
} else  {
  etcDiv.style.display = 'block';
}

  if (f4 === false) {
    etcButton.classList.add('focused');
    f4 = true;
  } else {
    etcButton.classList.remove('focused');

    f4 = false;

  }
})


// close mechanism

closeButton[0].addEventListener('click', function() {

  closeButton[0].parentElement.parentNode.style.display = 'none';
  creditButton.style.display = 'none';

})
closeButton[1].addEventListener('click', function() {

  closeButton[1].parentElement.parentNode.style.display = 'none';
  socialButton.style.display = 'none';

})
closeButton[2].addEventListener('click', function() {

  closeButton[2].parentElement.parentNode.style.display = 'none';
  etcButton.style.display = 'none';

})
