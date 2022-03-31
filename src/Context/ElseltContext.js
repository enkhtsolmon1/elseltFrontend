import React, { useState, useEffect } from "react";
import axios from "../Config/AxiosElselt";
const ElseltContext = React.createContext();

const initialState = {
  success: false,
  masters: [],
  pagination: {},
};

export const ElseltStore = (props) => {
  useEffect(() => {
    LoadAddress();
    // AllElselt();
    // allBachelors();
  }, []);
  const [alert, setAlert] = useState({ value: false, type: "" });
  const [bacheUser, setBacheUser] = useState({
    success: false,
    token: "",
    user: {},
  });
  const [elseltState, setElseltState] = useState(initialState);
  const [addressState, setaddressState] = useState({});

  const [bachelors, setBachelors] = useState({
    success: false,
    bachelor: [],
    pagination: {},
  });
  const [loading, setLoading] = useState(false);
  const LoadAddress = () => {
    axios
      .get(`address`)
      .then((res) => {
        setaddressState({ ...res.data });
      })
      .catch((err) => console.log(err));
  };
  const getBachelor = (id) => {
    axios
      .get(`bachelors/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${bacheUser.token}`,
        },
      })
      .then((res) => {
        setBachelors({ ...res.data });
      })
      .catch((error) => {
        setAlert({ value: true, type: error.response.data.error });
      });
  };
  const LoginBachelor = (data) => {
    setAlert({ value: false, type: "" });
    axios
      .post(`bachelors/login`, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setBacheUser({ ...response.data });
        getBachelor(response.data.user._id);
        setAlert({ value: true, type: "Амжилттай" });
      })
      .catch((error) =>
        setAlert({ value: true, type: error.response.data.error })
      );
  };

  const allBachelors = () => {
    setBacheUser({ success: false, token: "", user: {} });
    axios
      .get(`bachelors`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${bacheUser.token}`,
        },
      })
      .then((res) => {
        setBachelors({ ...res.data });
      })
      .catch((error) => console.log(error.response.data.error));
  };
  const updateBachelors = ({ id, editBachelors }) => {
    setAlert({ value: false, type: "" });
    axios
      .put(`bachelors/${id}`, editBachelors, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${bacheUser.token}`,
        },
      })
      .then((response) => {
        setAlert({ value: true, type: "Амжилттай" });
        getBachelor(id);
      })
      .catch((error) =>
        setAlert({ value: true, type: error.response.data.error })
      );
  };
  const addBachelor = (newBachelor) => {
    setAlert({ value: false, type: "" });
    axios
      .post(`bachelors`, newBachelor, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${bacheUser.token}`,
        },
      })
      .then((response) => {
        setAlert({ value: true, type: "Амжилттай" });
        LoginBachelor({
          password: newBachelor.password,
          pupil_id: newBachelor.pupil_id,
        });
      })
      .catch((error) =>
        setAlert({ value: true, type: error.response.data.error })
      );
  };
  const AllElselt = () => {
    axios
      .get(`masters`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setElseltState({ ...res.data });
      })
      .catch((error) => console.log(error.response.data.error));
  };
  const addElselt = (newElselt) => {
    axios
      .post(`masters`, newElselt, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${bacheUser.token}`,
        },
      })
      .then((response) => {
        setLoading(true);
      })
      .catch((error) => console.log(error.response.data.error));
  };
  return (
    <ElseltContext.Provider
      value={{
        getBachelor,
        updateBachelors,
        LoginBachelor,
        bacheUser,
        setBacheUser,
        addBachelor,
        elseltState,
        addElselt,
        loading,
        bachelors,
        allBachelors,
        alert,
        setAlert,
        addressState,
      }}
    >
      {props.children}
    </ElseltContext.Provider>
  );
};
export default ElseltContext;
