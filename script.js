const menu = document.querySelector('.menu-button');
const popUp = document.querySelector('.pop');
const scrollb = document.querySelector('body');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  popUp.classList.toggle('active');
  scrollb.classList.toggle('active');
});

document.querySelectorAll('.menu-links').forEach((i) => i.addEventListener('click', () => {
  menu.classList.remove('active');
  popUp.classList.remove('active');
  scrollb.classList.remove('active');
}));

const projectOne = {
  name: 'Book List',
  position: 'Microverse Full Stack Dev 2022',
  image: 'images/books.jpg',
  description:
    'Awesome Book List is a simple project made with HTML, CSS and using JavaScript ES6 syntax. The user is able to add new books in the add new section and store the data using local storage. It was made using SPA implementation',
  technologies: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstraps'],
  livelink: 'link',
  sourcelink: 'link',
};

const projectTwo = Object.create(projectOne);
projectTwo.name = 'Landing Page';
projectTwo.image = 'images/landingpage.jpg';
projectTwo.description = 'This Landing Page project was made to emulate a conference webpage with basic functionality. It was made with responsive design for mobile and desktop versions and has two main sections linked together in the nav menu.';

const projectThree = Object.create(projectOne);
projectThree.image = 'images/face.svg';

const projectFour = Object.create(projectOne);
projectFour.name = 'Leaderboard';
projectFour.image = 'images/leaderboard.png';
projectFour.description = 'The Leaderboard webpage allows the user to keep track of different scores and displays the top one. It was made using an API to store and retrieve the data.';

const projectFive = {
  name: 'Tonic',
  position: 'Microverse Full Stack Dev 2022',
  image: 'images/modalone.png',
  description:
    'Awesome Book List is a simple project made with HTML, CSS and using JavaScript ES6 syntax. The user is able to add new books in the add new section and store the data using local storage',
  technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  livelink: 'link',
  sourcelink: 'link',
};

const projectSix = Object.create(projectFive);
projectSix.name = 'Multy-Post Stories';
projectSix.position = 'Microverse Full Stack Dev 2022';

const projectSeven = Object.create(projectFive);
projectSeven.name = 'Facebook 360';
projectSeven.position = 'FACEBOOK Full Stack Dev 2015';

const projectEight = Object.create(projectFive);
projectEight.name = 'Facebook 360';
projectEight.position = 'UBER Lead Developer 2018';

const listPosition = ['Microverse', 'Full Stack Dev', '2022', 'FACEBOOK', 'Uber', 'Lead Developer', '2018'];

const arrayCards = [projectOne, projectTwo, projectFour];

for (let i = 0; i < arrayCards.length; i += 1) {
  const mainDiv = document.createElement('div');
  mainDiv.classList = 'mainDiv';
  document.getElementById('worksNew').appendChild(mainDiv);

  const cardImage = document.createElement('img');
  cardImage.src = arrayCards[i].image;
  mainDiv.append(cardImage);

  const secondDiv = document.createElement('div');
  secondDiv.classList = 'seconDiv';
  mainDiv.append(secondDiv);

  const cardH2 = document.createElement('h2');
  cardH2.className = 'modalh2';
  const textCard = document.createTextNode(arrayCards[i].name);
  cardH2.appendChild(textCard);
  secondDiv.append(cardH2);

  const subtextCard = document.createElement('ul');
  subtextCard.className = 'date';
  secondDiv.append(subtextCard);

  const subtextPosition = document.createElement('li');
  subtextPosition.className = 'canopy';
  subtextPosition.append(listPosition[0]);
  subtextCard.append(subtextPosition);

  const subtextJob = document.createElement('li');
  subtextJob.className = 'year';
  subtextJob.append(listPosition[1]);
  subtextCard.append(subtextJob);

  const subtextYear = document.createElement('li');
  subtextYear.className = 'year';
  subtextYear.append(listPosition[2]);
  subtextCard.append(subtextYear);

  const subtextCard2 = document.createElement('p');
  subtextCard.className = 'date';
  const positCard2 = document.createTextNode(arrayCards[i].description);
  subtextCard2.appendChild(positCard2);
  secondDiv.append(subtextCard2);

  const newDivOriginal = document.createElement('div');
  newDivOriginal.id = 'newDivOriginal';
  secondDiv.append(newDivOriginal);

  const technoOriginal1 = document.createElement('button');
  technoOriginal1.className = 'techno-button';
  const technoIconOriginal1 = document.createTextNode(arrayCards[i].technologies[0]);
  technoOriginal1.appendChild(technoIconOriginal1);
  newDivOriginal.append(technoOriginal1);

  const technoOriginal2 = document.createElement('button');
  technoOriginal2.className = 'techno-button';
  const technoIconOriginal2 = document.createTextNode(arrayCards[i].technologies[1]);
  technoOriginal2.appendChild(technoIconOriginal2);
  newDivOriginal.append(technoOriginal2);

  const technoOriginal3 = document.createElement('button');
  technoOriginal3.className = 'techno-button';
  const technoIconOriginal3 = document.createTextNode(arrayCards[i].technologies[2]);
  technoOriginal3.appendChild(technoIconOriginal3);
  newDivOriginal.append(technoOriginal3);

  const projectCardButton = document.createElement('button');
  if (i === 0) {
    projectCardButton.className = 'project-button';
  } else if (i === 1) {
    projectCardButton.className = 'project-button1';
  } else if (i === 2) {
    projectCardButton.className = 'project-button2';
  } else if (i === 3) {
    projectCardButton.className = 'project-button3';
  }

  const buttonText2 = document.createTextNode('See Project');
  projectCardButton.appendChild(buttonText2);
  secondDiv.append(projectCardButton);
}

function showM(input, message2, type) {
  const message = document.getElementById('errorm');
  message.innerText = message2;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message2) {
  return showM(input, message2, false);
}

function showSuccess(input) {
  return showM(input, '', true);
}

function values(input, message2) {
  if (input.value.trim() === '') {
    return showError(input, message2);
  }
  return showSuccess(input);
}

function validation(input, requiredMsg, invalidMsg) {
  if (!values(input, requiredMsg)) {
    return false;
  }

  const email = input.value.trim();
  if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}
const form = document.querySelector('#bottomForm');
const reqEmail = 'Please enter your email';
const invalidEmail = 'Please enter a correct email address format. The email has to be in lower case. Form not submitted.';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validation(form.elements.email, reqEmail, invalidEmail);
  if (emailValid) {
    alert('Form Submitted');
  }
});
