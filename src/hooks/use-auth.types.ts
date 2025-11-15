// Type definition to break circular inference in useQuery
export type UserQueryResult = {
  _id: string;
  _creationTime: number;
  name?: string;
  image?: string;
  email?: string;
  emailVerificationTime?: number;
  isAnonymous?: boolean;
  role?: "admin" | "user" | "member";
} | null | undefined;
