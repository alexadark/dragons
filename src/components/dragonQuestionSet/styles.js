export const radioStyles = {
  ".radioContainer": {
    position: "relative",
    width: 90,
    height: 35,
    mr: 15,
  },
  "label, input": {
    position: "absolute",
    // top: 0,
    // left: 0,
    width: "100%",
    height: "100%",
  },
  label: {
    borderRadius: 14,
    border: "2px solid",
    borderColor: "borderColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    pointerEvents: "none",
    fontSize: 14,
  },
  input: {
    "&:checked": {
      "&+label": {
        bg: "green",
        borderColor: "green",
        color: "#fff",
      },
    },
  },
}
