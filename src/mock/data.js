import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tommy Werner | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Tommy Werner',
  subtitle: 'I am a software engineer.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vTJ-ahNenqb9TSLe-55U9E2HXRXkxRhxC1iPle1u7-65uj8a-oMdaAT_wL9ZHM3JPps7wSRQca9s20G/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'BG Logger',
    info: 'React application with Rails backend',
    info2: '',
    url: '',
    repo: 'https://github.com/wtwerner/bg-logger-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'WatchNext',
    info: 'Vanilla Javascript application',
    info2: '',
    url: '',
    repo: 'https://github.com/wtwerner/WatchNext_Frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Weather App',
    info: 'Node application',
    info2: '',
    url: 'https://weather.wtwerner.dev',
    repo: 'https://github.com/wtwerner/node-weather-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'LittleSpoon',
    info: 'Rails MVC',
    info2: '',
    url: '',
    repo: 'https://github.com/wtwerner/LittleSpoon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'PresentPlanner',
    info: 'Sinatra MVC',
    info2: '',
    url: '',
    repo: 'https://github.com/wtwerner/PresentPlanner', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'wtwerner@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'http://wtwerner.medium.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/wtwerner',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'http://www.github.com/wtwerner',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
