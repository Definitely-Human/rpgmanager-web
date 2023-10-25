import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Character from './pages/Character.tsx';
import PlayMain from './pages/PlayMain.tsx';
import Statistics from './pages/Statistics.tsx';
import {
  Auth,
  Error,
  Home,
  Login,
  Play,
  Profile,
  ProtectedRoute,
  Register,
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
      >
        <Route index element={<PlayMain />} />
        <Route path="character" element={<Character />} />
        <Route path="stats" element={<Statistics />} />
      </Route>
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
