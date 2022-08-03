// menu Icon toggle
const menuBar = document.querySelector('.menuIcon');
const menuList = document.querySelector('nav');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  menuList.classList.toggle('active');
});

menuList.addEventListener('click', () => {
  menuBar.classList.remove('active');
  menuList.classList.remove('active');
});
// Main program
const mainP = document.querySelector('.mainProgram > ul');
const mainProgramData = [
  {
    link: 'images/program_icon_01.png',
    name: 'Lecture',
    text: 'Learn from Lecturers from all over the wolrd which are the best in there fields',
  },
  {
    link: 'images/program_icon_02.png',
    name: 'DA Show',
    text: 'Have access to countless number of UI designs, all ready to be deployed and published in your portofolio. You can edite them too',
  },
  {
    link: 'images/program_icon_03.png',
    name: 'Community',
    text: 'Join one of the biggest web education communities in the world. Talk to people that you both share the same intrests, Make new friend, wide your network',
  },
  {
    link: 'images/program_icon_04.png',
    name: 'Workshops',
    text: 'Meet studends through the program and work together on real world projects',
  },
  {
    link: 'images/program_icon_05.png',
    name: 'experience',
    text: 'Wide your experience, increase your hiring chances and learn how to land a job. Why waiting! join now!.',
  },
];

mainProgramData.forEach((ele) => {
  const mainPli = document.createElement('li');
  const mainPimg = document.createElement('img');
  const mainPh4 = document.createElement('h4');
  const mainPp = document.createElement('p');
  mainPimg.src = ele.link;
  mainPimg.alt = ele.name;
  mainPh4.textContent = ele.name;
  mainPp.textContent = ele.text;
  [mainPimg, mainPh4, mainPp].forEach((child) => mainPli.appendChild(child));
  mainP.append(mainPli);
});

// SList session
const speakersData = [
  {
    img: '../images/ali.png',
    name: 'Ali Ahmad',
    degree: 'Degree on UI & UX design',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: '../images/ali6.png',
    name: 'Karimi',
    degree: 'Problem solving expert',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: '../images/ali2.png',
    name: 'Ali',
    degree: 'Opertaing system Developer',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: '../images/ali7.png',
    name: 'Aliahmad',
    degree: 'Software Engineer',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: '../images/ali4.png',
    name: 'Ali Karimi',
    degree: 'Photographer',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: '../images/ali5.png',
    name: 'Karimi Ali',
    degree: 'Team manager',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
];

const speaker = document.querySelector('#speakerList');
speaker.innerHTML = speakersData
  .map(
    (ele) => `<li>
       <div class="speaker-img">
         <img src=${ele.img} alt=${ele.name} />
       </div>
       <div class="speaker-details">
         <h4>${ele.name}</h4>
         <h5>${ele.degree}</h5>
         <p>${ele.text}</p>
        </div>
      </li>`,
  )
  .join('');

const mobileSpeaker = document.querySelectorAll('#speakerList > li:nth-child(n+3)');
const mobileBtn = document.querySelector('.speaker > a');
mobileBtn.forEach((ele) => ele.classList.toggle('speakers-hide'));

mobileBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileSpeaker.forEach((ele) => ele.classList.toggle('speakers-hide'));
  mobileBtn.children[0].innerHTML = mobileBtn.children[0].innerHTML === 'See More' ? 'Show Less' : 'See More';
  mobileBtn.children[1].classList.toggle('rotate-180');
});
