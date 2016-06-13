# eslint-config-nexxa

Nexxa ESLint extensible and sharable configuration.

## Usage

Install the configuration as a npm package:

```sh
npm install eslint-config-nexxa
```

and then add it as extension in your ESLint configuration file:

```javascript

// for example in your .eslinrc

{
  "extends": "nexxa"
}

```

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Rules

The configuration already extends the default `eslint:recommended` rules.

Nexxa's specific rules can be found in `/rules` folder.
