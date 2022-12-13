import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state={
            CreatePost: {}
        }
    }
    render() {
        return(
            <View>
                <Text> Create Post</Text>
            </View>
        )
    }

}