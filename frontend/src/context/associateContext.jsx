import React, { createContext, useEffect, useState } from "react";
import api from "../lib/axios";

export const AssociateContext = createContext();

const AssociateProvider = ({ children }) => {
  const [associate, setAssociate] = useState();

  useEffect(() => {
    api
      .get("/associate/")
      .then((res) => {
        setAssociate(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addAssociate = async (data) => {
    api
      .post("/associate/add", {
        ...data,
      })
      .then((res) => {
        window.location.href = "/associate";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateAssociate = async (data) => {
    api
      .post(`/associate/update/${data.id}`, {
        name: data.name,
        phone: data.phone,
        address: data.address,
        skills: data.skills,
      })
      .then((res) => {
        window.location.href = "/associate";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteAssociate = async (id) => {
    api
      .post(`/associate/delete/${id}`)
      .then((res) => {
        window.location.href = "/associate";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AssociateContext.Provider
      value={{ associate, addAssociate, updateAssociate, deleteAssociate }}
    >
      {children}
    </AssociateContext.Provider>
  );
};

export default AssociateProvider;
