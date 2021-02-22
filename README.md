<h1 align="center">Thream/styled-jsx-plugin-sass</h1>

<p align="center">
  <strong>Plugin to add <a href="https://sass-lang.com/">Sass</a> support to <a href="https://github.com/vercel/styled-jsx">styled-jsx</a>.</strong>
</p>

<p align="center">
  <a href="https://github.com/Thream/styled-jsx-plugin-sass/actions?query=workflow%3A%22Node.js+CI%22"><img src="https://github.com/Thream/styled-jsx-plugin-sass/workflows/Node.js%20CI/badge.svg" alt="Node.js CI" /></a>
  <a href="https://dependabot.com/"><img src="https://badgen.net/github/dependabot/Thream/styled-jsx-plugin-sass?icon=dependabot" alt="Dependabot badge" /></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Standard Style"></a>
  <a href="https://www.npmjs.com/package/@styled-jsx/plugin-sass"><img src="https://img.shields.io/npm/v/@styled-jsx/plugin-sass.svg" alt="npm version"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/licence-MIT-blue.svg" alt="Licence MIT"/></a>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" /></a>
  <a href="https://github.com/Thream/Thream/blob/master/.github/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg" alt="Contributor Covenant" /></a>
</p>

## 📜 About

Use [Sass](https://sass-lang.com/) with [styled-jsx](https://github.com/vercel/styled-jsx) 💥

This repository was originally forked from [giuseppeg/styled-jsx-plugin-sass](https://github.com/giuseppeg/styled-jsx-plugin-sass) & it is not intended to take any credit but to improve the code from now on.

## 💾 Install

Install the package and the `node-sass` (or [dart-sass](#dart-sass)) version you need (it is a peer dependency).

```sh
npm install --save-dev sass @styled-jsx/plugin-sass
```

## ⚙️ Usage

Add `@styled-jsx/plugin-sass` to the `styled-jsx`'s `plugins` in your babel configuration (e.g. `.babelrc.json`):

```json
{
  "presets": [
    [
      "next/babel",
      {
        "styled-jsx": {
          "plugins": ["@styled-jsx/plugin-sass"]
        }
      }
    ]
  ]
}
```

## Node-sass options

Node-sass can be configured using `sassOptions`. This is useful for setting options such as `includePaths` or `precision`.

```json
{
  "presets": [
    [
      "next/babel",
      {
        "styled-jsx": {
          "plugins": [
            [
              "@styled-jsx/plugin-sass",
              {
                "sassOptions": {
                  "includePaths": ["./styles"],
                  "precision": 2
                }
              }
            ]
          ]
        }
      }
    ]
  ]
}
```

### Indented syntax

To use indented sytax, you will need to update your `sassOptions` inside your babel configuration file.

```json
{
  "presets": [
    [
      "next/babel",
      {
        "styled-jsx": {
          "plugins": [
            [
              "@styled-jsx/plugin-sass",
              { "sassOptions": { "indentedSyntax": true } }
            ]
          ]
        }
      }
    ]
  ]
}
```

## 💡 Contributing

Anyone can help to improve the project, submit a Feature Request, a bug report or even correct a simple spelling mistake.

The steps to contribute can be found in the [CONTRIBUTING.md](./.github/CONTRIBUTING.md) file.

## 📄 License

[MIT](./LICENSE)
