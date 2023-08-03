import { sxzz } from '@sxzz/eslint-config'
export default sxzz([
  {
    ignores: ['**/.nitro'],
  },
  {
    rules: {
      'import/no-default-export': 'off',
    },
  },
])
