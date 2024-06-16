import { Shortcut } from "../shortcut/Shortcut";

export type AppModel = {
  createdAt: Date;
  filePath: string | null;
  id: string;
  name: string | null;
  shortcuts?: Array<Shortcut>;
  updatedAt: Date;
};
