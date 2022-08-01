# 💖 React - Redux Toolkit (RTK Query) - Vite - Typescript - Husky - Commitlint - Eslint - Prettier 💖

_Author:_ **TSN 💌**

---

## Setup

### Step 1: Install the dependencies

```bash
npm install
```

### Step 2: Copy the .env.template file to .env

```bash
cp .env.template .env
```

### Step 3: Change ENV variable values in .env file

---

## Development

Start the development server on <http://localhost:8080>

```bash
npm run dev
```

---

## Production

Build the application for production:

```bash
npm run build
```

Preview server on <http://localhost:8080>

```bash
npm run preview
```

---

## ✍️ Some Features

### 1. Husky: Format the code with `Eslint` + `Prettier` on pre-commit and check the commit message with `Commitlint`

### 2. Single-page application with `react-router-dom`

1. Declare pages in the `src/pages` folder
2. Declare layout in the `src/layouts` folder
3. Initialize error handling routes

**Note:** _RESTful Routing convention by example: <https://github.com/tuannguyen151/ReactTS-Base-Project/pull/1>_

### 3. Multi language with i18next and react-i18next

Declare the locale in the `src/locales` directory, then import and use it in the `src/locales/i18n.tsx` file

---

## ✍ GUIDE

### Environment variable

#### 1. Create ENV variable

Use the `ENV_` prefix for ENV variable name in `.env` file\
Eg: Create ENV variable ENDPOINT

```.env
ENV_ENDPOINT=value
```

**Note:** _Add ENV variable with a sample value in the `.env.template` file to define for other environments_

#### 2. Use ENV variable

```js,ts,jsx,tsx
const { ENV_ENDPOINT } = import.meta.env
console.log(ENV_ENDPOINT)
```

## ✍ FOLDER STRUCTURE

### Declare assets in the `src/assets` folder

### Declare `custom hooks` in a subfolder of `src/hooks`

The `src/hooks` folder contains files to handling logic for components and pages

**Convention:**

- _Subfolder name: Feature name_
- _In the subfolder, declare files with name: `use*.hook.ts` and export default arrow function_

### Declare layout in the `src/layouts` folder

### Declare locales in the `src/locales` folder

### Declare response api interface in the `src/models` folders

**Convention:**

- _Filename: `*.model.ts`_
- _Export only one interface_

### Declare pages in the `src/pages` folder

**Convention:**

- _Filename: `*.page.tsx`_

### Declare routes in the `src/routes` folder

File `src/routes/index.tsx`: Import public routes

File `src/routes/private/index.tsx`: Import private routes (Routes just for logged in users)

**Convention:**

- _Filename: `*.route.tsx`_

### Declare service api in the `src/services` folder and use `RTK Query` for it

File `src/services/base.ts`: Declare the common service api

**Convention:**

- _Filename: `*.service.ts`_
- _Define and export request interface_

### Declare RTK Slice State and Selector in a subfolder of `src/store`

File `src/store/index.ts`: Import RTK slice state and servce api for `reducer` and `middleware` configuration

**Convention:**

- _Subfolder name: State name_
- _In the subfolder, declare RTK slice state with filename: `*.slice.ts` and selector with filename: `*.selector.ts`_

### Declare config for app in `src/config.ts` file
