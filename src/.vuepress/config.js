const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "act docs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#32A4A0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Getting started',
        link: '/getting_started/0_getting_started/',
      },
      // {
      //   text: 'Developer docs',
      //   link: '/developer_docs/',
      // },
      {
        text: 'Release notes',
        link: '/release_notes/0_release_notes/0_general',
      },
    ],

    sidebar: {
      // This part of the sidebar will only show on the "getting_started" tab.
      '/getting_started/': [
        {
          title: 'Getting started',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['0_getting_started/', 'Getting Started'],
            '0_getting_started/1_FAQ',
          ]
        },
      ],
      '/release_notes/': [
        {
          title: 'Outline',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '0_release_notes/0_general',
            '0_release_notes/1_0.0.1_beta_release'
          ]
        },
        {
          title: 'Version 1',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '1_version_1/0_1.0.0_release',
          ]
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}