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
    { id: 3, name: 'Node JS', imgSrc: IMAGES.nodejsLogo },
    { id: 3, name: 'Express JS', imgSrc: IMAGES.expressLogo },
    { id: 3, name: 'Mongo DB', imgSrc: IMAGES.mongodbLogo },
  ],

  social: [{ id: 0, name: 'github', url: 'https://github.com/mobvnzla' }],
  projects: [
    {
      id: 0,
      name: 'Task manager 📊💼👨‍💼',
      description:
        'A minimalist web app for those who want to structure their chores and keep organized their long run projects or daily task',
      techs: ['React', 'Nodejs', 'Express', 'MongoDB'],
      githubRepo: 'https://github.com/itsmob/task-manager.git',
      liveDemo: 'https://task-manager-bxllvem11-mobs-projects.vercel.app',
      img: IMAGES.taskManagerPic,
    },
    {
      id: 1,
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
