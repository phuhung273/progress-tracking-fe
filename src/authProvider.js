import { fetchUtils } from 'react-admin';
import { HOST } from './env';

const httpClient = fetchUtils.fetchJson;

const authProvider = {
  // called when the user attempts to log in
  login: async (credentials) => {
    const response = await httpClient(`${HOST}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
    
    const { json } = response
    if (json.access_token) {
      localStorage.setItem('userId', json.user_id);
      localStorage.setItem('token', json.access_token);
      return Promise.resolve();
    }
    
    return Promise.reject();
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('userId');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('userId');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('userId')
        ? Promise.resolve()
        : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;