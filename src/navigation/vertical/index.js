import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://logos-download.com/wp-content/uploads/2019/01/Cosmos_Logo.png',
    })
  }
  chainMenus.push({ header: 'sponsors' })
  chainMenus.push({
    title: 'Blog Nodine',
    href: 'https://blog.nodine.id',
    logo: 'https://nodine.id/logo.png',
  })
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://ping.pub',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Library',
      href: 'http://libs.nodine.id',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/nodine_id',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'FAQ',
    href: 'https://github.com/ping-pub/explorer/discussions',
    icon: 'MessageSquareIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/nodineid',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
