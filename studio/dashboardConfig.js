export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618ccae926579ed536726b84',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-k6eywmxr',
                  apiId: '64769751-4612-4351-bc5a-9a5a762d57d1'
                },
                {
                  buildHookId: '618ccae9c5a95709751d427d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ps8d96rg',
                  apiId: '4976c343-e35c-4285-be8b-e54716b47b4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/plazma1745/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ps8d96rg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
