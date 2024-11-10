export default eventHandler((evt) => {
  const host = evt.node.req.headers.host
  switch (host) {
    case 'channel.sxzz.moe':
      // sendRedirect(evt, 'https://t.me/sxzz_channel')
      return 'No longer public.'
    case 'chat.sxzz.moe':
      sendRedirect(evt, 'https://discord.gg/r3knZmVCxf')
      return
    case 'tg-group.sxzz.moe':
      // sendRedirect(evt, 'https://t.me/+SfNJUvZ8YBszMGVl')
      return 'No longer public.'
    case 'sxzz.moe':
    case 'www.sxzz.moe':
    case 'blog.sxzz.moe':
      sendRedirect(evt, 'https://xlog.sxzz.moe')
      return
    case 'ama.sxzz.moe':
      sendRedirect(evt, 'https://xlog.sxzz.moe/chat')
      return
  }
  return host
})
