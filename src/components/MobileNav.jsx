import './styles/MobileNav.css';

export default function MobileNav({ isMobileNavOpened, setIsMobileNavOpened }) {
  return (
    <>
      <div className={`mobile-nav ${isMobileNavOpened ? 'open-menu' : ''}`}>
        <a>
          <i
            className='fa-solid fa-xmark fa-2xl'
            onClick={() => {
              setIsMobileNavOpened(false);
            }}
          ></i>
        </a>
        <ul>
          <li>
            <a
              href='#home'
              onClick={() => {
                setIsMobileNavOpened(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              onClick={() => {
                setIsMobileNavOpened(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              onClick={() => {
                setIsMobileNavOpened(false);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              onClick={() => {
                setIsMobileNavOpened(false);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
