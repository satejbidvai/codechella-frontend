# Boilerplate code for React App

##### Basic boilerplate code required for creating a React Application.

## How to use this?

#### 1. Fork the project and then clone it into desired directory.

```
git clone https://github.com/YOUR_USERNAME/React-Boilerplate.git
```

#### 2. Choose and checkout from desired branch

-   ```
     git checkout master
    ```
-   ```
    git checkout redux
    ```
-   ```
    git checkout tailwind_css
    ```

#### 3. Install packages

##### For yarn:

```
yarn install
```

##### For npm:

```
npm install
```

#### 4. Start the development server

##### For yarn:

```
yarn start
```

##### For npm:

```
npm start
```

#### Basic boilerplate has been setup 🎉

#### Get started with your React App !!

# Features

-   #### ES Lint
-   #### Prettier
-   #### Redux
-   #### Tailwind CSS

## About the boilerplate

-   #### Initialised with `npx create-react-app`
-   #### Set up `ES Lint (with Airbnb)` and `Prettier` for proper code style
-   #### Code cleanup
-   #### `react-router-dom` added
-   #### Test route set up using: `BrowserRouter` `Switch` `Route`
-   #### `prop-types` added for validation of props

## Redux Branch

-   #### Packages: `redux` `react-redux` `redux-thunk`
-   #### Contains basic code for store and reducer
-   #### [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en-US) set up done

## 3. Tailwind CSS

-   #### Packages: `tailwindcss` `autoprefixer` `postcss-cli` `@fullhuman/postcss-purgecss`
-   #### Contains `tailwind.config.js` required for customization
-   #### `postcss.config.js` set up done
    -   #### `tailwindcss`: For compiling tailwind css to another css file with added customizations
    -   #### `autoprefixer`: Adding vendor prefixes to CSS file
    -   #### `purgecss`: Used before deploying the app to remove unused CSS from tailwind
-   #### Scripts added to `package.json` for using `postcss.config.js`
-   #### Compiled tailwind is added do `tailwind.output.css`
