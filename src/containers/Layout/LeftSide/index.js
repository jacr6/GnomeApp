import React from "react"
import { Slide, Box } from "native-base"
import { StoreContext } from "../../../context"
import Menu from "../Menu"
export const Example = () => {
  const context = React.useContext(StoreContext)
  const { open } = context.open
  return ( 
    <>
      <Slide in={open} placement="left">
        <Box
          p={10}
          _text={{
            color: "white",
          }}
          bg="teal.400"
          rounded="md"
        >
        <Menu />
        </Box>
      </Slide>
    </>
  )
}
export default Example



