import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppPage } from '../components/HealthomeComponents';

export const PROFESSIONAL_FEATURES = [
  { key: 'doctorProfile', title: 'Doctor Profile', icon: 'person-circle-outline', eyebrow: 'DOCTOR CARE', description: 'Review qualifications, experience, ratings, consultation modes and availability before booking.', action: 'View consultation options' },
  { key: 'specialties', title: 'Choose Specialty', icon: 'grid-outline', eyebrow: 'SPECIALISTS', description: 'Browse specialties and quickly narrow your search to the care you need.', action: 'Browse specialties' },
  { key: 'preConsultation', title: 'Pre-Consultation Intake', icon: 'clipboard-outline', eyebrow: 'BEFORE YOUR VISIT', description: 'Share symptoms, concerns and relevant information so your consultation starts prepared.', action: 'Start intake' },
  { key: 'consultationConfirmation', title: 'Consultation Confirmation', icon: 'checkmark-circle-outline', eyebrow: 'CONFIRMATION', description: 'Review doctor, consultation mode, date, time and patient details before confirming.', action: 'Review appointment' },
  { key: 'videoConsultation', title: 'Video Consultation', icon: 'videocam-outline', eyebrow: 'LIVE CARE', description: 'A focused consultation room for secure audio/video care and appointment information.', action: 'Open consultation room' },
  { key: 'instantConsultation', title: 'Instant Consultation', icon: 'flash-outline', eyebrow: 'NOW AVAILABLE', description: 'Find available providers for an immediate consultation when a scheduled visit is not required.', action: 'Find available doctors' },
  { key: 'homeCareHub', title: 'Home Care Hub', icon: 'home-outline', eyebrow: 'CARE AT HOME', description: 'A clean starting point for nursing, physiotherapy, attendants and other home-care services.', action: 'Explore home care' },
  { key: 'homeCareServices', title: 'Home Care Service List', icon: 'people-outline', eyebrow: 'HOME SERVICES', description: 'Compare available home-care services, durations, prices and delivery modes.', action: 'Browse services' },
  { key: 'homeCareDetails', title: 'Home Care Service Details', icon: 'information-circle-outline', eyebrow: 'SERVICE DETAILS', description: 'Understand what is included, expected duration, preparation and booking requirements.', action: 'Review service' },
  { key: 'carePackage', title: 'Care Package Details', icon: 'layers-outline', eyebrow: 'CARE PLANS', description: 'Review bundled care options for recurring or multi-visit support.', action: 'Review package' },
  { key: 'labTestDetails', title: 'Lab Test Details', icon: 'flask-outline', eyebrow: 'DIAGNOSTICS', description: 'See test preparation, sample type, turnaround information and pricing before booking.', action: 'Review test' },
  { key: 'labSampleCollection', title: 'Lab Sample Collection', icon: 'water-outline', eyebrow: 'HOME COLLECTION', description: 'Choose a collection address and preferred time slot for at-home diagnostics.', action: 'Choose collection slot' },
  { key: 'healthArticles', title: 'Health Articles', icon: 'newspaper-outline', eyebrow: 'HEALTH LIBRARY', description: 'A structured space for educational content and practical health information.', action: 'Read health content' },
  { key: 'symptomChecker', title: 'Symptom Checker', icon: 'chatbubble-ellipses-outline', eyebrow: 'CARE NAVIGATION', description: 'A guided symptom intake that helps users decide what type of care to seek next.', action: 'Start symptom check' },
  { key: 'medicineDetails', title: 'Medicine Product Details', icon: 'medical-outline', eyebrow: 'PHARMACY', description: 'Review medicine information, price, quantity and prescription requirements.', action: 'Review medicine' },
  { key: 'cartCheckout', title: 'Cart & Checkout', icon: 'cart-outline', eyebrow: 'PHARMACY', description: 'Review selected products, delivery details, discounts and payment before placing an order.', action: 'Review checkout' },
  { key: 'orderTracking', title: 'Order Tracking', icon: 'navigate-outline', eyebrow: 'DELIVERY', description: 'Follow order status from confirmation through dispatch and delivery.', action: 'Track order' },
  { key: 'walletTransactions', title: 'Wallet Transactions', icon: 'receipt-outline', eyebrow: 'PAYMENTS', description: 'Review wallet credits, debits, refunds and transaction references in one place.', action: 'View transactions' },
  { key: 'accountSecurity', title: 'Account & Security', icon: 'shield-checkmark-outline', eyebrow: 'ACCOUNT', description: 'Manage account protection, privacy, notification preferences and trusted-device controls.', action: 'Manage security' },
];

const FeatureCard = ({ item, onPress }) => (
  <TouchableOpacity activeOpacity={0.88} onPress={onPress} style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 18, marginBottom: 12, borderWidth: 1, borderColor: '#E2EEF0', flexDirection: 'row', alignItems: 'center' }}>
    <View style={{ width: 48, height: 48, borderRadius: 16, backgroundColor: '#E8F7F7', alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name={item.icon} size={24} color="#087F8C" />
    </View>
    <View style={{ flex: 1, marginLeft: 14 }}>
      <Text style={{ color: '#087F8C', fontSize: 10, fontWeight: '900', letterSpacing: 0.8 }}>{item.eyebrow}</Text>
      <Text style={{ color: '#173E56', fontSize: 16, fontWeight: '900', marginTop: 3 }}>{item.title}</Text>
      <Text style={{ color: '#6F8492', fontSize: 12.5, lineHeight: 18, marginTop: 4 }} numberOfLines={2}>{item.description}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#9AAEB7" />
  </TouchableOpacity>
);

export default function ProfessionalFeatureScreen({ screen, setScreen }) {
  const current = PROFESSIONAL_FEATURES.find((item) => item.key === screen);
  if (!current) return null;
  const index = PROFESSIONAL_FEATURES.findIndex((item) => item.key === screen);
  const next = PROFESSIONAL_FEATURES[(index + 1) % PROFESSIONAL_FEATURES.length];

  return (
    <AppPage title={current.title} onBack={() => setScreen('home')} bottom="home" setScreen={setScreen}>
      <View style={{ backgroundColor: '#FFFFFF', borderRadius: 24, padding: 22, borderWidth: 1, borderColor: '#DCECEF', marginBottom: 18 }}>
        <View style={{ width: 58, height: 58, borderRadius: 18, backgroundColor: '#E8F7F7', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Ionicons name={current.icon} size={29} color="#087F8C" />
        </View>
        <Text style={{ color: '#087F8C', fontSize: 11, fontWeight: '900', letterSpacing: 1 }}>{current.eyebrow}</Text>
        <Text style={{ color: '#173E56', fontSize: 25, fontWeight: '900', marginTop: 5 }}>{current.title}</Text>
        <Text style={{ color: '#647B89', fontSize: 14, lineHeight: 21, marginTop: 9 }}>{current.description}</Text>
        <View style={{ backgroundColor: '#F4FAFB', borderRadius: 16, padding: 15, marginTop: 18 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="sparkles-outline" size={19} color="#087F8C" />
            <Text style={{ color: '#173E56', fontWeight: '900', marginLeft: 8 }}>Professional workflow</Text>
          </View>
          <Text style={{ color: '#6F8492', fontSize: 12.5, lineHeight: 18, marginTop: 7 }}>
            This dedicated workflow is ready to connect to Healthome's backend without changing the user experience.
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.88} onPress={() => setScreen(next.key)} style={{ marginTop: 18, backgroundColor: '#087F8C', borderRadius: 15, paddingVertical: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14.5, fontWeight: '900' }}>{current.action}</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ color: '#173E56', fontSize: 18, fontWeight: '900', marginBottom: 12 }}>Explore Healthome</Text>
        {PROFESSIONAL_FEATURES.map((item) => <FeatureCard key={item.key} item={item} onPress={() => setScreen(item.key)} />)}
      </View>
    </AppPage>
  );
}
