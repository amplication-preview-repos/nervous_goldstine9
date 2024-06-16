import { Shortcut as TShortcut } from "../api/shortcut/Shortcut";

export const SHORTCUT_TITLE_FIELD = "id";

export const ShortcutTitle = (record: TShortcut): string => {
  return record.id?.toString() || String(record.id);
};
