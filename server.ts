import { eventHandler, redirect } from 'nitro/h3'

const blogArticlesMapping: Record<string, string> = {
  '2022': 'https://gist.github.com/sxzz/920d4480c8b507f6fb6606421cbf7028',
  'vue-3-3': 'https://gist.github.com/sxzz/3995fc7251567c7c95de35f45539b9c2',
  'hackergame-2024-writeup':
    'https://gist.github.com/sxzz/a20bb470a8fde0a04115a4d2df8e8313',
  'nodejs-windows-compatibility':
    'https://gist.github.com/sxzz/a7c0d454b012bdca94e386a9520490be',
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
    case 'www.sxzz.moe':
    case 'sxzz.dev':
    case 'www.sxzz.dev':
      return redirect('https://bsky.app/profile/sxzz.dev')

    case 'blog.sxzz.moe':
      return 'The website is down now.'

    case 'xlog.sxzz.moe': {
      const redirectUrl = blogArticlesMapping[pathname.slice(1)]
      if (redirectUrl) {
        return redirect(redirectUrl)
      }
      return 'The website is down now.'
    }

    case 'ama.sxzz.moe':
      // sendRedirect(evt, 'https://xlog.sxzz.moe/chat')
      return 'Closed.'
  }

  return { host, pathname }
})
