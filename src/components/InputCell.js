import React from "react";

import { Form } from "react-bootstrap";

const InputCell = ({
  cellId,
  cellValue,
  focusedCellId,
  onClickHandler,
  onChangeHandler,
}) => {
  const cellRef = React.useRef(null);

  React.useEffect(() => {
    if (focusedCellId) {
      if (cellRef && cellRef.current) {
        cellRef.current.focus();
        cellRef.current.select();
      }
    }
  }, [focusedCellId]);

  // disable default arrow keys control behaviour inside text input
  const defaultKeyDownHandler = (ev) => {
    if (
      ev.key === "ArrowUp" ||
      ev.key === "ArrowDown" ||
      ev.key === "ArrowRight" ||
      ev.key === "ArrowLeft"
    ) {
      ev.preventDefault();
    }
  };
  return (
    <Form.Control
      id={cellId}
      ref={cellId === focusedCellId ? cellRef : null}
      type="text"
      value={cellValue}
      tabIndex={0}
      onChange={onChangeHandler}
      onClick={onClickHandler}
      onKeyDown={defaultKeyDownHandler}
    />
  );
};

export default InputCell;
