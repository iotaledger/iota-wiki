const map = [
  { name: 'Youtube', icon: '\ue907' },
  { name: 'GitHub', icon: '\ue902' },
  { name: 'Discord', icon: '\ue900' },
  { name: 'Twitter', icon: '\ue906' },
  { name: 'Reddit', icon: '\ue905' },
  { name: 'LinkedIn', icon: '\ue904' },
  { name: 'Instagram', icon: '\ue903' },
  { name: 'Facebook', icon: '\ue901' },
];

// Returns an object with icon and name for given url
export default function get_socials_data(url: string) {
  for (let i = 0; i < map.length; i++) {
    if (url.toLowerCase().includes(map[i].name.toLowerCase())) {
      return map[i];
    }
  }

  return null;
}
