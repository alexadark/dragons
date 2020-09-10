export const sharedButtonStyles = {
  boxSizing: "border-box !important",
  border: "2px solid",
  color: "text",
  cursor: "pointer",
  fontFamily: "heading",
  textTransform: "uppercase",
  fontSize: 24,
  variant: "transitions.m",

  lineHeight: "tight",
  py: 10,
  px: 50,
  borderRadius: 10,
  fontWeight: "bold",
  display: "inline-block",
  "&:hover": {
    color: "#fff !important",
  },

  // a: {
  //   color: "white",
  //   textDecoration: "none",
  //   "&:hover": {
  //     color: "#fff",
  //   },
  // },
  "&[disabled]": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
}

const primary = {
  ...sharedButtonStyles,
  borderColor: "primary",
  "&:hover": {
    bg: "primary",
  },
}
const secondary = {
  ...sharedButtonStyles,
  borderColor: "secondary",
  "&:hover": {
    bg: "secondary",
  },
}

export const buttons = {
  primary: {
    ...primary,
  },
  secondary: {
    ...secondary,
  },
}
