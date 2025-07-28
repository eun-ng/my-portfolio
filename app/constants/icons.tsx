import { ExternalLinkIcon, Mail } from 'lucide-react';

const ICON_STYLES = 'text-gray-300 hover:text-gray-50 transition-colors w-4 h-4 lg:w-6 lg:h-6';

export const SOCIAL_ICONS = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={ICON_STYLES}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    url: 'https://github.com/eun-ng',
    label: 'GitHub 프로필',
  },
  {
    id: 2,
    icon: <Mail className={ICON_STYLES} />,
    url: 'mailto:eunng.dev@gmail.com',
    label: '이메일',
  },
  {
    id: 3,
    icon: <ExternalLinkIcon className={ICON_STYLES} />,
    url: 'https://eun-ng.notion.site/0e69c7127a234655b3246be33c78ced1?v=45bec4ef31764e4f9364bd7a94795169&pvs=74',
    label: 'Notion 포트폴리오',
  },
];
