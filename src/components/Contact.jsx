import './styles/Contact.css';

export default function Contact() {
  return (
    <>
      <section className='contact' id='contact'>
        <div className='container'>
          <div className='contact__content'>
            <div className='contact__title'>
              <p>Contact</p>
              <h3>You want to get it contact? Let's go! {'=)'}</h3>
            </div>
            <div className='contact__icons'>
              <div className='contact__icon-box'>
                <span>
                  <i className='fa-solid fa-map-location-dot'></i>
                </span>
                <div className='contact__info'>
                  <h3>Location</h3>
                  <p>Medellín, Colombia</p>
                </div>
              </div>
            </div>
            <div className='contact__icons'>
              <div className='contact__icon-box'>
                <span>
                  <i className='fa-solid fa-envelope-open-text'></i>
                </span>
                <div className='contact__info'>
                  <h3>Mail</h3>
                  <a href='mailto:mobster.dev.96@gmail.com'>mobster.dev.96@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
