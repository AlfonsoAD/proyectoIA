import {
  postSaveUsers,
  postLogIn,
  getForgotPassword,
} from "@/services/userService";

const saveUsers = async (userName, email, password) => {
  const resp = await postSaveUsers(userName, email, password);
  return resp;
};

const login = async (email, password) => {
  const resp = await postLogIn(email, password);
  localStorage.setItem("token", resp.results);
  return resp.ok;
};

const recoverPassword = async (email) => {
  const resp = await getForgotPassword(email);
  return resp;
};

export { saveUsers, login, recoverPassword };
