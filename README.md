# Portfolio Version 6

## Status

`Active`

## Description

- This is the 6th iteration of my portfolio.
- Built using Gatsby.js.

## Prerequisites

- [Node.js 18.12.1 LTS](https://nodejs.org/) via [Node Version Manager](https://github.com/nvm-sh/nvm).
  - Ensure that [Deeper Shell Integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) is set up as well.
- [GNU Make](https://www.gnu.org/software/make/)

## Commands

The following `make` commands are available:

- `make install` to install project dependencies
  - `make install-node-modules` to install Node dependencies
- `make lint` to run all linters
  - `make run-eslint` to run ESLint
  - `make run-prettier` to run Prettier
- `make build` to build a Production version of the project
- `make dev` to start the Gatsby Development server
- `make staging` to start the Gatsby Staging server
- `make clean` to delete generated files
  - `make delete-gatsby-generated-files` to delete Gatsby generated files
- `make disable-gatsby-telemetry` to disable Gatsby telemetry
