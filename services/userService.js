const baseUrl = "https://j2aligamxapi-production.up.railway.app/";

const options = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-Type": "application/JSON" },
  };
};

const optionsnb = () => {
  return {
    method: "POST",
    headers: { "content-Type": "application/JSON" },
  };
};

const postSaveUsers = async (username, email, password) => {
  const data = {
    username: username,
    email: email,
    password: password,
  };

  const response = await fetch(`${baseUrl}users/signup`, options(data));

  if (response.status !== 200) {
    return { ok: false, results: `${response.statusText} ${response.status}` };
  }

  const dataResponse = {
    ok: true,
    results: await response.json(),
  };

  return dataResponse;
};

const postLogIn = async (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  const response = await fetch(`${baseUrl}users/refresh-login`, options(data));
  if (response.status !== 200) {
    return {
      ok: false,
      results: `${response.statusCode} ${response.name} ${response.message}`,
    };
  }
  const dataResponse = {
    ok: true,
    results: await response.json(),
  };
  return dataResponse;
};

const getForgotPassword = async (email) => {
  const response = await fetch(`${baseUrl}user/${email}`);
  if (response.status !== 200) {
    return { ok: false, results: `${response.statusText} ${response.status}` };
  }

  const resp = await response.json();
  return { ok: true, results: resp };
};

const postAccountConfirm = async (accessToken) => {
  const response = await fetch(
    `${baseUrl}confirmation/${accessToken}`,
    optionsnb()
  );
  if (response.status !== 200) {
    return { ok: false, results: `${response.statusText} ${response.status}` };
  }

  const resp = await response.json();
  return { ok: true, results: resp };
};

const postChangePassword = async (password, token) => {
  const data = { password: password };
  const response = await fetch(`${baseUrl}changePass/${token}`, options(data));
  console.log(response);
  if (response.status !== 200) {
    return { ok: false, results: `${response.statusText} ${response.status}` };
  }
  const resp = await response.json();
  return { ok: true, results: resp };
};

export {
  postSaveUsers,
  postLogIn,
  getForgotPassword,
  postAccountConfirm,
  postChangePassword,
};
