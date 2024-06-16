import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ShortcutWhereInput = {
  appField?: AppModelWhereUniqueInput;
  id?: StringFilter;
  position?: IntNullableFilter;
};
