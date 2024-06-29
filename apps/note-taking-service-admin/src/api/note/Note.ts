import { User } from "../user/User";

export type Note = {
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
