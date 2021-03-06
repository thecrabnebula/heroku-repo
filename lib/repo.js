'use strict'

const cli = require('heroku-cli-util')

function getRelease (app) {
  return cli.heroku.request({
    path: `/apps/${app}/releases/new`,
    headers: {Accept: 'application/vnd.heroku+json; version=2'}
  })
}

module.exports = {
  getURL: (app) => getRelease(app).then(release => release.repo_get_url),
  putURL: (app) => getRelease(app).then(release => release.repo_put_url),
  getCacheURL: (app) => getRelease(app).then(release => release.cache_get_url),
  putCacheURL: (app) => getRelease(app).then(release => release.cache_put_url)
}
