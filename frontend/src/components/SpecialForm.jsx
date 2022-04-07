import React, { useContext, useEffect, useState } from "react";
import { SpecContext } from "../context/spec";

const SpecialForm = ({ close, data, type }) => {
  const [name, setName] = useState("");
  const { addSpecial, updateSpecial } = useContext(SpecContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "new") {
      await addSpecial({ name });
    } else {
      await updateSpecial({ id: data.id, name });
    }
    close();
  };

  useEffect(() => {
    console.log(type);
    console.log(data);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-6 w-">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Specification Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={data ? data.name : ""}
            onChange={(e) => setName(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="React.js"
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SpecialForm;
