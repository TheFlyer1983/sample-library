/// <reference types="vite/client" />
declare module 'sample-library' {
  import { App, defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };

  type Component = typeof component;

  export const UiButton: Component;
}

declare module '*/vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
