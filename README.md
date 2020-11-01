# styled-jsx-plugin-sass-2

Use [Sass](http://sass-lang.com/) with [styled-jsx](https://github.com/vercel/styled-jsx) 💥

This is a fixed/updated version of [styled-jsx-plugin-sass](https://github.com/giuseppeg/styled-jsx-plugin-sass) by [@giuseppeg](https://github.com/giuseppeg), made because that package seems to be outdated. It works with [indented sass](#indented-syntax) and dart sass too.

## Usage

Install the package first.

```bash
npm install --save-dev styled-jsx-plugin-sass
```

Install the `node-sass` version you need (it is a peer dependency).

```bash
npm install --save-dev node-sass
```

Next, add `styled-jsx-plugin-sass-2` to the `styled-jsx`'s `plugins` in your babel configuration (e.g. `.babelrc`):

```json
{
  "presets": [
    [
      "next/babel",
      {
        "styled-jsx": {
          "plugins": ["styled-jsx-plugin-sass-2"]
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
            ["styled-jsx-plugin-sass-2", {
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
          "plugins": [["styled-jsx-plugin-sass-2", { "sassOptions": { "indentedSyntax": true } }]]
        }
      }
    ]
  ]
}
```

#### Notes

`styled-jsx-plugin-sass-2` uses `styled-jsx`'s plugin system which is supported from version 2.

Read more on their repository for further info.

## License

MIT
