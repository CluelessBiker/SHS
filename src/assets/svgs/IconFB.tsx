import { SVGProps } from 'react';

/**
 * SVG obtained from:
 * https://www.svgviewer.dev/s/501180/facebook
 */
const IconFB = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      id="facebook"
      viewBox="0 0 24 24"
      data-name="Line Color"
      className="icon line-color"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="primary"
        fill={'none'}
        stroke={props.color ? props.color : 'var(--mui-palette-primary-white)'}
        d="M14,7h4V3H14A5,5,0,0,0,9,8v3H6v4H9v6h4V15h3l1-4H13V8A1,1,0,0,1,14,7Z"
      ></path>
    </svg>
  );
};

export default IconFB;
