export const sharedButtonStyles = {
  boxSizing: "border-box !important",
  border: "1px solid",
  borderColor: "primary",
  color: "text",
  cursor: "pointer",
  fontFamily: "heading",
  textTransform: "uppercase",
  fontSize: 24,
  variant: "transitions.m",

  lineHeight: "tight",
  py: 12,
  px: 25,
  borderRadius: 10,
  fontWeight: 500,
  display: "inline-block",

  "&:hover": {
    borderColor: "secondary",
  },
  a: {
    color: "white",
    textDecoration: "none",
  },
  "&[disabled]": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
}

const primary = {
  ...sharedButtonStyles,
}

export const buttons = {
  primary: {
    ...primary,
  },
}
