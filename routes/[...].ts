export default eventHandler((evt) => {
  const host = evt.node.req.headers.host
  switch (host) {
    case 'channel.sxzz.moe':
      sendRedirect(evt, 'https://t.me/sxzz_channel')
      return
    case 'chat.sxzz.moe':
      sendRedirect(evt, 'https://discord.gg/r3knZmVCxf')
      return
    case 'tg-group.sxzz.moe':
      // send(evt, '暂不对外开放，请联系我', 'text/plain; charset=utf-8')
      sendRedirect(evt, 'https://t.me/+SfNJUvZ8YBszMGVl')
      return
    case 'sxzz.moe':
    case 'www.sxzz.moe':
    case 'blog.sxzz.moe':
      sendRedirect(evt, 'https://xlog.sxzz.moe')
      return
    case 'ama.sxzz.moe':
      sendRedirect(evt, 'https://cal.com/sanxiaozhizi/meeting')
      return
  }
  return host
})
