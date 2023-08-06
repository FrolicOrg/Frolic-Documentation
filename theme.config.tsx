import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Frolic</span>,
  logoLink: "https://www.frolicorg.com",
  project: {
    link: 'https://github.com/FrolicOrg/Frolic',
  },
  chat: {
    link: 'https://discord.gg/NA9nkZaQnv',
  },
  docsRepositoryBase: 'https://github.com/FrolicOrg/Frolic',
  footer: {
    text: 'Frolic',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Frolic'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Frolic" />
      <meta property="og:description" content="Open Source backend service to create dashboards" />
    </>
  )
}

export default config
