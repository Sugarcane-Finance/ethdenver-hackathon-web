import React from "react";
import { useAccount, useContractRead } from "wagmi";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import InvestmentCard from "./InvestmentCard";

import config from "../../../config";
import sugarcaneInvestmentRegistryAbi from "../../../contracts/sugarcaneInvestmentRegistryAbi";

const InvestmentsSections: React.FC<{}> = () => {
  const { address } = useAccount();
  const {
    data: _investments,
    isError,
    isLoading,
    error,
  } = useContractRead({
    //@ts-ignore
    address: config.sugarcaneInvestmentRegistryAddress,
    abi: sugarcaneInvestmentRegistryAbi,
    functionName: "investments",
    args: [address],
  });

  console.log({ _investments, isError, isLoading, error });

  const investments = (_investments || []) as { _hex: string }[];

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
          My Assets
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
          console.log({ investment });
          return <InvestmentCard key={i} investmentId={investment._hex} />;
        })}
      </Box>
    </Box>
  );
};

export default InvestmentsSections;
