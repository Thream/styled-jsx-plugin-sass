const assert = require('assert')
const path = require('path')
const fs = require('fs')
const stripIndent = require('strip-indent')
const plugin = require('./')

const cleanup = (str) => stripIndent(str).trim()

// testing is done with node-sass
describe('styled-jsx-plugin-sass', () => {
  it('applies plugins', () => {
    assert.strictEqual(
      plugin('p { img { display: block} color: color(red a(90%)) }', {}).trim(),
      cleanup(`
        p {
          color: color(red a(90%)); }
          p img {
            display: block; }
      `)
    )
  })

  it('does not add space after variable placeholder', () => {
    assert.strictEqual(
      plugin('p { img { color: %%styled-jsx-placeholder-0%%px; } }', {}).trim(),
      cleanup(`
        p img {
          color: %%styled-jsx-placeholder-0%%px; }
      `)
    )
  })

  it('works with placeholders in css functions', () => {
    assert.strictEqual(
      plugin(
        'div { grid-template-columns: repeat(%%styled-jsx-placeholder-0%%, calc(%%styled-jsx-placeholder-1%%% - %%styled-jsx-placeholder-2%%px)); }',
        {}
      ).trim(),
      cleanup(`
        div {
          grid-template-columns: repeat(%%styled-jsx-placeholder-0%%, calc(%%styled-jsx-placeholder-1%%% - %%styled-jsx-placeholder-2%%px)); }
      `)
    )
  })

  it('works with placeholders', () => {
    assert.strictEqual(
      plugin(
        `
        p {
          img { display: block } color: %%styled-jsx-placeholder-0%%; border-bottom: 1px solid %%styled-jsx-placeholder-1%%;
          em { color: %%styled-jsx-placeholder-2%% !important; }
        }
        %%styled-jsx-placeholder-1%%`,
        {}
      ).trim(),
      cleanup(`
        p {
          color: %%styled-jsx-placeholder-0%%;
          border-bottom: 1px solid %%styled-jsx-placeholder-1%%; }
          p img {
            display: block; }
          p em {
            color: %%styled-jsx-placeholder-2%% !important; }

        %%styled-jsx-placeholder-1%%
      `)
    )
  })

  it('works with media queries placeholders', () => {
    assert.strictEqual(
      plugin(
        `
        p {
          display: block;
          @media %%styled-jsx-placeholder-0%% { color: red; }
          @media (min-width: %%styled-jsx-placeholder-0%%px) { color: blue; }
          @media (min-width: %%styled-jsx-placeholder-0%%) { color: yellow; }
        }`,
        {}
      ).trim(),
      cleanup(`
        p {
          display: block; }
          @media %%styled-jsx-placeholder-0%% {
            p {
              color: red; } }
          @media (min-width: %%styled-jsx-placeholder-0%%px) {
            p {
              color: blue; } }
          @media (min-width: %%styled-jsx-placeholder-0%%) {
            p {
              color: yellow; } }
      `)
    )
  })

  it('works with selectors placeholders', () => {
    assert.strictEqual(
      plugin(
        'p { display: block; %%styled-jsx-placeholder-0%% { color: red; } }',
        {}
      ).trim(),
      cleanup(`
        p {
          display: block; }
          p %%styled-jsx-placeholder-0%% {
            color: red; }
      `)
    )
  })

  it('works with @import', () => {
    assert.strictEqual(
      plugin('@import "fixtures/fixture"; p { color: red }', {}).trim(),
      cleanup(`
        div {
          color: red; }

        p {
          color: red; }
      `)
    )
  })

  it('works with relative @import', () => {
    const filename = 'fixtures/entry.scss'
    const file = fs.readFileSync(path.join(__dirname, filename))

    assert.strictEqual(
      plugin(file.toString(), { babel: { filename } }).trim(),
      cleanup(`
        * {
          font-family: "Comic Sans MS" !important; }

        p {
          color: red; }
      `)
    )
  })

  it('applies sassOptions', () => {
    assert.strictEqual(
      plugin('div { padding: (1 / 3) * 1em }', {
        sassOptions: {
          precision: 1
        }
      }).trim(),
      cleanup(`
        div {
          padding: 0.3em; }
      `)
    )
  })

  it('works with indentedSyntax', () => {
    assert.strictEqual(
      plugin('body\n\tdisplay: block\n\tmargin: 0', {
        sassOptions: {
          indentedSyntax: true
        }
      }).trim(),
      cleanup(`
        body {
          display: block;
          margin: 0; }
      `)
    )
  })

  it('cleans up extra indent', () => {
    assert.strictEqual(
      plugin(
        `
          body
            display: block
            margin: 0
      `,
        {
          sassOptions: {
            indentedSyntax: true
          }
        }
      ).trim(),
      cleanup(`
        body {
          display: block;
          margin: 0; }
      `)
    )
  })

  it('works with data option', () => {
    assert.strictEqual(
      plugin(
        `
          div
            display: block
            color: $test-color
      `,
        {
          sassOptions: {
            indentedSyntax: true,
            data: '$test-color: #ff0000'
          }
        }
      ).trim(),
      cleanup(`
        div {
          display: block;
          color: #ff0000; }
      `)
    )
  })
})
