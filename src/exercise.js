import * as React from "react";
import { List, Datagrid, TextField, DateField, useRecordContext, Create, SimpleForm, ReferenceInput, AutocompleteInput, DeleteButton, ArrayInput, SimpleFormIterator, NumberInput } from 'react-admin';
import { Chip } from '@mui/material';

const ResultsField = () => {
  const record = useRecordContext();

  return record ? ( 
    <>{
        record.Results.map(item => {
          const label = `${item.Criteria.Name}: ${item.Value}`;

          return <Chip key={item.id} label={label} />
        })
    }</>
  ) : null
}

export const ExerciseList = () => (
  <List>
    <Datagrid rowClick="edit">
      <DateField source="CreatedAt" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
      <TextField source="Category.Name" />
      <TextField source="SecondaryCategory.Name" />
      <ResultsField source="Results"/>
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ExerciseCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput label="Category" source="CategoryId" reference="setting" filter={{ Type: 'CATEGORY' }} >
        <AutocompleteInput optionText="Name"/>
      </ReferenceInput>
      <ReferenceInput label="Secondary Category" source="SecondaryCategoryId" reference="setting" filter={{ Type: 'SECONDARY_CATEGORY' }} >
        <AutocompleteInput optionText="Name"/>
      </ReferenceInput>
      <ArrayInput source="Results">
        <SimpleFormIterator inline>
          <ReferenceInput label="Criteria" source="CriteriaId" reference="setting" filter={{ Type: 'CRITERIA' }} >
            <AutocompleteInput optionText="Name"/>
          </ReferenceInput>
          <NumberInput source="value" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);