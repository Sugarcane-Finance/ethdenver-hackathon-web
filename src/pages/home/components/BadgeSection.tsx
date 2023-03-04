import { useAccount, useContractRead } from "wagmi";
import React from "react";
import Stack from "@mui/material/Stack";
import products from "../../../config/products";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import badgeAbi from "../../../contracts/badgeAbi";
import config from "../../../config";

const badges: {
  [badgeId: number]: { name: string; description: string; image: string };
} = {
  0: {
    name: "Market Maker",
    description: "LP",
    image:
      "https://sugarcane.infura-ipfs.io/ipfs/QmXtYiixkXAxKWqpqCEjnqWs5zZhFHQ2ntShZ28HwfwThg",
  },
  1: {
    name: "Staker",
    description: "Made your first investment by staking!",
    image:
      "https://sugarcane.infura-ipfs.io/ipfs/QmeaUmbzFdnszhDQkLxWah4tgLmFHrBVvtUpT7g6mGQrJt",
  },
  2: {
    name: "Lender",
    description: "Made your first investment by lending!",
    image:
      "https://sugarcane.infura-ipfs.io/ipfs/QmRvPfuMoNGevoNYVG6J3WwAMt3WYaPx6QWysyBiWUwJM1",
  },
};

const BadgeSection: React.FC<{}> = () => {
  const { address } = useAccount();

  const { data, isError, isLoading, error } = useContractRead({
    //@ts-ignore
    address: config.badgesSmartContractAddress,
    abi: badgeAbi,
    functionName: "balanceOfBatch",
    args: [
      [address, address, address],
      [0, 1, 2],
    ],
  });

  console.log({ data, isError, isLoading, error });

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
          My Badges
        </Typography>
      </Box>

      <Divider />
      <Box pt={4}>
        <Stack direction={"row"}>
          {Object.keys(badges).map((badgeId) => {
            const badge = badges[Number(badgeId)];
            return (
              <Box key={badgeId} sx={{ maxWidth: "120px" }}>
                <img
                  src={badge.image}
                  style={{
                    width: "100%",
                    opacity: 0.2,
                  }}
                  alt={badge.name}
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default BadgeSection;
