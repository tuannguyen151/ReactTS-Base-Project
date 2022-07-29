# 💖 React - Vite - Typescript - Husky - Commitlint - Eslint - Prettier 💖

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

## GUIDE

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
