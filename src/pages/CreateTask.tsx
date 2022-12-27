import axios from "axios";
import React, { useCallback, useState } from "react";

export default function CreateTask() {
  const [task, setTask] = useState({
    number: 0,
    title: "",
    description: "",
    status: false,
  });
  const [isLoading, setIsloading] = useState(false);

  const handleChange = useCallback((value: string | boolean, name: string) => {
    setTask((prev) => ({ ...prev, [name]: value }));
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
              task
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
          <label htmlFor="">title</label>
          <input
            type="text"
            name=""
            id=""
            value={task.title}
            onChange={(e) => handleChange(e.target.value, "title")}
          />
          <br />
          <label htmlFor="">description</label>
          <input
            type="text"
            name=""
            id=""
            value={task.description}
            onChange={(e) => handleChange(e.target.value, "description")}
          />
          <br />
          <label htmlFor="">Status</label>
          <input
            type="checkbox"
            checked={task.status}
            onChange={(e) => handleChange(e.target.checked, "status")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
