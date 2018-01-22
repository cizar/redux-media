const MEDIA_CHANGED = '@@redux-media/MEDIA_CHANGED'

const mediaChanged = (media, matches) => ({
  type: MEDIA_CHANGED,
  media,
  matches
})

const initialState = {}

export const mediaReducer = (state = initialState, { type, media, matches }) => {
  switch (type) {
    case MEDIA_CHANGED:
      return {
        ...state,
        [media]: matches
      }
    default:
      return state
  }
}

export default (config) => (createStore) => (...args) => {
  const store = createStore(...args)
  Object.keys(config).forEach((key) => {
    const mql = matchMedia(config[key])
    mql.addEventListener('change', ({ matches }) => 
      store.dispatch(mediaChanged(key, matches))
    )
    store.dispatch(mediaChanged(key, mql.matches))
  })
  return store
}
