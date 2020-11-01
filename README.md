# styled-jsx-plugin-sass-2

Use [Sass](http://sass-lang.com/) with [styled-jsx](https://github.com/vercel/styled-jsx) 💥

This is a fixed/updated version of [styled-jsx-plugin-sass](https://github.com/giuseppeg/styled-jsx-plugin-sass) by [@giuseppeg](https://github.com/giuseppeg), made because that package seems to be unmaintained. 

## What's the difference?

This plugin works with [indented sass](#indented-syntax) and [dart sass](#dart-sass) too, neither of those were possible with the old package. It also includes code from pull requests that weren't merged in the original repo.
Credits to [@giuseppeg](https://github.com/giuseppeg), [@xhuz](https://github.com/xhuz) and [@jamestalmage](https://github.com/jamestalmage).

## Usage

Install the package and the `node-sass` (or [dart-sass](#dart-sass)) version you need (it is a peer dependency).

```sh
npm install --save-dev node-sass styled-jsx-plugin-sass-2
```

with yarn

```sh
yarn add -D node-sass styled-jsx-plugin-sass-2
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

### Dart sass

If you want to use Dart sass instead of `node-sass`, your install command should look like this:

```sh
npm install --save-dev sass styled-jsx-plugin-sass-2
```

with yarn

```sh
yarn add -D sass styled-jsx-plugin-sass-2
```

#### Notes

`styled-jsx-plugin-sass-2` uses `styled-jsx`'s plugin system which is supported from version 2.

Read more on their repository for further info.

## License

MIT
