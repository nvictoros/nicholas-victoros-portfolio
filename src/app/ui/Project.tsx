import styles from '@/app/ui/Project.module.css';
import { Project as ProjectType } from './types';

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  const { url, label, description } = project;

  return (
    <a href={url} className={styles.project}>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.description}>{description}</p>
    </a>
  );
}
