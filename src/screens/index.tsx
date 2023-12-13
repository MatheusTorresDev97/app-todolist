import {  View } from "react-native"
import { styles } from "./styles"
import Header from "../components/Header"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
       <Header />
    </View>
  )
}

export default HomeScreen