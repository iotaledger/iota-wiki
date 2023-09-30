import { ComponentType, SVGProps } from 'react';
import icons from '@site/src/icons';

const socials = [
  'Discord',
  'Facebook',
  'Github',
  'Instagram',
  'LinkedIn',
  'Reddit',
  'Twitter',
  'Youtube',
];

// Returns an object with icon and name for given url
export default function get_socials_data(url: string): {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
} {
  for (const social of socials) {
    if (url.toLowerCase().includes(social.toLowerCase())) {
      return { name: social, Icon: icons[social] };
    }
  }
}
