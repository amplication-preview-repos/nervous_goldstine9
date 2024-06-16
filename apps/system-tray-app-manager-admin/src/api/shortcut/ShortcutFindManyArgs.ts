import { ShortcutWhereInput } from "./ShortcutWhereInput";
import { ShortcutOrderByInput } from "./ShortcutOrderByInput";

export type ShortcutFindManyArgs = {
  where?: ShortcutWhereInput;
  orderBy?: Array<ShortcutOrderByInput>;
  skip?: number;
  take?: number;
};
