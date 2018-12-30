import { css } from 'emotion';

const breakPoints = {
  phone: 500,
};

export default mapObjIndexed(
  (width, label) => `@media (min-width: ${width}px)`,
  breakPoints
);
