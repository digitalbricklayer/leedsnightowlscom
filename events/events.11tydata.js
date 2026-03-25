export default function () {
  return {
    'contentType': 'event',
    'layout': 'page.njk',
    'permalink': './events/{{ slug }}/index.html',
    'tags': ['event'],
    'breadcrumbs': [ 
      {'title': 'Home', 'url': '/'}, 
      {'title': 'Events', 'url': '/events/'} 
    ]
  }
}
