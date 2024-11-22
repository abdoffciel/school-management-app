import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  notificationsReducer,
  themeReducer,
  quizzesReducer,
  filieresReducer,
  authReducer,
  coursesReducer,
  competencesSlice,
  scheduleReducer,
  profileSlice,
  documentsReducer,
  moduleReducer,
  secteursReducer,
  GroupesSlice,
  demandesReducer,
  formateurReducer,
} from '../features';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  theme: themeReducer,
  quizzes: quizzesReducer,
  filieres: filieresReducer,
  groups: GroupesSlice,
  competences: competencesSlice,
  auth: authReducer,
  courses: coursesReducer,
  schedule: scheduleReducer,
  profile: profileSlice,
  documents: documentsReducer,
  modules: moduleReducer,
  secteur: secteursReducer,
  demandes: demandesReducer,
  formateurs: formateurReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
