import { AppModel } from "../appModel/AppModel";

export type Shortcut = {
  appField?: AppModel | null;
  createdAt: Date;
  id: string;
  position: number | null;
  updatedAt: Date;
};
