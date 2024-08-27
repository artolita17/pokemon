 
import { SafeAreaView, StyleSheet, Text, View , Platform, ScrollView} from 'react-native';
import PokemonCard from './assets/components/PokemonCard';

export default function App() {


  const winbazorData = {

    name: "Squirtle",
    image: require("./assets/quirtle.jpg"),
    type: "Water",
    hp: 69,
    moves: ["Torrent, Rain Dish"],
    weakness: ["Electric"],
};

const BulbaData = {

  name: "Bulbasaur",
  image: require("./assets/bulba.jpg"),
  type: "Grass",
  hp: 77,
  moves: ["Overgrow, Chlorophyll"],
  weakness: ["Fire"],
};

const RaichuData = {

  name: "Raichu",
  image: require("./assets/raichu.jpg"),
  type: "Electric",
  hp: 99,
  moves: ["Lightning Rod, Tail Whip"],
  weakness: ["Earth"],
};

const SudoData = {

  name: "Sudowoodo",
  image: require("./assets/sudowoodo.jpg"),
  type: "Grass",
  hp: 49,
  moves: ["Rattled, Sturdy Head"],
  weakness: ["Fire"],
};

const MudkipData = {

  name: "Mudkip",
  image: require("./assets/mudkip.jpg"),
  type: "Water",
  hp: 47,
  moves: ["Damp, Torrent"],
  weakness: ["Electric"],
};

const MeowsData = {

  name: "Meowscarada",
  image: require("./assets/meows.jpg"),
  type: "Grass",
  hp: 80,
  moves: ["Overgrow, Protean"],
  weakness: ["Fire"],
};

const OnixData = {

  name: "Onix",
  image: require("./assets/onix.jpg"),
  type: "Earth",
  hp: 70,
  moves: ["Rattled, Sturdy Head"],
  weakness: ["Grass, Water"],
};

const CharmData = {

  name: "Charmander",
  image: require("./assets/charmander.jpg"),
  type: "Fire",
  hp: 38,
  moves: ["Blaze, Solar Power"],
  weakness: ["Water, Earth"],
};

const LudiData = {

  name: "Ludicolo",
  image: require("./assets/ludicolo.jpg"),
  type: "Grass",
  hp: 65,
  moves: ["Swift Swim, Rain Dish"],
  weakness: ["Fire"],
};

const ChimData = {

  name: "Chimchar",
  image: require("./assets/chimchar.jpg"),
  type: "Fire",
  hp: 69,
  moves: ["Blaze, Iron Fist"],
  weakness: ["Water, Electric"],
};

  return (
    <View style={styles.container}>
      <ScrollView>
      <PokemonCard{...winbazorData}/>
      <PokemonCard{...BulbaData}/>
      <PokemonCard{...RaichuData}/>
      <PokemonCard{...SudoData}/>
      <PokemonCard{...MudkipData}/>
      <PokemonCard{...MeowsData}/>
      <PokemonCard{...OnixData}/>
      <PokemonCard{...CharmData}/>
      <PokemonCard{...LudiData}/>
      <PokemonCard{...ChimData}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});