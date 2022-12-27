import React, { useCallback, useState } from "react";
import axios from "axios";

export default function Register() {
  const [auth, setAuth] = useState({ username: "", password: "", email: "" });
  const [isLoading, setIsloading] = useState(false);

  const handleChange = useCallback((value: string, name: string) => {
    setAuth((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsloading(true)

          try {
            const res = await axios.post(
              "https://task.samid.uz/v1/user/sign-up",
              auth
            );

            // TODO: update global state
            console.log(res);
          } catch (error) {
          } finally {
            setIsloading(false);
          }
        }}
      >
        <div>
          <label>username:</label>
          <input
            type="text"
            name=""
            id=""
            value={auth.username}
            onChange={(e) => handleChange(e.target.value, "username")}
          />
          <br />
          <label>Password:</label>
          <input
            type="text"
            name=""
            id=""
            value={auth.password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name=""
            id=""
            value={auth.email}
            onChange={(e) => handleChange(e.target.value, "email")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isLoading && <h1>Loading</h1>}
    </div>
  );
}
