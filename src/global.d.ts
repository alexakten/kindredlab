export {};

declare global {
  interface Window {
    Cal: {
      (action: "init", namespace: string, options: Record<string, any>): void;
      ns: {
        [namespace: string]: (
          action: string,
          config: Record<string, any>,
        ) => void;
      };
    };
  }
}

declare module '@calcom/embed-react' {
  import { ComponentType } from 'react';

  const Cal: ComponentType<{ calLink: string }>;
  export default Cal;
}
