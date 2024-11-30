import { DrawerActions } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const Sidebar = ({ props }) => {
  const dataHelpInfo = [
    { id: 2, name: 'Booking', icon: 'calendar', router: 'Booking' },
    { id: 4, name: 'Place Order', icon: 'shopping-cart', router: 'InnerDrawerPage' },
  ];
  const handlePage = (router, params = {}) => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate(router);
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={styles.scrollViewContainer}>
        {dataHelpInfo.map((value, index) => (
          <TouchableOpacity
            key={value.id}
            onPress={() => handlePage(value.router)}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>{value.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  imageViewContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: 'lightgray',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#E5AA44'
  },
  icon: {
    marginRight: 10,
  },
  bottomTextContainer: {
    backgroundColor: '#F5F5F5', // Light gray background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC', // Light border color
    alignItems: 'center', // Center the text horizontally
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'bold', // Make the text bold
    color: '#FF6347', // Red color for text
    marginTop: 5, // Add some margin from the container
    textTransform: 'uppercase', // Convert text to uppercase
  },
});

export default Sidebar;
