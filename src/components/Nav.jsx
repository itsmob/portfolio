import './styles/Nav.css';

export default function Nav({ setIsMobileNavOpened }) {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <h3
            onClick={() => {
              scrollTo(0, 0);
            }}
          >
            Mob.dev
          </h3>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <a
                onClick={() => {
                  setIsMobileNavOpened(true);
                }}
              >
                <i className='fa-solid fa-bars fa-xl'></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
