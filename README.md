# JS to TS

A small Node.js project that demonstrates renaming .js files to .ts files
Doing it manually cause i ran out of tokens and i thought it'd be cool if i did the logic myself

## Usage

uses native node `fs/promises` and `path` modules, no need for external dependencies 

```sh
npm run convert
```

This runs `fs.js` and renames the entries in `main/` from `.js` to `.ts`. The command changes file names, so back up the project before running it.

> [!WARNING]
> Edge cases are still questionable.