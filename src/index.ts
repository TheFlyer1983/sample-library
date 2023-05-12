import { App, Plugin } from 'vue';
import 'tailwindcss/tailwind.css';
import './index.css';

import { UiButton } from './components';

export default {
  install(Vue: App) {
    Vue.component('UiButton', UiButton);
  },
} as Plugin;

export { UiButton };

// export { default as UiButton } from './components/UiButton.vue';
