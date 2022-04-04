import React, { useState, useEffect } from "react";
import axios from "../Config/AxiosElselt";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const ElseltContext = React.createContext();

const initialState = {
  success: false,
  masters: [],
  pagination: {},
};

export const ElseltStore = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();

  useEffect(() => {
    LoadAddress();
    // AllElselt();
    // allBachelors();
  }, []);

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

  const alertCall = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const LoadAddress = () => {
    axios
      .get(`address`)
      .then((res) => {
        setaddressState({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const getBachelor = (id, token) => {
    axios
      .get(`bachelors/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBachelors({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const LoginBachelor = (data) => {
    axios
      .post(`bachelors/login`, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setBacheUser({ ...response.data });
        getBachelor(response.data.user._id, response.data.token);
        alertCall("Амжилттай", "info");
        navigate("/profile");
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
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
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const updateBachelors = ({ id, editBachelors }) => {
    console.log(id, editBachelors);
    axios
      .put(`bachelors/${id}`, editBachelors, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${bacheUser.token}`,
        },
      })
      .then((res) => {
        alertCall("Амжилттай", "info");
        getBachelor(id, bacheUser.token);
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const addBachelor = (newBachelor) => {
    axios
      .post(`bachelors`, newBachelor, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${bacheUser.token}`,
        },
      })
      .then((response) => {
        alertCall("Амжилттай", "info");
        LoginBachelor({
          password: newBachelor.password,
          pupil_id: newBachelor.pupil_id,
        });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
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
      .catch((error) => alertCall(error.response.data.error, "error"));
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
      .catch((error) => alertCall(error.response.data.error, "error"));
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
        addressState,
      }}
    >
      {props.children}
    </ElseltContext.Provider>
  );
};
export default ElseltContext;
