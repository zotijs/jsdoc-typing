# JSDOC Typing

A small PoC on JSDOC typing

## Enable in VS Code

Enable JSDOC typing just by adding a `jsconfig.json` with this simple configuration, in the root directory of the project

```
{
  "compilerOptions": {
    "checkJs": true
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}

```

## Evaluation

- Evaluated simple types and functions in `multiplyByTwo` example.
- Evaluated object types, unions and intersections in `enhcanceCat` example.

AND LOVED IT.

## Linting

Using `eslint-plugin-jsdoc` for linting, more details [here](https://github.com/gajus/eslint-plugin-jsdoc)

## Resources

- https://dev.to/t7yang/type-safety-in-javascript-with-jsdoc-and-vscode-1a28
- https://code.visualstudio.com/docs/nodejs/working-with-javascript
