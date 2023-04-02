import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

type Props = { children: JSX.Element | string };

function Subtitle({ children }: Props) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: colors.Violet100,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: colors.Violet100,
    borderBottomWidth: 2,
  },
});
