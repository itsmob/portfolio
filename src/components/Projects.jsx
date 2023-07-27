import './styles/Projects.css';
import { DEVELOPER } from '../utils/constants/developer';
import Project from './Project';

export default function Projects() {
  return (
    <>
      <section className='project' id='projects'>
        <div className='container'>
          <div className='project-content'>
            <p>Projects</p>
            <h3>It ain't much, but It's honest work</h3>
            <div className='projects-grid'>
              {DEVELOPER.projects.map((project) => {
                return <Project project={project} key={project.id} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
