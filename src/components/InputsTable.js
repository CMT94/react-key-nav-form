import React from "react";

import InputCellsForm from "./InputCellsForm";

const InputsTable = ({ data, clickCellHandler, focusedCellId }) => {
  return (
    <React.Fragment>
      {data.map((row) => (
        <InputCellsForm
          key={row.id}
          row={row}
          clickCellHandler={clickCellHandler}
          focusedCellId={focusedCellId}
        />
      ))}
    </React.Fragment>
  );
};

export default InputsTable;
