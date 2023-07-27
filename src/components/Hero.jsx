import './styles/Hero.css';
import { DEVELOPER } from '../utils/constants/developer';
import FramePicture from './FramePicture';

export default function Hero() {
  return (
    <>
      <section id='home' className='hero'>
        <div className='container'>
          <div className='content'>
            <div className='hero-main'>
              <div className='hero-text'>
                <h1>
                  Front-End <br />
                  Software Developer <br />
                </h1>
                <p>
                  Hi, I'm Mob please welcome to this space. I'm currently developing software from Lara, Venezuela. 📍
                </p>
                <div className='links'>
                  <a href='http://www.linkedin.com/in/gilberto-galindez-mobdev' target='_blank'>
                    <i className='fa-brands fa-linkedin fa-2xl'></i>
                  </a>
                  <a href='https://github.com/mobvnzla' target='_blank'>
                    <i className='fa-brands fa-github fa-2xl'></i>
                  </a>
                </div>
              </div>
              <div className='hero-img'>
                <FramePicture />
              </div>
            </div>
            <div className='skills'>
              <p>Tecnologies </p>
              <div className='logos'>
                <ul>
                  {DEVELOPER.skills.map((skill) => {
                    return (
                      <li key={skill.id}>
                        <img src={skill.imgSrc} alt={skill.name} title={skill.name} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
