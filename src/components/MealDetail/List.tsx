import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

function List({ data }: { data: any[] }) {
  return (
    <>
      {data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: colors.Violet100,
  },
  itemText: {
    color: "white",
    textAlign: "center",
  },
});
