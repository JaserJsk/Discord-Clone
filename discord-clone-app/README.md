## Live Demo

Open [Discord Clone App](https://discord-clone-app-reactjs.firebaseapp.com/) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Firebase Hosting Steps

```sh
firebase login

firebase init
```

> Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices.

```sh
Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
```

> Please select an option:

```sh
Use an existing project
```

> Select a default Firebase project for this directory:

```sh
discord-clone-app-reactjs (Discord Clone App)
```

> What do you want to use as your public directory?

```sh
build
```

> Configure as a single-page app (rewrite all urls to /index.html)?

```sh
Yes
```

> Set up automatic builds and deploys with GitHub?

```sh
No
```

> Firebase initialization complete!

```sh
npm run build
```

> Begin Deployment

```sh
firebase deploy
```

```sh
deploying hosting
i  hosting[discord-clone-app-reactjs]: beginning deploy...
i  hosting[discord-clone-app-reactjs]: found 17 files in build
+  hosting[discord-clone-app-reactjs]: file upload complete
i  hosting[discord-clone-app-reactjs]: finalizing version...
+  hosting[discord-clone-app-reactjs]: version finalized
i  hosting[discord-clone-app-reactjs]: releasing new version...
+  hosting[discord-clone-app-reactjs]: release complete

+  Deploy complete!
```

> Redeploy the app after doing any changes, switch to Git Bash

```sh
npm run build && firebase deploy
```
