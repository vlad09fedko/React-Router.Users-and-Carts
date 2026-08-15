import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/**'],
    rules: {
      'fsd/public-api': 'off',
      'fsd/repetitive-naming': 'warn',
      'fsd/typo-in-layer-name': 'error',
      'fsd/import-locality': 'error',
    },
  },
]);
