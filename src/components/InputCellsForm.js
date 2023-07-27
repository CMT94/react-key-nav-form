import React from "react";

import { Form, Col, Row } from "react-bootstrap";

import InputCell from "./InputCell";

const InputCellsForm = ({ row, clickCellHandler, focusedCellId }) => {
  const [formInputCell, setFormInputCell] = React.useState({
    unit: row.unit.value,
    quantity: row.quantity.value,
    unitPrice: row.unit_price.value,
    totalPrice: row.total_price.value,
  });

  const changeInputValueHandler = (cellType, inputValue) => {
    switch (cellType) {
      case "unit":
        setFormInputCell((prevState) => ({
          ...prevState,
          unit: inputValue,
        }));
        break;
      case "quantity":
        setFormInputCell((prevState) => ({
          ...prevState,
          quantity: inputValue,
        }));
        break;
      case "unit_price":
        setFormInputCell((prevState) => ({
          ...prevState,
          unitPrice: inputValue,
        }));
        break;
      case "total_price":
        setFormInputCell((prevState) => ({
          ...prevState,
          totalPrice: inputValue,
        }));
        break;

      default:
        break;
    }
  };
  return (
    <Form onSubmit={(ev) => ev.preventDefault()}>
      <Row
        style={{
          marginTop: 8,
          marginBottom: 8,
        }}
      >
        <Col xl={3} lg={3} md={3} sm={3}>
          <InputCell
            cellId={row.unit.cellId}
            cellValue={formInputCell.unit}
            focusedCellId={focusedCellId}
            onClickHandler={() => clickCellHandler(row.unit.cellId)}
            onChangeHandler={(ev) =>
              changeInputValueHandler("unit", ev.target.value)
            }
          />
        </Col>

        <Col xl={3} lg={3} md={3} sm={3}>
          <InputCell
            cellId={row.quantity.cellId}
            cellValue={formInputCell.quantity}
            focusedCellId={focusedCellId}
            onClickHandler={() => clickCellHandler(row.quantity.cellId)}
            onChangeHandler={(ev) =>
              changeInputValueHandler("quantity", ev.target.value)
            }
          />
        </Col>
        <Col xl={3} lg={3} md={3} sm={3}>
          <InputCell
            cellId={row.unit_price.cellId}
            cellValue={formInputCell.unitPrice}
            focusedCellId={focusedCellId}
            onClickHandler={() => clickCellHandler(row.unit_price.cellId)}
            onChangeHandler={(ev) =>
              changeInputValueHandler("unit_price", ev.target.value)
            }
          />
        </Col>

        <Col xl={3} lg={3} md={3} sm={3}>
          <InputCell
            cellId={row.total_price.cellId}
            cellValue={formInputCell.totalPrice}
            focusedCellId={focusedCellId}
            onClickHandler={() => clickCellHandler(row.total_price.cellId)}
            onChangeHandler={(ev) =>
              changeInputValueHandler("total_price", ev.target.value)
            }
          />
        </Col>
      </Row>
    </Form>
  );
};

export default InputCellsForm;
