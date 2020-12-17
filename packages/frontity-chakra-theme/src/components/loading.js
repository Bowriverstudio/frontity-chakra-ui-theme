/**@jsx jsx */
import { Box, CircularProgress } from "@chakra-ui/react";
import { jsx } from "@emotion/core";

const Loading = () => (
  <Box
    mx="auto"
    p="24px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    minH="inherit"
  >
    <CircularProgress
      css={{
        "[data-progress-indicator]": {
          color: "#eca419"
        }
      }}
      isIndeterminate
    />
  </Box>
);

export default Loading;
