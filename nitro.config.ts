export default defineNitroConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        allowJs: false,
      },
    },
  },
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
