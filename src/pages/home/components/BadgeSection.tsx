import { useAccount, useContractRead } from "wagmi";
import React from "react";

import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import badgeAbi from "../../../contracts/badgeAbi";
import config from "../../../config";

const badges: {
  [badgeId: number]: { name: string; description: string; image: string };
} = {
  0: {
    name: "Market Maker",
    description: "Made your first investment by providing liquidity!",
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

  const {
    data: badgeBalances,
    isError,
    isLoading,
    error,
  } = useContractRead({
    //@ts-ignore
    address: config.badgesSmartContractAddress,
    abi: badgeAbi,
    functionName: "balanceOfBatch",
    args: [
      [address, address, address],
      [0, 1, 2],
    ],
  });

  // console.log({ badgeBalances, isError, isLoading, error });

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
        <Stack direction={"row"} flexWrap="wrap">
          {Object.keys(badges)
            .sort((a, b) => {
              const aId = Number(a);
              const aBalance = badgeBalances && (badgeBalances as any[])[aId];
              const aOwns = aBalance && aBalance?._hex !== "0x00";

              const bId = Number(b);
              const bBalance = badgeBalances && (badgeBalances as any[])[bId];
              const bOwns = bBalance && bBalance?._hex !== "0x00";

              if (aOwns && !bOwns) {
                return -1;
              } else if (bOwns && !aOwns) {
                return 1;
              } else {
                return bId > aId ? -1 : 1;
              }
            })
            .map((badgeId) => {
              const id = Number(badgeId);
              const badge = badges[id];
              const balance = badgeBalances && (badgeBalances as any[])[id];
              const owns = balance && balance?._hex !== "0x00";

              return (
                <Tooltip
                  key={badgeId}
                  title={badge.description}
                  PopperProps={{
                    sx: {
                      "> div": {
                        fontSize: "18px",
                        textAlign: "center",
                        padding: 2,
                        letterSpacing: "1px",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: {
                        xs: "80px",
                        sm: "80px",
                        md: "100px",
                        lg: "100px",
                      },
                      cursor: "default",
                    }}
                  >
                    <img
                      src={badge.image}
                      style={{
                        width: "100%",
                        ...(owns ? {} : { opacity: 0.2 }),
                      }}
                      alt={badge.name}
                    />
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "14px",
                        ...(owns ? {} : { opacity: 0.2 }),
                      }}
                    >
                      {badge.name}
                    </Typography>
                  </Box>
                </Tooltip>
              );
            })}
        </Stack>
      </Box>
    </Box>
  );
};

export default BadgeSection;
