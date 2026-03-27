export default function () {
  return {
    'contentType': 'battle-report',
    'layout': 'battle-report.njk',
    'permalink': './battle-reports/{{ slug }}/index.html',
    'tags': ['battle-report'],
    'breadcrumbs': [ 
      {'title': 'Home', 'url': '/'}, 
      {'title': 'Battle Reports', 'url': '/battle-reports/'} 
    ]
  }
}
