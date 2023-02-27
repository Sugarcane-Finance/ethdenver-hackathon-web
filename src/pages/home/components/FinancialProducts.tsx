import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const FinancialProducts: React.FC<{}> = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
          }}
        >
          Assets
        </Typography>
        <Divider />
      </Box>
    </>
  );
};

export default FinancialProducts;
