import { api } from "@/convex/_generated/api";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import type { UserQueryResult } from "./use-auth.types";

export function useAuth() {
  const { isLoading: isAuthLoading, isAuthenticated } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();
  
  // Apply explicit type to break circular inference
  // @ts-expect-error - TypeScript has issues with deep Convex type inference
  const userQuery = (useQuery as any)(api.users.currentUser) as unknown as UserQueryResult;

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