import { api } from "@/convex/_generated/api";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth, useQuery } from "convex/react";
import { useEffect, useState } from "react";

export function useAuth() {
  const { isLoading: isAuthLoading, isAuthenticated } = useConvexAuth();
  const userQuery = useQuery(api.users.currentUser) as any;
  const { signIn, signOut } = useAuthActions();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthLoading) {
      setIsLoading(false);
    }
  }, [isAuthLoading]);

  return {
    isLoading,
    isAuthenticated,
    user: userQuery ?? null,
    signIn,
    signOut,
  };
}