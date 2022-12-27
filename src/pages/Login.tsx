import axios from "axios";
import React, { useCallback, useState } from "react";

export default function Login() {
  const [auth, setAuth] = useState({ username: "", password: "" });
  const [isLoading, setIsloading] = useState(false);

  const handleChange = useCallback((value: string, name: string) => {
    setAuth((prev) => ({ ...prev, [name]: value }));
  }, []);
  return (
    <div>
      <h1>Login</h1>
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          setIsloading(true);

          try {
            const res = await axios.post(
              "https://task.samid.uz/v1/user/sign-in",
              auth
            );

            // TODO: update global state
            console.log(res);
            localStorage.setItem("token", res.data.token);
          } catch (error) {
          } finally {
            setIsloading(false);
          }
        }}
      >
        <div>
          <label htmlFor="">username</label>
          <input
            type="text"
            name=""
            id=""
            value={auth.username}
            onChange={(e) => handleChange(e.target.value, "username")}
          />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="text"
            name=""
            id=""
            value={auth.password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
