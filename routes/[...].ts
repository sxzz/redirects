export default eventHandler((evt) => {
  const host = evt.node.req.headers.host
  switch (host) {
    case 'channel.sxzz.moe':
      sendRedirect(evt, 'https://t.me/+6221NdOWC5hiYzU1')
      return
    case 'chat.sxzz.moe':
      sendRedirect(evt, 'https://discord.com/invite/2bHNPmTsy4')
      return
    case 'tg-group.sxzz.moe':
      sendRedirect(evt, 'https://t.me/sxzz_group')
      return
    case 'sxzz.moe':
    case 'www.sxzz.moe':
      sendRedirect(evt, 'https://blog.sxzz.moe')
      return
  }
  return host
})
