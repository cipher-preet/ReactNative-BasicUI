import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from "react-native"
import FlatCard from "./compnonents/FlatCard";
import ElevatedCard from "./compnonents/ElevatedCard";
import FancyCard from "./compnonents/FancyCard";
import PasswordGenrator from "./compnonents/PasswordGenrator";
import ColorChanger from "./compnonents/ColorChanger";

function App(){
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ElevatedCard/>
        <FancyCard/>
        {/* <PasswordGenrator/>   for password genrated logic and UI */}
        {/* <ColorChanger/>  for chncge the random color on Header*/}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;

