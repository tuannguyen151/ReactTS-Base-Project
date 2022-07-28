# 💖 React - Vite - Typescript - Husky - Commitlint - Eslint - Prettier 💖

*Author:* **TSN 💌**
___

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
___

## Development
Start the development server on http://localhost:8080
```bash
npm run dev
```
___

## Production
Build the application for production:
```bash
npm run build
```

Preview server on http://localhost:8080
```bash
npm run preview
```
___

## GUIDE

### Environment variable
#### 1. Create ENV variable
Use the `ENV_` prefix for ENV variable name in `.env` file\
Eg: Create ENV variable ENDPOINT
```.env
ENV_ENDPOINT=value
```
\
**Note:** *Add ENV variable with a sample value in the `.env.template` file to define for other environments*

#### 2. Use ENV variable
```js,ts,jsx,tsx
const { ENV_ENDPOINT } = import.meta.env
console.log(ENV_ENDPOINT)
```
