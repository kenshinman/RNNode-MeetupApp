import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { fetchMeetups } from "./constants/api";

export default class App extends React.Component {
  static defaultProps = {
    fetchMeetups
  };

  state = {
    loading: false,
    meetups: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://192.168.43.83:5000/api/meetups")
      .then(res => res.json())
      .then(meetups => {
        console.log(meetups);
        this.setState({ meetups, loading: false });
      })
      .catch(err => console.log(err));

    // //console.log(data);
    // this.setState({loading: false, meetups: data.meetups})
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
          <Text>Loading data...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>MeetupsRN</Text>
          {this.state.meetups.map( meetup => {
            return(
              <Text key={meetup._id}>{meetup.title}</Text>
            )
          })}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
