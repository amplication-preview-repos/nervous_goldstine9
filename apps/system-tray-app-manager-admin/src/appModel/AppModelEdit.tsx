import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ShortcutTitle } from "../shortcut/ShortcutTitle";

export const AppModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="filePath" source="filePath" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="shortcuts"
          reference="Shortcut"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShortcutTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
