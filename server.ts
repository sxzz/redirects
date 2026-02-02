import { eventHandler, redirect } from 'nitro/h3'

const xlogMappings: Record<string, string> = {
  '2022': 'https://sxzz.dev/zh/posts/2022',
  'vue-3-3': 'https://sxzz.dev/zh/posts/vue-3-3',
  'hackergame-2024-writeup':
    'https://sxzz.dev/zh/posts/hackergame-2024-writeup',
  'nodejs-windows-compatibility':
    'https://sxzz.dev/zh/musings/nodejs-windows-compatibility/',
  feed: 'https://sxzz.dev/zh/rss.xml',
}

// eslint-disable-next-line import/no-default-export
export default eventHandler((evt) => {
  const { host, pathname } = evt.url

  switch (host) {
    case 'channel.sxzz.moe':
    case 'tg-group.sxzz.moe':
      return 'No longer public.'

    case 'chat.sxzz.moe':
      return redirect('https://discord.gg/r3knZmVCxf')

    case 'sxzz.moe':
    case 'www.sxzz.dev':
    case 'www.sxzz.moe':
      return redirect('https://sxzz.dev')

    case 'blog.sxzz.moe':
    case 'xlog.sxzz.moe': {
      const path = pathname.slice(1)
      if (xlogMappings[path]) {
        return redirect(xlogMappings[path])
      }
      return redirect('https://sxzz.dev/posts/')
    }

    case 'ama.sxzz.moe':
      // sendRedirect(evt, 'https://xlog.sxzz.moe/chat')
      return 'Closed.'
  }

  return { host, pathname }
})
