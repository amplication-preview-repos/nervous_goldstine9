import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { AppModelTitle } from "../appModel/AppModelTitle";

export const ShortcutEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="appField.id" reference="AppModel" label="App">
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="position" source="position" />
      </SimpleForm>
    </Edit>
  );
};
