import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import products from '../data/data';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('PIZZA');

  const categories = [
    { key: 'PIZZA', label: 'PIZZA', icon: require('../assets/iconpizza.jpg') },
    { key: 'BURGER', label: 'BURGER', icon: require('../assets/iconburger.jpg') },
    { key: 'DRINK', label: 'DRINK', icon: require('../assets/icondrink.jpg') },
    { key: 'RICI', label: 'RICI', icon: require('../assets/iconrice.jpg') },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase());

      const matchCategory = selectedCategory
        ? item.category === selectedCategory
        : true;

      return matchSearch && matchCategory;
    });
  }, [searchText, selectedCategory]);

  const handleViewAll = () => {
    setSearchText('');
    setSelectedCategory(null);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topCard}>
        <View style={styles.statusRow}>
          <Text style={styles.timeText}>9:00</Text>
        </View>

        <View style={styles.headerRow}>
          <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />

          <View style={styles.locationWrap}>
            <Text style={styles.locationLabel}>Your Location</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={16} color="#4B39EF" />
              <Text style={styles.locationText}>Savar, Dhaka</Text>
            </View>
          </View>

          <View style={styles.bellButton}>
            <Ionicons name="notifications-outline" size={20} color="#222" />
            <View style={styles.dot} />
          </View>
        </View>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#d9d5ff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your food"
          placeholderTextColor="#d9d5ff"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Feather name="sliders" size={18} color="#fff" />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryScroll}
      >
        {categories.map((item) => {
          const isActive = selectedCategory === item.key;

          return (
            <TouchableOpacity
              key={item.key}
              style={[styles.categoryCard, isActive && styles.categoryCardActive]}
              onPress={() => setSelectedCategory(item.key)}
              activeOpacity={0.9}
            >
              <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
                <Image
                  source={item.icon}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={[
                  styles.categoryText,
                  isActive && styles.categoryTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.saleCard}>
        <Image
          source={require('../assets/saleburger.jpg')}
          style={styles.saleImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {searchText.trim() || selectedCategory ? 'Kết quả' : 'Popular Items'}
        </Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.popularRowWrap}>
        {filteredProducts.map((item) => (
          <View key={item.id} style={styles.foodCard}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.category}</Text>
            <Text style={styles.foodSub}>{item.name}</Text>
            <Text style={styles.foodPrice}>${item.price}</Text>
          </View>
        ))}
      </View>

      {filteredProducts.length === 0 && (
        <Text style={styles.emptyText}>Không tìm thấy sản phẩm phù hợp</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 8,
    paddingTop: 8,
  },

  topCard: {
    backgroundColor: '#F7F6DE',
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 22,
  },

  statusRow: {
    marginBottom: 18,
  },

  timeText: {
    fontSize: 16,
    color: '#222',
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  locationWrap: {
    flex: 1,
    marginLeft: 12,
  },

  locationLabel: {
    color: '#8B8B8B',
    fontSize: 13,
    marginBottom: 4,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  bellButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#DDD9B8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4B39EF',
    position: 'absolute',
    top: 10,
    right: 10,
  },

  searchBar: {
    marginTop: -18,
    marginHorizontal: 20,
    backgroundColor: '#4B39EF',
    borderRadius: 28,
    height: 50,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    marginHorizontal: 10,
    fontSize: 15,
  },

  categoryScroll: {
    paddingHorizontal: 8,
    paddingTop: 24,
    paddingBottom: 4,
  },

  categoryCard: {
    width: 88,
    height: 116,
    backgroundColor: '#ECECEC',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  categoryCardActive: {
    backgroundColor: '#67D5AB',
    shadowOpacity: 0.2,
    elevation: 6,
  },

  iconWrap: {
    width: 58,
    height: 50,
    borderRadius: 16,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  iconWrapActive: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  categoryIcon: {
    width: 34,
    height: 40,
  },

  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#222',
  },

  categoryTextActive: {
    color: '#fff',
  },

  saleCard: {
    marginTop: 18,
    marginHorizontal: 12,
    borderRadius: 18,
    overflow: 'hidden',
  },

  saleImage: {
    width: '100%',
    height: 140,
  },

  sectionHeader: {
    marginTop: 22,
    marginBottom: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },

  viewAll: {
    fontSize: 14,
    color: '#555',
    fontWeight: '600',
  },

  popularRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  foodCard: {
    width: '48%',
    marginBottom: 16,
  },

  foodImage: {
    width: '100%',
    height: 96,
    borderRadius: 8,
  },

  foodName: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  foodSub: {
    marginTop: 2,
    color: '#666',
    fontSize: 13,
  },

  foodPrice: {
    marginTop: 4,
    color: '#4B39EF',
    fontWeight: '700',
  },

  emptyText: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 30,
    fontSize: 15,
  },
});