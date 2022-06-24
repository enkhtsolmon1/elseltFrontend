import React, { useEffect, useState } from "react";
import axios from "../Config/AxiosElselt";
import { useSnackbar } from "notistack";

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
  const { enqueueSnackbar } = useSnackbar();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  useEffect(() => {}, []);
  const [programState, setProgramState] = useState(initalState);
  const [progLessonState, setprogLessonState] = useState(initalState2);
  const [discState, setDiscState] = useState({
    success: false,
    disciplines: [],
  });
  const [program, setProgam] = useState({
    success: false,
    program: {},
  });

  const alertCall = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const getDiscProgramm = (discID) => {
    setProgramState({ ...initalState });
    axios
      .get(`programs/${discID}/disc/1`)
      .then((res) => {
        setProgramState({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const AllDisc = () => {
    setProgramState({ ...initalState });
    axios
      .get(`discipline`)
      .then((res) => {
        setDiscState({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const updateProgram = ({ id, editProgram }) => {
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
        alertCall("Амжилттай", "info");
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const LoadProgLessons = () => {
    axios
      .get(`progLessons?limit=100`)
      .then((res) => {
        setprogLessonState({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const LoadPrograms = () => {
    setProgramState({ ...initalState });
    axios
      .get(`programs?isElselt=1`)
      .then((res) => {
        setProgramState({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const getTags = (tagname) => {
    axios
      .get(`programs?tags=${tagname}&isElselt=1`)
      .then((res) => {
        setProgramState({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const DepLoadPrograms = (depId) => {
    axios
      .get(`programs?department_id=${depId}&limit=100`)
      .then((res) => {
        setProgramState({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  const getProgram = (id) => {
    axios
      .get(`programs/${id}`)
      .then((res) => {
        setProgam({ ...res.data });
      })
      .catch((error) => alertCall(error.response.data.error, "error"));
  };
  return (
    <ProgramContext.Provider
      value={{
        program,
        getProgram,
        getDiscProgramm,
        discState,
        setDiscState,
        updateProgram,
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
