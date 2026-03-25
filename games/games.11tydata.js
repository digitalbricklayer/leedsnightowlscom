export default function () {
  return {
    'contentType': 'games',
    'layout': 'game.njk',
    'permalink': './games/{{ slug }}/index.html',
    'tags': ['games'],
    'breadcrumbs': [ 
      {'title': 'Home', 'url': '/'}, 
      {'title': 'Games', 'url': '/games/'} 
    ]
  }
}
