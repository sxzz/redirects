import { defineConfig } from 'nitro'

export default defineConfig({
  preset: 'cloudflare_module',
  cloudflare: {
    deployConfig: true,
    nodeCompat: false,
    wrangler: {
      name: 'redirects',
    },
  },
  compatibilityDate: 'latest',
})
