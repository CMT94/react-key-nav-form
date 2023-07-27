import React from "react";

import { MOCK_DATA } from "./data/mock-data";

import { Container } from "react-bootstrap";

import InputsTable from "./components/InputsTable";
import DebugDisplay from "./components/DebugDisplay";

import useKeyNavigation from "./hooks/useKeyNavigation";

function App() {
  const [cellsIdList, setCellsIdList] = React.useState([]);

  const { userKeyCmd, cursor, clickedCellId, focusedCellId, clickCellHandler } =
    useKeyNavigation(cellsIdList);

  const debugData = {
    userKeyCmd,
    cursor,
    clickedCellId,
    focusedCellId,
  };

  React.useEffect(() => {
    const tmpCellsIdList = [];
    MOCK_DATA.forEach((row) =>
      tmpCellsIdList.push(
        row.unit,
        row.quantity,
        row.unit_price,
        row.total_price
      )
    );

    setCellsIdList(tmpCellsIdList);
  }, []);

  return (
    <Container
      fluid
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputsTable
        data={MOCK_DATA}
        clickCellHandler={clickCellHandler}
        focusedCellId={focusedCellId}
      />
      <DebugDisplay {...debugData} />
    </Container>
  );
}

export default App;
