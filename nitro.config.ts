export default defineNitroConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        noEmit: true,
        allowJs: false,
      },
    },
  },
  compatibilityDate: '2024-11-10',
})
