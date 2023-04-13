export default eventHandler((evt) => {
  const host = evt.node.req.headers.host
  switch (host) {
    case 'channel.sxzz.moe':
      sendRedirect(evt, 'https://t.me/sxzz_channel')
      return
    case 'chat.sxzz.moe':
      sendRedirect(evt, 'https://discord.com/invite/2bHNPmTsy4')
      return
    case 'tg-group.sxzz.moe':
      sendRedirect(evt, 'https://t.me/sxzz_group')
      return
    case 'sxzz.moe':
    case 'www.sxzz.moe':
    case 'blog.sxzz.moe':
      sendRedirect(evt, 'https://xlog.sxzz.moe')
      return
  }
  return host
})
