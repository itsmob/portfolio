import '../../styles/project/project.css';
import { IMAGES } from '../../../utils/constants/images';

export default function Project({ project }) {
  return (
    <div className='project__container'>
      <div className='project__content'>
        <div className='project__img-side'>
          <img className='project__img' src={project.img} alt='snapshot of the project' />
        </div>
        <div className='project__info-side'>
          <h3 className='project__name'>{project.name}</h3>
          <p className='project__description'>{project.description}</p>
          <div className='project__techs'>
            {project.techs.map((tech) => (
              <p key={tech} className='project__tech'>
                {tech}
              </p>
            ))}
          </div>
          <div className='project__links'>
            <a href={project.githubRepo} className='project__a github' target='_blank'>
              Code <span className='icon github-icon'></span>
            </a>
            <a href={project.liveDemo} className='project__a live-demo' target='_blank'>
              Live Demo <span className='icon live-demo-icon'></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
