import { RiExternalLinkLine } from 'react-icons/ri';
import { IoLogoGithub, IoMdMail } from 'react-icons/io';

const ICON_SIZE = 24;

const ICON_STYLES = 'text-gray-300 hover:text-gray-50 transition-colors';

export const SOCIAL_ICONS = [
  {
    id: 1,
    icon: <IoLogoGithub size={ICON_SIZE} className={ICON_STYLES} />,
    url: 'https://github.com/Eun-Ng',
  },
  {
    id: 2,
    icon: <IoMdMail size={ICON_SIZE} className={ICON_STYLES} />,
    url: 'mailto:eunng.dev@gmail.com',
  },
  {
    id: 3,
    icon: <RiExternalLinkLine size={ICON_SIZE} className={ICON_STYLES} />,
    url: 'https://eun-ng.notion.site/0e69c7127a234655b3246be33c78ced1?v=45bec4ef31764e4f9364bd7a94795169&pvs=74',
  },
];
