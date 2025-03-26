import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Pizza', image: require('../website/FoodPic/pizza.jpg') },
  { id: '2', name: 'Burgers', image: require('../website/FoodPic/burger.jpg') },
  { id: '3', name: 'Steak', image: require('../website/FoodPic/steak.jpg') },
  { id: '4', name: 'Taco', image: require('../website/FoodPic/taco.jpg') },
];

const popularItems = [
  { id: '1', name: 'Food 1', author: 'By Viet Nam', price: '1$', image: require('../website/FoodPic/food1.jpg') },
  { id: '2', name: 'Food 2', author: 'By Viet Nam', price: '3$', image: require('../website/FoodPic/food2.jpg') },
];

const ExplorerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>


      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="map-marker" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
      </View>

      {/* Top Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Popular Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularAuthor}>{item.author}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingHorizontal: 15, paddingTop: 40 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 10, padding: 10 },
  searchIcon: { marginHorizontal: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  section: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  filterText: { color: 'orange', fontSize: 16 },
  categoryItem: { alignItems: 'center', marginRight: 15 , marginTop: 30},
  categoryImage: { width: 110, height: 80, borderRadius: 10 },
  categoryText: { marginTop: 10, fontSize: 14 },
  viewAllText: { color: 'orange', fontSize: 16 },
  popularItem: { backgroundColor: '#f9f9f9', padding: 10, borderRadius: 10, marginRight: 15, width: 200, height: 200},
  popularImage: { width: '100%', height: 90, borderRadius: 10 },
  popularText: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  popularAuthor: { fontSize: 12, color: 'gray' },
  popularPrice: { fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 5 },
  navItem: { alignItems: 'center' },
  navText: { color: 'gray', fontSize: 12 },
  navTextActive: { color: 'orange', fontSize: 12, fontWeight: 'bold' },
});

export default ExplorerScreen;
