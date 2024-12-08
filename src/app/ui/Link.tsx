import styles from './Link.module.css';
import type { Link } from './types';

type LinkProps = {
  link: Link;
};

export default function Link({ link }: LinkProps) {
  const { url, label, icon } = link;

  return (
    <a className={styles.link} title={label} href={url}>
      {icon}
    </a>
  );
}
