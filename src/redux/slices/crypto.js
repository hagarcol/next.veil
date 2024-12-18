import { createSlice } from "@reduxjs/toolkit";
import { SENDER } from "@/constants/transaction";
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
    },
    amount: ""
  },
  receiver: {
    crypto: {
      img: "/images/crypto/eth.svg",
      name: "Ethereum",
      subName: "ETH",
    },
    amount: ""
  }
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
      } else {
        state.receiver.crypto.img = action.payload.img;
        state.receiver.crypto.name = action.payload.name;
        state.receiver.crypto.subName = action.payload.subName;
      }
    },

    // SWAP CRYPTO
    swapCrypto (state) {
      const tmp = state.sender.crypto;
      state.sender.crypto = state.receiver.crypto;
      state.receiver.crypto = tmp;
    }
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {setType, setCrypto, swapCrypto} = slice.actions;

