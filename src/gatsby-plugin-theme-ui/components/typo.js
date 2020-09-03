import { rem } from "polished"

export const fonts = {
  body: "sans-serif",
  heading: "sans-serif",
}

export const fontWeights = {
  body: 400,
  heading: "bold",
  bold: 700,
  black: 900,
}

export const fontSizes = {
  xxs: rem("12px"),
  xs: rem("14px"),
  s: rem("16px"),
  m: rem("18px"),
  l: rem("24px"),
  xl: rem("32px"),
  xxl: rem("48px"),
  Big: rem("64px"),
  Bigger: rem("96px"),
}

export const lineHeights = {
  body: 1.5,
  heading: 1.1,
  loose: 2,
  none: 1,
}

const heading = {
  // fontFamily: "heading",
  // lineHeight: "heading",
  // fontWeight: "heading",
  // color: "text",
  // a: {
  //   borderBottom: "none",
  // },
}

export const a = {
  variant: "transitions.m",
  color: "black",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    color: "secondary",
  },
}

export const p = {
  fontSize: ["s"],
  lineHeight: "body",
}

export const h1 = {
  ...heading,
  fontSize: ["xl", "xxl"],
  mt: "xxs",
}
export const h2 = {
  ...heading,
  fontSize: ["l", "xl"],
  mt: "xxs",
}

export const h3 = {
  ...heading,
  fontSize: ["m", "l"],
  mt: "xs",
}
export const h4 = {
  ...heading,
  fontSize: ["s", "m"],
}

export const h5 = {
  ...heading,
  fontSize: "xs",
}
export const h6 = {
  ...heading,
  fontSize: "xs",
  color: "muted",
  mb: "xxs",
}
export const blockquote = {
  // fontFamily: "heading",
  // fontWeight: "bold",
  // fontSize: "l",
  // lineHeight: 1.6,
  // ml: 20,
  // pt: 15,
  // pb: 0,
  // mb: 10,
}

export const base = {
  fontSize: "s",
  color: "text",
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
}
