import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // setUser telah didefiniskan di awal sebagai null, ketika ingin meninsialisasi lagi kedalam setUser, maka buat sebuah <> didalam useState, sehingga nilai dari useState tersebut menjadi dua, yaitu AuhtUser dan null, initial valuenya null, tetapi kedepan bisa menjadi AuthUser.
  const handleLogin = () => {
    setUser({
      name: "Kevin",
      email: "kevin@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
