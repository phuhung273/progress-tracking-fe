import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const ExerciseList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="Category.Name" />
      <TextField source="SecondaryCategory.Name" />
    </Datagrid>
  </List>
);