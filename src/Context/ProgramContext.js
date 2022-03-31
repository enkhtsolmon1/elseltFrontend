import React, { useEffect, useState } from "react";
import axios from "../Config/AxiosElselt";
const ProgramContext = React.createContext();

const initalState = {
  programs: [],
  success: false,
  pagination: {},
};
const initalState2 = {
  success: false,
  programLessons: [],
  pagination: {},
};
export const ProgramStore = (props) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    LoadPrograms();
    AllDisc();
  }, []);
  const [programState, setProgramState] = useState(initalState);
  const [progLessonState, setprogLessonState] = useState(initalState2);
  const [alert, setAlert] = useState({ value: false, type: "" });
  const [discState, setDiscState] = useState({
    success: false,
    disciplines: [],
  });
  const getDiscProgramm = (discID) => {
    setProgramState({ ...initalState });
    axios
      .get(`programs/${discID}/disc/1`)
      .then((res) => {
        setProgramState({ ...res.data });
      })
      .catch((error) => console.log(error.response.data.error));
  };
  const AllDisc = () => {
    setProgramState({ ...initalState });
    axios
      .get(`discipline`)
      .then((res) => {
        setDiscState({ ...res.data });
      })
      .catch((error) => console.log(error.response.data.error));
  };
  const updateProgram = ({ id, editProgram }) => {
    setAlert({ value: false, type: "" });
    axios
      .put(`programs/${id}`, editProgram, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        DepLoadPrograms(userId);
        setAlert({ value: true, type: "Амжилттай" });
      })
      .catch((error) =>
        setAlert({ value: true, type: error.response.data.error })
      );
  };
  const LoadProgLessons = () => {
    axios
      .get(`progLessons?limit=100`)
      .then((res) => {
        setprogLessonState({ ...res.data });
      })
      .catch((err) => console.log(err));
  };
  const LoadPrograms = () => {
    setProgramState({ ...initalState });
    axios
      .get(`programs?isElselt=1`)
      .then((res) => {
        setProgramState({ ...res.data });
      })
      .catch((err) => console.log(err));
  };
  const getTags = (tagname) => {
    axios
      .get(`programs?tags=${tagname}`)
      .then((res) => {
        setProgramState({ ...res.data });
      })
      .catch((err) => console.log(err));
  };
  const DepLoadPrograms = (depId) => {
    axios
      .get(`programs?department_id=${depId}&limit=100`)
      .then((res) => {
        setProgramState({ ...res.data });
      })
      .catch((err) => console.log(err));
  };
  return (
    <ProgramContext.Provider
      value={{
        getDiscProgramm,
        discState,
        setDiscState,
        updateProgram,
        alert,
        setAlert,
        programState,
        DepLoadPrograms,
        LoadPrograms,
        progLessonState,
        LoadProgLessons,
        getTags,
      }}
    >
      {props.children}
    </ProgramContext.Provider>
  );
};
export default ProgramContext;
