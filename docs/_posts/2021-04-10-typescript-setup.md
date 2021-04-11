---
layout: post
title:  "Setup a Typescript Project"
date:   2021-04-10
categories: TS
---
Notes from *[Programming Typescript](https://www.amazon.com/Programming-TypeScript-Making-JavaScript-Applications/dp/1492037656)* - author *Boris Cherny*

## To setup a typescript project

```bash
mkdir myapp
cd myapp
npm init
npm install --save-dev typescript tslint @types/node

```

### tsconfig.json

- Every TypeScript project should include a file called tsconfig.json in its root directory. 
- This tsconfig.json is where TypeScript projects define things like
  - which files should be compiled
  - which directory to compile them to
  - which version of JavaScript to emit
- To generate a default tsconfig file `./node_modules/.bin/tsc --init`
- To create a tsconfig file manually - `touch tsconfig.json`
- Copy the below contents to the tsconfig.json file

```json
{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015"
  },
  "include": [
    "src"
  ]
}
```

### tslint.json

- Using TSLint is optional, but it’s strongly recommend
- Codifys whatever stylistic conventions you want for your code
- To generate a default tslint file `./node_modules/.bin/tslint --init`

### index.ts

- Create a src folder containing your first TypeScript file

```bash
mkdir src
touch src/index.ts
echo "console.log('Hello World');" >> src/index.ts
```

- To compile and run typescript code

### compile and run

```bash
./node_modules/.bin/tsc
node ./dist/index.js 
```
