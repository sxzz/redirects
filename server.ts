import { eventHandler, html, redirect } from 'nitro/h3'

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
    case 'www.sxzz.dev':
    case 'www.sxzz.moe':
      return redirect('https://sxzz.dev')

    case 'blog.sxzz.moe':
    case 'xlog.sxzz.moe': {
      const redirectUrl = blogArticlesMapping[pathname.slice(1)]
      if (redirectUrl) {
        return redirect(redirectUrl)
      }
      return html`<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Kevin Deng's Articles (temporary page)</title>
          </head>
          <body
            style="font-family: monospace; line-height: 1.6; font-size: 16px"
          >
            <h1>Articles</h1>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://gist.github.com/sxzz/920d4480c8b507f6fb6606421cbf7028"
                  >2022，我的开源探索</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://gist.github.com/sxzz/3995fc7251567c7c95de35f45539b9c2"
                  >Vue 3.3 主要新特性详解</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://gist.github.com/sxzz/a20bb470a8fde0a04115a4d2df8e8313"
                  >HackerGame 2024 Writeup</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://gist.github.com/sxzz/a7c0d454b012bdca94e386a9520490be"
                  >踩坑异闻录——Windows 前端工具链之痛</a
                >
              </li>
            </ul>

            <div style="font-size: 14px">
              <a target="_blank" href="https://sxzz.dev">Homepage</a> /
              <a target="_blank" href="https://github.com/sxzz">GitHub</a> /
              <a target="_blank" href="https://bsky.app/profile/sxzz.dev"
                >Bluesky</a
              >
            </div>
          </body>
        </html> `
    }

    case 'ama.sxzz.moe':
      // sendRedirect(evt, 'https://xlog.sxzz.moe/chat')
      return 'Closed.'
  }

  return { host, pathname }
})
