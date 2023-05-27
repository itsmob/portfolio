import '../../styles/mainContent/home.css';
import Skills from './Skills';
import PictureFrame from './PictureFrame';
import { DEVELOPER } from '../../../utils/constants/developer';

export default function Home() {
  return (
    <>
      <section className='home__container' id='home'>
        <div className='home__content'>
          <div className='home__hero'>
            <div className='home__hero-leftside'>
              <h1 className='home__h1'>
                Mob's portfolio
                <br />
                Front-End Developer
              </h1>
              <p className='home__p'>Hi, I'm Mob. Straight white male software developer based in Lara, Venezuela.📍</p>
              <span className='home__span'>
                {DEVELOPER.social.map((media) => {
                  return (
                    <a href={media.url} key={media.id} target='_blank'>
                      <span className={`icon ${media.name}-icon`}></span>
                    </a>
                  );
                })}
              </span>
            </div>
            <div className='home__hero-rightside'>
              <PictureFrame />
            </div>
          </div>
          <Skills DEVELOPER={DEVELOPER} />
        </div>
      </section>
    </>
  );
}
