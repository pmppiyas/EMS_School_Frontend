import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  // Next.js recommended rules
  ...nextVitals,
  ...nextTs,

  // TypeScript-specific rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // ❌ disable base rule (IMPORTANT)
      'no-unused-vars': 'off',

      // ✅ use TS-safe rule
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      // allow console logs
      'no-console': 'off',

      // warn for debugger
      'no-debugger': 'warn',
    },
  },

  // Ignore folders & type-only files
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'node_modules/**',
    'next-env.d.ts',

    // ✅ prevent ESLint 9 crash
    'src/types/**',
    '**/*.interface.ts',
    '**/*.type.ts',
  ]),
]);

export default eslintConfig;
