import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { api } from "../api/client";

type AuthStatus = {
  status: "sucuss"|"error",
  message: string;
};

interface User {
  id: number;
  name: string;
  role: string;
  company:string;
  email: string;
  authorities: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (credentials: any) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<boolean>;
  status: AuthStatus | null;
}

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<AuthStatus | null>(null);

  /**
   * 🔹 현재 로그인 상태 확인 (조용히 처리) 
   * 에러 메세지 굳이 필요업음. 조용히 권한이 없음을 알려줌 

   */
  console.log(user,'유저')
  
  const checkAuth = async () => {
    try {
      const { data } = await api.get("/api/members/auth");
      if (data?.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch(e) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * 🔹 로그인
   */
  const login = async (credentials: any) => {
    try {
      setStatus(null);
      setLoading(true);

      await api.post("/api/members/login", credentials);
      await checkAuth();
    } catch (e: any) {
      setUser(null);

      setStatus({
        status:"error",
        message:
          e.response?.data?.message 
      });

      throw e;
    } finally {
      setLoading(false);
    }
  };

  /**
   * 🔹 토큰 재발급
   */
  const refreshToken = async (): Promise<boolean> => {
    try {
      await axios.post(
        "/api/v3/auth/tokens/refresh",
        {},
        { withCredentials: true }
      );
      return true;
    } catch {
      return false;
    }
  };

  /**
   * 🔹 로그아웃
   */
  const logout = async () => {
    try {
      await axios.delete("/api/members/logout", {
        withCredentials: true,
      });
    } finally {
      setUser(null);
      setStatus(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user?.id,
        loading,
        login,
        logout,
        refreshToken,
        status,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};