import { IMAGES } from './images';

export const DEVELOPER = {
  id: 0,
  name: 'mob',
  profilePicture: IMAGES.profilePicture,
  skills: [
    { id: 0, name: 'Html 5', imgSrc: IMAGES.htmlLogo },
    { id: 1, name: 'Css 3', imgSrc: IMAGES.cssLogo },
    { id: 2, name: 'Javascript', imgSrc: IMAGES.jsLogo },
    { id: 3, name: 'React JS', imgSrc: IMAGES.reactLogo },
    { id: 4, name: 'Node JS', imgSrc: IMAGES.nodejsLogo },
    { id: 5, name: 'Express JS', imgSrc: IMAGES.expressLogo },
    { id: 6, name: 'Mongo DB', imgSrc: IMAGES.mongodbLogo },
    { id: 7, name: 'Socket.io', imgSrc: IMAGES.socketioLogo },
  ],

  social: [{ id: 0, name: 'github', url: 'https://github.com/mobvnzla' }],
  projects: [
    {
      id: 0,
      name: 'Bank 📊💼👨‍💼',
      description: 'My bad boy project so far',
      techs: ['AWS', 'Amplify', 'React', 'Tailwind'],
      githubRepo: null,
      liveDemo: 'https://main.d2oti47qx0gosa.amplifyapp.com/',
      img: IMAGES.bank,
    },
    {
      id: 1,
      name: 'ElectraEdge Website 📊💼👨‍💼',
      description:
        'Eleva tu Proyecto Web al Máximo con la Software Factory Líder en Uruguay',
      techs: ['Astro', 'Tailwind'],
      githubRepo: null,
      liveDemo: 'https://electra-edge.com/',
      img: IMAGES.electra,
    },
    {
      id: 2,
      name: 'Task manager 📊💼👨‍💼',
      description:
        'A minimalist web app for those who want to structure their chores and keep organized their long run projects or daily task',
      techs: ['React', 'Nodejs', 'Express', 'MongoDB'],
      githubRepo: 'https://github.com/itsmob/task-manager.git',
      liveDemo: 'https://task-manager-bxllvem11-mobs-projects.vercel.app',
      img: IMAGES.taskManagerPic,
    },
    {
      id: 3,
      name: 'e-commerce 👨‍💼📊💼',
      description: 'A minimalist e-commerce',
      techs: ['React', 'Vanilla CSS'],
      githubRepo: null,
      liveDemo: 'https://minimalist-e-commerce.vercel.app/',
      img: IMAGES.ecommerce,
    },
    {
      id: 4,
      name: 'Chat 💭🗣️🤙',
      description: 'The perfect online place to have fun with your friends',
      techs: ['Nodejs', 'Express', 'Socket.io'],
      githubRepo: 'https://github.com/itsmob/Chat',
      liveDemo: 'https://my-first-chat-v2ma.onrender.com',
      img: IMAGES.chatImg,
    },
    {
      id: 5,
      name: 'Chat v-2 💭🗣️🤙',
      description:
        'After my first chat I tried to build another one but this time adding react to the tech stack',
      techs: ['Reactjs', 'Nodejs', 'Express', 'Socket.io'],
      githubRepo: 'https://github.com/itsmob/chat-v2.git',
      liveDemo: 'https://chat-v2-three.vercel.app',
      img: IMAGES.chatImg,
    },
    {
      id: 6,
      name: 'Pets 🐾',
      description:
        "This pets website is an online platform that allows users to get to know about cats and dogs. The website provides an interface for filtering and upload your own pet's pictures.",
      techs: ['React', 'Vanilla CSS'],
      githubRepo: 'https://github.com/mobvnzla/pets-app/tree/main',
      liveDemo: null,
      img: IMAGES.catPic,
    },
  ],
};
