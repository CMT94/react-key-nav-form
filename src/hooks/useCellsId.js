import React from "react";

const useCellsId = (data) => {
  const [cellsIdList, setCellsIdList] = React.useState([]);

  React.useEffect(() => {
    const tmpCellsList = [];

    data.forEach((row) => {
      tmpCellsList.push(
        row.unit,
        row.quantity,
        row.unit_price,
        row.total_price
      );
    });

    setCellsIdList(tmpCellsList);
  }, [data]);

  return {
    cellsIdList,
  };
};

export default useCellsId;
