import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type ShortcutUpdateInput = {
  appField?: AppModelWhereUniqueInput | null;
  position?: number | null;
};
