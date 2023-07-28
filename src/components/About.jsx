import './styles/About.css';
import { useRef } from 'react';

export default function About() {
  const joke = useRef(null);
  return (
    <>
      <section className='about' id='about'>
        <div className='container'>
          <div className='about-content'>
            <div className='img-side'>
              <img src='/images/working-emoji.png' alt='emoji' className='work-emoji' />
              <img src='/images/work-space.webp' alt='emoji' className='img-side__main-img' />
              <span>
                <img src='/images/front-end-developer.svg' alt='' />
              </span>
            </div>
            <div className='text-side'>
              <h3>About me</h3>

              <h4>
                You know the "No, me neither" joke? <br />
                <span
                  ref={joke}
                  className='joke blur'
                  onClick={() => {
                    joke.current.classList.remove('blur');
                  }}
                >
                  me neither 🤣
                </span>
              </h4>

              <p>
                Hello, my name is Gilberto but I'm aware It's hard to pronounce and remember for everyone but spanish
                native speakers so feel free to call me Mob. If You wanna know me better please be my guest and add me
                on{' '}
                <a href='https://discord.com/invite/8qCEQPQqRq' target='_blank'>
                  discord
                </a>{' '}
                so that we can talk anytime {'=)'}. <br />
                <br />
                Down bellow You'll find software I've created.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
