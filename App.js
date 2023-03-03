import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View , SafeAreaView, TextInput, Alert, FlatList, TouchableOpacity } from 'react-native';
import { Button } from './components/Buttton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Workouts
import { push } from './workouts/push.json';
import { pull } from './workouts/pull.json';
import { legs } from './workouts/legs.json';
import { arnold1 } from './workouts/arnold1.json';
import { arnold2 } from './workouts/arnold2.json';

//export default function App() {

    // const [number, onChangeNumber] = React.useState(null);
    // const [number2, onChangeNumber2] = React.useState(null);
    // const [selectedId, setSelectedId] = React.useState(null);

    const Item = ({ item }) => (
        <Text style={ styles.item }>{item.name} - Reps {item.reps} Sets {item.sets} </Text>
      );    

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? "#46bde8" : "#2496bf";
        // const color = item.id === selectedId ? 'white' : 'black';

        return (
          <Item
            item={item}
            // onPress={() => setSelectedId(item.id)}
            // backgroundColor={{ backgroundColor }}
            // textColor={{ color }}
          />
        );
     };

    // return (
    //     <SafeAreaView style={styles.container}>
    //         <Button onPress={() => Alert.alert( 'I have been clicked' ) }>Hello World</Button>
    //         <StatusBar style={styles.statusbar}/>
    //     </SafeAreaView>
    // );

    // return (
    //     <NavigationContainer>{
    //         <SafeAreaView style={styles.container}>
    //             <Text style={styles.head}>GymMate</Text>
    //             <View>
    //                 <Button onPress={() => Alert.alert( 'Nice job! Take a short rest', '1 minute timer starting!' ) }>Start Rest Period</Button>
    //             </View>
    //             <FlatList
    //                 data={workouts}
    //                 renderItem={renderItem}
    //                 keyExtractor={(item) => item.id}
    //                 extraData={selectedId}>
    //             </FlatList>
    //             <View>
    //                 <Button onPress={() => Alert.alert( 'Set Finished?', 'Move to the next set?', [
    //                     { text: 'Yes' },
    //                     { text: 'No' },
    //                 ] ) }>Next Exercises</Button>
    //             </View>
    //             <StatusBar style={styles.statusbar}/>
    //         </SafeAreaView> }
    //     </NavigationContainer>
    // );
//}

export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
}  

// FUNCTIONS
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Push" component={PushScreen}/>
        <Stack.Screen name="Pull" component={PullScreen}/>
        <Stack.Screen name="Legs" component={LegsScreen}/>
        <Stack.Screen name="A1" component={ArnoldOne}/>
        <Stack.Screen name="A2" component={ArnoldTwo}/>
        {/* <Stack.Screen name="Settings" component={SettingsScreen}/> */}
      </Stack.Navigator>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GymMate</Text>
            <Button onPress={() => navigation.navigate('Push')}>Go to Push workout</Button>
            <Button onPress={() => navigation.navigate('Pull')}>Go to Pull workout</Button>
            <Button onPress={() => navigation.navigate('Legs')}>Go to Legs workout</Button>
            <Button onPress={() => navigation.navigate('A1')}>Go to A1 workout</Button>
            <Button onPress={() => navigation.navigate('A2')}>Go to A2 workout</Button>
            {/* <Button onPress={() => navigation.navigate('Settings')}>Go to settings page</Button> */}
        </View>
    );
}

function PushScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                data={push}
                renderItem={renderItem}>
            </FlatList>
            <Button onPress={() => navigation.goBack()}>Go to home page</Button>
        </View>
    );
}

function PullScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                data={pull}
                renderItem={renderItem}>
            </FlatList>
            <Button onPress={() => navigation.goBack()}>Go to home page</Button>
        </View>
    );
}

function LegsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                data={legs}
                renderItem={renderItem}></FlatList>
            <Button onPress={() => navigation.goBack()}>Go to home page</Button>
        </View>
    );
}

function ArnoldOne({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                data={arnold1}
                renderItem={renderItem}></FlatList>
            <Button onPress={() => navigation.goBack()}>Go to home page</Button>
        </View>
    );
}

function ArnoldTwo({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                data={arnold2}
                renderItem={renderItem}></FlatList>
            <Button onPress={() => navigation.goBack()}>Go to home page</Button>
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('Home')}>Go to home page</Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03152b',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    head: {
        flex: 1,
        width: 200,
        height: 0,
        fontSize: 28,
        padding: 24,
    },
    statusbar: {
        style: "auto",
    },
    item: {
        padding: 15,
        width: 300,
        height: 55,
        marginVertical: 10,
        marginHorizontal: 16,
        color: 'white',
        backgroundColor: '#176f8f',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 32,
        height: 100,
        top: 30,
        display: 'flex',
        color: 'white'
    }
});
