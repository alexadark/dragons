/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Loader from "react-spinners/BeatLoader"

export const Loading = () => {
  return (
    <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
      <Loader size={15} margin={2} />
    </Flex>
  )
}
