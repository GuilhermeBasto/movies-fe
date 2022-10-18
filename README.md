# Movies

This repository contains the React frontend application for Movies

## Setup

### Clone repository

Clone the repository by running the following command:

```sh
# With SSH.
git clone git@github.com:GuilhermeBasto/movies-fe.git && cd movies-fe

# Or with HTTPS.
git clone https://github.com/GuilhermeBasto/movies-fe.git && cd movies-fe
```

### Install dependencies

Once you've cloned the repository install the required dependencies:

```sh
yarn
```

## Run

### Development server

To run the project in development mode run:

```sh
yarn start
```

## Project structure

The directory structure is the following:

```sh
movies.fe
  ├──src
  │ ├──components
  │ │  └──button
  │ │      ├──Button.tsx
  │ │      ├──Button.styles.tsx
  │ │      └──index.tsx
  │ ├──state
  │ │  └──entity
  │ │      ├──useEntity.tsx
  │ │      ├──entitySlice.tsx
  │ │      └──...
  │ ├──theme
  │ ├──App.tsx
  │ └──index.tsx
  ├──package.json
  └──...
```

## Tools

- [React w/ Typescript](https://reactjs.org/docs/getting-started.html)
- [Reduxjs](https://redux.js.org/introduction/getting-started)
- [StyledComponents](https://styled-components.com/)
- Node.js > v16.13.2
