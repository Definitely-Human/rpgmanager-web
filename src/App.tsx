import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';
import {
  Auth,
  Error,
  Home,
  Play,
  Profile,
  ProtectedRoute,
} from './pages/index.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route
        path="play"
        element={
          <ProtectedRoute>
            <Play />
          </ProtectedRoute>
        }
      />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="auth" element={<Auth />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
