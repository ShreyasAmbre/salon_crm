# Salon CRM Portal

<img src="src/assets/images/salon_crm_logo.png" alt="Salon CRM Portal logo" width="250">

## Project Structure

1. Core -
2. Shared -
3. Features -

- feature-\*
  Note: Core feature library should not depend on any other library, Shared feature library depend only on Core and Shared and Feature libraries can depend on Core, Shared but not other library only dependent on within itself.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server for a specific app:

```sh
npx nx serve
```

To create a production bundle:

```sh
npx nx build
```

## Required VsCode Extension

1. Angular Language Service
2. Nx Console
3. ESLint
4. Editor Config
5. Auto Rename Tag (optional)
6. angular2-switcher (optional)
7. GitLense (optional)
8. Code Spell Checker
9. Material Icon Theme (optional)
10. px to rem, rpx, vw
11. Todo Tree (optional)

## Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Nx Workflow

### Generator Commands

```sh
# Library generator (use this to create a new angular library for features, can be achieved with nx console as well)
# this will create an angular library in the 
# add other options as needed
npx nx generate @nx/angular:library --directory=feature-auth --name=feature-auth --routing=true --changeDetection=OnPush --importPath=@salon-crm/features/feature-auth --prefix=auth --skipTests=true --style=scss --tags="type:feature, scope:auth" --no-interactive --dry-run
```

### Using Nx Console

If you are using Nx Console UI to generate a feature library in VS Code, follow these steps:

1. Right click on the folder inside which you want to create a feature library in folder structure of project.
2. Select 'Nx Generate' option (Note: This option will be visible only when you installed Nx Console VsCode Extension).
3. After selection option enter 'Library' in search filed and select '@nx/angular - library - Create Angular Library' option.
4. Fill in the required fields:

- directory\*: feature-auth
- name: feature-auth
- routing: Check this checkbox if required
- changeDetection: Select OnPush option
- importPath: @salon-crm/features/feature-auth
- prefix: auth
- skipTests: Check this checkbox if not required
- style: scss
- tags: type:feature, scope:auth
- Note: After filling all fields check the output of dry run logs for confirmation in terminal.

5. Click "Generate" to generate the library.

## Branch Organization and Deployment Flow

Our repository follows a structured branching strategy to manage portals and deployment environments. This section describes how branches are organized and used for development and deployment.

### Main Branches

- `development` - Main integration branch for all development work
- `staging` - Integration branch for staging environment
- `master` - Production branch

## Internationalization (i18n)

The project uses `@jsverse/transloco` for handling translations. Translation files are stored in JSON format in `assets/i18n` directory.

## Commit Message Guidelines

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special format that includes a **type**, a **scope**, and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (nx, npm)
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **fixup**: Fixup commits are used to fix up previous commits. They should be used to fix up previous commits that are not perfect.
- **revert**: Revert commits are used to revert previous commits. They should be used to revert previous commits that are not perfect.


