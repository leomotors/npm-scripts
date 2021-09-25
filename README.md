# my-npm-automation or leomotors-automation

As it's name suggest, it's a piece of code that I used alot, so I decided to put in npm then I can access it easily.

You are free to use this if you want the same thing as mine.

Please keep in mind that this can be changed at anytime and has no guarantee.

Here is some info in case you wonder what I'm doing.

## Scripts

incrementVersion.js: Increment Patch Number by 1 when called

configPackage.js: Put some metadata as src/config.ts

### configPackage.js Output

```ts
export const Version = "1.0.1";
export const BuildTime = "2021-09-25 19:33:04";
```

## Example Usage

```
"scripts": {
    "dev": "node node_modules/leomotors-automation/incrementVersion.js && node node_modules/leomotors-automation/configPackage.js && vite",
    "build": "node node_modules/leomotors-automation/configPackage.js && vite build",
    "serve": "vite preview",
    "check": "svelte-check --tsconfig ./tsconfig.json"
}
```
