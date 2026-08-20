import baseConfig from './eslint.base.config.mjs';
import nx from '@nx/eslint-plugin';

export default [
  ...baseConfig,
  {
    ignores: ['**/dist', '**/out-tsc', '**/vitest.config.*.timestamp*'],
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'shared',
          style: 'camelCase',
        },
      ],
      // '@angular-eslint/component-selector': [
      //   'error',
      //   {
      //     type: 'element',
      //     prefix: 'app',
      //     style: 'kebab-case',
      //   },
      // ],
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
            // Note: Core: can only depend on Core
            {
              sourceTag: 'scope:core',
              onlyDependOnLibsWithTags: ['scope:core'],
            },
            // Note: Shared: can depend on Core & Shared
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:core', 'scope:shared'],
            },
            // Note: Feature: can depend on Shared & Core
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:core'],
            },
            // Note: feature-shell: can be depended on all features as it has all routes
            {
              sourceTag: 'type:shell',
              onlyDependOnLibsWithTags: [
                'scope:shared',
                'scope:core',
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
