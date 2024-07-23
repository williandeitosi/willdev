interface Tech {
  src: string;
  alt: string;
  xs?: number;
  sm?: number;
  md?: number;
}
const techs: Tech[] = [
  { src: '/techs/html5.png', alt: 'HTML5' },
  { src: '/techs/css3.png', alt: 'CSS3' },
  { src: '/techs/js.png', alt: 'JavaScript' },
  { src: '/techs/ts.png', alt: 'TypeScript' },
  { src: '/techs/react.png', alt: 'React' },
  { src: '/techs/nextjs.png', alt: 'Next.js' },
  { src: '/techs/nestjs.png', alt: 'NestJS' },
  { src: '/techs/tailwind.png', alt: 'TailwindCSS' },
  { src: '/techs/mui.png', alt: 'Material-UI' },
  { src: '/techs/jest.png', alt: 'Jest' },
];

export default techs;
