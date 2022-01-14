# my-npm-automation or leomotors-automation

As its name suggests, it's a piece of code that I used a lot, so I decided to put it in npm then I can access it easily.

You are free to use this if you want the same thing as mine.

Please keep in mind that this can be changed at anytime and has no guarantee.

Here is some info in case you wonder what I'm doing.

## Scripts

incrementVersion.js: Increment Patch Number by 1 when called

configPackage.js: Put some metadata as src/config.ts

### configPackage.js Output

```ts
export const Version = "2.0.1";
export const BuildTime = "2022-01-14 19:54:24";
```

## Example Usage

```
"scripts": {
    "dev": "lm-inc && lm-config && smth dev",
    "build": "lm-config && smth build",
}
```
