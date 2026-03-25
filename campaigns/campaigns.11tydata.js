export default function () {
  return {
    'contentType': 'campaign',
    'layout': 'campaign.njk',
    'permalink': './campaigns/{{ slug }}/index.html',
    'tags': ['campaign'],
    'breadcrumbs': [ 
      {'title': 'Home', 'url': '/'}, 
      {'title': 'Campaigns', 'url': '/campaigns/'} 
    ]
  }
}
