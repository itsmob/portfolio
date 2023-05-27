import './styles/header.css';

export default function Header() {
  return (
    <>
      <header className='header'>
        <nav className='header__nav nav'>
          <a href={null} className='nav__logo'>
            <h3 className='header__h3'>Mob.dev</h3>
          </a>
          <ul className='nav__list'>
            <li className='nav__list-item'>
              <a className='nav__a' href='#home'>
                Home
              </a>
            </li>
            <li className='nav__list-item'>
              <a className='nav__a' href='#about'>
                About
              </a>
            </li>
            <li className='nav__list-item'>
              <a className='nav__a' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav__list-item'>
              <a className='nav__a' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
