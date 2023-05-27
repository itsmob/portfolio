import '../../styles/contact/contact.css';

export default function Contact() {
  return (
    <section className='contact__container' id='contact'>
      <div className='contact__content'>
        <h3 className='contact__h3'>CONTACT</h3>
        <h2 className='contact__h2'>You want to get it contact? Let's go! {'=)'} </h2>

        <div className='contact-info__container'>
          <div className='contact-info__location'>
            <div className='location__icon-container'>
              <span className='location__icon--location'></span>
            </div>
            <div className='location__text-container'>
              <h3 className='location__h3'>Location</h3>
              <a className='location__a'>Lara, Venezuela</a>
            </div>
          </div>
          <div className='contact-info__email'>
            <div className='email__icon-container'>
              <span className='email__icon--email'></span>
            </div>
            <div className='email__text-container'>
              <h3 className='email__h3'>Mail</h3>
              <a className='email__a' href='mailto:mobster.dev.96@gmail.com'>
                mobster.dev.96@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
