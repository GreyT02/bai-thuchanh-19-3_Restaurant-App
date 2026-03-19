import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export default function OrderScreen() {
  const [quantity, setQuantity] = useState(2);

  const unitPrice = 28;
  const deliveryFee = 6.2;

  const subtotal = useMemo(() => quantity * unitPrice, [quantity]);
  const total = useMemo(() => subtotal + deliveryFee, [subtotal]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topBg}>
        <View style={styles.statusRow}>
          <Text style={styles.timeText}>9:00</Text>
        </View>

        <View style={styles.headerRow}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={22} color="#222" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Shopping Cart</Text>

          <TouchableOpacity>
            <Feather name="trash-2" size={22} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainCard}>
        <View style={styles.heroWrap}>
          <Image source={require('../assets/burger.jpg')} style={styles.heroImage} />
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>10%</Text>
            <Text style={styles.discountText}>OFF</Text>
          </View>

          <View style={styles.thumbRow}>
            <Image source={require('../assets/burger.jpg')} style={styles.thumbImage} />
            <Image source={require('../assets/burger.jpg')} style={styles.thumbImage} />
            <Image source={require('../assets/burger.jpg')} style={styles.thumbImage} />
          </View>
        </View>

        <View style={styles.infoRow}>
          <View>
            <Text style={styles.productTitle}>BURGER</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color="#F6C103" />
              <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
            </View>
          </View>

          <View style={styles.priceQtyWrap}>
            <Text style={styles.priceText}>$28</Text>

            <View style={styles.qtyRow}>
              <TouchableOpacity style={styles.qtyBtn} onPress={increaseQty}>
                <Text style={styles.qtyBtnText}>+</Text>
              </TouchableOpacity>

              <Text style={styles.qtyValue}>{quantity.toString().padStart(2, '0')}</Text>

              <TouchableOpacity style={styles.qtyBtn} onPress={decreaseQty}>
                <Text style={styles.qtyBtnText}>−</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressActionRow}>
          <View style={styles.addressBox}>
            <Ionicons name="location-outline" size={22} color="#546F66" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.addressLabel}>Delivery Address</Text>
              <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.linkBox}>
            <Feather name="link" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.paymentRow}>
          <View style={styles.paymentLeft}>
            <MaterialIcons name="payment" size={24} color="#0A84FF" />
            <Text style={styles.paymentText}>Payment Method</Text>
          </View>

          <TouchableOpacity style={styles.changeBtn}>
            <Text style={styles.changeBtnText}>Change</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.summaryTitle}>Checkout Summary</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal ({quantity})</Text>
          <Text style={styles.summaryValue}>${subtotal}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>${deliveryFee}</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Payable Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(1)}</Text>
        </View>

        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
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

  topBg: {
    backgroundColor: '#F7F6DE',
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 34,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  mainCard: {
    marginTop: -12,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingBottom: 20,
    overflow: 'hidden',
  },

  heroWrap: {
    position: 'relative',
  },

  heroImage: {
    width: '100%',
    height: 190,
  },

  discountBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#4B39EF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  discountText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
  },

  thumbRow: {
    position: 'absolute',
    bottom: -26,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  thumbImage: {
    width: 62,
    height: 62,
    borderRadius: 14,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },

  infoRow: {
    marginTop: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#222',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  ratingText: {
    marginLeft: 6,
    color: '#666',
    fontSize: 13,
  },

  priceQtyWrap: {
    alignItems: 'flex-end',
  },

  priceText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#7C6BFF',
    marginBottom: 10,
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#AAA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyBtnText: {
    fontSize: 16,
    color: '#444',
    fontWeight: '700',
  },

  qtyValue: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#444',
  },

  addressActionRow: {
    marginTop: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addressBox: {
    flex: 1,
    backgroundColor: '#CDEEE3',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  addressLabel: {
    fontSize: 12,
    color: '#546F66',
  },

  addressText: {
    fontSize: 15,
    color: '#546F66',
    fontWeight: '600',
    marginTop: 2,
  },

  linkBox: {
    width: 58,
    backgroundColor: '#A9A2FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  paymentRow: {
    marginTop: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  paymentText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },

  changeBtn: {
    borderWidth: 1.5,
    borderColor: '#6E61FF',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },

  changeBtnText: {
    color: '#6E61FF',
    fontWeight: '600',
  },

  summaryTitle: {
    marginTop: 18,
    paddingHorizontal: 16,
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  summaryRow: {
    marginTop: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  summaryLabel: {
    color: '#999',
    fontSize: 18,
  },

  summaryValue: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },

  line: {
    marginTop: 14,
    marginHorizontal: 16,
    height: 1,
    backgroundColor: '#E4E4E4',
  },

  totalLabel: {
    color: '#333',
    fontSize: 20,
    fontWeight: '700',
  },

  totalValue: {
    color: '#4B39EF',
    fontSize: 20,
    fontWeight: '800',
  },

  confirmBtn: {
    marginTop: 24,
    marginHorizontal: 16,
    backgroundColor: '#4B39EF',
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  confirmText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});