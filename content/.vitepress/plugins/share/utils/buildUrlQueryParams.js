export const buildUrlQueryParams = (params) => {
  let esc = encodeURIComponent;
  const paramKeys = Object.keys(params)
  if (paramKeys.length < 1) {
    return ''
  }

  let s = paramKeys
    .map(key => esc(key) + '=' + esc(params[key]))
    .join('&');

  return '?' + s;
}
