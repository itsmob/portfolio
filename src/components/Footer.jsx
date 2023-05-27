import './styles/footer.css';

export default function Footer() {
  return (
    <>
      <footer className='footer__container'>
        <div className='footer__content'>
          <p className='footer__p'>This design is stolen</p>
          <a className='footer__a' href='https://discord.gg/8qCEQPQqRq'>
            <span className='footer__a--discord-icon'></span>
          </a>
          <a className='footer__a' href='https://github.com/mobvnzla'>
            <span className='footer__a--github-icon'></span>
          </a>
        </div>
      </footer>
    </>
  );
}
