# Website

This website is built using [Docusaurus 2](https://docusaurus.io/)

### 🛠️ Installation

```
$ yarn
```

### 🖥️ Local Development

```
$ yarn start
```

### 🧬 Branching

1. Add feature branch from `main`

   ```bash
   feature/<task_number>_<task_name>
   ```

2. Merge from `feature` to `develop` to test
3. Merge `feature` to `main`

============ Add on after deployment ==============

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
