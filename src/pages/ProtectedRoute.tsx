import { useReactiveVar } from '@apollo/client';
import { Navigate } from 'react-router-dom';
import { isLoggedInVar } from '../apollo.ts';

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useReactiveVar(isLoggedInVar);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
