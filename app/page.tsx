import { Badge } from '@/components/ui/badge';
import { SOCIAL_ICONS } from './constants/icons';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-background text-foreground">
      <div className="flex flex-col justify-center items-center lg:items-start px-8 py-16 lg:py-40 lg:px-16">
        <div className="flex flex-col gap-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl metallic-text">남궁은</h1>
          <h2 className="text-lg lg:text-xl">Front End Developer</h2>
        </div>
        <div className="flex flex-row gap-2 mt-8 lg:mt-auto">
          {SOCIAL_ICONS.map((item) => {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-glow metallic-border p-2 rounded-lg cursor-pointer inline-block"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center px-8 py-16 lg:px-16">
        <p className="text-pretty text-center lg:text-left leading-relaxed">
          안녕하세요. 개발자 남궁은입니다. 사용자를 위한 UX와 동료 개발자들을 위한 DX 개선을 지향합니다. 기술 동향
          파악을 위해 여러 채널의 정보를 접하는 것을 좋아합니다.
        </p>
      </div>
    </div>
  );
}
