import React from "react";

const useKeyNavigation = (cellsIdList) => {
  const [userKeyCmd, setUserKeyCmd] = React.useState(undefined);
  const [cursor, setCursor] = React.useState(undefined);
  const [clickedCellId, setClickedCellId] = React.useState(undefined);
  const [focusedCellId, setFocusedCellId] = React.useState(undefined);

  const lastCellsListIndex = cellsIdList.length - 1;

  // click handler to init nav between cells
  const clickCellHandler = (cellId) => {
    setClickedCellId(cellId);
    updateCursorPosition(cellId);
  };

  // reset all relatives states
  const resetAll = () => {
    setUserKeyCmd(undefined);
    setCursor(undefined);
    setClickedCellId(undefined);
  };

  // blur handler when focuse is lost
  const blurHandler = () => {
    resetAll();
  };

  // update cursor position on cell click
  const updateCursorPosition = (clickedCellId) => {
    const tmpCursor = cellsIdList.findIndex((c) => c.cellId === clickedCellId);
    setCursor(tmpCursor);
  };

  // KEYBOARD EVENT // KEYBOARD EVENT // KEYBOARD EVENT // KEYBOARD EVENT // KEYBOARD EVENT //
  const keyDownHandler = React.useCallback(
    (ev) => {
      const key = ev.key;
      const shiftTriggered = ev.shiftKey;
      let tmpUserCmd;

      if (key) {
        if (key === "Tab" && !shiftTriggered) {
          tmpUserCmd = key;
          setCursor((prevState) =>
            prevState < lastCellsListIndex ? prevState + 1 : prevState
          );
        }
        if (key === "Tab" && shiftTriggered) {
          tmpUserCmd = "ShiftTab";
          setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
        }
        if (key === "ArrowUp") {
          tmpUserCmd = key;
          setCursor((prevState) =>
            prevState >= 4 ? prevState - 4 : prevState
          );
        }
        if (key === "ArrowDown") {
          tmpUserCmd = key;
          setCursor((prevState) =>
            prevState <= lastCellsListIndex - 4 ? prevState + 4 : prevState
          );
        }

        setUserKeyCmd({ cmd: tmpUserCmd });
      }
    },
    [lastCellsListIndex]
  );

  React.useEffect(() => {
    if (clickedCellId) {
      document.addEventListener("keydown", keyDownHandler);
      // eslint-disable-next-line no-restricted-globals
      return () => removeEventListener("keydown", keyDownHandler);
    }
  }, [clickedCellId, keyDownHandler]);
  // KEYBOARD EVENT // KEYBOARD EVENT // KEYBOARD EVENT // KEYBOARD EVENT // KEYBOARD EVENT //

  React.useEffect(() => {
    if (cursor || cursor === 0) {
      const tmpCellId = cellsIdList[cursor].cellId;
      setFocusedCellId(tmpCellId);
    }
  }, [cursor, cellsIdList, setFocusedCellId]);

  return {
    userKeyCmd,
    cursor,
    clickedCellId,
    focusedCellId,
    clickCellHandler,
    blurHandler,
  };
};

export default useKeyNavigation;
