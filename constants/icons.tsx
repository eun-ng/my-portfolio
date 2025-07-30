import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ICON_STYLES = 'text-gray-300 hover:text-gray-50 transition-colors w-4 h-4 lg:w-6 lg:h-6';

export const SOCIAL_ICONS = [
  {
    id: 1,
    icon: <FaGithub className={ICON_STYLES} />,
    url: 'https://github.com/eun-ng',
    label: 'GitHub 프로필',
  },
  {
    id: 2,
    icon: <FaLinkedin className={ICON_STYLES} />,
    url: 'https://www.linkedin.com/in/eunng',
    label: 'LinkedIn 프로필',
  },
  {
    id: 3,
    icon: <MdEmail className={ICON_STYLES} />,
    url: 'mailto:eunng.dev@gmail.com',
    label: '이메일',
  },
];
