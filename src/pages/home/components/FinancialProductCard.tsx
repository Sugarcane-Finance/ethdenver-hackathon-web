import { useState, FC } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import Modal from "../../../components/modal/Modal";
import { Product } from "../../../config/products";

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
  const [amount, setAmount] = useState("");
  const [isSubmittingAmount, setIsSubmittingAmount] = useState(false);
  const { name, yield: yieldPercent, description, risk, logo } = product;

  const handleSubmit = async () => {
    if (amount.trim() === "") {
      return;
    }
    setIsSubmittingAmount(true);
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
