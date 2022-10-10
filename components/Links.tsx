import Link from '@components/Link';
import styles from './Links.module.css';
import { LinkedInIcon, GitHubIcon, EmailIcon } from './Icons';
import type { Link as LinkType } from './types';

export default function Links() {
  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}

const links: LinkType[] = [
  {
    id: 1,
    label: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/nicholas-victoros-50a4a4121/',
  },
  {
    id: 2,
    label: 'GitHub',
    icon: GitHubIcon,
    url: 'https://github.com/nvictoros',
  },
  {
    id: 3,
    label: 'Email',
    icon: EmailIcon,
    url: 'mailto:nvictoros21@gmail.com',
  },
];
