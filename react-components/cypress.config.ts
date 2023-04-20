// import { defineConfig } from 'cypress';
// import task from '@cypress/code-coverage/task';

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // eslint-disable-next-line @typescript-eslint/no-var-requires
//       task(on, config);

//       return config;
//     },
//   },
// });
// import { defineConfig } from 'cypress';
// import coverage from '@cypress/code-coverage/task';

// export default defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:5173/',
//     setupNodeEvents(on, config) {
//       // eslint-disable-next-line @typescript-eslint/no-var-requires
//       require('@cypress/code-coverage/task')(on, config);

//       return config;
//     },
//   },
// });
import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
    baseUrl: 'http://localhost:5173',
  },
});
