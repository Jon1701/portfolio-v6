# Portfolio Version 6

## Status

`Active`

## Description

- This is the 6th iteration of my portfolio.
- Built using Gatsby.js.

## Prerequisites

- [Node.js 18.13.0 LTS](https://nodejs.org/) via [Node Version Manager](https://github.com/nvm-sh/nvm)
  - Ensure that [Deeper Shell Integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) is set up as well
- [GNU Make](https://www.gnu.org/software/make/)
- [Visual Studio Code](https://code.visualstudio.com/)
  - [ESLint](https://open-vsx.org/extension/dbaeumer/vscode-eslint) Extension
  - [Prettier - Code Formatter](https://open-vsx.org/extension/esbenp/prettier-vscode) Extension
  - [Stylelint](https://open-vsx.org/extension/stylelint/vscode-stylelint) Extension

## Deployment Instructions

1. Go to https://github.com/settings/tokens.
2. Click on **Generate new token**.
3. Select **Generate new token (classic)**.
4. Set **Note** to `Gatsby Publish`.
5. Set **Expiration** to `30 days`.
6. Under **Select scopes**, ensure **repo** is checked. All sub-scopes will be automatically selected.
7. Click on **Generate token**.
8. Copy token.
9. Go to https://github.com/Jon1701/portfolio-v6/settings/secrets/actions.
10. Click on **New repository secret**.
11. Set **Name** to `ACCESS_TOKEN`.
12. Paste the generate token in the **Secret** field.
13. Click on **Add secret**.

## Commands

The following `make` commands are available:

- `make install` to install project dependencies
  - `make install-node-modules` to install Node dependencies
- `make lint` to run all linters
  - `make run-eslint` to run ESLint
  - `make run-prettier` to run Prettier
  - `make run-stylelint` to run Stylelint
- `make build` to build a Production version of the project
- `make dev` to start the Gatsby Development server
- `make staging` to start the Gatsby Staging server
- `make clean` to delete generated files
  - `make delete-gatsby-generated-files` to delete Gatsby generated files
- `make disable-gatsby-telemetry` to disable Gatsby telemetry
