import React, { createContext, useEffect, useState } from "react";
import api from "../lib/axios";

export const SpecContext = createContext();

const SpecProvider = ({ children }) => {
  const [special, setSpecial] = useState();

  useEffect(() => {
    api
      .get("/special/")
      .then((res) => {
        setSpecial(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addSpecial = async (data) => {
    api
      .post("/special/add", {
        ...data,
      })
      .then((res) => {
        window.location.href = "/specialization";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateSpecial = async (data) => {
    api
      .post(`/special/update/${data.id}`, {
        name: data.name,
      })
      .then((res) => {
        window.location.href = "/specialization";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteSpecial = async (id) => {
    api
      .post(`/special/delete/${id}`)
      .then((res) => {
        window.location.href = "/specialization";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SpecContext.Provider
      value={{ special, addSpecial, updateSpecial, deleteSpecial }}
    >
      {children}
    </SpecContext.Provider>
  );
};

export default SpecProvider;
