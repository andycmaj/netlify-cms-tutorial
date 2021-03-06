import Typography from 'typography';
import theme from 'typography-theme-stern-grove';

// https://github.com/KyleAMathews/typography.js#themes
const typography = new Typography({
  ...theme,
  headerColor: '#FFF',
  bodyColor: '#FFF',
  googleFonts: [],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: '#FFF',
      textDecoration: 'none',
      fontWeight: 600,
    },
    'a:hover,a:active': {
      color: '#FFF',
      textDecoration: 'underline',
    },
  }),
});

export default typography;
