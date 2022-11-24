import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import configureStore from "./src/store/configureStore";
import GetStartedScreen from "./src/screens/GetStartedScreen";

export default function App() {

  //Declaring the stack navigator
  const Stack = createStackNavigator();
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="getStarted" component={GetStartedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}