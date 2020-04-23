import axios from "axios";
import { PAYMENT } from "../state/actions/actionTypes";

const sendPaymentInfo = async (totalCost, pongId, dispatch) => {
  debugger
  let response = await axios.post("https://co-ping.herokuapp.com/swish/", {
    swish: {
      total_cost: totalCost,
      pong_id: pongId
    }
  });
  debugger
  dispatch({
    type: PAYMENT,
    payload: {
      paymentMessage: response.data.message
    }
  });
};
export default sendPaymentInfo;
