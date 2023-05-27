import '../../styles/about/about.css';
export default function About() {
  return (
    <section className='about' id='about'>
      <div className='about__container'>
        <div className='about__content'>
          <div className='about__content--left-side'>
            <div className='about__img-container'>
              <img src='/images/work-space.webp' alt='work space' className='img-container__main-img' />
              <div className='img-container__circle'>
                <img src='/images/front-end-developer.svg' alt='front end badge' className='img-container__badge-img' />
                <img src='/images/working-emoji.png' alt='working emoji' className='img-container__emoji' />
              </div>
            </div>
          </div>
          <div className='about__content--right-side'>
            <h3 className='about__h3'>ABOUT ME</h3>
            <h2 className='about__h2'>A dedicated Front-end Developer based in Lara, Venezuela 📍</h2>
            <p className='about__p'>
              Hi, my real name is Gilberto but I'm aware It's hard to pronounce and remember for everyone but spanish
              native speakers so feel free to call me Mob.{' '}
              {/* The second thing I wanna know is if by any chance you know
              the 'no me neither' joke? well anyway */}{' '}
              {/* I don't want to make You to read a bunch of lines talking about how good/great/amazing I am and more less
              when those words have been written by me, I mean who is not going to trow flowers at themselves?, so  */}
              If You wanna know me better please be my guest and add me on{' '}
              <a className='strong' href='https://discord.gg/8qCEQPQqRq' target='_blank'>
                discord
              </a>{' '}
              so that we can talk anytime {'=)'}.
              <br />
              <br />
              Down bellow You'll find software I've created in order to practice and learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
