import { ShortcutCreateNestedManyWithoutAppModelsInput } from "./ShortcutCreateNestedManyWithoutAppModelsInput";

export type AppModelCreateInput = {
  filePath?: string | null;
  name?: string | null;
  shortcuts?: ShortcutCreateNestedManyWithoutAppModelsInput;
};
