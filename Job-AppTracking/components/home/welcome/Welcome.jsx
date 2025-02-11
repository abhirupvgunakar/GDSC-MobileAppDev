import { useState } from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Internships"];

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Abhirup</Text>
        <Text style={styles.welcomeMessage}>Find your job match</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value="" 
            onChangeText={() => {}}  // Fixed onChange to onChangeText
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* Fixed View Closing */}
      <View style={styles.tabContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          renderItem={({ item }) => ( 
            <TouchableOpacity>
              <Text>{item}</Text>  {/* Added text inside TouchableOpacity */}
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  );
};

export default Welcome;