/** @jsx jsx */
import { jsx } from "theme-ui"

export const ProgressBar = ({ progress }) => {
  return (
    <div
      className="progressBar"
      sx={{
        width: 388,

        bg: "#fff",
        borderRadius: 14,
        height: 36,
        overflow: "hidden",
      }}
    >
      <div
        className="progress"
        sx={{
          bg: "orange",
          width: progress,
          height: "100%",
          variant: "transitions.m",
        }}
      ></div>
    </div>
  )
}
