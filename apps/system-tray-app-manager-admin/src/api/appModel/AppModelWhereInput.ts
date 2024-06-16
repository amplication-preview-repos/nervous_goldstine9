import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShortcutListRelationFilter } from "../shortcut/ShortcutListRelationFilter";

export type AppModelWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  shortcuts?: ShortcutListRelationFilter;
};
