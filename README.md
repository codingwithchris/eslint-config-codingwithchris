# Chris Hahn • ESLint Config
### 📄👌 My ESLint config for writing clean consistent code.
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />

![](https://img.shields.io/npm/v/@codingwithchris/eslint-config) ![](https://github.com/codingwithchris/eslint-config-codingwithchris/workflows/Publish%20Release%20to%20NPM/badge.svg)

## Current Configuration
My ESLint is currently set up out of the box to work for projects that are using the following stack:
- React
- Typescript
- Prettier

I am currently extending the [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) package. It's built on the [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) config and it adds Typescript support on top of it. I have future plans to build my own ESLint from the ground up :)

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.
2. Then you need to install everything needed by the config:

For NPM:
`npx install-peerdeps --dev @codingwithchris/eslint-config`

For Yarn (npm5+ only):
```
npx install-peerdeps --dev @codingwithchris/eslint-config -Y
```
Hey, now!! It automagically works with Yarn too! 🎉🎉🎉

3. You can see in your package.json there are now a big list of devDependencies.
4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does).
5. Select your desired linting setup when you extend the package.  Your .eslintrc file should look something like this:

For a Vanilla Javascript project
```
{
  "extends": [
    "@codingwithchris/eslint-config/vanilla-js"
  ]
}
```

For a Vanilla React project
```
{
  "extends": [
    "@codingwithchris/eslint-config/vanilla-react"
  ]
}
```

For a Vanilla Typescript project
```
{
  "extends": [
    "@codingwithchris/eslint-config/vanilla-typescript"
  ]
}
```

For a React Typescript project
```
{
  "extends": [
    "@codingwithchris/eslint-config/react-typescript"
  ]
}
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig"`:. This makes one less file in your project.

5. You can add two scripts to your package.json to lint and/or fix:

```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`.

## With VS Code

I highly recommend configuring your editor to do this automatically on file save across your whole project.

1. Install the [ESLint plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Create a file in your current project in `.vscode/settings.json`.

3. Place the following configuration in the file:
```
{
    //
    // Auto-run code formatting on save
    //
    "editor.formatOnSave": true,
    // Tell the ESLint plugin to run on save
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // The following prevents linting from running twice
    // turn it off for JS and JSX, we will do this via eslint
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    // Turn it off for TS & TSX
    "[typescript]": {
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },
}
```

4. In order to ensure there are no conflicts between Prettier and ESLint with any plugins you may have active in your VSCode editor, I also recommend adding a file at `.vscode/extensions.json` with the following content:
```
{
    // See http://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
    // List of extensions which should be recommended for users of this workspace.
    "recommendations": [
        "dbaeumer.vscode-eslint"
    ],
    // List of extensions recommended by VS Code that should not be recommended for users of this workspace.
    "unwantedRecommendations": [
        "esbenp.prettier-vscode", // You don't need the prettier extension with this setup
        "editorconfig.editorconfig", // You don't need editor config with this setup
    ]
}
```

This will make sure that anyone working on the project is aware of enabling/disabling proper extensions!