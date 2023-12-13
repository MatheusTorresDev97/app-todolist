import { Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../components/Header";
import Task from "../components/Task";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
          <Text style={styles.tasksCreated}>Criadas</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>0</Text>
          </View>
          </View>
          <View style={styles.row}>
          <Text style={styles.tasksDone}>Concluídas</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>0</Text>
          </View>
          </View>
        </View>
        <Task 
        title="Estudar Mobile" 
        isCompleted={false} 
        />
        <Task 
        title="Estudar Mobile" 
        isCompleted
        />
        <Task 
        title="Estudar Mobile" 
        isCompleted
        />
      </View>
    </View>
  );
};

export default HomeScreen;
