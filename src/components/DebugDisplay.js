import React from "react";

const styles = {
  container: {
    fontFamily: "Consolas",
    backgroundColor: "black",
    height: "fit-content",
  },
  section: {
    marginBottom: 8,
  },
  textTitle: {
    color: "#44ff2b",
    marginRight: 8,
  },
  textValue: {
    color: "#00eeff",
  },
};

const DebugDisplay = (props) => {
  return (
    <div
      className="mt-5 border border-secondary rounded w-50 p-2 d-flex flex-column"
      style={styles.container}
    >
      <div style={styles.section}>
        <span style={styles.textTitle}>Clicked cell id :</span>
        <span style={styles.textValue}>{`${props.clickedCellId}`}</span>
      </div>

      <div style={styles.section}>
        <span style={styles.textTitle}>Current cursor :</span>
        <span style={styles.textValue}>{`${props.cursor}`}</span>
      </div>

      <div style={styles.section}>
        <span style={styles.textTitle}>User key cmd :</span>
        <span style={styles.textValue}>{`${props.userKeyCmd?.cmd}`}</span>
      </div>

      <div style={styles.section}>
        <span style={styles.textTitle}>Focused cell id :</span>
        <span style={styles.textValue}>{`${props.focusedCellId}`}</span>
      </div>
    </div>
  );
};

export default DebugDisplay;
