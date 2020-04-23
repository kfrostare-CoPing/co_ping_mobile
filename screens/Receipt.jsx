import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import { sendPaymentInfo } from "../modules/paymentAction"

const Receipt = () => {
  const dispatch = useDispatch()
  const myPong = useSelector(state => state.myPong)
  const totalCost = myPong.total_cost
  const pongId = myPong.id

  return (
    <View style={styles.costContainer}>
      <Text style={styles.totalCost}>Total cost:</Text>
      <Text id="total-cost" style={styles.totalSum}>
        {" "}
        {totalCost}
      </Text>
      <TouchableHighlight
        style={styles.swishButton}
        onPress={() => {
          sendPaymentInfo(dispatch)
        }}
      >
        <Text id="swish-button" style={styles.swishButtonText}>
          Pay with Swish
        </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  costContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  totalSum: {
    fontSize: 18,
    margin: 2
  },
  totalCost: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 2
  },
  swishButton: {
    height: 60,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#71B280",
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  swishButtonText: {
    color: "white",
    fontSize: 18
  }
})

export default Receipt
