# redux-media

## Installation

```
npm install redux-media --save-dev
```

## Import the store enhancer and the reducer

```
import media, { mediaReducer } from 'redux-media'
```

## Configure

```
const mediaOptions = {
  isMobile: 'only screen and (max-width: 480px)',
  isTablet: 'only screen and (min-width: 481px) and (max-width: 767px)',
  isDesktop: 'only screen and (min-width: 1025px) and (max-width: 1280px)'
}
```

## Combine the media reducer

```
const rootReducer = combineReducers({ ...reducers, router: routerReducer, media: mediaReducer })
```

## Create the store

```
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    media(mediaOptions)
  )
)
```
