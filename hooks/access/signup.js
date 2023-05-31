import {
  postSaveUsers,
  postLogIn,
  getForgotPassword,
  postAccountConfirm,
  postChangePassword,
} from "@/services/userService";

const saveUsers = async (userName, email, password) => {
  const resp = await postSaveUsers(userName, email, password);
  return resp;
};

const login = async (email, password) => {
  const resp = await postLogIn(email, password);
  localStorage.setItem("access-token", resp.results.accessToken);
  localStorage.setItem("refresh-token", resp.results.refreshToken);
  return resp;
};

const recoverPassword = async (email) => {
  const resp = await getForgotPassword(email);
  return resp;
};

const accountConfirm = async (accessToken) => {
  const resp = await postAccountConfirm(accessToken);
  return resp;
};

const changePassword = async (password, accessToken) => {
  const resp = await postChangePassword(password, accessToken);
  return resp;
};

export { saveUsers, login, recoverPassword, accountConfirm, changePassword };
