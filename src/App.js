import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ExerciseList } from "./exercise";
import authProvider from "./authProvider";
import { HOST } from "./env";
import { SettingCreate, SettingEdit, SettingList } from "./setting";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(HOST, httpClient);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="exercise" list={ExerciseList} />
    <Resource name="setting" list={SettingList} create={SettingCreate} edit={SettingEdit}/>
  </Admin>
);

export default App;