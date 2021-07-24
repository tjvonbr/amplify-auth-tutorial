import * as React from "react";
import { Auth } from "aws-amplify";

type AuthContextData = {
  token?: string;
  isLoading: boolean;
  signIn(email, password): void;
  signUp(email, password): void;
  signOut(): void;
};

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const signIn = (email, password) => console.log("Sign in!");

  const signUp = (email, password) => console.log("Sign up!");

  const signOut = () => console.log("Sign out!");

  return (
    <AuthContext.Provider value={{ token, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export { AuthProvider, AuthContext, useAuth };
