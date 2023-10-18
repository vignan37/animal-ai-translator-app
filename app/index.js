import { View, ScrollView, SafeAreaView, Text } from "react-native";
import{useState} from 'react';
import {Stack,router,useRouter} from 'expo-router';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'
import { COLORS } from "../constants";

const Home = () => {

    const router = useRouter(); 

    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home;