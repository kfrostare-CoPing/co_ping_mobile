import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileInformation } from "../modules/userAction";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId);
  const userName = useSelector(state => state.userName);
  const communityStatus = useSelector(state => state.communityStatus);
  const phone = useSelector(state => state.phone);
  const userAddress = useSelector(state => state.userAddress);
  const aboutMe = useSelector(state => state.aboutMe);
  const updateProfileMessage = useSelector(state => state.updateProfileMessage)

  const [name, onChangeName] = useState();
  const [address, onChangeAddress] = useState();
  const [telephone, onChangeTelephone] = useState();
  const [about, onChangeAbout] = useState();

  let statusColor;
  if (communityStatus === "pending") {
    statusColor = (
      <>
        <Text style={styles.status}>Community Status: </Text>
        <Text style={styles.pending}>{communityStatus}</Text>
      </>
    );
  } else if (communityStatus === "accepted") {
    statusColor = (
      <>
        <Text style={styles.status}>Community Status: </Text>
        <Text style={styles.accepted}>{communityStatus}</Text>
      </>
    );
  } else {
    statusColor = (
      <>
        <Text style={styles.status}>Community Status: </Text>
        <Text style={styles.rejected}>{communityStatus}</Text>
      </>
    );
  }

  return (
    <View style={styles.container} className="request-form">
      <LinearGradient
        colors={["#71b280", "#134e5e"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.title}>Profile Details</Text>
        <Text style={styles.updateNote} id="profile-update-message">{updateProfileMessage}</Text>
        <View style={styles.profile}>
          <TextInput
            style={styles.dataNameInput}
            nativeID="user-name"
            textContentType="name"
            value={userName}
            onChangeText={name => onChangeName(name)}
          />
          <View style={styles.itemContainer}>
            <Text style={styles.profileItem}>Address: </Text>
            <TextInput
              style={styles.dataInputAddress}
              nativeID="user-address"
              textContentType="fullStreetAddress"
              multiline={true}
              maxLength={100}
              value={userAddress}
              onChangeText={address => onChangeAddress(address)}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.profileItem}>Phone: </Text>
            <TextInput
              style={styles.dataInput}
              nativeID="user-phone"
              textContentType="telephoneNumber"
              value={phone}
              onChangeText={telephone => onChangeTelephone(telephone)}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.profileItem}>About Me: </Text>
            <TextInput
              style={styles.dataInputText}
              nativeID="user-about"
              multiline={true}
              maxLength={250}
              value={aboutMe}
              onChangeText={about => onChangeAbout(about)}
            />
          </View>
          <View style={styles.itemContainer}>
            <TouchableHighlight
              style={styles.request}
              onPress={() => {
                updateProfileInformation(name, address, telephone, about, userId, dispatch);
              }}
            >
              <Text id="update-profile-button" style={styles.requestButtonText}>
                Edit profile
            </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.request}
              onPress={() => {
                updateProfileInformation(name, address, telephone, about, userId, dispatch);
              }}
            >
              <Text id="update-profile-button" style={styles.requestButtonText}>
                Save my updates
            </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.statusContainer}>{statusColor}</View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    margin: 10,
    marginRight: 5
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "left",
    margin: 10
  },
  profile: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 2.0
  },
  dataInput: {
    border: 1,
    borderColor: "grey",
    marginleft: 10,
    width: 200
  },
  dataInputText: {
    border: 1,
    borderColor: "grey",
    marginleft: 5,
    height: 90,
    width: 200
  },
  dataInputAddress: {
    border: 1,
    borderColor: "grey",
    marginleft: 5,
    height: 60,
    width: 200
  },
  dataNameInput: {
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 20,
    margin: 10
  },
  profileItem: {
    fontWeight: "bold"
  },
  statusContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 5
  },
  pending: {
    color: "#d27300",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18
  },
  accepted: {
    color: "#71b280",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18
  },
  rejected: {
    color: "#B27183",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18
  },
  status: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  request: {
    borderRadius: 10,
    backgroundColor: "#71B280",
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  requestButtonText: {
    color: "white",
    fontSize: 18
  },
  updateNote: {
    fontSize: 18,
    color: "white",
    margin: 10,
    textAlign: "center"
  }
});

export default UserProfile;
