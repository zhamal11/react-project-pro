declare module '*.scss' {
  interface IClassName {
    [className: string]: string
  }
  const className: IClassName;
  export = className
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare  const __IS__DEV__: boolean;