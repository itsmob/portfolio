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
  ],
  social: [{ id: 0, name: 'github', url: 'https://github.com/mobvnzla' }],
  projects: [
    {
      id: 0,
      name: 'Pets',
      description:
        "This pets website is an online platform that allows users to get to know about cats and dogs. The website provides an interface for filtering and upload your own pet's pictures.",
      techs: ['React', 'Vanilla CSS'],
      githubRepo: 'https://github.com/mobvnzla/pets-app/tree/main',
      liveDemo: null,
      img: IMAGES.catPic,
    },
  ],
};
