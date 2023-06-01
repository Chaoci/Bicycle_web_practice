const selectContainer = document.querySelector('.custom-select');
const selectedOption = selectContainer.querySelector('.selected-option');
const optionList = selectContainer.querySelector('.option-list');


selectedOption.addEventListener('click', () => {
  optionList.classList.toggle('hide');
});

optionList.addEventListener('click', (event) => {
  const selectedText = event.target.textContent;
  const findImg= event.target.querySelector('img');
  const imgSrc = findImg.src;
  selectedOption.innerHTML ='<p><img src="'+imgSrc+'">'+selectedText+'</p> <img src="./web_pictures/icon/arrow-buttom.svg" alt="arrow">';
  optionList.classList.add('hide');
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('NAV');
    var darkLogo = document.querySelector('.dark-logo');
    var lightLogo = document.querySelector('.light-logo');
    var menuColor = document.querySelector('NAV a');
    var fontColor = document.querySelector('.nav-select .nav-option a');
    var nextColor = document.querySelector('#colorChange');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 200) {
      navbar.style.backgroundColor = '#fff';
      nextColor.style.color= 'black';
      fontColor.style.color= 'black';
      lightLogo.classList.remove('hide');
      darkLogo.classList.add('hide');
      menuColor.classList.remove('white-text');
      menuColor.classList.add('black-text');
    } else {
      navbar.style.backgroundColor = 'transparent';
      fontColor.style.color= 'white';
      nextColor.style.color= 'white';
      lightLogo.classList.add('hide');
      darkLogo.classList.remove('hide');
      menuColor.classList.remove('black-text');
      menuColor.classList.add('white-text');
    }
  });