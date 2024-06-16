import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type ShortcutCreateInput = {
  appField?: AppModelWhereUniqueInput | null;
  position?: number | null;
};
