import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainWindow2 from "../components/MainWindow2";
import { setStart, setCrt, setShutDown } from "../modules/onandoffs";

function MainWindowContainer() {
  const { start, crt, shut } = useSelector((state) => ({
    start: state.onandoffs.start,
    crt: state.onandoffs.crt,
    shut: state.onandoffs.shut,
  }));

  console.log(start, crt, shut);

  const dispatch = useDispatch();

  const onSetStart = () => dispatch(setStart());
  const onSetCrt = () => dispatch(setCrt());
  const onSetShutDown = () => dispatch(setShutDown());

  return (
    <MainWindow2
      onSetStart={onSetStart}
      onSetCrt={onSetCrt}
      onSetShutDown={onSetShutDown}
    />
  );
}

export default MainWindowContainer;
