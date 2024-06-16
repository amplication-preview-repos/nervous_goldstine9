import { ShortcutUpdateManyWithoutAppModelsInput } from "./ShortcutUpdateManyWithoutAppModelsInput";

export type AppModelUpdateInput = {
  filePath?: string | null;
  name?: string | null;
  shortcuts?: ShortcutUpdateManyWithoutAppModelsInput;
};
