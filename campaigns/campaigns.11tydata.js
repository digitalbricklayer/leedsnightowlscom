export default function () {
  return {
    'contentType': 'campaign',
    'layout': 'page.njk',
    'permalink': './campaigns/{{ slug }}/index.html',
    'tags': ['campaigns']
  }
}
