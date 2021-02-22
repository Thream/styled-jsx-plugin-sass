const stripIndent = require('strip-indent')

module.exports = (css, settings) => {
  const sass = getSassImplementation()
  const cssWithPlaceholders = css
    .replace(
      /%%styled-jsx-placeholder-(\d+)%%%(\w*\s*[),;!{])/g,
      (_, id, p1) => `styled-jsx-percent-placeholder-${id}-${p1}`
    )
    .replace(
      /%%styled-jsx-placeholder-(\d+)%%(\w*\s*[),;!{])/g,
      (_, id, p1) => `styled-jsx-placeholder-${id}-${p1}`
    )
    .replace(
      /%%styled-jsx-placeholder-(\d+)%%%/g,
      (_, id) => `/*%%styled-jsx-percent-placeholder-${id}%%*/`
    )
    .replace(
      /%%styled-jsx-placeholder-(\d+)%%/g,
      (_, id) => `/*%%styled-jsx-placeholder-${id}%%*/`
    )

  // Prepend option data to cssWithPlaceholders
  const optionData = (settings.sassOptions && settings.sassOptions.data) || ''
  // clean up extra indent (indentedSyntax is not compatible with extra indenting)
  // they need to be cleaned up separately, and than concated
  const data = stripIndent(optionData) + '\n' + stripIndent(cssWithPlaceholders)
  const file = settings.babel && settings.babel.filename

  const preprocessed = sass
    .renderSync(Object.assign({}, { file }, settings.sassOptions, { data }))
    .css.toString()

  return preprocessed
    .replace(
      /styled-jsx-percent-placeholder-(\d+)-(\w*\s*[),;!{])/g,
      (_, id, p1) => `%%styled-jsx-placeholder-${id}%%%${p1}`
    )
    .replace(
      /styled-jsx-placeholder-(\d+)-(\w*\s*[),;!{])/g,
      (_, id, p1) => `%%styled-jsx-placeholder-${id}%%${p1}`
    )
    .replace(
      /\/\*%%styled-jsx-percent-placeholder-(\d+)%%\*\//g,
      (_, id) => `%%styled-jsx-placeholder-${id}%%%`
    )
    .replace(
      /\/\*%%styled-jsx-placeholder-(\d+)%%\*\//g,
      (_, id) => `%%styled-jsx-placeholder-${id}%%`
    )
}

function getSassImplementation () {
  let sassImplPkg = 'sass'

  try {
    require.resolve('sass')
  } catch {
    try {
      require.resolve('node-sass')
      sassImplPkg = 'node-sass'
    } catch {
      sassImplPkg = 'sass'
    }
  }

  return require(sassImplPkg)
}
