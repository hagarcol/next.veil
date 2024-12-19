import { createSlice  } from "@reduxjs/toolkit";
import { SENDER } from "@/constants/transaction";
import { AppDispatch, RootState } from "../store";
// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  type: SENDER,
  sender: {
    crypto: {
      img: "/images/crypto/btc.svg",
      name: "Bitcoin",
      subName: "BTC",
      exchangeRate: 43000
    },
    amount: ""
  },
  receiver: {
    crypto: {
      img: "/images/crypto/eth.svg",
      name: "Ethereum",
      subName: "ETH",
      exchangeRate: 2250
    },
    amount: ""
  },
  input_value: null,
  input_label: null,
  output_value: null,
  output_label: null
};

const slice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // SET TYPE
    setType(state, action) {
      state.type = action.payload;
    },

    // SET CRYPTO
    setCrypto(state, action) {
      if (state.type == "sender") {
        state.sender.crypto.img = action.payload.img;
        state.sender.crypto.name = action.payload.name;
        state.sender.crypto.subName = action.payload.subName;
        state.sender.crypto.exchangeRate = action.payload.exchangeRate;
      } else {
        state.receiver.crypto.img = action.payload.img;
        state.receiver.crypto.name = action.payload.name;
        state.receiver.crypto.subName = action.payload.subName;
        state.receiver.crypto.exchangeRate = action.payload.exchangeRate;
      }
    },

    // SWAP CRYPTO
    swapCrypto (state) {
      const tmp = state.sender.crypto;
      state.sender.crypto = state.receiver.crypto;
      state.receiver.crypto = tmp;
    },

    // SET INPUT VALUE
    setInputValue (state, action) {
      state.input_value = action.payload;
    },

    // SET INPUT LABEL
    setInputLabel (state, action) {
      state.input_label = action.payload;
    },

    // SET OUTPUT VALUE
    setOutputValue (state, action) {
      state.output_value = action.payload;
    },

    // SET OUTPUT LABEL
    setOutputLabel (state, action) {
      state.output_label = action.payload;
    },

    // SET EXCHANGE STATE CLEAR
    clearExchangeStates (state) {
      state.input_value = null;
      state.input_label = null;
      state.output_value = null;
      state.output_label = null;
    }
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {setType, setCrypto, swapCrypto} = slice.actions;

export function exchangePreview(val: string) {
  return async (dispatch: AppDispatch, getState: RootState) => {
    if (!val) {
      dispatch(slice.actions.clearExchangeStates());
      return ;
    }

    const inputValue = parseInt(val, 10);
    if (isNaN(inputValue)) {
      console.error("Invalid input value");
      return;
    }

    dispatch(slice.actions.setInputValue(inputValue));

    const { sender, receiver } = getState().crypto;
    const senderCrypto = sender.crypto;
    const receiverCrypto = receiver.crypto;

    if (!senderCrypto || !receiverCrypto) {
      console.error("Invalid sender or receiver crypto data");
      return;
    }

    const inputAmount = inputValue * senderCrypto.exchangeRate;
    const inputLabel = `${val} ${senderCrypto.subName} ≈ $${inputAmount.toFixed(2)}`;
    dispatch(slice.actions.setInputLabel(inputLabel));

    const outputValue = inputAmount / receiverCrypto.exchangeRate;
    dispatch(slice.actions.setOutputValue(outputValue));

    const roundedOutput = Math.ceil(outputValue * 10000) / 10000;
    const outputLabel = `${outputValue.toFixed(4)} ${receiverCrypto.subName} ≈ $${(roundedOutput * receiverCrypto.exchangeRate).toFixed(2)}`;
    dispatch(slice.actions.setOutputLabel(outputLabel));
  };
}