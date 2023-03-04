import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InvestmentCard, { Investment } from "./InvestmentCard";

const InvestmentsSections: React.FC<{}> = () => {
  const [investments] = React.useState<Investment[]>([
    {
      chainId: 1,
      protocolId: 1,
      initialAmountUsd: 1000,
    },
  ]);

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
      {investments.length === 0 ? (
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
      <Box pt={"32px"}>
        {investments.map((investment, i) => {
          return <InvestmentCard key={i} investment={investment} />;
        })}
      </Box>
    </Box>
  );
};

export default InvestmentsSections;
