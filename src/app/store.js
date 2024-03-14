import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AlertSite from '../redux/alert-site';
import Modals from '../redux/modals';

const reducers = combineReducers({
  AlertSite,
  Modals
});

export default configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActionPaths: ['payload.config.transformRequest']
    }
  })
});
