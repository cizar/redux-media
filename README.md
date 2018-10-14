# redux-media

## Installation

```
npm install --save redux-media
```

## Import the store enhancer and the reducer

```js
import reduxMedia, { reducer as mediaReducer } from 'redux-media'
```

## Configure

```js
const mediaOptions = {
  isMobile: 'only screen and (max-width: 480px)',
  isTablet: 'only screen and (min-width: 481px) and (max-width: 767px)',
  isDesktop: 'only screen and (min-width: 1025px) and (max-width: 1280px)'
}
```

## Combine the media reducer

```js
const rootReducer = combineReducers({
  ...reducers,
  media: mediaReducer
})
```

## Create the store

```js
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    reduxMedia(mediaOptions)
  )
)
```
