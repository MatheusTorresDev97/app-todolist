import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import logoImage from "../../assets/logo.png"
import { theme } from "../../theme"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Image source={logoImage} />
        <View style={styles.form}>
          <TextInput 
          style={styles.input}
           placeholder="Adicione uma nova Tarefa"
           placeholderTextColor={theme.colors.base.gray300}
           />
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="plus-circle-outline" size={24} color={theme.colors.base.gray100}/>
             </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header