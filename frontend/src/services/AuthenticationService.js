import API from '../services/API';

export default {
  signIn(credentials) {
    return API().post('auth/login', credentials);
  },
  signUp(data) {
    return API().post('auth/register', data);
  },
  updateUserDetails(data) {},
  me(token) {
    return API().post('auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
