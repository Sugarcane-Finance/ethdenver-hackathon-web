import React from "react";
import products from "../../../config/products";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import BadgeSection from "./BadgeSection";

const Portfolio: React.FC<{}> = () => {
  const [products, setProducts] = React.useState([]);

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={9}>
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
                      color: "#6f8e63",
                      fontSize: "24px",
                      textAlign: "center",
                      mt: "40px",
                    }}
                  >
                    No products yet.
                  </Typography>
                </>
              ) : undefined}

              {/* <Box pt={4}>
          {products.map((p, i) => {
            return <FinancialProductCard key={i} product={p} />;
          })}
        </Box> */}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <BadgeSection />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
