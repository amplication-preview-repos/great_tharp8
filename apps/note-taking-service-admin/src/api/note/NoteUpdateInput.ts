import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteUpdateInput = {
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
