module.exports = {
  learn: [
    {
      type: 'category',
      label: 'Contribute To Wiki',
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Welcome',
          id: 'contribute-to-wiki/welcome',
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'contribute-to-wiki/getting_started/edit_an_article',
            'contribute-to-wiki/getting_started/developer',
            'contribute-to-wiki/getting_started/quick_advice',
          ],
        },
        {
          type: 'category',
          label: 'How Tos',
          items: [
            'contribute-to-wiki/how_tos/create_an_issue',
            'contribute-to-wiki/how_tos/write_a_good_tutorial',
            'contribute-to-wiki/how_tos/documentation_setup',
            'contribute-to-wiki/how_tos/how_to_write_how_tos',
            'contribute-to-wiki/how_tos/versioning',
            'contribute-to-wiki/how_tos/request_tw',
            'contribute-to-wiki/how_tos/add_a_quiz',
          ],
        },
        {
          type: 'category',
          label: 'Explanations',
          items: [
            'contribute-to-wiki/explanations/third-party_works',
            {
              type: 'category',
              label: 'Writing Tools',
              items: [
                'contribute-to-wiki/explanations/tools/writing_tools',
                'contribute-to-wiki/explanations/tools/questions',
                'contribute-to-wiki/explanations/tools/mind_map',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Reference',
          items: [
            {
              type: 'category',
              label: 'Style Guidelines',
              items: [
                'contribute-to-wiki/reference/style/manifesto',
                'contribute-to-wiki/reference/style/structure',
                'contribute-to-wiki/reference/style/matter',
                'contribute-to-wiki/reference/style/form',
                'contribute-to-wiki/reference/style/mechanics',
                'contribute-to-wiki/reference/style/formatting',
              ],
            },
            {
              type: 'category',
              label: 'Documentation Structure',
              items: [
                'contribute-to-wiki/reference/structure/overview',
                'contribute-to-wiki/reference/structure/getting_started',
                'contribute-to-wiki/reference/structure/how_tos',
                'contribute-to-wiki/reference/structure/tutorials',
                'contribute-to-wiki/reference/structure/explanations',
                'contribute-to-wiki/reference/structure/reference',
              ],
            },
          ],
        },
      ],
    },
  ],
};
