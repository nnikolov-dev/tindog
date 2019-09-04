# ETS Node.js <3 React Template

## Pre-requisites
* Node.js ^10.x.x
* Yarn ^1.17.x

**Note about yarn:** Yarn is a package manager for node. It uses the same registry as npm, but it's quicker and more secure. Yarn is recommended for use over npm.
To learn more about Yarn, [visit the docs](https://yarnpkg.com/en/docs/install)

## Project Start
> If you've requested this app via ServiceNow, skip ahead ro 3.

1. Checkout a clean version of the project
```zsh
~ $ git clone git@github.com:elanco/ets-template-node-react.git $projectname && cd $projectname
```
2. Add your git repo
```zsh
~/$projectname $ rm -rf .git
~/$projectname $ git remote add origin $yourrepourl
```
3. Install dependencies
```zsh
~/$projectname $ yarn
```
4. Develop!
```zsh
~/$projectname $ yarn dev
```

## Configuration
All configuration should be managed via `.env` per the 12 factor app. a `.env-sample` file is included.

## Continuous Integration
This package comes with CI by default. The config for Azure Pipelines can be found under `.ci/`. The following processes for branches is described:

#### `master`, `feature/*`, `cleanup/*` and `fix/*`
* Lint code (according to the Airbnb style guide)
* Test code (according to unit tests defined in `test/`)
* Audit packages (via `yarn audit`)
* Perform static source code analysis. Find all vulnerabilities within the codebase
* Check for any committed keys

#### `develop` and `staging`
* Lint code
* Test code

## Contributing
This template (should be) is open source to everybody in Elanco. This means that if you want a feature, or want to fix a bug - submit a pull request!

Just ensure that:
* CI Passes
* This is an easily maintainabile feature