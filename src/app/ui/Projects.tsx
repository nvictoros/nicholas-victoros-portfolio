import Project from '@/app/ui/Project';
import styles from '@/app/ui/Projects.module.css';
import type { Project as ProjectType } from './types';

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

const projects: ProjectType[] = [
  {
    id: 1,
    label: 'TopSpot',
    description: 'A Spotify player showing your most played tracks/artists',
    url: '',
  },
  {
    id: 2,
    label: 'CoolProject1',
    description: "Some other cool project that I'll eventually work on",
    url: '',
  },
];
