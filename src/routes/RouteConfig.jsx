// RouteConfig.jsx
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import DashboardLayout from '../layout/DashboardLayout';
import LoginPage from '../features/auth/components/LoginForm';
import SignupPage from '../features/auth/components/SignupForm';
import {
  HomePage,
  NotFoundPage,
  CoursesPage,
  QuizzesPage,
  FilieresPage,
  Quiz,
  AttendanceFormateur,
  DocumentsPage,
  UserProfilePage,
  SettingsPage,
  UnauthorizedPage,
  SchedulePage,
  TraineesPage,
  CompetencesPage,
  ModulesPage,
  Course,
} from '../pages';
Course;

const RouteConfig = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />

      {/* Protected routes wrapped in DashboardLayout */}
      <Route element={<DashboardLayout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <CoursesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/:id"
          element={
            <ProtectedRoute>
              <Course />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizzes"
          element={
            <ProtectedRoute>
              <QuizzesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/:id"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute allowedRoles={['trainer', 'admin']}>
              <AttendanceFormateur />
            </ProtectedRoute>
          }
        />
        <Route
          path="/documents"
          element={
            <ProtectedRoute allowedRoles={['trainer', 'admin']}>
              <DocumentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <SchedulePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainees"
          element={
            <ProtectedRoute allowedRoles={['trainer', 'admin']}>
              <TraineesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/specializations"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <FilieresPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/competences"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <CompetencesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/modules"
          element={
            <ProtectedRoute>
              <ModulesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Error routes */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteConfig;
