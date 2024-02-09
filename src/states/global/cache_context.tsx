// TODO: コンテキストからRecoilへの移行

// React
import { createContext, useCallback, useEffect, useState } from "react";

// Amplify
import { getCurrentUser } from "aws-amplify/auth";

/**
 * Cognitoユーザー情報
 */
export interface User {
  /**ユーザーID */
  userID: string;
  /**ユーザー名 */
  userName: string;
}
const defaultUser: User = { userID: "", userName: "" };

interface CacheContextType {
  /**Cognitoユーザー情報 */
  user: User;
  /**Cognitoユーザー情報の取得 */
  fetchUser: () => void;
}

const defaultCacheContext: CacheContextType = {
  user: defaultUser,
  fetchUser: () => {},
};

export const CacheContext =
  createContext<CacheContextType>(defaultCacheContext);

export const useCacheContext = (): CacheContextType => {
  const [user, setUser] = useState<User>(defaultUser);

  const fetchUser = useCallback(async () => {
    const { username, userId } = await getCurrentUser();
    setUser({ userID: userId, userName: username });
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    fetchUser,
  };
};
