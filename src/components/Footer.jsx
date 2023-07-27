import './styles/Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='footerc'>
            <h3></h3>
            <div className='footerc__socials'>
              <a href='https://www.linkedin.com/in/gilberto-galindez-mobdev' target='_blank'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href='https://github.com/mobvnzla' target='_blank'>
                <i className='fa-brands fa-github'></i>
              </a>
              <a href='https://discord.com/invite/8qCEQPQqRq' target='_blank'>
                <i className='fa-brands fa-discord'></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
