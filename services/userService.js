const baseUrl = "https://web-production-b53e.up.railway.app/";

const postSaveUsers = async (username, email, password) => {
  const data = {
    username: username,
    email: email,
    password: password,
  };

  const response = await fetch(`${baseUrl}users/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-Type": "application/JSON" },
  });

  if (response.status !== 200) {
    throw new Error(`${response.statusText}--${response.text}`);
  }

  const dataResponse = {
    ok: true,
    results: await response.json(),
  };

  return dataResponse;
};

export { postSaveUsers };
