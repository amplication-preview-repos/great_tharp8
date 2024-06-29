import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteCreateInput = {
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
