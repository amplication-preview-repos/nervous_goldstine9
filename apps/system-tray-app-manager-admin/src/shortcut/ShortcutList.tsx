import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";

export const ShortcutList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Shortcuts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="App" source="appmodel.id" reference="AppModel">
          <TextField source={APPMODEL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="position" source="position" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
