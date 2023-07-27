import './styles/Project.css';
export default function Project({ project }) {
  return (
    <>
      <div className='pro pro__1'>
        <div className='pro__img'>
          <a href={project.liveDemo} target='_blank'>
            <img src={project.img} alt='project image' />
          </a>
        </div>
        <div className='pro__text'>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className='stack'>
            {project.techs.map((tech) => {
              return <p key={tech}>{tech}</p>;
            })}
          </div>
          <div className='project-links'>
            <a href={project.githubRepo} target='_blank'>
              Code <i className='fa-brands fa-github fa-2xl'></i>
            </a>
            <a href={project.liveDemo} target='_blank'>
              Live Demo <i className='fa-solid fa-arrow-up-right-from-square'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
