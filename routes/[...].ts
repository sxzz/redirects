const blogArticlesMapping = {
  '2022': 'https://gist.github.com/sxzz/920d4480c8b507f6fb6606421cbf7028',
  'vue-3-3': 'https://gist.github.com/sxzz/3995fc7251567c7c95de35f45539b9c2',
  'hackergame-2024-writeup':
    'https://gist.github.com/sxzz/a20bb470a8fde0a04115a4d2df8e8313',
  'nodejs-windows-compatibility':
    'https://gist.github.com/sxzz/a7c0d454b012bdca94e386a9520490be',
}

export default eventHandler((evt) => {
  const host = evt.node.req.headers.host

  switch (host) {
    case 'channel.sxzz.moe':
    case 'tg-group.sxzz.moe':
      // sendRedirect(evt, 'https://t.me/sxzz_channel')
      // sendRedirect(evt, 'https://t.me/+SfNJUvZ8YBszMGVl')
      return 'No longer public.'

    case 'chat.sxzz.moe':
      return sendRedirect(evt, 'https://discord.gg/r3knZmVCxf')

    case 'sxzz.dev':
    case 'www.sxzz.dev':
      return sendRedirect(evt, 'https://bsky.app/profile/sxzz.dev')

    case 'sxzz.moe':
    case 'www.sxzz.moe':
    case 'blog.sxzz.moe':
      // sendRedirect(evt, 'https://xlog.sxzz.moe')
      return 'The website is down now.'

    case 'xlog.sxzz.moe': {
      const path = evt.path.slice(1)
      const redirectUrl = blogArticlesMapping[path]
      if (redirectUrl) {
        return sendRedirect(evt, redirectUrl)
      }
      return 'The website is down now.'
    }

    case 'ama.sxzz.moe':
      // sendRedirect(evt, 'https://xlog.sxzz.moe/chat')
      return 'Closed.'
  }
  return host
})
