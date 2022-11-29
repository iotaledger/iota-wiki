import { ComponentType, SVGProps } from 'react';
import {
  Youtube,
  Github,
  Discord,
  Twitter,
  Reddit,
  LinkedIn,
  Instagram,
  Facebook,
} from '../common/icons';

const map: Array<{
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  { name: 'Youtube', Icon: Youtube },
  { name: 'GitHub', Icon: Github },
  { name: 'Discord', Icon: Discord },
  { name: 'Twitter', Icon: Twitter },
  { name: 'Reddit', Icon: Reddit },
  { name: 'LinkedIn', Icon: LinkedIn },
  { name: 'Instagram', Icon: Instagram },
  { name: 'Facebook', Icon: Facebook },
];

// Returns an object with icon and name for given url
export default function get_socials_data(url: string): typeof map[number] {
  for (let i = 0; i < map.length; i++) {
    if (url.toLowerCase().includes(map[i].name.toLowerCase())) {
      return map[i];
    }
  }

  return null;
}
