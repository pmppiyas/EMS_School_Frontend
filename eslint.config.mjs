import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  // Next.js recommended rules
  ...nextVitals,
  ...nextTs,

  // Custom rules
  {
    rules: {
      // allow console logs
      'no-console': 'off',

      // warn for unused variables
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }, // ignore args starting with _
      ],

      // warn for debugger statements
      'no-debugger': 'warn',
    },
  },

  // Ignore these files/folders globally
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
