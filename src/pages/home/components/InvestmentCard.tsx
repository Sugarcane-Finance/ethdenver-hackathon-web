import { useState, FC } from "react";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import { verifyMessage } from "ethers/lib/utils";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import {
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import productsConfig from "../../../config/products";
import Modal from "../../../components/modal/Modal";
import amountIsValid from "../../../utils/amountIsValid";

export interface Investment {
  chainId: number;
  protocolId: number;
  initialAmountUsd: number;
}

const aaveConfig = productsConfig[0]; // hard coded to be AAVE

interface Props {
  investment: Investment;
}

const InvestmentCard: FC<Props> = ({ investment }) => {
  const [showModal, setShowModal] = useState(false);
  const { name, logo, description } = aaveConfig;
  const { initialAmountUsd } = investment;

  return (
    <>
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
                Buy
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
    </>
  );
};

export default InvestmentCard;
