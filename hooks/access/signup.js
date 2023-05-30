import { postSaveUsers } from "@/services/userService";

const saveUsers = async (userName, email, password) => {
  const resp = await postSaveUsers(userName, email, password);
  return resp;
};

export { saveUsers };
