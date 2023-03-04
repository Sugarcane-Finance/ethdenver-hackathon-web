import React from "react";
import products from "../../../config/products";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Portfolio: React.FC<{}> = () => {
  const [products] = React.useState([]);

  return (
    <Box mb={8}>
      <Box
        mb={1}
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
          }}
        >
          My Portfolio
        </Typography>
      </Box>
      <Divider />
      {products.length === 0 ? (
        <>
          <Typography
            sx={{
              color: "#a5ba9d",
              fontSize: "24px",
              textAlign: "center",
              mt: "40px",
            }}
          >
            No products yet.
          </Typography>
        </>
      ) : undefined}
    </Box>
  );
};

export default Portfolio;
