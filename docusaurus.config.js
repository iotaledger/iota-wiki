// @ts-check

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Docker Awesome-Showcase',
  tagline: 'Built for Community, by Community',
  url: 'https://showcase.docker.com',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'ajeetraina', // Usually your GitHub org/user name.
  projectName: 'docker-showcase', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    announcementBar: {
      id: 'assembly',
      content:
        'Submit your app and get a chance to win Docker T-shirt <a target="_blank" href="https://stores.kotisdesign.com/docker">Click Here</a>',
      backgroundColor: '#da7ad7',
      textColor: '#000000',
      isCloseable: true,
    },
    image: 'img/iota-wiki.png',
    algolia: {
      appId: 'YTLE56KAO4',
      apiKey: '75358d60d302f7f93f630d63128abb03',
      indexName: 'iota',
      contextualSearch: true,
    },
    matomo: {
      matomoUrl: 'https://matomo.antonionardella.it/',
      siteId: '6',
    },
    hotjar: {
      applicationId: '2809821',
    },
    imageZoom: {
      selector:
        '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    imageSlider: {
      videoPlaceholder: '/img/infographics/video-placeholder.png',
    },
    prism: {
      additionalLanguages: ['java', 'rust', 'solidity', 'toml'],
    },
    cards: [
      {
        title: 'Mask Detection system using Python',
        image: 'img/mask_detection.png',
        link: 'python/mask-detection/',
        description:
          'Learn how to build a mask detection system on IoT using Python and Docker.',
      },
      {
        title: 'Clone Hackernews using NodeJS',
        image: 'img/hackernewss.png',
        link: 'nodejs/clone-hackernews',
        description:
          'Learn how to clone hackernews using NodeJS and Docker.',
      },
      {
        title: 'Building Todo-list app using Python',
        image: 'img/build.svg',
        link: 'python/todo-list-app',
        description:
          'Build a todo-list app using Python and Docker Desktop.',
      },
     ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Awesome-Showcase',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: 'Learn',
          to: 'learn/about-dockerdesktop/an-introduction-to-docker-desktop',
          activeBaseRegex: '^/learn/.*',
        },
        {
          label: 'Collaborate',
          to: 'collaborate/getting-started',
          activeBaseRegex: '^/collaborate/.*',
        },
        {
          label: 'Build',
          to: '#',
          layout: [
            '0 1 3 4',
            '0 1 3 4',
            '5 1 3 2',
            '5 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
          ],
          items_: [
            {
              label: 'Getting Started',
              items: [
                {
                  label: 'Getting Started',
                  sublabel: 'Docker Desktop',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
              ],
            },
            {
              label: 'Programming Languages',
              items: [
                {
                  label: 'Build using Python',
                  sublabel: 'Mainnet documentation',
                  to: 'chrysalis-docs/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/chrysalis-docs.*',
                },
                {
                  label: 'Build using NodeJS',
                  sublabel: 'IOTA node written in Rust',
                  to: 'bee/welcome',
                  icon: '\ue900',
                  activeBaseRegex: '^/bee/.*',
                },
                {
                  label: 'Build using React.js',
                  sublabel: 'app written in React.js',
                  to: 'hornet/welcome',
                  icon: '\ue904',
                  activeBaseRegex: '^/hornet/.*',
                },
                {
                  label: 'Build using Java',
                  sublabel: 'IOTA permanode',
                  to: 'chronicle.rs/welcome',
                  icon: '\ue90c',
                  activeBaseRegex: '^/chronicle.rs/.*',
                },
              ],
            },
            {
              label: 'Verticals',
              items: [
                {
                  label: 'Banking',
                  sublabel: 'Decentralizing IOTA',
                  to: 'IOTA-2.0-Research-Specifications/Preface',
                  icon: '\ue906',
                  activeBaseRegex: 'IOTA-2.0-Research-Specifications/.*',
                },
                {
                  label: 'Retails',
                  sublabel: 'IOTA 2.0 node',
                  to: 'goshimmer/welcome',
                  icon: '\ue903',
                  activeBaseRegex: '^/goshimmer/.*',
                },
              ],
            },
            {
              label: 'Buid on IoT',
              items: [
                {
                  label: 'Using NVIDIA Jetson Nano',
                  sublabel: 'Run Docker on Jetson Nano',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
                {
                  label: 'Using Raspberry Pi',
                  sublabel: 'Build microservices on Raspberry Pi',
                  to: 'wallet.rs/welcome',
                  icon: '\ue90a',
                  activeBaseRegex: '^/wallet.rs/.*',
                },
                {
                  label: 'Using NVIDIA Xavier',
                  sublabel: 'Build Docker on Xavier',
                  to: 'stronghold.rs/welcome',
                  icon: '\ue909',
                  activeBaseRegex: '^/stronghold.rs/.*',
                },
                {
                  label: 'Using Jetson Nano 4GB',
                  sublabel: 'Build app on Nano 4GB',
                  to: 'identity.rs/introduction',
                  icon: '\ue905',
                  activeBaseRegex: '^/identity.rs/.*',
                },
                {
                  label: 'Using Zero Pi',
                  sublabel: 'Share data securely',
                  to: 'streams/welcome',
                  icon: '\ue908',
                  activeBaseRegex: '^/streams/.*',
                },
              ],
            },
            {
              label: 'Build on Pi Cluster',
              items: [
                {
                  label: 'Run Docker on Pi Cluster',
                  sublabel: 'Run Docker Swarm on Pi Cluster',
                  to: 'smart-contracts/overview',
                  icon: '\ue90b',
                  activeBaseRegex: '^/smart-contracts/.*',
                },
              ],
            },
            {
              label: 'Docker Compose',
              items: [
                {
                  label: 'Awesome Compose',
                  sublabel: 'Start building your app',
                  to: 'awesome-compose/start-building',
                  icon: '\ue90d',
                  activeBaseRegex: '^/awesome-compose/.*',
                },
              ],
            },
          ],
        },
        { to: '/blog', label: 'Community Blog', position: 'right' },
        { to: '/contributors', label: 'Contributors', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'About Docker Desktop',
              to: 'learn/about-docker-desktop/an-introduction-to-docker-desktop',
            },
            {
              label: 'Dev Environment',
              to: 'learn/dev-environment/getting-started',
            },
            {
              label: 'Docker Extensions',
              to: 'learn/extensions/what-is-docker-extensions',
            },
            {
              label: 'Docker Desktop for Linux',
              to: 'learn/docker-desktop-for-linux/getting-started',
            },
          ],
        },
        {
          title: 'PARTICIPATE',
          items: [
            {
              label: 'awesome-compose',
              to: 'participate/contribute-to-awesome-compose/getting-started',
            },
            {
              label: 'The Community',
              to: 'participate/the-community/discord',
            },
          ],
        },
        {
          title: 'BUILD',
          items: [
            {
              label: 'Getting Started',
              to: 'build/welcome',
            },
            {
              label: 'Tutorials',
              to: 'build/tutorials/twitch',
            },
          ],
        },
        {
          title: 'Docker Awesome-Showcase',
          items: [
            {
              label: 'Team',
              to: 'team',
            },
            {
              label: 'Github',
              href: 'https://github.com/docker/showcase',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Contribute',
              to: 'participate/contribute-to-wiki/welcome',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.docker.com/privacy-policy',
            },
          ],
        },
      ],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/iota_logo.svg',
        href: 'https://www.iota.org',
      },
      copyright: `© ${new Date().getFullYear()} IOTA Wiki. Built with Docusaurus.`,
    },
    socials: [
      {
        url: 'https://www.youtube.com/c/iotafoundation',
        backgroundColor: 'var(--ifm-color-gray-900)',
      },
      {
        url: 'https://www.github.com/iotaledger/',
        backgroundColor: '#2C3850',
      },
      {
        url: 'https://discord.iota.org/',
        backgroundColor: '#4B576F',
      },
      {
        url: 'https://www.twitter.com/iota/',
        backgroundColor: '#6A768E',
      },
      {
        url: 'https://www.reddit.com/r/iota/',
        backgroundColor: '#7D89A1',
      },
      {
        url: 'https://www.linkedin.com/company/iotafoundation/',
        backgroundColor: '#8995AD',
      },
      {
        url: 'https://www.instagram.com/iotafoundation/',
        backgroundColor: '#99A5BD',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    [
      '@jlvandenhout/docusaurus-plugin-docs-editor',
      {
        docs: {
          // The path to the docs section in your repository
          path: 'internal',
          // The username that owns the docs, defaults to siteConfig.organizationName
          owner: 'iota-community',
          // The repository that contains the docs, defaults to siteConfig.projectName
          repo: 'iota-wiki',
        },
        // GitHub OAuth Application settings
        github: {
          // REQUIRED - The Client ID you got from the GitHub OAuth App setup
          clientId: '30a8f5a21215004e81ca',
          // REQUIRED - The plugin will append the authorization code to this URL
          tokenUrl:
            'https://iota-wiki-github-oauth-login.iotaledger.workers.dev',
          // The request method to use (GET or POST), defaults to GET
          method: 'POST',
        },
      },
    ],
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-hotjar',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'internal/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./internal/learn/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'participate',
        path: 'internal/participate',
        routeBasePath: 'participate',
        sidebarPath: require.resolve('./internal/participate/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'build',
        path: 'internal/build',
        routeBasePath: 'build',
        sidebarPath: require.resolve('./internal/build/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    /* AUTO GENERATED EXTERNAL DOCS CONFIG */
  ],
};
