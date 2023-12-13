import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import logoImage from "../../assets/logo.png"
import { theme } from "../../theme"
import { MaterialCommunityIcons } from "@expo/vector-icons"

type HeaderProps = {
  task: string,
  onChangeText: (task: string) => void
  onPress: () => void
}

const Header = ({task, onChangeText, onPress}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
        <Image source={logoImage} />
        <View style={styles.form}>
          <TextInput 
          style={styles.input}
           placeholder="Adicione uma nova Tarefa"
           placeholderTextColor={theme.colors.base.gray300}
           value={task}
           onChangeText={onChangeText}
           />
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <MaterialCommunityIcons name="plus-circle-outline" size={24} color={theme.colors.base.gray100}/>
             </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header