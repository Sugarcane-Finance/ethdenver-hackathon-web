import { useState, FC } from "react";

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

import Modal from "../../../components/modal/Modal";
import { Product } from "../../../config/products";
import encryptCardDetails from "../../../utils/encryptCardDetails";
import saveCardToCircle from "../../../utils/saveCardToCircle";

const amountIsValid = (amount: string) => {
  if (amount.trim() === "") {
    return false;
  } else if (isNaN(Number(amount))) {
    return false;
  } else if (Number(amount) <= 0) {
    return false;
  }
  return true;
};

interface Props {
  product: Product;
}

const FinancialProductCard: FC<Props> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("1000");
  const [ccNumber, setCcNumber] = useState("4007400000000007");
  const [cvv, setCvv] = useState("123");
  const [date, setDate] = useState("12/2026");
  const [isSubmittingAmount, setIsSubmittingAmount] = useState(false);
  const { name, yield: yieldPercent, description, risk, logo } = product;

  const handleSubmit = async () => {
    if (!amountIsValid(amount)) {
      return;
    }
    setIsSubmittingAmount(true);
    try {
      const encryptor = await encryptCardDetails();
      const res = await encryptor({
        number: ccNumber,
        cvv,
      });

      console.log({ res });

      const cardRes = await saveCardToCircle({
        keyId: res.keyId,
        encryptedData: res.encryptedData,
      });

      console.log({ cardRes });

      // TODO make payment on card id
    } catch (e: any) {
      window.alert(e?.message || e);
    }
    setIsSubmittingAmount(false);
  };

  return (
    <>
      <Card
        sx={{ width: 300, cursor: "pointer", pt: 2 }}
        onClick={() => setShowModal(true)}
      >
        <CardContent>
          <Box sx={{ textAlign: "center" }} mb={2}>
            <img
              src={logo}
              alt={name}
              style={{
                width: 200,
                height: 200,
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {yieldPercent} returns
          </Typography>
          <Typography
            sx={{
              mb: 1.5,
            }}
          >
            Risk:{" "}
            <span
              style={{
                color:
                  risk === "High"
                    ? "red"
                    : risk === "Medium"
                    ? "gray"
                    : "green",
              }}
            >
              {risk}
            </span>
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={showModal}
        setOpen={(o: boolean) => {
          if (isSubmittingAmount) return;
          setShowModal(o);
        }}
      >
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
                value={amount}
                disabled={isSubmittingAmount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </FormControl>

            <Divider sx={{ mt: 2, mb: 4 }} />

            <FormControl fullWidth sx={{ maxWidth: "300px", mb: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Card Number
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <CreditCardIcon />
                  </InputAdornment>
                }
                label="Card Number"
                value={ccNumber}
                disabled={isSubmittingAmount}
                onChange={(e) => {
                  setCcNumber(e.target.value);
                }}
              />
            </FormControl>
            <Box sx={{ maxWidth: "300px", margin: "auto" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Expiry Date
                    </InputLabel>
                    <OutlinedInput
                      label="Expiry Date"
                      value={date}
                      disabled={isSubmittingAmount}
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      CVV
                    </InputLabel>
                    <OutlinedInput
                      label="CVV"
                      value={cvv}
                      disabled={isSubmittingAmount}
                      onChange={(e) => {
                        setCvv(e.target.value);
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ maxWidth: "300px", height: "56px" }}
                disabled={!amountIsValid(amount) || isSubmittingAmount}
                onClick={handleSubmit}
              >
                Invest
              </Button>
            </Box>
            {isSubmittingAmount ? <CircularProgress sx={{ mt: 2 }} /> : null}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default FinancialProductCard;
