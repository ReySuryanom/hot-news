export const pages = [
  { route: '/', name: 'Indonesia' },
  { route: '/programming', name: 'Programming' },
  { route: '/covid-19', name: 'Covid-19' },
  { route: '/saved', name: 'Saved' },
];

export const truncate = (n) => (n.length > 80 ? `${n.substring(0, 80)}...` : n);
