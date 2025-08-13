import { Navigate, useLocation } from "react-router";

const AuthCheck = ({children}) => {
  const isAtuhenticate = true;
  const location = useLocation();
  if(!isAtuhenticate){
    return <Navigate to='/auth/login' state={
      {
        from : location
      }
    }
    />
  }
  return children;
  
};

export default AuthCheck;
