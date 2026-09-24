"use client";
import React, { useContext, createContext, useState, useEffect } from "react";
import * as api from "@/lib/api";
import { Loader } from "lucide-react";
interface AuthContext {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: api.UserResponseDto | null;
}

const AuthContext = createContext<AuthContext | null>(null);

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error();
  return ctx;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<api.UserResponseDto | null>(null);

  useEffect(() => {
    const authenticate = async () => {
      setIsLoading(true);
      const response = await api.user.userControllerGetUserV1({
        auth: localStorage.getItem("authToken")!,
      });
      console.log(response);
      if (response.error) {
        if (response.error.statusCode === 401) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        } else {
          // navigate to error page
          // TODO: build error page
        }
      } else {
        setUser(response.data);
        setIsAuthenticated(true);
        setIsLoading(false);
      }
    };

    authenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, isAuthenticated, user }}>
      {!isLoading && isAuthenticated ? (
        children
      ) : isLoading && !isAuthenticated ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="flex gap-3">
            <Loader className="animate-spin" />
            <p>Loading</p>
          </div>
        </div>
      ) : null}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
