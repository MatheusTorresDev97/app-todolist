import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../components/Header";
import Task from "../components/Task";
import { useState } from "react";
import { TaskDTO } from "../dtos/TaskDTO";
import Empty from "../components/Empty";
import { uuid } from "../utils/uuid";

const HomeScreen = () => {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskAdd = () => {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim() },
      ]);

      setNewTask('')
    }
  };

  return (
    <View style={styles.container}>
      <Header
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleTaskAdd}
      />
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
        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id!}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              isCompleted={item.isCompleted}
              title={item.title}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
