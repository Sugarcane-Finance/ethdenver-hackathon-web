import { useState, FC } from "react";
import { useContractRead } from "wagmi";
import { BigNumber } from "ethers";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import Modal from "../../../components/modal/Modal";
import productsConfig from "../../../config/products";
import config from "../../../config";
import sugarcaneInvestmentRegistryAbi from "../../../contracts/sugarcaneInvestmentRegistryAbi";

const aaveConfig = productsConfig[0]; // hard coded to be AAVE

interface Props {
  investmentId: string;
}

const InvestmentCard: FC<Props> = ({ investmentId }) => {
  const [showModal, setShowModal] = useState(false);
  const { name, logo, description } = aaveConfig;

  const {
    data: _investment,
    // isError,
    // isLoading,
    // error,
  } = useContractRead({
    //@ts-ignore
    address: config.sugarcaneInvestmentRegistryAddress,
    abi: sugarcaneInvestmentRegistryAbi,
    functionName: "investmentDetails",
    args: [investmentId],
  });

  const initialAmountUsd = _investment
    ? BigNumber.from((_investment as any[])[2]).toNumber()
    : null;

  return (
    <Box mb={2} mr={2}>
      <Card sx={{ width: 300, pt: 2, textAlign: "center" }}>
        <CardContent>
          <Box sx={{ textAlign: "center" }} mb={2}>
            <img
              src={logo}
              alt={name}
              style={{
                width: 100,
                height: 100,
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Amount: ${initialAmountUsd}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{ maxWidth: "300px", mt: 4 }}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Buy More
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{ maxWidth: "300px", mt: 4 }}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Sell
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Modal open={showModal} setOpen={setShowModal}>
        <Box>
          <Box sx={{ textAlign: "center" }} mb={2}>
            <img
              src={logo}
              alt={name}
              style={{
                width: 50,
                height: 50,
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography textAlign={"center"} variant="h3" mb={2}>
            {name}
          </Typography>
          <Divider />
          <Typography textAlign={"center"} variant="body1" mt={2} mb={10}>
            {description}
          </Typography>

          <Box sx={{ textAlign: "center" }} mb={2}>
            <FormControl fullWidth sx={{ maxWidth: "300px", mb: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={initialAmountUsd}
                disabled={true}
              />
            </FormControl>

            <Divider sx={{ mt: 2, mb: 4 }} />

            <Box sx={{ maxWidth: "300px", margin: "auto" }}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ maxWidth: "300px", height: "56px" }}
                disabled={true}
                onClick={() => {}}
              >
                Coming soon!
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default InvestmentCard;
