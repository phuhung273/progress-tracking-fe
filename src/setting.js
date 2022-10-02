import * as React from "react";
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, SelectInput, DeleteButton } from 'react-admin';

export const SettingList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="Name" />
      <TextField source="Type" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const SettingCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="Name" />
      <SelectInput source="Type" choices={[
        { id: 'CATEGORY', name: 'Category' },
        { id: 'SECONDARY_CATEGORY', name: 'Secondary Category' },
        { id: 'CRITERIA', name: 'Criteria' },
      ]} />
    </SimpleForm>
  </Create>
);

export const SettingEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="Name" />
      <SelectInput source="Type" choices={[
        { id: 'CATEGORY', name: 'Category' },
        { id: 'SECONDARY_CATEGORY', name: 'Secondary Category' },
        { id: 'CRITERIA', name: 'Criteria' },
      ]} />
    </SimpleForm>
  </Edit>
);