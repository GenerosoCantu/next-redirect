/**
 * Export `redirect`
 */

module.exports = redirect

/**
 * Redirect
 */

function redirect(ctx, path, status) {
  if (ctx.res) {
    ctx.res.writeHead(status, { Location: path })
    ctx.res.end()
  } else {
    document.location.pathname = path
  }
}