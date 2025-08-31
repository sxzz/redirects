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
      return sendRedirect(evt, 'https://xlog.sxzz.moe')

    case 'ama.sxzz.moe':
      return sendRedirect(evt, 'https://xlog.sxzz.moe/chat')
  }
  return host
})
