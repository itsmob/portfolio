import '../../styles/project/projects.css';
import { DEVELOPER } from '../../../utils/constants/developer';
import Project from './Project';

export default function Projects() {
  return (
    <section className='projects__container' id='projects'>
      <div className='projects__content'>
        <h3 className='projects__h3'>PROJECTS</h3>
        <h2 className='projects__h2'>It ain't much, but It's honest work</h2>
        <ul className='projects__list'>
          {DEVELOPER.projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
