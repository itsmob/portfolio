import '../../styles/mainContent/skills.css';

export default function Skills({ DEVELOPER }) {
  return (
    <>
      <div className='skills'>
        <p className='skills__p'>Technologies</p>
        <ul className='skills__ul'>
          {DEVELOPER.skills.map((skill) => {
            return (
              <li key={skill.id} className='skills__li'>
                <img src={skill.imgSrc} alt={skill.name} title={skill.name} className='skills__img' />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
