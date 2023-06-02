//選單自製樣式
const selectContainer = document.querySelector('.custom-select');
const selectedOption = selectContainer.querySelector('.selected-option');
const optionList = selectContainer.querySelector('.option-list');

selectedOption.addEventListener('click', () => {
  optionList.classList.toggle('hide');
  selectedOption.style.border= "1px solid black";
  optionList.style.border = "1px solid black";
});

optionList.addEventListener('click', (event) => {
  const selectedText = event.target.textContent;
  const findImg= event.target.querySelector('img');
  const imgSrc = findImg.src;
  selectedOption.innerHTML ='<p><img src="'+imgSrc+'">'+selectedText+'</p> <img src="./web_pictures/icon/arrow-buttom.svg" alt="arrow">';
  optionList.classList.add('hide');
});

// 利用隱藏label來自製input的placeholder

const inputValue = document.getElementById('my-input');
inputValue.addEventListener('click',()=>{
  document.querySelector('label').classList.add('hide');
});

//沒有focus在input上的話，則再次出現

inputValue.addEventListener('blur',()=>{
  document.querySelector('label').classList.remove('hide');
});

//讓自製之按鈕可以有submit的功能
const customButton = document.querySelector('.contact-button');
const form = document.querySelector('.contact-card');

customButton.addEventListener('click', function() {
  form.submit(); // 提交表單
});




window.addEventListener('scroll', function() {
    var navbar = document.querySelector('NAV');
    var darkLogo = document.querySelector('.dark-logo');
    var lightLogo = document.querySelector('.light-logo');
    var menuColor = document.querySelector('NAV a');
    var fontColor = document.querySelector('.nav-select .nav-option a');
    var nextColor = document.querySelector('#colorChange');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
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