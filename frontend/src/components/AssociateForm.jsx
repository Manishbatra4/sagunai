import React, { useContext, useEffect, useState } from "react";
import { AssociateContext } from "../context/associateContext";
import { SpecContext } from "../context/spec";

const AssociateForm = ({ close, data, type }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkill] = useState();
  const { addAssociate, updateAssociate } = useContext(AssociateContext);
  const { special } = useContext(SpecContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "new") {
      await addAssociate({ name, address, phone, skills });
    } else {
      await updateAssociate({ id: data.id, name, phone, address, skills });
    }
    close();
  };

  function handleChange(event) {
    setSkill({
      skill: Array.from(event.target.selectedOptions, (item) => item.value),
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-6 w-">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Associate Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={data ? data.name : ""}
            onChange={(e) => setName(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div class="mb-6 w-">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Associate Phone
          </label>
          <input
            type="text"
            id="phone"
            defaultValue={data ? data.phone : ""}
            onChange={(e) => setPhone(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+91 9711805565"
            required
          />
        </div>
        <div class="mb-6 w-">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Associate Address
          </label>
          <textarea
            id="address"
            defaultValue={data ? data.address : ""}
            onChange={(e) => setAddress(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="221b Baker street, London"
            required
          />
        </div>

        <div class="mb-6 w-">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Skills
          </label>
          <select
            multiple={true}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {special &&
              special.map((data) => (
                <option value={data.id}>{data.name}</option>
              ))}
          </select>
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

export default AssociateForm;
