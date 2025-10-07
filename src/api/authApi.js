export const fakeUsers = [
  { id: 1, userId: "push", password: "push", name: "QCOP User" },
  { id: 2, userId: "admin01", password: "Admin@123", name: "Admin User" },
];

export async function loginApi({ userId, password }) {
  await new Promise((r) => setTimeout(r, 800)); // simulate delay
  const user = fakeUsers.find(
    (u) => u.userId === userId && u.password === password
  );
  if (user) {
    return {
      ok: true,
      token: "fake-jwt-token-" + user.id,
      user,
    };
  }
  return {
    ok: false,
    error: user ? "Incorrect password" : "Invalid User ID or Password",
  };
}

// ✅ Helper to check if user is logged in
export function isLoggedIn() {
  return !!sessionStorage.getItem("qcop.token");
}
