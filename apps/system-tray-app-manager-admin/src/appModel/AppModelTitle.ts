import { AppModel as TAppModel } from "../api/appModel/AppModel";

export const APPMODEL_TITLE_FIELD = "name";

export const AppModelTitle = (record: TAppModel): string => {
  return record.name?.toString() || String(record.id);
};
