import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../i18n'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';
const LanguageSelectionScreen = ({navigation}) => {
  const { t } = useTranslation();
 
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    navigation.replace('Landing');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.subtitle}>{t('selectLanguage')}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => changeLanguage(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Tamil" value="tn" />
          <Picker.Item label="Hindi" value="ht" />
          {/* Add more languages as needed */}
        </Picker>
      </View>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pickerContainer: {
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  picker: {
    width: '100%',
    height: 50,
  },
});

export default LanguageSelectionScreen;
