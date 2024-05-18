export function setAuthorization(authResponse) {
  localStorage.setItem("auth", JSON.stringify(authResponse));
}

export function checkIfLoggedIn() {
  return localStorage.getItem("auth") !== null;
}

export function logout() {
  localStorage.removeItem("auth");
}

export function getAccessToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth.accessToken;
}
