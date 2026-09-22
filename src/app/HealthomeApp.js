import React, { useState, useEffect, useRef } from 'react';
import { getItem, setItem, removeItem } from '../services/storage';
import { APP_CONFIG } from '../config/appConfig';
import styles from '../theme/styles';
import { services, equipment, homeHeroSlides, doctors, labs, healthRecordTypes } from '../data/healthcareCatalog';
import {
import { createGoogleAuthRequest, createMeetSpace, openMeet } from '../services/googleMeet';
  HeroTrust, QuickService, ExploreCard, FamilyTrust, PremiumTrust,
  PremiumShortcut, PremiumHomeSection, PremiumFeatureCard, PremiumEmergencyCard,
  Header, ActionCard, SectionHeader, HomeServiceSection, MeaningfulServiceIcon,
  HomeServiceTile, HomeEquipmentSection, ServiceCard, LargeServiceCard,
  EquipmentMiniCard, DetailSection, InputField, PaymentOption, AppPage,
  BottomNav, NavItem, SideMenu, MenuItem,
} from '../components/HealthomeComponents';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Modal,
  SafeAreaView,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Linking
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import MapView, { Marker, Polyline } from 'react-native-maps';
import ProfessionalFeatureScreen, { PROFESSIONAL_FEATURES } from '../screens/ProfessionalFeatureScreen';

/* =========================================================
   HEALTHOME - HOME HEALTHCARE APP
   Expo Snack Prototype
   Requires: @react-native-async-storage/async-storage
   ========================================================= */

/* ---------------------------------------------------------
   SERVICE DATA
   NOTE:
   Prices below are DEMO prices for the prototype.
   Replace them with your actual Healthome prices.
--------------------------------------------------------- */



/* ---------------------------------------------------------
   MEDICAL EQUIPMENT
--------------------------------------------------------- */



/* ---------------------------------------------------------
   PREMIUM HOME PAGE CONFIGURATION
--------------------------------------------------------- */



/* =========================================================
   REFERENCE-APP FEATURE MODULES
   These are frontend-ready modules. Production APIs/payment/video
   credentials should be connected through the backend layer.
========================================================= */






/* =========================================================
   APP
========================================================= */

const selectedCountryDigits = (code) => {
  const map = {
    '+91': 10,
    '+971': 9,
    '+1': 10,
    '+44': 10,
    '+61': 9,
    '+65': 8,
    '+49': 10,
  };
  return map[code] || 10;
};



export default function App() {
  const [screen, setScreen] = useState('login');
  const [sessionLoading, setSessionLoading] = useState(true);

  // Professional feature modules added to match the reference healthcare app.
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorSearch, setDoctorSearch] = useState('');
  const [selectedLab, setSelectedLab] = useState(null);
  const [labSearch, setLabSearch] = useState('');
  const [healthRecords, setHealthRecords] = useState([]);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);
  const [consultationType, setConsultationType] = useState('video');
  const [consultationDoctor, setConsultationDoctor] = useState(null);
    const [meetLink, setMeetLink] = useState('');
    const [meetLoading, setMeetLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [countryFlag, setCountryFlag] = useState('🇮🇳');
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [userName, setUserName] = useState('');
  const [memberSince, setMemberSince] = useState('');
  const [resendSeconds, setResendSeconds] = useState(28);
  const otpRefs = useRef([]);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const [search, setSearch] = useState('');
  const [selectedMedicineItem, setSelectedMedicineItem] = useState(null);
  const [medicineOrderVisible, setMedicineOrderVisible] = useState(false);
  const [medicinePrescription, setMedicinePrescription] = useState(null);
  const [medicineQuantity, setMedicineQuantity] = useState('1');
  const [homeHeroSlide, setHomeHeroSlide] = useState(0);
  const [trackingId, setTrackingId] = useState('');
  const [trackingReturnScreen, setTrackingReturnScreen] = useState('home');

  const [bookingType, setBookingType] = useState('now');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingPickerVisible, setBookingPickerVisible] = useState(false);
  const [bookingPickerType, setBookingPickerType] = useState('date');

  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentFlow, setPaymentFlow] = useState(null);
  const [selectedUpiApp, setSelectedUpiApp] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [saveCardForFuture, setSaveCardForFuture] = useState(true);
  const [walletAmount, setWalletAmount] = useState('');
  const [walletMethod, setWalletMethod] = useState('');
  const [walletPaymentStarted, setWalletPaymentStarted] = useState(false);

  const [bookings, setBookings] = useState([]);
  const [lastConfirmedBooking, setLastConfirmedBooking] = useState(null);
  const [selectedRefundBooking, setSelectedRefundBooking] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(null);
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const [addressLabel, setAddressLabel] = useState('Home');
  const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);
  const [defaultPaymentMethod, setDefaultPaymentMethod] = useState(null);
  const [documentTab, setDocumentTab] = useState('reports');
  const [profileEmail, setProfileEmail] = useState('');
  const [profileGender, setProfileGender] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Privacy & Security profile details
  const [gstNumber, setGstNumber] = useState('');
  const [familyMemberModalVisible, setFamilyMemberModalVisible] = useState(false);
  const [editingFamilyMemberId, setEditingFamilyMemberId] = useState(null);
  const [familyMemberName, setFamilyMemberName] = useState('');
  const [familyMemberRelation, setFamilyMemberRelation] = useState('');
  const [familyMemberPhone, setFamilyMemberPhone] = useState('');

  // Call Services: doctor consultation + prescription + appointment scheduling
  const [callServiceMode, setCallServiceMode] = useState('call');
  const [callPrescription, setCallPrescription] = useState(null);
  const [callMeetingDate, setCallMeetingDate] = useState('');
  const [callMeetingTime, setCallMeetingTime] = useState('');
  const [appointmentPickerVisible, setAppointmentPickerVisible] = useState(false);
  const [appointmentPickerType, setAppointmentPickerType] = useState('date');

  // Help & Support chatbot state
  const [supportChatOpen, setSupportChatOpen] = useState(false);
  const [supportChatInput, setSupportChatInput] = useState('');
  const [supportChatStep, setSupportChatStep] = useState('category');
  const [supportChatCategory, setSupportChatCategory] = useState('');
  const [supportChatAnswers, setSupportChatAnswers] = useState({});
  const [supportAgentRequested, setSupportAgentRequested] = useState(false);
  const [supportChatAttachment, setSupportChatAttachment] = useState(null);
  const supportChatScrollRef = useRef(null);

  const [supportChatMessages, setSupportChatMessages] = useState([
    {
      id: 'support-welcome',
      sender: 'bot',
      text: 'Hi! I am the Healthome Support Assistant. I will ask a few short questions so I can understand your problem before offering a solution or connecting you to an agent.',
    },
    {
      id: 'support-question',
      sender: 'bot',
      text: 'First, what do you need help with?',
    },
  ]);

const [trackingLocation, setTrackingLocation] = useState(null);
const [trackingPath, setTrackingPath] = useState([]);
const [trackingError, setTrackingError] = useState('');

// Emergency location + nearest hospital result
const [emergencyLocation, setEmergencyLocation] = useState(null);
const [nearestHospital, setNearestHospital] = useState(null);
const [emergencyProcessing, setEmergencyProcessing] = useState(false);

const [menuVisible, setMenuVisible] = useState(false);

  // Restore the login session and saved account details when the app starts.
  useEffect(() => {
    let mounted = true;

    const restoreAppSession = async () => {
      try {
        const savedSession = await getItem('@healthome_session');
        const savedGst = await getItem('@healthome_gst_number');

        if (!mounted) return;

        if (savedGst) {
          setGstNumber(savedGst);
        }

        if (savedSession) {
          const session = JSON.parse(savedSession);
          if (session?.loggedIn) {
            if (session.phone) setPhone(session.phone);
            if (session.countryCode) setCountryCode(session.countryCode);
            if (session.countryFlag) setCountryFlag(session.countryFlag);
            if (session.userName) setUserName(session.userName);
            if (session.memberSince) setMemberSince(session.memberSince);
            setIsLoggedIn(true);
            setScreen('home');
          }
        }
      } catch (error) {
        console.log('Healthome session restore error:', error);
      } finally {
        if (mounted) setSessionLoading(false);
      }
    };

    restoreAppSession();

    return () => {
      mounted = false;
    };
  }, []);
useEffect(() => {
  let locationSubscription;
  let cancelled = false;

  const startLiveTracking = async () => {
    if (screen !== 'tracking') return;

    try {
      if (Platform.OS === 'web') {
        setTrackingError('Live GPS tracking is available on Android/iOS.');
        return;
      }

      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (cancelled) return;

      if (status !== 'granted') {
        setTrackingError(
          'Location permission was denied. You can still view the tracking page.'
        );
        return;
      }

      locationSubscription =
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 3000,
            distanceInterval: 5,
          },
          (location) => {
            if (cancelled) return;

            const { latitude, longitude } = location.coords;

            const newLocation = {
              latitude,
              longitude,
            };

            setTrackingLocation(newLocation);

            setTrackingPath((previousPath) => {
              const last = previousPath[previousPath.length - 1];

              if (
                last &&
                last.latitude === newLocation.latitude &&
                last.longitude === newLocation.longitude
              ) {
                return previousPath;
              }

              return [...previousPath, newLocation].slice(-APP_CONFIG.tracking.maxPathPoints);
            });
          }
        );
    } catch (error) {
      if (!cancelled) {
        setTrackingError(
          'Unable to start GPS tracking. Please check location settings.'
        );
      }
    }
  };

  startLiveTracking();

  return () => {
    cancelled = true;

    if (locationSubscription) {
      locationSubscription.remove();
      locationSubscription = undefined;
    }
  };
}, [screen]);

  /* -------------------------------------------------------
     LOGIN
  ------------------------------------------------------- */

  const sendOTP = () => {
  const cleanPhone = phone.replace(/\D/g, '');
  const requiredDigits = countryCode === '+971' ? 9
    : countryCode === '+65' ? 8
    : countryCode === '+61' ? 9
    : selectedCountryDigits(countryCode);

  if (cleanPhone.length !== requiredDigits) {
    Alert.alert(
      'Invalid Number',
      `Please enter a valid ${requiredDigits}-digit mobile number.`
    );
    return;
  }

  Keyboard.dismiss();
  setPhone(cleanPhone);
  setOtp('');
  setResendSeconds(28);
  setScreen('otp');
};

  const verifyOTP = async () => {
  const cleanOTP = otp.replace(/\D/g, '');

  if (cleanOTP.length !== 4) {
    Alert.alert('Invalid OTP', 'Please enter the 4-digit OTP.');
    return;
  }

  Keyboard.dismiss();
  setOtp(cleanOTP);

  // After OTP verification, ask a new user for their name before entering the app.
  if (!userName.trim()) {
    setScreen('nameSetup');
    return;
  }

  const newMemberSince = memberSince || new Date().toISOString();
  setMemberSince(newMemberSince);
  setIsLoggedIn(true);
  setScreen('home');

  try {
    await setItem(
      '@healthome_session',
      JSON.stringify({ loggedIn: true, phone, countryCode, countryFlag, userName: userName.trim(), memberSince: newMemberSince })
    );
  } catch (error) {
    Alert.alert('Session Save Error', 'Your login could not be saved on this device. Please try again.');
  }
};

const completeNameSetup = async () => {
  const cleanName = userName.trim().replace(/\s+/g, ' ');
  if (cleanName.length < 2) {
    Alert.alert('Enter Your Name', 'Please enter your full name to continue.');
    return;
  }

  Keyboard.dismiss();
  setUserName(cleanName);
  const newMemberSince = memberSince || new Date().toISOString();
  setMemberSince(newMemberSince);
  setIsLoggedIn(true);

  try {
    await setItem(
      '@healthome_session',
      JSON.stringify({ loggedIn: true, phone, countryCode, countryFlag, userName: cleanName, memberSince: newMemberSince })
    );
    setScreen('home');
  } catch (error) {
    Alert.alert('Session Save Error', 'Your profile could not be saved. Please try again.');
  }
};

  const chooseProfilePhoto = async (source) => {
    try {
      if (source === 'camera') {
        const permission = await ImagePicker.requestCameraPermissionsAsync();

        if (!permission.granted) {
          Alert.alert(
            'Camera Permission',
            'Please allow camera access in your phone settings to take a profile photo.'
          );
          return;
        }

        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.85,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
          setProfilePhoto(result.assets[0].uri);
        }
      } else {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
          Alert.alert(
            'Photo Permission',
            'Please allow photo library access to choose a profile photo.'
          );
          return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.85,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
          setProfilePhoto(result.assets[0].uri);
        }
      }
    } catch (error) {
      Alert.alert(
        'Photo Error',
        'Unable to open the camera or photo library. Please try again.'
      );
    }
  };

  const openProfilePhotoOptions = () => {
    Alert.alert(
      'Profile Photo',
      'Choose how you want to add your profile photo.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Take Photo', onPress: () => chooseProfilePhoto('camera') },
        { text: 'Choose from Gallery', onPress: () => chooseProfilePhoto('gallery') },
      ]
    );
  };

  const chooseCallPrescription = async (source = 'gallery') => {
    try {
      let result;

      if (source === 'camera') {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
          Alert.alert(
            'Camera Permission',
            'Please allow camera access to take a photo of the prescription.'
          );
          return;
        }

        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ['images'],
          allowsEditing: false,
          quality: 0.9,
        });
      } else {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
          Alert.alert(
            'Photo Permission',
            'Please allow photo library access to upload the prescription.'
          );
          return;
        }

        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: false,
          quality: 0.9,
        });
      }

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setCallPrescription(result.assets[0]);
      }
    } catch (error) {
      Alert.alert('Upload Error', 'Unable to upload the prescription. Please try again.');
    }
  };

  const openCallServices = () => {
    setCallPrescription(null);
    setCallMeetingDate('');
    setCallMeetingTime('');
    setCallServiceMode('call');
    setAppointmentPickerVisible(false);
    setAppointmentPickerType('date');
    setScreen('callServices');
  };

  const formatAppointmentDate = (date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const appointmentDateOptions = Array.from({ length: 14 }, (_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + index);
    return {
      value: date.toISOString().slice(0, 10),
      label: formatAppointmentDate(date),
      day: date.toLocaleDateString('en-IN', { weekday: 'short' }),
      dateNumber: date.getDate(),
    };
  });

  const appointmentTimeOptions = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM',
  ];

  const openAppointmentPicker = (type) => {
    setAppointmentPickerType(type);
    setAppointmentPickerVisible(true);
  };

  const scheduleCallService = () => {
    if (!callPrescription) {
      Alert.alert('Prescription Required', 'Please upload your prescription before booking the doctor consultation.');
      return;
    }

    if (!callMeetingDate) {
      Alert.alert('Date Required', 'Please select an appointment date.');
      return;
    }

    if (!callMeetingTime) {
      Alert.alert('Time Required', 'Please select an appointment time.');
      return;
    }

    const selectedDate = new Date(`${callMeetingDate}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
      Alert.alert('Invalid Date', 'Please select a valid upcoming appointment date.');
      return;
    }

    const modeLabel = callServiceMode === 'video' ? 'Video Call' : 'On Call';
    const bookingId = 'CON' + Math.floor(100000 + Math.random() * 900000);
    const selectedDateLabel = appointmentDateOptions.find(
      (item) => item.value === callMeetingDate
    )?.label || callMeetingDate;

    setNotifications((previous) => [
      {
        id: `consultation-${bookingId}`,
        type: 'consultation',
        title: `Doctor ${modeLabel} Scheduled`,
        text: `Doctor consultation scheduled by ${modeLabel} for ${selectedDateLabel} at ${callMeetingTime}. Reference: ${bookingId}.`,
        time: 'Just now',
        icon: callServiceMode === 'video' ? 'videocam-outline' : 'call-outline',
      },
      ...previous,
    ]);

    setAppointmentPickerVisible(false);
    Alert.alert(
      'Appointment Confirmed',
      `Doctor consultation is booked by ${modeLabel} on ${selectedDateLabel} at ${callMeetingTime}.\n\nReference: ${bookingId}`,
      [
        {
          text: 'Done',
          onPress: () => setScreen('notifications'),
        },
      ]
    );
  };

  const callEmergencyAmbulance = async () => {
    const number = '112';
    if (emergencyProcessing) return;
    setEmergencyProcessing(true);

    try {
      if (Platform.OS === 'web') {
        Alert.alert(
          'Emergency Assistance',
          'Emergency location access and nearest-hospital lookup are available on Android/iOS. Please call 112 immediately.'
        );
        setEmergencyProcessing(false);
        return;
      }

      // Capture the customer's current GPS location immediately.
      const permission = await Location.requestForegroundPermissionsAsync();
      if (permission.status !== 'granted') {
        setEmergencyProcessing(false);
        Alert.alert(
          'Location Permission Required',
          'Please allow Healthome to access your location so we can find the nearest hospital. You can still call 112 immediately.',
          [
            {
              text: 'Call 112',
              onPress: async () => {
                try {
                  const url = `tel:${number}`;
                  if (await Linking.canOpenURL(url)) await Linking.openURL(url);
                } catch (error) {
                  console.log('Emergency call error:', error);
                }
              },
            },
            { text: 'Cancel', style: 'cancel' },
          ]
        );
        return;
      }

      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const { latitude, longitude } = position.coords;
      setEmergencyLocation({ latitude, longitude });

      // Start the emergency call as soon as GPS coordinates are captured.
      try {
        const url = `tel:${number}`;
        if (await Linking.canOpenURL(url)) await Linking.openURL(url);
      } catch (callError) {
        console.log('Emergency call error:', callError);
      }

      // Prototype hospital lookup using OpenStreetMap Overpass.
      const overpassQuery = `
        [out:json][timeout:12];
        (
          nwr["amenity"="hospital"](around:15000,${latitude},${longitude});
        );
        out center tags;
      `;

      let hospital = null;
      try {
        const response = await fetch('https://overpass-api.de/api/interpreter', {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: overpassQuery,
        });
        if (!response.ok) throw new Error(`Hospital lookup failed: ${response.status}`);

        const data = await response.json();
        const candidates = Array.isArray(data.elements) ? data.elements : [];
        const toRadians = (value) => (value * Math.PI) / 180;
        const distanceKm = (lat1, lon1, lat2, lon2) => {
          const earthRadius = 6371;
          const dLat = toRadians(lat2 - lat1);
          const dLon = toRadians(lon2 - lon1);
          const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
          return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        };

        hospital = candidates
          .map((item) => {
            const tags = item.tags || {};
            const itemLat = Number(item.lat ?? item.center?.lat);
            const itemLon = Number(item.lon ?? item.center?.lon);
            if (!Number.isFinite(itemLat) || !Number.isFinite(itemLon)) return null;
            return {
              id: String(item.id),
              name: tags.name || tags.official_name || 'Nearest Hospital',
              address: tags['addr:full'] || tags['addr:street'] || tags['addr:city'] || 'Hospital location',
              latitude: itemLat,
              longitude: itemLon,
              distanceKm: distanceKm(latitude, longitude, itemLat, itemLon),
            };
          })
          .filter(Boolean)
          .sort((a, b) => a.distanceKm - b.distanceKm)[0] || null;
      } catch (lookupError) {
        console.log('Nearest hospital lookup error:', lookupError);
      }

      if (hospital) {
        setNearestHospital(hospital);
        const distanceText = `${hospital.distanceKm.toFixed(1)} km away`;
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${hospital.latitude},${hospital.longitude}`;

        setNotifications((previous) => [
          {
            id: `emergency-${Date.now()}`,
            type: 'emergency',
            title: 'Emergency Location & Hospital',
            text: `Your current location was captured. Nearest hospital: ${hospital.name} (${distanceText}). ${hospital.address}. Hospital coordinates: ${hospital.latitude.toFixed(6)}, ${hospital.longitude.toFixed(6)}.`,
            time: 'Just now',
            icon: 'medical-outline',
            hospitalName: hospital.name,
            hospitalAddress: hospital.address,
            hospitalLatitude: hospital.latitude,
            hospitalLongitude: hospital.longitude,
            distanceKm: hospital.distanceKm,
            mapsUrl,
            customerLatitude: latitude,
            customerLongitude: longitude,
          },
          ...previous,
        ]);

        setEmergencyProcessing(false);
        Alert.alert(
          'Emergency Assistance',
          `Location captured.\n\nNearest hospital: ${hospital.name}\nDistance: ${distanceText}\n\n112 emergency call has been initiated.`,
          [
            { text: 'Open Hospital Route', onPress: () => Linking.openURL(mapsUrl).catch(() => {}) },
            { text: 'View Notification', onPress: () => setScreen('notifications') },
          ]
        );
      } else {
        setNotifications((previous) => [
          {
            id: `emergency-${Date.now()}`,
            type: 'emergency',
            title: 'Emergency Location Captured',
            text: `Your current location was captured at ${latitude.toFixed(6)}, ${longitude.toFixed(6)}. The hospital directory could not be reached. Please use Maps to find the nearest hospital.`,
            time: 'Just now',
            icon: 'medical-outline',
            customerLatitude: latitude,
            customerLongitude: longitude,
          },
          ...previous,
        ]);
        setEmergencyProcessing(false);
        Alert.alert(
          'Location Captured',
          'Your location was captured and the emergency call was initiated, but the nearest hospital directory could not be reached.',
          [
            { text: 'Open Maps', onPress: () => Linking.openURL('https://www.google.com/maps/search/?api=1&query=hospital+near+me').catch(() => {}) },
            { text: 'View Notification', onPress: () => setScreen('notifications') },
          ]
        );
      }
    } catch (error) {
      console.log('Emergency location error:', error);
      setEmergencyProcessing(false);
      Alert.alert(
        'Emergency Assistance',
        `Unable to access the current location. Please call ${number} immediately.`,
        [
          {
            text: 'Call 112',
            onPress: async () => {
              try {
                const url = `tel:${number}`;
                if (await Linking.canOpenURL(url)) await Linking.openURL(url);
              } catch (callError) {
                console.log('Emergency call error:', callError);
              }
            },
          },
          { text: 'Cancel', style: 'cancel' },
        ]
      );
    }
  };

  /* -------------------------------------------------------
     BOOKING
  ------------------------------------------------------- */

  const openService = (service) => {
    setSelectedService(service);
    setSelectedEquipment(null);
    setScreen('serviceDetails');
  };

  const openEquipment = (item) => {
    setSelectedEquipment(item);
    setSelectedService(null);
    setScreen('equipmentDetails');
  };

  const startBooking = () => {
    const selectedItem = selectedService || selectedEquipment;

    if (!selectedItem) {
      Alert.alert(
        'Select a Service',
        'Please select a service or medical equipment before starting a booking.'
      );
      setScreen('services');
      return;
    }

    // Start every booking with a clean form so details from an older
    // booking cannot accidentally be submitted again.
    setBookingType('now');
    setBookingDate('');
    setBookingTime('');
    setPatientName('');
    setPatientPhone(phone || '');
    setAddress('');
    setNotes('');
    setPaymentFlow(null);
    setSelectedUpiApp('');
    setBookingPickerVisible(false);
    const savedDefault = defaultPaymentMethod;
    const normalizedDefault =
      savedDefault === 'Healthome Wallet' || savedDefault === 'Wallet'
        ? 'Wallet'
        : String(savedDefault || '').startsWith('Card ••••')
        ? 'Card'
        : '';

    setPaymentMethod(normalizedDefault);
    setScreen('booking');
  };

  const openBookingPicker = (type) => {
    setBookingPickerType(type);
    setBookingPickerVisible(true);
  };

  const formatBookingDate = (isoDate) => {
    const [year, month, day] = isoDate.split('-').map(Number);
    return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
  };

  const trackRequest = () => {
    const id = trackingId.trim().toUpperCase();

    if (!id) {
      Alert.alert('Tracking ID Required', 'Please enter your Tracking ID.');
      return;
    }

    if (!/^HLT\d{6}$/.test(id)) {
      Alert.alert(
        'Invalid Tracking ID',
        'Please enter a valid Tracking ID such as HLT146159, or use the Tracking ID from My Bookings.'
      );
      return;
    }

    setTrackingId(id);
    setTrackingReturnScreen('home');
    setTrackingPath([]);
    setTrackingLocation(null);
    setTrackingError('');
    setNotifications((previous) => [
      {
        id: `tracking-${id}-${Date.now()}`,
        type: 'tracking',
        title: 'Live Tracking Available',
        text: `Live tracking is now available for ${id}.`,
        time: 'Just now',
        icon: 'navigate-outline',
      },
      ...previous.filter((item) => item.type !== 'tracking'),
    ]);
    setScreen('tracking');
  };

  const continueToPayment = () => {
    if (!selectedService && !selectedEquipment) {
      Alert.alert('Booking Error', 'Please select a service before continuing.');
      setScreen('services');
      return;
    }

    const cleanPatientName = patientName.trim();
    const cleanPatientPhone = patientPhone.replace(/\D/g, '');
    const cleanAddress = address.trim();

    if (!cleanPatientName || !cleanPatientPhone || !cleanAddress) {
      Alert.alert(
        'Complete Details',
        'Please enter patient name, a valid mobile number and the complete service address.'
      );
      return;
    }

    if (cleanPatientPhone.length !== 10) {
      Alert.alert(
        'Invalid Mobile Number',
        'Please enter a valid 10-digit patient mobile number.'
      );
      return;
    }

    if (bookingType === 'later') {
      const cleanDate = bookingDate.trim();
      const cleanTime = bookingTime.trim();

      if (!cleanDate || !cleanTime) {
        Alert.alert(
          'Schedule Required',
          'Please enter both booking date and booking time.'
        );
        return;
      }

      if (!/^\d{2}\/\d{2}\/\d{4}$/.test(cleanDate)) {
        Alert.alert(
          'Invalid Date',
          'Please enter the date in DD/MM/YYYY format.'
        );
        return;
      }

      const [day, month, year] = cleanDate.split('/').map(Number);
      const selectedDate = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (
        selectedDate.getFullYear() !== year ||
        selectedDate.getMonth() !== month - 1 ||
        selectedDate.getDate() !== day ||
        selectedDate < today
      ) {
        Alert.alert(
          'Invalid Date',
          'Please choose today or a future date in DD/MM/YYYY format.'
        );
        return;
      }
    }

    setPatientName(cleanPatientName);
    setPatientPhone(cleanPatientPhone);
    setAddress(cleanAddress);
    setNotes(notes.trim());
    setPaymentFlow(null);
    setSelectedUpiApp('');
    setScreen('bookingPayment');
  };

  const confirmPayment = () => {
    if (!selectedService && !selectedEquipment) {
      Alert.alert('Booking Error', 'Your selected service is no longer available. Please start the booking again.');
      setScreen('services');
      return;
    }

    if (!paymentMethod) {
      Alert.alert('Select Payment', 'Please select a payment method.');
      return;
    }

    if (paymentMethod === 'UPI' && !selectedUpiApp) {
      Alert.alert('Select UPI App', 'Please select your UPI app before confirming the booking.');
      return;
    }

    const safeSavedMethods = Array.isArray(savedPaymentMethods) ? savedPaymentMethods : [];
    if (paymentMethod === 'Card') {
      const hasSavedCard = safeSavedMethods.some((method) => String(method || '').toLowerCase().includes('card'));
      if (!hasSavedCard) {
        Alert.alert('Card Required', 'Please save a card from Profile → Payment Methods before using Card for a booking.');
        return;
      }
    }

    const itemName = selectedService?.name || selectedEquipment?.name || 'Healthome Service';
    const amount = Number(selectedService?.price || selectedEquipment?.price || 0);
    const safeWalletBalance = Number(walletBalance) || 0;

    if (paymentMethod === 'Wallet' && safeWalletBalance < amount) {
      Alert.alert('Insufficient Wallet Balance', `Your wallet balance is ₹${safeWalletBalance}. Please add money to your wallet or choose another payment method.`);
      return;
    }

    const bookingNumber = 'HLT' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      id: bookingNumber,
      service: itemName,
      amount,
      patient: patientName || 'Healthome Customer',
      phone: patientPhone || '',
      address: address || '',
      notes: notes || '',
      date: bookingType === 'now' ? 'Immediate Request' : `${bookingDate} ${bookingTime}`,
      payment: paymentMethod,
      status: 'Received',
      healthPoints: 10,
    };

    setBookings((previous) => [newBooking, ...previous]);
    setLastConfirmedBooking(newBooking);

    if (paymentMethod === 'Wallet') {
      setWalletBalance((balance) => Math.max(0, Number(balance) - amount));
    }

    setTrackingId(bookingNumber);
    setNotifications((previous) => [
      {
        id: `booking-${bookingNumber}`,
        type: 'booking',
        title: 'Booking Confirmed',
        text: `${itemName} has been booked successfully. Tracking ID: ${bookingNumber}.`,
        time: 'Just now',
        icon: 'checkmark-circle-outline',
      },
      ...previous,
    ]);

    // A real success screen is provided below, so the app no longer lands on an undefined screen.
    setScreen('bookingSuccess');
  };

  const cancelBooking = (booking) => {
    if (!booking) return;

    if (['Completed', 'Cancelled'].includes(booking.status)) {
      Alert.alert(
        booking.status === 'Cancelled' ? 'Booking Already Cancelled' : 'Booking Completed',
        booking.status === 'Cancelled'
          ? 'This booking has already been cancelled.'
          : 'A completed booking cannot be cancelled.'
      );
      return;
    }

    Alert.alert(
      'Cancel Booking?',
      `Are you sure you want to cancel ${booking.service || 'this booking'}?`,
      [
        { text: 'Keep Booking', style: 'cancel' },
        {
          text: 'Cancel Booking',
          style: 'destructive',
          onPress: () => {
            const refundEligible = ['UPI', 'Card', 'Wallet'].includes(booking.payment);
            const refundAmount = refundEligible ? Number(booking.amount || 0) : 0;

            const updatedBooking = {
              ...booking,
              status: 'Cancelled',
              cancelledAt: new Date().toISOString(),
              refundAmount,
              refundStatus: refundEligible ? 'Refund Initiated' : 'Not Applicable',
              refundMethod: refundEligible ? booking.payment : 'Cash on Service',
            };

            setBookings((previous) =>
              previous.map((item) =>
                item.id === booking.id ? updatedBooking : item
              )
            );

            if (lastConfirmedBooking?.id === booking.id) {
              setLastConfirmedBooking(updatedBooking);
            }

            setSelectedRefundBooking(updatedBooking);

            setNotifications((previous) => [
              {
                id: `cancel-${booking.id}-${Date.now()}`,
                type: 'booking',
                title: 'Booking Cancelled',
                text: refundEligible
                  ? `Booking ${booking.id} was cancelled. Refund of ₹${refundAmount.toLocaleString('en-IN')} has been initiated.`
                  : `Booking ${booking.id} was cancelled. No online payment refund is applicable for Cash on Service.`,
                time: 'Just now',
                icon: 'close-circle-outline',
              },
              ...previous,
            ]);

            setScreen('refund');
          },
        },
      ]
    );
  };

  useEffect(() => {
    if (screen !== 'otp' || resendSeconds <= 0) return;

    const timer = setInterval(() => {
      setResendSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [screen, resendSeconds]);

  /* -------------------------------------------------------
     FILTER SERVICES
  ------------------------------------------------------- */

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  const homeSearch = search.trim().toLowerCase();
  const matchesSearch = (item) => {
    if (!homeSearch) return true;
    const text = [
      item.name,
      item.category,
      item.description,
      item.treatment,
      item.unit,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return text.includes(homeSearch);
  };

  const homeServicesFiltered = services.filter(
    (item) => item.category === 'Services at Home' && matchesSearch(item)
  );
  const onCallServicesFiltered = services.filter(
    (item) => item.category === 'On-Call Services' && matchesSearch(item)
  );
  const equipmentFiltered = equipment.filter(matchesSearch);

  const searchMatchesPhysio =
    !homeSearch ||
    'physiotherapy physiotherapist physio recovery mobility'.includes(homeSearch);
  const searchMatchesCall =
    !homeSearch ||
    'call services consultation support helpline'.includes(homeSearch);
  const searchMatchesEmergency =
    !homeSearch ||
    'emergency urgent ambulance 24x7 247'.includes(homeSearch);

  // Do not briefly show the login page while restoring a saved session.
  if (sessionLoading) {
    return (
      <View style={styles.authRoot}>
        <StatusBar barStyle="dark-content" backgroundColor="#F3FBFD" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#087F8C', fontSize: 22, fontWeight: '900' }}>Healthome</Text>
          <Text style={{ color: '#78909C', marginTop: 6, fontSize: 13 }}>Restoring your session…</Text>
        </View>
      </View>
    );
  }

  /* =========================================================
     LOGIN SCREEN
  ========================================================= */

  if (screen === 'login') {
    const countries = [
      { flag: '🇮🇳', name: 'India', code: '+91', digits: 10 },
      { flag: '🇦🇪', name: 'United Arab Emirates', code: '+971', digits: 9 },
      { flag: '🇸🇬', name: 'Singapore', code: '+65', digits: 8 },
      { flag: '🇬🇧', name: 'United Kingdom', code: '+44', digits: 10 },
      { flag: '🇺🇸', name: 'United States', code: '+1', digits: 10 },
      { flag: '🇦🇺', name: 'Australia', code: '+61', digits: 9 },
      { flag: '🇨🇦', name: 'Canada', code: '+1', digits: 10 },
      { flag: '🇩🇪', name: 'Germany', code: '+49', digits: 10 },
    ];

    const selectedCountry = countries.find(
      (country) => country.code === countryCode && country.flag === countryFlag
    ) || countries[0];

    const cleanPhone = phone.replace(/\D/g, '');
    const isPhoneComplete = cleanPhone.length === selectedCountry.digits;

    return (
      <SafeAreaView style={styles.modernAuthRoot}>
        <StatusBar barStyle="dark-content" backgroundColor="#F5FBFC" translucent={false} />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.modernAuthScroll}
          >
            <LinearGradient
              colors={['#F7FCFC', '#EAF8F8', '#F4F8FF']}
              style={styles.modernAuthBackground}
            >
              <View style={styles.modernAuthTopRow}>
                <View style={styles.modernLogoBox}>
                  <Ionicons name="medical" size={25} color="#FFFFFF" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.modernLogoText}>Healthome</Text>
                  <Text style={styles.modernLogoSub}>QUALITY CARE AT YOUR HOME</Text>
                </View>
                <View style={styles.modernTopBadge}>
                  <Ionicons name="shield-checkmark" size={13} color="#087F8C" />
                  <Text style={styles.modernTopBadgeText}>Trusted</Text>
                </View>
              </View>

              <View style={styles.modernHeroCard}>
                <View style={styles.modernHeroText}>
                  <Text style={styles.modernHeroEyebrow}>WELCOME TO A BETTER WAY OF CARING</Text>
                  <Text style={styles.modernHeroTitle}>Healthcare that feels closer.</Text>
                  <Text style={styles.modernHeroSubtitle}>
                    Book trusted healthcare services, consultations and home support from one simple place.
                  </Text>
                </View>

                <View style={styles.modernMedicalIllustration}>
                  <View style={styles.modernMonitor}>
                    <View style={styles.modernMonitorScreen}>
                      <Ionicons name="pulse" size={30} color="#19B8AA" />
                      <View style={styles.modernMonitorLine} />
                    </View>
                    <View style={styles.modernMonitorStand} />
                  </View>
                  <View style={styles.modernMedicalCross}>
                    <View style={styles.modernCrossV} />
                    <View style={styles.modernCrossH} />
                  </View>
                  <View style={styles.modernMedicalDot} />
                </View>
              </View>

              <View style={styles.modernServiceRow}>
                <View style={styles.modernServicePill}>
                  <View style={styles.modernServiceIcon}><Ionicons name="home-outline" size={17} color="#087F8C" /></View>
                  <Text style={styles.modernServiceText}>Care at Home</Text>
                </View>
                <View style={styles.modernServicePill}>
                  <View style={styles.modernServiceIcon}><Ionicons name="medkit-outline" size={17} color="#087F8C" /></View>
                  <Text style={styles.modernServiceText}>Nursing</Text>
                </View>
                <View style={styles.modernServicePill}>
                  <View style={styles.modernServiceIcon}><Ionicons name="flask-outline" size={17} color="#087F8C" /></View>
                  <Text style={styles.modernServiceText}>Diagnostics</Text>
                </View>
              </View>

              <View style={styles.modernLoginCard}>
                <View style={styles.modernLoginHeader}>
                  <View>
                    <Text style={styles.modernLoginEyebrow}>GET STARTED</Text>
                    <Text style={styles.modernLoginTitle}>Enter your mobile number</Text>
                    <Text style={styles.modernLoginSubtitle}>We'll verify it with a secure OTP.</Text>
                  </View>
                  <View style={styles.modernLockCircle}>
                    <Ionicons name="lock-closed-outline" size={21} color="#087F8C" />
                  </View>
                </View>

                <Text style={styles.modernFieldLabel}>MOBILE NUMBER</Text>
                <View style={[styles.modernPhoneField, isPhoneComplete && styles.modernPhoneFieldActive]}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.modernCountryButton}
                    onPress={() => { Keyboard.dismiss(); setCountryPickerVisible(true); }}
                  >
                    <Text style={styles.modernFlag}>{countryFlag}</Text>
                    <Text style={styles.modernCode}>{countryCode}</Text>
                    <Ionicons name="chevron-down" size={14} color="#6F8994" />
                  </TouchableOpacity>
                  <View style={styles.modernDivider} />
                  <TextInput
                    value={phone}
                    onChangeText={(text) => setPhone(text.replace(/\D/g, '').slice(0, selectedCountry.digits))}
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    placeholder="Enter mobile number"
                    placeholderTextColor="#9AAEB8"
                    maxLength={selectedCountry.digits}
                    style={styles.modernPhoneInput}
                    selectionColor="#087F8C"
                    cursorColor="#087F8C"
                    returnKeyType="done"
                    onSubmitEditing={() => { if (isPhoneComplete) sendOTP(); }}
                  />
                  {isPhoneComplete && <Ionicons name="checkmark-circle" size={23} color="#19A995" />}
                </View>

                <View style={styles.modernPrivacyRow}>
                  <Ionicons name="shield-checkmark-outline" size={15} color="#19A995" />
                  <Text style={styles.modernPrivacyText}>Your number is protected and only used for verification.</Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.9}
                  disabled={!isPhoneComplete}
                  onPress={sendOTP}
                  style={[styles.modernContinueWrap, !isPhoneComplete && styles.modernContinueDisabled]}
                >
                  <LinearGradient
                    colors={isPhoneComplete ? ['#08B7AA', '#087FDC'] : ['#B8C9CE', '#9FB3BA']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={styles.modernContinue}
                  >
                    <Text style={styles.modernContinueText}>Continue securely</Text>
                    <View style={styles.modernArrowCircle}><Ionicons name="arrow-forward" size={18} color="#087F8C" /></View>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View style={styles.modernTrustCard}>
                <View style={styles.modernTrustItem}><Ionicons name="shield-checkmark" size={20} color="#087F8C" /><Text style={styles.modernTrustText}>Safe & Reliable</Text></View>
                <View style={styles.modernTrustLine} />
                <View style={styles.modernTrustItem}><Ionicons name="people" size={20} color="#087F8C" /><Text style={styles.modernTrustText}>Trained Professionals</Text></View>
                <View style={styles.modernTrustLine} />
                <View style={styles.modernTrustItem}><Ionicons name="home" size={20} color="#087F8C" /><Text style={styles.modernTrustText}>Care At Your Home</Text></View>
              </View>

              <Text style={styles.modernFooter}>BETTER CARE • BRIGHTER TOMORROW</Text>
            </LinearGradient>
          </ScrollView>
        </KeyboardAvoidingView>

        <Modal
          visible={countryPickerVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setCountryPickerVisible(false)}
        >
          <View style={styles.premiumCountryBackdrop}>
            <TouchableOpacity
              activeOpacity={1}
              style={StyleSheet.absoluteFillObject}
              onPress={() => setCountryPickerVisible(false)}
            />

            <View style={styles.premiumCountryModal}>
              <View style={styles.premiumCountryHandle} />

              <View style={styles.premiumCountryHeader}>
                <View>
                  <Text style={styles.premiumCountryModalTitle}>Select country</Text>
                  <Text style={styles.premiumCountryModalSubtitle}>Choose your mobile country code</Text>
                </View>

                <TouchableOpacity
                  onPress={() => setCountryPickerVisible(false)}
                  style={styles.premiumCountryClose}
                >
                  <Ionicons name="close" size={22} color="#EAF8FF" />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                {countries.map((country) => {
                  const active = country.code === countryCode && country.flag === countryFlag;

                  return (
                    <TouchableOpacity
                      key={`${country.name}-${country.code}`}
                      activeOpacity={0.78}
                      style={[styles.premiumCountryRow, active && styles.premiumCountryRowActive]}
                      onPress={() => {
                        setCountryCode(country.code);
                        setCountryFlag(country.flag);
                        setPhone('');
                        setCountryPickerVisible(false);
                      }}
                    >
                      <Text style={styles.premiumCountryRowFlag}>{country.flag}</Text>
                      <Text style={styles.premiumCountryRowName}>{country.name}</Text>
                      <Text style={styles.premiumCountryRowCode}>{country.code}</Text>
                      {active && <Ionicons name="checkmark-circle" size={20} color="#62E8DB" />}
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  /* =========================================================
     NAME SETUP — shown after OTP for first-time login
  ========================================================= */

  if (screen === 'nameSetup') {
    return (
      <SafeAreaView style={styles.modernAuthRoot}>
        <StatusBar barStyle="dark-content" backgroundColor="#F5FBFC" translucent={false} />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={styles.modernNameScroll} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <LinearGradient colors={['#F7FCFC', '#E9F8F8', '#F4F8FF']} style={styles.modernNameBackground}>
              <TouchableOpacity onPress={() => setScreen('otp')} style={styles.modernBackButton}>
                <Ionicons name="arrow-back" size={21} color="#123F61" />
              </TouchableOpacity>

              <View style={styles.modernNameIllustration}>
                <View style={styles.modernNameCircleLarge}>
                  <View style={styles.modernNameCircleSmall}>
                    <Ionicons name="person" size={39} color="#087F8C" />
                  </View>
                </View>
                <View style={styles.modernNameMedicalBadge}><Ionicons name="heart" size={15} color="#FFFFFF" /></View>
                <View style={styles.modernNamePlusBadge}><Ionicons name="add" size={20} color="#087F8C" /></View>
              </View>

              <Text style={styles.modernNameEyebrow}>ONE LAST STEP</Text>
              <Text style={styles.modernNameTitle}>Let's make your care personal.</Text>
              <Text style={styles.modernNameSubtitle}>Tell us what you'd like us to call you. Your name will appear on your Healthome profile.</Text>

              <View style={styles.modernNameCard}>
                <Text style={styles.modernFieldLabel}>YOUR FULL NAME</Text>
                <View style={styles.modernNameInput}>
                  <View style={styles.modernNameInputIcon}><Ionicons name="person-outline" size={20} color="#087F8C" /></View>
                  <TextInput
                    value={userName}
                    onChangeText={setUserName}
                    placeholder="Enter your full name"
                    placeholderTextColor="#9AAEB8"
                    autoCapitalize="words"
                    returnKeyType="done"
                    onSubmitEditing={completeNameSetup}
                    style={styles.modernNameTextInput}
                  />
                  {userName.trim().length >= 2 && <Ionicons name="checkmark-circle" size={22} color="#19A995" />}
                </View>

                <View style={styles.modernNameHint}>
                  <Ionicons name="sparkles-outline" size={16} color="#087F8C" />
                  <Text style={styles.modernNameHintText}>This helps us personalize your appointments, bookings and profile.</Text>
                </View>

                <TouchableOpacity activeOpacity={0.9} onPress={completeNameSetup} style={styles.modernContinueWrap}>
                  <LinearGradient colors={['#08B7AA', '#087FDC']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.modernContinue}>
                    <Text style={styles.modernContinueText}>Create my profile</Text>
                    <View style={styles.modernArrowCircle}><Ionicons name="arrow-forward" size={18} color="#087F8C" /></View>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View style={styles.modernNamePhone}><Ionicons name="phone-portrait-outline" size={15} color="#087F8C" /><Text style={styles.modernNamePhoneText}>Verified number: {countryCode} {phone}</Text></View>
              <Text style={styles.modernFooter}>HEALTHOME • QUALITY CARE AT YOUR HOME</Text>
            </LinearGradient>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  /* =========================================================
     OTP SCREEN
  ========================================================= */

  if (screen === 'otp') {
    const otpDigits = otp.padEnd(4, '').slice(0, 4).split('');

    const handleOtpChange = (value, index) => {
      const digit = value.replace(/\D/g, '').slice(-1);
      const digits = otp.split('');
      digits[index] = digit;
      const nextOtp = digits.join('').slice(0, 4);
      setOtp(nextOtp);

      if (digit && index < 3) {
        otpRefs.current[index + 1]?.focus();
      }
    };

    const handleOtpKeyPress = (event, index) => {
      if (
        event.nativeEvent.key === 'Backspace' &&
        !otp[index] &&
        index > 0
      ) {
        otpRefs.current[index - 1]?.focus();
      }
    };

    const resendOtp = () => {
      if (resendSeconds > 0) return;
      setOtp('');
      setResendSeconds(28);
      otpRefs.current[0]?.focus();
      Alert.alert('OTP Sent', 'A new demo OTP has been sent.');
    };

    return (
      <View style={styles.otpCodeRoot}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#F3FBFD"
          translucent={false}
        />

        {/* Entire OTP page is built with React Native code.
            No background image is used here. */}
        <LinearGradient
          colors={['#F4FBFD', '#E8F7FA', '#DDF3F7', '#F8FCFD']}
          locations={[0, 0.38, 0.72, 1]}
          style={styles.otpCodeBackground}
        >
          {/* Decorative healthcare-style shapes */}
          <View style={styles.otpGlowOne} />
          <View style={styles.otpGlowTwo} />
          <View style={styles.otpWaveOne} />
          <View style={styles.otpWaveTwo} />

          <SafeAreaView style={styles.otpCodeSafeArea}>
            <KeyboardAvoidingView
              style={styles.otpCodeKeyboard}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <ScrollView
                contentContainerStyle={styles.otpCodeScroll}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode={
                  Platform.OS === 'ios' ? 'interactive' : 'on-drag'
                }
                showsVerticalScrollIndicator={false}
                bounces={false}
              >
                <View style={styles.otpCodeContainer}>

                  {/* Top branding — text/icons only */}
                  <View style={styles.otpTopBrandRow}>
                    <View style={styles.otpBrandLeft}>
                      <View style={styles.otpBrandLine} />
                      <Text style={styles.otpBrandText}>
                        Trusted{'\n'}Home Healthcare
                      </Text>
                    </View>

                    <View style={styles.otpBrandRight}>
                      <Text style={styles.otpBrandRightText}>
                        Better Care{'\n'}Brighter Tomorrow
                      </Text>
                      <View style={styles.otpBrandUnderline} />
                    </View>
                  </View>

                  {/* Verification icon */}
                  <View style={styles.otpShieldCircle}>
                    <Ionicons
                      name="shield-checkmark-outline"
                      size={67}
                      color="#087F8C"
                    />
                  </View>

                  <Text style={styles.otpCodeTitle}>Verify OTP</Text>

                  <Text style={styles.otpCodeDescription}>
                    We have sent a 4-digit verification code to
                  </Text>

                  <Text style={styles.otpCodePhone}>
                    {countryCode} {phone}
                  </Text>

                  {/* OTP card */}
                  <View style={styles.otpCodeCard}>
                    <Text style={styles.otpCodeLabel}>Enter OTP</Text>

                    <View style={styles.otpCodeBoxes}>
                      {[0, 1, 2, 3].map((index) => (
                        <TextInput
                          key={index}
                          ref={(ref) => {
                            otpRefs.current[index] = ref;
                          }}
                          value={otpDigits[index] || ''}
                          onChangeText={(value) =>
                            handleOtpChange(value, index)
                          }
                          onKeyPress={(event) =>
                            handleOtpKeyPress(event, index)
                          }
                          keyboardType="number-pad"
                          maxLength={1}
                          style={[
                            styles.otpCodeBox,
                            otpDigits[index] &&
                              styles.otpCodeBoxFilled
                          ]}
                          textAlign="center"
                          selectTextOnFocus
                          placeholder="•"
                          placeholderTextColor="#91A7B9"
                        />
                      ))}
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.88}
                      style={[
                        styles.otpCodeVerifyButton,
                        otp.length === 4 &&
                          styles.otpCodeVerifyButtonActive
                      ]}
                      onPress={verifyOTP}
                    >
                      <Text style={styles.otpCodeVerifyText}>
                        Verify & Continue
                      </Text>
                      <Ionicons
                        name="arrow-forward"
                        size={25}
                        color="#FFFFFF"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.75}
                      onPress={resendOtp}
                      disabled={resendSeconds > 0}
                    >
                      <Text style={styles.otpCodeResend}>
                        Resend OTP
                        {resendSeconds > 0 && (
                          <Text style={styles.otpCodeResendTimer}>
                            {' '}in 00:
                            {String(resendSeconds).padStart(2, '0')}
                          </Text>
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.otpTerms}>
                    By continuing, you agree to our{' '}
                    <Text style={styles.otpTermsAccent}>Terms</Text>,{' '}
                    <Text style={styles.otpTermsAccent}>Privacy Policy</Text>{' '}
                    and healthcare service guidelines.
                  </Text>

                  {/* Trust row — created entirely with icons */}
                  <View style={styles.otpTrustRow}>
                    <View style={styles.otpTrustItem}>
                      <Ionicons
                        name="shield-checkmark-outline"
                        size={35}
                        color="#087F8C"
                      />
                      <Text style={styles.otpTrustText}>
                        Safe &{'\n'}Reliable
                      </Text>
                    </View>

                    <View style={styles.otpTrustDivider} />

                    <View style={styles.otpTrustItem}>
                      <Ionicons
                        name="people-outline"
                        size={37}
                        color="#087F8C"
                      />
                      <Text style={styles.otpTrustText}>
                        Trusted{'\n'}Professionals
                      </Text>
                    </View>

                    <View style={styles.otpTrustDivider} />

                    <View style={styles.otpTrustItem}>
                      <Ionicons
                        name="home-outline"
                        size={37}
                        color="#087F8C"
                      />
                      <Text style={styles.otpTrustText}>
                        Care{'\n'}At Your Home
                      </Text>
                    </View>
                  </View>

                  <View style={styles.otpFooter}>
                    <Text style={styles.otpFooterText}>
                      YOUR HEALTH
                    </Text>
                    <Text style={styles.otpFooterText}>
                      OUR PRIORITY
                    </Text>
                    <View style={styles.otpFooterLine} />
                  </View>

                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  /* =========================================================
     CALL SERVICES / DOCTOR CONSULTATION
  ========================================================= */
  if (screen === 'callServices') {
    const selectedDateLabel = appointmentDateOptions.find(
      (item) => item.value === callMeetingDate
    )?.label;

    return (
      <AppPage
        title="Call Services"
        onBack={() => setScreen('home')}
        bottom="Home"
        setScreen={setScreen}
      >
        <View style={styles.callPageHero}>
          <View style={styles.callPageHeroIcon}>
            <Ionicons name="medical" size={31} color="#FFFFFF" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.callPageHeroTitle}>Doctor Consultation</Text>
            <Text style={styles.callPageHeroText}>
              Share your prescription and book a consultation at a time that suits you.
            </Text>
          </View>
        </View>

        <View style={styles.callPageStepRow}>
          <View style={styles.callPageStepActive}>
            <Text style={styles.callPageStepNumber}>1</Text>
          </View>
          <View style={styles.callPageStepLine} />
          <View style={[styles.callPageStepActive, callPrescription && styles.callPageStepDone]}>
            <Text style={styles.callPageStepNumber}>2</Text>
          </View>
          <View style={styles.callPageStepLine} />
          <View style={[styles.callPageStepActive, callMeetingDate && callMeetingTime && styles.callPageStepDone]}>
            <Text style={styles.callPageStepNumber}>3</Text>
          </View>
        </View>

        <Text style={styles.callPageSectionTitle}>Doctor Consultant</Text>
        <View style={styles.doctorConsultantCard}>
          <View style={styles.doctorConsultantIcon}>
            <Ionicons name="person" size={28} color="#087F8C" />
            <View style={styles.doctorConsultantCross}>
              <View style={styles.doctorConsultantCrossV} />
              <View style={styles.doctorConsultantCrossH} />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.doctorConsultantTitle}>Doctor Consultant</Text>
            <Text style={styles.doctorConsultantText}>
              Professional healthcare consultation with your prescription.
            </Text>
          </View>
          <View style={styles.selectedCheck}>
            <Ionicons name="checkmark" size={17} color="#FFFFFF" />
          </View>
        </View>

        <Text style={styles.callPageSectionTitle}>1. Upload Prescription</Text>
        <Text style={styles.callPageHint}>
          Upload a clear prescription so the doctor can review it before your appointment.
        </Text>

        {callPrescription ? (
          <View style={styles.prescriptionPreviewCard}>
            <Image
              source={{ uri: callPrescription.uri }}
              style={styles.prescriptionPreviewImage}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.prescriptionPreviewTitle}>Prescription Uploaded</Text>
              <Text style={styles.prescriptionPreviewText}>Ready for doctor review</Text>
              <TouchableOpacity onPress={() => chooseCallPrescription('gallery')}>
                <Text style={styles.changePrescriptionText}>Change prescription</Text>
              </TouchableOpacity>
            </View>
            <Ionicons name="checkmark-circle" size={25} color="#0A9A7E" />
          </View>
        ) : (
          <View style={styles.prescriptionActionRow}>
            <TouchableOpacity
              activeOpacity={0.86}
              style={styles.prescriptionActionCard}
              onPress={() => chooseCallPrescription('gallery')}
            >
              <View style={styles.prescriptionActionIcon}>
                <Ionicons name="images-outline" size={25} color="#087F8C" />
              </View>
              <Text style={styles.prescriptionActionTitle}>Upload</Text>
              <Text style={styles.prescriptionActionText}>From gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.86}
              style={styles.prescriptionActionCard}
              onPress={() => chooseCallPrescription('camera')}
            >
              <View style={styles.prescriptionActionIcon}>
                <Ionicons name="camera-outline" size={25} color="#087F8C" />
              </View>
              <Text style={styles.prescriptionActionTitle}>Take Photo</Text>
              <Text style={styles.prescriptionActionText}>Use camera</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.callPageSectionTitle}>2. Choose Appointment Type</Text>
        <View style={styles.appointmentModeRow}>
          <TouchableOpacity
            activeOpacity={0.86}
            style={[styles.appointmentModeCard, callServiceMode === 'call' && styles.appointmentModeCardActive]}
            onPress={() => setCallServiceMode('call')}
          >
            <Ionicons name="call-outline" size={29} color={callServiceMode === 'call' ? '#FFFFFF' : '#087F8C'} />
            <Text style={[styles.appointmentModeTitle, callServiceMode === 'call' && styles.appointmentModeTitleActive]}>On Call</Text>
            <Text style={[styles.appointmentModeText, callServiceMode === 'call' && styles.appointmentModeTextActive]}>Talk to a doctor by phone</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.86}
            style={[styles.appointmentModeCard, callServiceMode === 'video' && styles.appointmentModeCardActive]}
            onPress={() => setCallServiceMode('video')}
          >
            <Ionicons name="videocam-outline" size={29} color={callServiceMode === 'video' ? '#FFFFFF' : '#087F8C'} />
            <Text style={[styles.appointmentModeTitle, callServiceMode === 'video' && styles.appointmentModeTitleActive]}>Video Call</Text>
            <Text style={[styles.appointmentModeText, callServiceMode === 'video' && styles.appointmentModeTextActive]}>Online video consultation</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.callPageSectionTitle}>3. Set Appointment Date & Time</Text>
        <View style={styles.appointmentPickerRow}>
          <TouchableOpacity
            activeOpacity={0.86}
            style={[styles.appointmentPickerButton, callMeetingDate && styles.appointmentPickerButtonSelected]}
            onPress={() => openAppointmentPicker('date')}
          >
            <Ionicons name="calendar-outline" size={22} color="#087F8C" />
            <View style={{ flex: 1 }}>
              <Text style={styles.appointmentPickerLabel}>Date</Text>
              <Text style={styles.appointmentPickerValue}>
                {selectedDateLabel || 'Select date'}
              </Text>
            </View>
            <Ionicons name="chevron-down" size={18} color="#6C8490" />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.86}
            style={[styles.appointmentPickerButton, callMeetingTime && styles.appointmentPickerButtonSelected]}
            onPress={() => openAppointmentPicker('time')}
          >
            <Ionicons name="time-outline" size={22} color="#087F8C" />
            <View style={{ flex: 1 }}>
              <Text style={styles.appointmentPickerLabel}>Time</Text>
              <Text style={styles.appointmentPickerValue}>
                {callMeetingTime || 'Select time'}
              </Text>
            </View>
            <Ionicons name="chevron-down" size={18} color="#6C8490" />
          </TouchableOpacity>
        </View>

        <View style={styles.callPageInfoCard}>
          <Ionicons name="shield-checkmark-outline" size={21} color="#087F8C" />
          <Text style={styles.callPageInfoText}>
            Your appointment details and prescription are saved to your Healthome session for confirmation.
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.88}
          style={[styles.confirmConsultationButton, !callPrescription && styles.confirmConsultationButtonDisabled]}
          onPress={scheduleCallService}
        >
          <Text style={styles.confirmConsultationText}>Confirm Doctor Appointment</Text>
          <Ionicons name="checkmark-circle-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <Modal
          visible={appointmentPickerVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setAppointmentPickerVisible(false)}
        >
          <View style={styles.appointmentPickerBackdrop}>
            <TouchableOpacity
              style={StyleSheet.absoluteFillObject}
              activeOpacity={1}
              onPress={() => setAppointmentPickerVisible(false)}
            />
            <View style={styles.appointmentPickerSheet}>
              <View style={styles.appointmentPickerHandle} />
              <View style={styles.appointmentPickerHeader}>
                <View>
                  <Text style={styles.appointmentPickerTitle}>
                    {appointmentPickerType === 'date' ? 'Select Appointment Date' : 'Select Appointment Time'}
                  </Text>
                  <Text style={styles.appointmentPickerSubtitle}>
                    {appointmentPickerType === 'date' ? 'Choose a date from the next 14 days' : 'Available consultation slots'}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setAppointmentPickerVisible(false)} style={styles.appointmentPickerClose}>
                  <Ionicons name="close" size={22} color="#173E56" />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false} style={styles.appointmentPickerList}>
                {appointmentPickerType === 'date' ? (
                  appointmentDateOptions.map((item, index) => (
                    <TouchableOpacity
                      key={item.value}
                      activeOpacity={0.84}
                      style={[styles.appointmentOption, callMeetingDate === item.value && styles.appointmentOptionActive]}
                      onPress={() => {
                        setCallMeetingDate(item.value);
                        setAppointmentPickerVisible(false);
                      }}
                    >
                      <View style={[styles.appointmentDateCircle, callMeetingDate === item.value && styles.appointmentDateCircleActive]}>
                        <Text style={[styles.appointmentDateDay, callMeetingDate === item.value && styles.appointmentDateActiveText]}>{index === 0 ? 'Today' : item.day}</Text>
                        <Text style={[styles.appointmentDateNumber, callMeetingDate === item.value && styles.appointmentDateActiveText]}>{item.dateNumber}</Text>
                      </View>
                      <Text style={[styles.appointmentOptionText, callMeetingDate === item.value && styles.appointmentOptionTextActive]}>{item.label}</Text>
                      {callMeetingDate === item.value && <Ionicons name="checkmark-circle" size={23} color="#087F8C" />}
                    </TouchableOpacity>
                  ))
                ) : (
                  appointmentTimeOptions.map((time) => (
                    <TouchableOpacity
                      key={time}
                      activeOpacity={0.84}
                      style={[styles.appointmentOption, callMeetingTime === time && styles.appointmentOptionActive]}
                      onPress={() => {
                        setCallMeetingTime(time);
                        setAppointmentPickerVisible(false);
                      }}
                    >
                      <View style={styles.timeOptionIcon}>
                        <Ionicons name="time-outline" size={20} color="#087F8C" />
                      </View>
                      <Text style={[styles.appointmentOptionText, callMeetingTime === time && styles.appointmentOptionTextActive]}>{time}</Text>
                      {callMeetingTime === time && <Ionicons name="checkmark-circle" size={23} color="#087F8C" />}
                    </TouchableOpacity>
                  ))
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </AppPage>
    );
  }

  /* =========================================================
     HOME SCREEN
  ========================================================= */
  const goBackFromTracking = () => {
    const destination = trackingReturnScreen || 'home';
    setTrackingError('');
    setScreen(destination);
  };

if (screen === 'tracking') {
  return (
    <View style={styles.trackingContainer}>

      {/* MAP / WEB MAP PREVIEW */}
      {Platform.OS === 'web' ? (
        <View style={styles.webTrackingMap}>
          <View style={styles.webMapGridOne} />
          <View style={styles.webMapGridTwo} />
          <View style={styles.webRoadHorizontal} />
          <View style={styles.webRoadVertical} />
          <View style={styles.webRoute} />

          <View style={styles.webMapLabel}>
            <Ionicons name="location" size={16} color="#087F8C" />
            <Text style={styles.webMapLabelText}>Delhi</Text>
          </View>

          <View style={styles.webProviderMarker}>
            <Ionicons name="medical" size={22} color="#FFFFFF" />
          </View>

          <View style={styles.webUserMarker}>
            <View style={styles.webUserDot} />
          </View>

          <View style={styles.webMapNotice}>
            <Ionicons name="map-outline" size={17} color="#365B75" />
            <Text style={styles.webMapNoticeText}>
              Live map preview — open the app on Android for GPS map tracking
            </Text>
          </View>
        </View>
      ) : (
        <MapView
          style={styles.trackingMap}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: 28.6139,
            longitude: 77.2090,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {trackingLocation && (
            <Marker
              coordinate={trackingLocation}
              title="Healthcare Professional"
              description="Live location"
            />
          )}

          {trackingPath.length > 1 && (
            <Polyline
              coordinates={trackingPath}
              strokeWidth={5}
              strokeColor="#087F8C"
            />
          )}
        </MapView>
      )}


      {/* TOP BAR */}
      <View
        style={styles.trackingTopBar}
        pointerEvents="box-none"
      >

        <TouchableOpacity
          activeOpacity={0.7}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          onPress={goBackFromTracking}
          style={styles.trackingBack}
        >
          <Ionicons
            name="arrow-back"
            size={30}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Text style={styles.trackingTitle}>
          Live Tracking
        </Text>

      </View>

      {/* BOTTOM INFORMATION CARD */}
      <View style={styles.trackingCard}>

        <View style={styles.trackingStatus}>

  <View style={styles.liveDot} />

  <View style={{ flex: 1 }}>
    <Text style={styles.trackingStatusTitle}>
      Healthcare Professional
    </Text>

    <Text style={styles.trackingStatusText}>
      Your healthcare professional is on the way
    </Text>
  </View>

</View>

<View style={styles.arrivalRow}>

  <View>
    <Text style={styles.arrivalLabel}>
      Estimated Arrival
    </Text>

    <Text style={styles.arrivalTime}>
      ~15 minutes
    </Text>
  </View>

  <TouchableOpacity
    style={styles.callButton}
    onPress={() => {
      Alert.alert(
        'Call Healthcare Professional',
        'Calling feature will be connected here.'
      );
    }}
  >
    <Ionicons
      name="call"
      size={23}
      color="#FFFFFF"
    />
  </TouchableOpacity>

</View>

{trackingLocation && (
  <Text style={styles.coordinates}>
    {trackingLocation.latitude.toFixed(5)},{" "}
    {trackingLocation.longitude.toFixed(5)}
  </Text>
)}

{trackingError !== '' && (
  <Text style={styles.trackingError}>
    {trackingError}
  </Text>
)}


        {/* GPS COORDINATES */}
        {trackingLocation && (
          <Text style={styles.coordinates}>
            {trackingLocation.latitude.toFixed(5)},{" "}
            {trackingLocation.longitude.toFixed(5)}
          </Text>
        )}


        {/* ERROR MESSAGE */}
        {trackingError !== '' && (
          <Text style={styles.trackingError}>
            {trackingError}
          </Text>
        )}

      </View>

    </View>
  );
}
  // 19 dedicated professional workflows bring the app to a 50-screen patient experience.
  if (PROFESSIONAL_FEATURES.some((feature) => feature.key === screen)) {
    return <ProfessionalFeatureScreen screen={screen} setScreen={setScreen} />;
  }

  if (screen === 'home') {
    const show = (section) => {
      if (!homeSearch) return true;
      if (section === 'home') return homeServicesFiltered.length > 0;
      if (section === 'oncall') return onCallServicesFiltered.length > 0;
      if (section === 'equipment') return equipmentFiltered.length > 0;
      if (section === 'physio') return searchMatchesPhysio;
      if (section === 'consult') return searchMatchesCall;
      if (section === 'emergency') return searchMatchesEmergency;
      return true;
    };
    const hasSearchResults =
      homeSearch === '' ||
      homeServicesFiltered.length > 0 ||
      onCallServicesFiltered.length > 0 ||
      equipmentFiltered.length > 0 ||
      searchMatchesPhysio ||
      searchMatchesCall ||
      searchMatchesEmergency;

    return (
      <View style={styles.homeRoot}>
        <StatusBar barStyle="dark-content" backgroundColor="#F3F8FE" />

        <SafeAreaView style={styles.homeSafeArea}>
          <Header
            onMenu={() => setMenuVisible(true)}
            onNotifications={() => setScreen('notifications')}
            showNotifications={notifications.length > 0}
          />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.premiumHomeContent}
          >
            {/* SEARCH + FILTER */}
            <View style={styles.premiumSearchRow}>
              <View style={styles.premiumSearchBox}>
                <View style={styles.premiumSearchIcon}>
                  <Ionicons name="search" size={20} color="#087F8C" />
                </View>
                <TextInput
                  value={search}
                  onChangeText={setSearch}
                  placeholder="Search healthcare services..."
                  placeholderTextColor="#8BA0AD"
                  style={styles.premiumSearchInput}
                  returnKeyType="search"
                />
                {search.length > 0 && (
                  <TouchableOpacity
                    onPress={() => setSearch('')}
                    style={styles.searchClearButton}
                  >
                    <Ionicons name="close-circle" size={19} color="#9BB0BB" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* WELCOME / BRAND STRIP */}
            <View style={styles.homeWelcomeRow}>
              <View style={styles.homeWelcomeLogo}>
                <View style={styles.homeWelcomeLogoBack}>
                  <Ionicons name="home" size={28} color="#FFFFFF" />
                </View>
                <View style={styles.homeWelcomeHeart}>
                  <Ionicons name="heart" size={14} color="#FFFFFF" />
                </View>
                <View style={styles.homeWelcomeCross}>
                  <View style={styles.homeWelcomeCrossV} />
                  <View style={styles.homeWelcomeCrossH} />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.homeWelcomeTitle}>Healthome Care</Text>
                <Text style={styles.homeWelcomeSubtitle}>
                  A healthier tomorrow, in the comfort of your home
                </Text>
              </View>
              <View style={styles.homeVerifiedPill}>
                <Ionicons name="shield-checkmark" size={14} color="#087F8C" />
                <Text style={styles.homeVerifiedText}>Trusted</Text>
              </View>
            </View>

            {/* HERO CAROUSEL */}
            <View style={styles.premiumHeroCard}>
              <ScrollView
                horizontal
                pagingEnabled
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                  const width = event.nativeEvent.layoutMeasurement.width || 1;
                  const index = Math.round(
                    event.nativeEvent.contentOffset.x / width
                  );
                  setHomeHeroSlide(
                    Math.max(0, Math.min(homeHeroSlides.length - 1, index))
                  );
                }}
              >
                {homeHeroSlides.map((slide, index) => (
                  <View
                    key={`${slide.title}-${index}`}
                    style={styles.premiumHeroSlide}
                  >
                    <LinearGradient
                      colors={[
                        'rgba(237,246,255,0.98)',
                        'rgba(230,242,255,0.88)',
                        'rgba(224,239,255,0.18)',
                        'rgba(255,255,255,0)',
                      ]}
                      locations={[0, 0.48, 0.78, 1]}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      style={styles.premiumHeroOverlay}
                    >
                      <View style={styles.heroTextColumn}>
                        <Text style={styles.premiumHeroEyebrow}>
                          — {slide.eyebrow} —
                        </Text>
                        <Text style={styles.premiumHeroTitle}>
                          {slide.title}
                        </Text>
                        <Text style={styles.premiumHeroAccent}>
                          {slide.accent}
                        </Text>
                        <Text style={styles.premiumHeroSubtitle}>
                          {slide.subtitle}
                        </Text>

                        <View style={styles.premiumHeroTrustRow}>
                          <PremiumTrust icon="shield-checkmark" text="Safe &\nReliable" />
                          <PremiumTrust icon="people" text="Trained\nProfessionals" />
                          <PremiumTrust icon="home" text="Care\nAt Home" />
                        </View>

                        <TouchableOpacity
                          activeOpacity={0.88}
                          style={styles.premiumHeroButton}
                          onPress={() => setScreen('services')}
                        >
                          <Text style={styles.premiumHeroButtonText}>
                            Book a Service
                          </Text>
                          <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={styles.premiumHeroDots}>
              {homeHeroSlides.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.premiumHeroDot,
                    index === homeHeroSlide && styles.premiumHeroDotActive,
                  ]}
                />
              ))}
            </View>

            {/* CATEGORY SHORTCUTS */}
            {!homeSearch && show('all') && (
              <>
                <View style={styles.premiumSectionHeading}>
                  <View>
                    <Text style={styles.premiumSectionTitle}>Explore Healthcare</Text>
                    <Text style={styles.premiumSectionSubtitle}>
                      Everything you need, all in one place
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setScreen('services')}
                    style={styles.premiumViewAll}
                  >
                    <Text style={styles.premiumViewAllText}>View All</Text>
                    <Ionicons name="arrow-forward" size={15} color="#087F8C" />
                  </TouchableOpacity>
                </View>

                <View style={styles.premiumShortcutGrid}>
                  <PremiumShortcut
                    title="Home Care"
                    subtitle="Nursing & patient care"
                    icon="home"
                    iconColor="#087F8C"
                    bg="#DDF6F5"
                    onPress={() => setScreen('services')}
                  />
                  <PremiumShortcut
                    title="Nursing Procedures"
                    subtitle="Procedures at home"
                    icon="medical"
                    iconColor="#0795A1"
                    bg="#E2F7F6"
                    onPress={() => setScreen('oncall')}
                  />
                  <PremiumShortcut
                    title="Physiotherapy"
                    subtitle="Recover at home"
                    icon="fitness"
                    iconColor="#2877C7"
                    bg="#E6F0FF"
                    onPress={() => {
                      const physio = services.find((item) => item.name === 'Physiotherapist');
                      if (physio) openService(physio);
                    }}
                  />
                  <PremiumShortcut
                    title="Call Services"
                    subtitle="Support anytime"
                    icon="call"
                    iconColor="#7354C9"
                    bg="#EEE9FF"
                    onPress={openCallServices}
                  />
                  <PremiumShortcut
                    title="Medical Equipment"
                    subtitle="Rent or purchase"
                    icon="hardware-chip"
                    iconColor="#D78B20"
                    bg="#FFF1D7"
                    onPress={() => setScreen('equipment')}
                  />
                  <PremiumShortcut
                    title="Emergency Care"
                    subtitle="24×7 rapid support"
                    icon="alert-circle"
                    iconColor="#D83B43"
                    bg="#FFE3E5"
                    onPress={callEmergencyAmbulance}
                  />
                </View>
              </>
            )}

            {/* HOME NURSING & PATIENT CARE */}
            {show('home') && (
              <PremiumHomeSection
                title="Home Nursing & Patient Care"
                subtitle="Compassionate care for every stage of life"
                icon="person"
                iconColor="#FFFFFF"
                headerColors={['#087F8C', '#159EAE']}
                services={homeServicesFiltered}
                onViewAll={() => setScreen('services')}
                onPress={openService}
              />
            )}

            {/* ON-CALL */}
            {show('oncall') && (
              <PremiumHomeSection
                title="Nursing Procedures"
                subtitle="Professional care at your doorstep"
                icon="medical"
                iconColor="#FFFFFF"
                headerColors={['#119B96', '#38B9B2']}
                services={onCallServicesFiltered}
                onViewAll={() => setScreen('oncall')}
                onPress={openService}
              />
            )}

            {/* PHYSIOTHERAPY */}
            {show('physio') && (
              <PremiumFeatureCard
                title="Physiotherapy"
                subtitle="Move Better, Live Better"
                description="Professional physiotherapy support designed around your recovery at home."
                icon="fitness"
                iconColor="#1559A8"
                background="#FFD9DD"
                onPress={() => {
                  const physio = services.find((item) => item.name === 'Physiotherapist');
                  if (physio) openService(physio);
                }}
              />
            )}

            {/* CALL SERVICES */}
            {show('consult') && (
              <PremiumFeatureCard
                title="Call Services"
                subtitle="Healthcare support, anytime, anywhere"
                description="Connect with Healthome support for healthcare assistance and guidance."
                icon="call"
                iconColor="#243E88"
                background="#DCD6FF"
                onPress={openCallServices}
              />
            )}

            {/* EQUIPMENT */}
            {show('equipment') && (
              <PremiumHomeSection
                title="Medical Equipment on Rent/Purchase"
                subtitle="Advanced equipment for home care"
                icon="bed"
                iconColor="#FFFFFF"
                headerColors={['#E8A23A', '#F2C36D']}
                services={equipmentFiltered.map((item) => ({
                  ...item,
                  id: `equipment-${item.id}`,
                  name: item.name,
                  icon: item.icon,
                  color: '#FFF4D9',
                  iconColor: '#D78B20',
                  price: item.price,
                  duration: item.unit,
                  isEquipment: true,
                  originalEquipment: item,
                }))}
                onViewAll={() => setScreen('equipment')}
                onPress={(item) =>
                  openEquipment(item.originalEquipment || item)
                }
                equipment
              />
            )}

            {/* EMERGENCY */}
            {show('emergency') && (
              <PremiumEmergencyCard
                onPress={callEmergencyAmbulance}
              />
            )}

            {/* SEARCH EMPTY */}
            {!hasSearchResults && (
              <View style={styles.premiumEmptyCard}>
                <View style={styles.premiumEmptyIcon}>
                  <Ionicons name="search-outline" size={30} color="#087F8C" />
                </View>
                <Text style={styles.premiumEmptyTitle}>No matching services</Text>
                <Text style={styles.premiumEmptyText}>
                  Try another service name or clear the search.
                </Text>
                <TouchableOpacity
                  onPress={() => setSearch('')}
                  style={styles.premiumEmptyButton}
                >
                  <Text style={styles.premiumEmptyButtonText}>Clear Search</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* BOTTOM TRUST STRIP */}
            <View style={styles.homeBottomTrust}>
              <View style={styles.homeBottomTrustItem}>
                <Ionicons name="shield-checkmark" size={22} color="#FFFFFF" />
                <Text style={styles.homeBottomTrustText}>Safe & Reliable</Text>
              </View>
              <View style={styles.homeBottomDivider} />
              <View style={styles.homeBottomTrustItem}>
                <Ionicons name="people" size={22} color="#FFFFFF" />
                <Text style={styles.homeBottomTrustText}>Trained Professionals</Text>
              </View>
              <View style={styles.homeBottomDivider} />
              <View style={styles.homeBottomTrustItem}>
                <Ionicons name="home" size={22} color="#FFFFFF" />
                <Text style={styles.homeBottomTrustText}>Care At Your Home</Text>
              </View>
            </View>
          </ScrollView>

          {/* FIXED HOME BOTTOM NAVIGATION */}
          <BottomNav
            active="Home"
            onHome={() => {
              setSearch('');
              setScreen('home');
            }}
            onServices={() => setScreen('services')}
            onBookings={() => setScreen('bookings')}
            onMedicine={() => setScreen('medicine')}
            onProfile={() => setScreen('profile')}
          />

          {/* WORKING LEFT SIDE MENU */}
          <SideMenu
            visible={menuVisible}
            close={() => setMenuVisible(false)}
            navigate={(destination) => {
              setMenuVisible(false);
              setScreen(destination);
            }}
          />
        </SafeAreaView>
      </View>
    );
  }

  if (screen === 'notifications') {
    const clearNotifications = () => {
      setNotifications([]);
      setScreen('home');
    };

    return (
      <View style={styles.notificationRoot}>
        <StatusBar barStyle="light-content" backgroundColor="#087F8C" />
        <LinearGradient
          colors={['#056B7A', '#087F8C', '#12A4A7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.notificationHero}
        >
          <SafeAreaView>
            <View style={styles.notificationHeroTop}>
              <TouchableOpacity
                style={styles.notificationBackButton}
                activeOpacity={0.8}
                onPress={() => setScreen('home')}
              >
                <Ionicons name="arrow-back" size={23} color="#FFFFFF" />
              </TouchableOpacity>

              <View style={styles.notificationHeroCenter}>
                <Text style={styles.notificationHeroEyebrow}>HEALTHOME</Text>
                <Text style={styles.notificationPageTitle}>Notifications</Text>
              </View>

              {notifications.length > 0 ? (
                <TouchableOpacity
                  style={styles.notificationClearButton}
                  activeOpacity={0.8}
                  onPress={clearNotifications}
                >
                  <Ionicons name="checkmark-done-outline" size={21} color="#FFFFFF" />
                </TouchableOpacity>
              ) : (
                <View style={{ width: 42 }} />
              )}
            </View>
          </SafeAreaView>

          <View style={styles.notificationHeroGlowOne} />
          <View style={styles.notificationHeroGlowTwo} />
        </LinearGradient>

        <View style={styles.notificationBody}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.notificationContent}
          >
            <View style={styles.notificationTrackCard}>
              <View style={styles.notificationTrackIcon}>
                <Ionicons name="navigate" size={22} color="#087F8C" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.notificationTrackTitle}>Track Your Request</Text>
                <Text style={styles.notificationTrackText}>Enter your Tracking ID to view live status.</Text>
                <View style={styles.notificationTrackInputRow}>
                  <Ionicons name="qr-code-outline" size={18} color="#6B8497" />
                  <TextInput
                    value={trackingId}
                    onChangeText={(value) => setTrackingId(value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 9))}
                    placeholder="HLT123456"
                    placeholderTextColor="#9BAABC"
                    autoCapitalize="characters"
                    style={styles.notificationTrackInput}
                  />
                  <TouchableOpacity style={styles.notificationTrackButton} onPress={trackRequest}>
                    <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {notifications.length > 0 ? (
              <>
                <View style={styles.notificationStatusCard}>
                  <View style={styles.notificationStatusIcon}>
                    <Ionicons name="shield-checkmark" size={22} color="#087F8C" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.notificationStatusTitle}>Important updates</Text>
                    <Text style={styles.notificationStatusText}>New bookings, consultations and live tracking updates appear here.</Text>
                  </View>
                </View>

                {notifications.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.88}
                    style={styles.notificationCardNew}
                    onPress={() => {
                      if (item.type === 'tracking') {
                        setTrackingId(item.text.match(/HLT\d{6}/)?.[0] || trackingId);
                        setTrackingReturnScreen('notifications');
                        setTrackingPath([]);
                        setTrackingLocation(null);
                        setTrackingError('');
                        setScreen('tracking');
                      } else if (item.type === 'consultation') {
                        Alert.alert('Consultation', item.text);
                      } else if (item.type === 'emergency') {
                        const hospitalUrl = item.mapsUrl;
                        const details = `${item.hospitalName ? `Nearest hospital: ${item.hospitalName}\n` : ''}${item.hospitalAddress ? `Address: ${item.hospitalAddress}\n` : ''}${item.distanceKm != null ? `Distance: ${Number(item.distanceKm).toFixed(1)} km\n` : ''}\nCustomer location: ${Number(item.customerLatitude).toFixed(6)}, ${Number(item.customerLongitude).toFixed(6)}`;
                        Alert.alert(
                          'Emergency Hospital',
                          details,
                          hospitalUrl
                            ? [
                                { text: 'Open Hospital Route', onPress: () => Linking.openURL(hospitalUrl).catch(() => {}) },
                                { text: 'Close', style: 'cancel' },
                              ]
                            : undefined
                        );
                      } else {
                        setScreen('bookings');
                      }
                    }}
                  >
                    <View style={[styles.notificationItemIconNew, item.type === 'tracking' ? styles.notificationTrackingIcon : styles.notificationBookingIcon]}>
                      <Ionicons name={item.icon} size={25} color={item.type === 'emergency' ? '#D83B43' : item.type === 'tracking' ? '#1767B1' : '#087F8C'} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <View style={styles.notificationNewTitleRow}>
                        <Text style={styles.notificationItemTitleNew}>{item.title}</Text>
                        <View style={styles.notificationNewBadge}><Text style={styles.notificationNewBadgeText}>NEW</Text></View>
                      </View>
                      <Text style={styles.notificationItemTextNew}>{item.text}</Text>
                      <View style={styles.notificationNewFooter}>
                        <Text style={styles.notificationItemTimeNew}>{item.time}</Text>
                        <Ionicons name="chevron-forward" size={17} color="#087F8C" />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <View style={styles.notificationEmptyState}>
                <View style={styles.notificationEmptyIcon}>
                  <Ionicons name="notifications-off-outline" size={42} color="#087F8C" />
                </View>
                <Text style={styles.notificationEmptyTitle}>You're all caught up</Text>
                <Text style={styles.notificationEmptyText}>New booking confirmations, consultation schedules and tracking updates will appear here.</Text>
                <TouchableOpacity style={styles.notificationHomeButton} activeOpacity={0.88} onPress={() => setScreen('home')}>
                  <Text style={styles.notificationHomeButtonText}>Back to Home</Text>
                  <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>

        <BottomNav
          active="Home"
          onHome={() => setScreen('home')}
          onServices={() => setScreen('services')}
          onBookings={() => setScreen('bookings')}
          onMedicine={() => setScreen('medicine')}
          onProfile={() => setScreen('profile')}
        />
      </View>
    );
  }

  /* =========================================================
     SERVICES SCREEN
  ========================================================= */

  if (screen === 'doctors') {
    const filteredDoctors = doctors.filter((d) => `${d.name} ${d.specialty}`.toLowerCase().includes(doctorSearch.toLowerCase()));
    return (
      <AppPage title="Find a Doctor" onBack={() => setScreen('home')} bottom="home" setScreen={setScreen}>
        <View style={styles.featureHero}>
          <View style={{flex:1}}><Text style={styles.featureEyebrow}>ONLINE CONSULTATION</Text><Text style={styles.featureTitle}>Talk to a doctor</Text><Text style={styles.featureSubtitle}>Book secure video or voice consultation from anywhere.</Text></View>
          <View style={styles.featureHeroIcon}><Ionicons name="medical-outline" size={32} color="#087F8C" /></View>
        </View>
        <View style={styles.featureSearch}><Ionicons name="search-outline" size={20} color="#71889A"/><TextInput value={doctorSearch} onChangeText={setDoctorSearch} placeholder="Search doctors or specialties" placeholderTextColor="#9AAAB4" style={styles.featureSearchInput}/></View>
        {filteredDoctors.map((d)=>(
          <TouchableOpacity key={d.id} style={styles.doctorCard} onPress={()=>setSelectedDoctor(d)} activeOpacity={0.9}>
            <View style={styles.doctorAvatar}><Ionicons name={d.icon} size={28} color="#087F8C"/></View>
            <View style={{flex:1}}><Text style={styles.doctorName}>{d.name}</Text><Text style={styles.doctorSpecialty}>{d.specialty}</Text><Text style={styles.doctorMeta}>★ {d.rating}  •  {d.experience}  •  ₹{d.fee}</Text></View>
            <View style={[styles.availabilityBadge,{backgroundColor:d.available?'#E7F8F1':'#F2F3F4'}]}><Text style={[styles.availabilityText,{color:d.available?'#07885F':'#77838B'}]}>{d.available?'Available':'Offline'}</Text></View>
          </TouchableOpacity>
        ))}
        <Modal visible={!!selectedDoctor} transparent animationType="slide" onRequestClose={()=>setSelectedDoctor(null)}>
          <View style={styles.featureModalOverlay}><View style={styles.featureModal}>
            {selectedDoctor && <><View style={styles.modalHandle}/><View style={styles.doctorModalAvatar}><Ionicons name={selectedDoctor.icon} size={36} color="#087F8C"/></View><Text style={styles.modalTitle}>{selectedDoctor.name}</Text><Text style={styles.modalSubtitle}>{selectedDoctor.specialty} • {selectedDoctor.experience}</Text><Text style={styles.modalBody}>Consultation fee ₹{selectedDoctor.fee}. Choose a consultation mode to continue.</Text>
            <View style={styles.consultModeRow}><TouchableOpacity style={[styles.consultMode,consultationType==='video'&&styles.consultModeSelected]} onPress={()=>setConsultationType('video')}><Ionicons name="videocam-outline" size={23} color="#087F8C"/><Text style={styles.consultModeText}>Video</Text></TouchableOpacity><TouchableOpacity style={[styles.consultMode,consultationType==='voice'&&styles.consultModeSelected]} onPress={()=>setConsultationType('voice')}><Ionicons name="call-outline" size={23} color="#087F8C"/><Text style={styles.consultModeText}>Voice</Text></TouchableOpacity></View>
            <TouchableOpacity style={styles.primaryFeatureButton} onPress={()=>{setConsultationDoctor(selectedDoctor);setSelectedDoctor(null);setScreen('consultation')}}><Text style={styles.primaryFeatureButtonText}>Continue to Consultation</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryFeatureButton} onPress={()=>setSelectedDoctor(null)}><Text style={styles.secondaryFeatureButtonText}>Close</Text></TouchableOpacity></>}
          </View></View>
        </Modal>
      </AppPage>
    );
  }

  if (screen === 'consultation') {
    return <AppPage title="Consultation" onBack={()=>setScreen('doctors')} bottom="home" setScreen={setScreen}>
      <View style={styles.consultationHero}><View style={styles.consultationIcon}><Ionicons name={consultationType==='video'?'videocam':'call'} size={34} color="#fff"/></View><Text style={styles.consultationTitle}>{consultationType==='video'?'Video consultation':'Voice consultation'}</Text><Text style={styles.consultationText}>{consultationDoctor?.name || 'Selected doctor'} • Secure consultation room</Text></View>
      <View style={styles.secureCard}><Ionicons name="shield-checkmark-outline" size={24} color="#087F8C"/><View style={{flex:1}}><Text style={styles.secureTitle}>Private & secure</Text><Text style={styles.secureText}>Camera/microphone access will only be requested when the live consultation is connected.</Text></View></View>
      <TouchableOpacity style={styles.primaryFeatureButton} onPress={()=>Alert.alert('Consultation ready','Connect this screen to your production video/voice provider (for example Agora) through your backend before going live.') }><Ionicons name={consultationType==='video'?'videocam':'call'} size={20} color="#fff"/><Text style={styles.primaryFeatureButtonText}>Start {consultationType==='video'?'Video':'Voice'} Consultation</Text></TouchableOpacity>
      <View style={styles.infoCard}><Text style={styles.infoCardTitle}>Before you start</Text><Text style={styles.infoBullet}>• Use a stable internet connection</Text><Text style={styles.infoBullet}>• Keep your prescription/reports ready</Text><Text style={styles.infoBullet}>• Join from a quiet, private place</Text></View>
    </AppPage>;
  }

  if (screen === 'labs') {
    const filteredLabs = labs.filter((l)=>`${l.category} ${l.name}`.toLowerCase().includes(labSearch.toLowerCase()));
    return <AppPage title="Lab Tests" onBack={()=>setScreen('home')} bottom="home" setScreen={setScreen}>
      <View style={styles.featureHero}><View style={{flex:1}}><Text style={styles.featureEyebrow}>DIAGNOSTICS</Text><Text style={styles.featureTitle}>Book lab tests</Text><Text style={styles.featureSubtitle}>Choose a test and schedule sample collection.</Text></View><View style={styles.featureHeroIcon}><Ionicons name="flask-outline" size={32} color="#087F8C"/></View></View>
      <View style={styles.featureSearch}><Ionicons name="search-outline" size={20} color="#71889A"/><TextInput value={labSearch} onChangeText={setLabSearch} placeholder="Search lab tests" placeholderTextColor="#9AAAB4" style={styles.featureSearchInput}/></View>
      {filteredLabs.map((l)=><TouchableOpacity key={l.id} style={styles.labCard} onPress={()=>setSelectedLab(l)}><View style={styles.labIcon}><Ionicons name="flask-outline" size={25} color="#087F8C"/></View><View style={{flex:1}}><Text style={styles.doctorName}>{l.category}</Text><Text style={styles.doctorSpecialty}>{l.tests} • Results in {l.turnaround}</Text><Text style={styles.labPrice}>₹{l.price}</Text></View><Ionicons name="chevron-forward" size={22} color="#8195A0"/></TouchableOpacity>)}
      <Modal visible={!!selectedLab} transparent animationType="slide" onRequestClose={()=>setSelectedLab(null)}><View style={styles.featureModalOverlay}><View style={styles.featureModal}>{selectedLab&&<><View style={styles.modalHandle}/><Text style={styles.modalTitle}>{selectedLab.category}</Text><Text style={styles.modalSubtitle}>{selectedLab.tests} • {selectedLab.turnaround}</Text><Text style={styles.modalBody}>Home sample collection can be scheduled after backend/API integration.</Text><TouchableOpacity style={styles.primaryFeatureButton} onPress={()=>{setSelectedLab(null);Alert.alert('Lab test selected',`${selectedLab.category} has been added to your booking flow.`)}}><Text style={styles.primaryFeatureButtonText}>Book Test • ₹{selectedLab.price}</Text></TouchableOpacity><TouchableOpacity style={styles.secondaryFeatureButton} onPress={()=>setSelectedLab(null)}><Text style={styles.secondaryFeatureButtonText}>Close</Text></TouchableOpacity></>}</View></View></Modal>
    </AppPage>;
  }

  if (screen === 'healthRecords') {
    return <AppPage title="Health Records" onBack={()=>setScreen('profile')} bottom="profile" setScreen={setScreen}>
      <View style={styles.featureHero}><View style={{flex:1}}><Text style={styles.featureEyebrow}>MY HEALTH</Text><Text style={styles.featureTitle}>Health records</Text><Text style={styles.featureSubtitle}>Keep prescriptions, reports and important documents together.</Text></View><View style={styles.featureHeroIcon}><Ionicons name="folder-open-outline" size={32} color="#087F8C"/></View></View>
      {healthRecordTypes.map((r)=><TouchableOpacity key={r.id} style={styles.recordCard} onPress={()=>Alert.alert(r.title,'This section is ready for your backend document service.')}><View style={[styles.recordIcon,{backgroundColor:`${r.color}18`}]}><Ionicons name={r.icon} size={25} color={r.color}/></View><View style={{flex:1}}><Text style={styles.doctorName}>{r.title}</Text><Text style={styles.doctorSpecialty}>{r.subtitle}</Text></View><Ionicons name="chevron-forward" size={22} color="#8195A0"/></TouchableOpacity>)}
      <TouchableOpacity style={styles.uploadRecordButton} onPress={async()=>{const result=await ImagePicker.launchImageLibraryAsync({mediaTypes:['images'],quality:0.8});if(!result.canceled){setHealthRecords((v)=>[...v,{uri:result.assets[0].uri,name:`Medical document ${v.length+1}`}]);Alert.alert('Document added','The document is available in this session. Connect storage/backend for permanent records.')}}}><Ionicons name="cloud-upload-outline" size={21} color="#087F8C"/><Text style={styles.uploadRecordText}>Upload medical document</Text></TouchableOpacity>
      {healthRecords.length>0&&<View style={styles.infoCard}><Text style={styles.infoCardTitle}>Recently added</Text>{healthRecords.map((r,i)=><Text key={i} style={styles.infoBullet}>• {r.name}</Text>)}</View>}
    </AppPage>;
  }

  if (screen === 'family') {
    return <AppPage title="Family Members" onBack={()=>setScreen('profile')} bottom="profile" setScreen={setScreen}>
      <View style={styles.featureHero}><View style={{flex:1}}><Text style={styles.featureEyebrow}>FAMILY HEALTH</Text><Text style={styles.featureTitle}>Manage family</Text><Text style={styles.featureSubtitle}>Create profiles for people you care for and use them during bookings.</Text></View><View style={styles.featureHeroIcon}><Ionicons name="people-outline" size={32} color="#087F8C"/></View></View>
      {familyMembers.length===0?<View style={styles.emptyFeature}><Ionicons name="people-circle-outline" size={48} color="#9DB0B8"/><Text style={styles.emptyFeatureTitle}>No family members yet</Text><Text style={styles.emptyFeatureText}>Add a family member to make future bookings faster.</Text></View>:familyMembers.map((m,i)=><View key={i} style={styles.familyCard}><View style={styles.familyAvatar}><Ionicons name="person" size={23} color="#087F8C"/></View><View style={{flex:1}}><Text style={styles.doctorName}>{m.name}</Text><Text style={styles.doctorSpecialty}>{m.relation} • {m.phone}</Text></View><Ionicons name="checkmark-circle" size={22} color="#07885F"/></View>)}
      <TouchableOpacity style={styles.primaryFeatureButton} onPress={()=>Alert.prompt?.('Add family member','Enter a name',{cancelable:true,onSubmit:(name)=>name&&setFamilyMembers(v=>[...v,{name,relation:'Family member',phone:''}])}) || Alert.alert('Add family member','Use the profile form to add family members in the production backend.') }><Ionicons name="add" size={22} color="#fff"/><Text style={styles.primaryFeatureButtonText}>Add Family Member</Text></TouchableOpacity>
    </AppPage>;
  }

  if (screen === 'wallet') {
    return <AppPage title="Healthome Wallet" onBack={()=>setScreen('profile')} bottom="profile" setScreen={setScreen}>
      <View style={styles.walletCard}><Text style={styles.walletLabel}>AVAILABLE BALANCE</Text><Text style={styles.walletAmount}>₹{walletBalance.toFixed(2)}</Text><View style={styles.walletActions}><TouchableOpacity style={styles.walletAction} onPress={()=>{const amount=500;setWalletBalance(v=>v+amount);Alert.alert('Wallet updated','₹500 demo credit added. Connect a verified payment gateway before production use.')}}><Ionicons name="add-circle-outline" size={22} color="#fff"/><Text style={styles.walletActionText}>Add Money</Text></TouchableOpacity><TouchableOpacity style={styles.walletAction} onPress={()=>Alert.alert('Transactions','No wallet transactions yet.')}><Ionicons name="receipt-outline" size={22} color="#fff"/><Text style={styles.walletActionText}>Transactions</Text></TouchableOpacity></View></View>
      <View style={styles.infoCard}><Text style={styles.infoCardTitle}>Wallet benefits</Text><Text style={styles.infoBullet}>• Faster checkout for bookings</Text><Text style={styles.infoBullet}>• Refunds can be returned to wallet</Text><Text style={styles.infoBullet}>• Payment gateway verification should happen on the backend</Text></View>
    </AppPage>;
  }

  if (screen === 'services') {
    const servicesForPage = services
      .filter((item) => item.category === 'Services at Home')
      .filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

    return (
      <View style={styles.servicesPageRoot}>
        <StatusBar barStyle="dark-content" backgroundColor="#F4FBFD" />

        <SafeAreaView style={styles.servicesSafeArea}>
          <Header
            onMenu={() => setMenuVisible(true)}
            onNotifications={() => setScreen('notifications')}
            showNotifications={notifications.length > 0}
          />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.servicesPageContent}
            keyboardShouldPersistTaps="handled"
          >
            {/* PREMIUM SERVICES HERO */}
            <View style={styles.servicesHeroCard}>
              <LinearGradient
                colors={['#E6F2FF', '#DCEEFF', '#CFE5F8']}
                locations={[0, 0.55, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.servicesHeroImage}
              >
                <View style={styles.servicesHeroOverlay}>
                  <View style={styles.servicesHeroCopy}>
                    <View style={styles.servicesHeroEyebrow}>
                      <View style={styles.servicesHeroEyebrowDot} />
                      <Text style={styles.servicesHeroEyebrowText}>
                        PROFESSIONAL HOME HEALTHCARE
                      </Text>
                    </View>

                    <Text style={styles.servicesHeroTitle}>
                      Quality Care{'\n'}
                      <Text style={styles.servicesHeroTitleAccent}>
                        At Your Home
                      </Text>
                    </Text>

                    <Text style={styles.servicesHeroSubtitle}>
                      Trusted healthcare services designed around you and your family.
                    </Text>

                    <View style={styles.servicesHeroTrustRow}>
                      <View style={styles.servicesHeroTrustItem}>
                        <Ionicons
                          name="shield-checkmark"
                          size={15}
                          color="#1677C8"
                        />
                        <Text style={styles.servicesHeroTrustText}>
                          Trusted
                        </Text>
                      </View>

                      <View style={styles.servicesHeroTrustItem}>
                        <Ionicons
                          name="people"
                          size={15}
                          color="#1677C8"
                        />
                        <Text style={styles.servicesHeroTrustText}>
                          Professionals
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.servicesHeroDots}>
                    <View style={styles.servicesHeroDotActive} />
                  </View>
                </View>
              </LinearGradient>
            </View>

            {/* PAGE TITLE */}
            <View style={styles.servicesPageHeading}>
              <View style={{ flex: 1 }}>
                <Text style={styles.servicesPageTitle}>
                  Services at Home
                </Text>
                <Text style={styles.servicesPageSubtitle}>
                  Professional healthcare services designed around the needs of patients and families.
                </Text>
              </View>

              <View style={styles.servicesTitleIcon}>
                <Ionicons
                  name="medical"
                  size={29}
                  color="#087F8C"
                />
              </View>
            </View>

            {/* SEARCH */}
            <View style={styles.servicesSearchBox}>
              <Ionicons
                name="search-outline"
                size={26}
                color="#164F72"
              />

              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search healthcare services..."
                placeholderTextColor="#7891A3"
                style={styles.servicesSearchInput}
              />

              {search.length > 0 && (
                <TouchableOpacity
                  onPress={() => setSearch('')}
                  style={styles.servicesSearchClear}
                >
                  <Ionicons
                    name="close-circle"
                    size={20}
                    color="#8AA1AE"
                  />
                </TouchableOpacity>
              )}
            </View>

            {/* SECTION HEADER */}
            <View style={styles.servicesSectionHeading}>
              <View style={{ flex: 1 }}>
                <Text style={styles.servicesSectionTitle}>
                  Complete Care at Your Doorstep
                </Text>
                <Text style={styles.servicesSectionSubtitle}>
                  {servicesForPage.length} services available
                </Text>
              </View>

              <View style={styles.trustedServiceBadge}>
                <Ionicons
                  name="shield-checkmark"
                  size={15}
                  color="#087F8C"
                />
                <Text style={styles.trustedServiceBadgeText}>
                  Trusted Care
                </Text>
              </View>
            </View>

            {/* SERVICE CARDS */}
            <View style={styles.serviceList}>
              {servicesForPage.map((service) => (
                <LargeServiceCard
                  key={service.id}
                  service={service}
                  onPress={() => openService(service)}
                />
              ))}
            </View>

            {servicesForPage.length === 0 && (
              <View style={styles.noServicesCard}>
                <View style={styles.noServicesIcon}>
                  <Ionicons
                    name="search-outline"
                    size={32}
                    color="#087F8C"
                  />
                </View>

                <Text style={styles.noServicesTitle}>
                  No services found
                </Text>

                <Text style={styles.noServicesText}>
                  Try another service name.
                </Text>

                <TouchableOpacity
                  style={styles.clearServicesButton}
                  onPress={() => setSearch('')}
                >
                  <Text style={styles.clearServicesButtonText}>
                    Show All Services
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>

          <BottomNav
            active="Services"
            onHome={() => setScreen('home')}
            onServices={() => setScreen('services')}
            onBookings={() => setScreen('bookings')}
            onMedicine={() => setScreen('medicine')}
            onProfile={() => setScreen('profile')}
          />
        </SafeAreaView>
      </View>
    );
  }

  /* =========================================================
     ON CALL SCREEN
  ========================================================= */

  if (screen === 'oncall') {
    return (
      <AppPage
        title="On-Call Services"
        onBack={() => setScreen('home')}
        bottom="Services"
        setScreen={setScreen}
      >
        <View style={styles.locationBanner}>
          <Ionicons
            name="location"
            size={24}
            color="#087C8A"
          />

          <View>
            <Text style={styles.locationTitle}>
              Delhi / NCR
            </Text>

            <Text style={styles.locationText}>
              On-call healthcare services at your location
            </Text>
          </View>
        </View>

        <View style={styles.serviceList}>
          {services
            .filter(
              (item) => item.category === 'On-Call Services'
            )
            .map((service) => (
              <LargeServiceCard
                key={service.id}
                service={service}
                onPress={() => openService(service)}
              />
            ))}
        </View>
      </AppPage>
    );
  }

  /* =========================================================
     EQUIPMENT SCREEN
  ========================================================= */

  if (screen === 'equipment') {
    return (
      <AppPage
        title="Medical Equipment"
        onBack={() => setScreen('home')}
        bottom="Services"
        setScreen={setScreen}
      >
        <Text style={styles.pageDescription}>
          Medical equipment available for rent or purchase.
        </Text>

        {equipment.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.equipmentRow}
            onPress={() => openEquipment(item)}
          >
            <View style={styles.equipmentIcon}>
              <Ionicons
                name={item.icon}
                size={27}
                color="#E67C26"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.equipmentName}>
                {item.name}
              </Text>

              <Text style={styles.equipmentPrice}>
                ₹{item.price} {item.unit}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={23}
              color="#587087"
            />
          </TouchableOpacity>
        ))}
      </AppPage>
    );
  }

  /* =========================================================
     SERVICE DETAILS
  ========================================================= */

  if (screen === 'serviceDetails' && selectedService) {
    return (
      <AppPage
        title="Care Details"
        onBack={() => setScreen('services')}
        bottom="Services"
        setScreen={setScreen}
      >
        {/* PREMIUM HEALTHOME CARE HERO */}
        <View style={styles.careHeroCard}>
          <LinearGradient
            colors={['#056B78', '#087F8C', '#0AA69F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.careHeroGradient}
          >
            <View style={styles.careHeroTopRow}>
              <View style={styles.careHeroIconWrap}>
                <MeaningfulServiceIcon
                  service={selectedService}
                  size={43}
                  color="#087F8C"
                />
              </View>

              <View style={styles.careHeroBadge}>
                <Ionicons name="shield-checkmark" size={14} color="#087F8C" />
                <Text style={styles.careHeroBadgeText}>Trusted Care</Text>
              </View>
            </View>

            <Text style={styles.careHeroCategory}>
              {selectedService.category === 'On-Call Services'
                ? 'ON-CALL HEALTHCARE'
                : 'HOME HEALTHCARE'}
            </Text>

            <Text style={styles.careHeroTitle}>
              {selectedService.name}
            </Text>

            <Text style={styles.careHeroSubtitle}>
              Professional healthcare support delivered with comfort, dignity and care at your doorstep.
            </Text>

            <View style={styles.careHeroBottomRow}>
              <View>
                <Text style={styles.careHeroPriceLabel}>Starting from</Text>
                <Text style={styles.careHeroPrice}>₹{selectedService.price}</Text>
              </View>

              <View style={styles.careHeroDuration}>
                <Ionicons name="time-outline" size={18} color="#FFFFFF" />
                <Text style={styles.careHeroDurationText}>
                  {selectedService.duration}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* QUICK CARE HIGHLIGHTS */}
        <View style={styles.careHighlightsCard}>
          <View style={styles.careHighlightItem}>
            <View style={styles.careHighlightIcon}>
              <Ionicons name="home-outline" size={20} color="#087F8C" />
            </View>
            <Text style={styles.careHighlightText}>At Home</Text>
          </View>

          <View style={styles.careHighlightDivider} />

          <View style={styles.careHighlightItem}>
            <View style={styles.careHighlightIcon}>
              <Ionicons name="people-outline" size={20} color="#087F8C" />
            </View>
            <Text style={styles.careHighlightText}>Care Support</Text>
          </View>

          <View style={styles.careHighlightDivider} />

          <View style={styles.careHighlightItem}>
            <View style={styles.careHighlightIcon}>
              <Ionicons name="heart-outline" size={20} color="#087F8C" />
            </View>
            <Text style={styles.careHighlightText}>Patient First</Text>
          </View>
        </View>

        <Text style={styles.carePageSectionLabel}>SERVICE INFORMATION</Text>

        <DetailSection
          title="About This Service"
          icon="information-circle-outline"
          text={selectedService.description}
        />

        <DetailSection
          title="Treatment / Care Provided"
          icon="medical-outline"
          text={selectedService.treatment}
        />

        <DetailSection
          title="How It Works"
          icon="list-outline"
          text="Choose your preferred time, enter patient details, confirm your address and complete the booking."
        />

        <View style={styles.careSafetyCard}>
          <View style={styles.careSafetyIcon}>
            <Ionicons
              name="shield-checkmark-outline"
              size={23}
              color="#087F8C"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.careSafetyTitle}>Care & Safety</Text>
            <Text style={styles.careSafetyText}>
              Services are provided according to the approved care plan.
              This service is not a substitute for emergency medical care.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.careBookButton}
          onPress={startBooking}
        >
          <View style={styles.careBookButtonIcon}>
            <Ionicons name="calendar-outline" size={21} color="#087F8C" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.careBookButtonTitle}>Book This Service</Text>
            <Text style={styles.careBookButtonSubtitle}>
              Choose your time and patient details
            </Text>
          </View>

          <Ionicons name="arrow-forward" size={23} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.careBottomSpace} />
      </AppPage>
    );
  }

  /* =========================================================
     EQUIPMENT DETAILS
  ========================================================= */

  if (
    screen === 'equipmentDetails' &&
    selectedEquipment
  ) {
    return (
      <AppPage
        title="Equipment Details"
        onBack={() => setScreen('equipment')}
        bottom="Services"
        setScreen={setScreen}
      >
        <View style={styles.equipmentDetail}>
          <View style={styles.bigEquipmentIcon}>
            <Ionicons
              name={selectedEquipment.icon}
              size={60}
              color="#E67C26"
            />
          </View>

          <Text style={styles.detailTitle}>
            {selectedEquipment.name}
          </Text>

          <Text style={styles.detailPrice}>
            ₹{selectedEquipment.price}
          </Text>

          <Text style={styles.duration}>
            {selectedEquipment.unit}
          </Text>

          <Text style={styles.equipmentDescription}>
            Medical equipment available through Healthome
            for home healthcare requirements.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bookButton}
          onPress={startBooking}
        >
          <Text style={styles.bookButtonText}>
            Request Equipment
          </Text>

          <Ionicons
            name="arrow-forward"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </AppPage>
    );
  }

  /* =========================================================
     MY BOOKINGS
  ========================================================= */

  if (screen === 'bookings') {
    const activeBookings = bookings.filter((item) =>
      !['Completed', 'Cancelled'].includes(item.status)
    ).length;

    return (
      <AppPage
        title="My Bookings"
        onBack={() => setScreen('home')}
        bottom="Bookings"
        setScreen={setScreen}
      >
        {/* Premium bookings header */}
        <View style={styles.bookingsHeroCard}>
          <View style={styles.bookingsHeroIcon}>
            <Ionicons name="calendar-outline" size={28} color="#087F8C" />
          </View>

          <View style={styles.bookingsHeroContent}>
            <Text style={styles.bookingsHeroTitle}>Your Healthcare Bookings</Text>
            <Text style={styles.bookingsHeroSubtitle}>
              View, manage and track your healthcare requests in one place.
            </Text>
          </View>
        </View>

        {/* Booking summary */}
        <View style={styles.bookingStatsRow}>
          <View style={styles.bookingStatCard}>
            <View style={styles.bookingStatIcon}>
              <Ionicons name="pulse-outline" size={19} color="#087F8C" />
            </View>
            <View>
              <Text style={styles.bookingStatNumber}>{activeBookings}</Text>
              <Text style={styles.bookingStatLabel}>Active</Text>
            </View>
          </View>

          <View style={styles.bookingStatCard}>
            <View style={styles.bookingStatIcon}>
              <Ionicons name="calendar-number-outline" size={19} color="#087F8C" />
            </View>
            <View>
              <Text style={styles.bookingStatNumber}>{bookings.length}</Text>
              <Text style={styles.bookingStatLabel}>Total bookings</Text>
            </View>
          </View>
        </View>

        <View style={styles.bookingSectionHeader}>
          <View>
            <Text style={styles.bookingSectionTitle}>
              {bookings.length ? 'Your Requests' : 'No Bookings Yet'}
            </Text>
            <Text style={styles.bookingSectionSubtitle}>
              {bookings.length
                ? 'Track your healthcare services from here.'
                : 'Your confirmed healthcare requests will appear here.'}
            </Text>
          </View>
          <View style={styles.bookingSectionAccent} />
        </View>

        {bookings.length === 0 ? (
          <View style={styles.emptyBookingCard}>
            <View style={styles.emptyBookingIconOuter}>
              <View style={styles.emptyBookingIconInner}>
                <Ionicons
                  name="calendar-outline"
                  size={42}
                  color="#087F8C"
                />
              </View>
            </View>

            <Text style={styles.emptyBookingTitle}>No bookings yet</Text>

            <Text style={styles.emptyBookingText}>
              Choose a healthcare service and book professional care at your
              doorstep. Your booking details will appear here.
            </Text>

            <TouchableOpacity
              activeOpacity={0.86}
              onPress={() => setScreen('services')}
              style={styles.bookServiceButton}
            >
              <View style={styles.bookServiceButtonIcon}>
                <Ionicons name="add" size={20} color="#087F8C" />
              </View>
              <Text style={styles.bookServiceButtonText}>Book a Service</Text>
              <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={styles.trustedBookingNote}>
              <Ionicons name="shield-checkmark-outline" size={17} color="#087F8C" />
              <Text style={styles.trustedBookingNoteText}>
                Trusted home healthcare • Safe &amp; convenient
              </Text>
            </View>
          </View>
        ) : (
          bookings.map((booking) => (
            <View key={booking.id} style={styles.bookingCard}>
              <View style={styles.bookingCardTop}>
                <View style={styles.bookingServiceIcon}>
                  <Ionicons name="medkit-outline" size={25} color="#087F8C" />
                </View>

                <View style={styles.bookingCardTitleArea}>
                  <Text
                    style={styles.bookingServiceName}
                    numberOfLines={2}
                  >
                    {booking.service || 'Healthcare Service'}
                  </Text>
                  <Text style={styles.bookingIdText}>
                    Booking ID: {booking.id}
                  </Text>
                </View>

                <View style={styles.bookingStatusPill}>
                  <View style={styles.bookingStatusDot} />
                  <Text style={styles.bookingStatusText}>
                    {booking.status || 'Received'}
                  </Text>
                </View>
              </View>

              <View style={styles.bookingInfoRow}>
                <View style={styles.bookingInfoItem}>
                  <Ionicons name="time-outline" size={16} color="#087F8C" />
                  <View>
                    <Text style={styles.bookingInfoLabel}>Schedule</Text>
                    <Text style={styles.bookingInfoValue} numberOfLines={1}>
                      {booking.date || 'To be scheduled'}
                    </Text>
                  </View>
                </View>

                <View style={styles.bookingInfoItem}>
                  <Ionicons name="wallet-outline" size={16} color="#087F8C" />
                  <View>
                    <Text style={styles.bookingInfoLabel}>Amount</Text>
                    <Text style={styles.bookingInfoValue}>
                      ₹{booking.amount || 0}
                    </Text>
                  </View>
                </View>
              </View>

              {booking.status !== 'Cancelled' && booking.status !== 'Completed' && (
                <TouchableOpacity
                  activeOpacity={0.86}
                  onPress={() => cancelBooking(booking)}
                  style={{
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: '#E05252',
                    borderRadius: 15,
                    paddingVertical: 13,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFF7F7',
                  }}
                >
                  <Ionicons name="close-circle-outline" size={19} color="#D94343" />
                  <Text style={{ color: '#D94343', fontSize: 14.5, fontWeight: '900', marginLeft: 7 }}>
                    Cancel Booking
                  </Text>
                </TouchableOpacity>
              )}

              {booking.status === 'Cancelled' && (
                <TouchableOpacity
                  activeOpacity={0.86}
                  onPress={() => {
                    setSelectedRefundBooking(booking);
                    setScreen('refund');
                  }}
                  style={{
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: '#087F8C',
                    borderRadius: 15,
                    paddingVertical: 13,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ionicons name="receipt-outline" size={19} color="#087F8C" />
                  <Text style={{ color: '#087F8C', fontSize: 14.5, fontWeight: '900', marginLeft: 7 }}>
                    View Refund
                  </Text>
                </TouchableOpacity>
              )}

              {booking.status !== 'Cancelled' && (
                <TouchableOpacity
                  activeOpacity={0.86}
                  onPress={() => {
                    setTrackingId(booking.id);
                    setTrackingReturnScreen('bookings');
                    setTrackingPath([]);
                    setTrackingLocation(null);
                    setTrackingError('');
                    setScreen('tracking');
                  }}
                  style={styles.trackBookingButton}
                >
                <Ionicons name="navigate-outline" size={18} color="#FFFFFF" />
                <Text style={styles.trackBookingButtonText}>Track Booking</Text>
                  <Ionicons name="arrow-forward" size={17} color="#FFFFFF" />
                </TouchableOpacity>
              )}
            </View>
          ))
        )}

        <View style={styles.bookingBottomHelp}>
          <View style={styles.bookingHelpIcon}>
            <Ionicons name="headset-outline" size={20} color="#087F8C" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.bookingHelpTitle}>Need help with a booking?</Text>
            <Text style={styles.bookingHelpText}>
              Our support team is here to help you.
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setScreen('support')}
            style={styles.bookingHelpArrow}
          >
            <Ionicons name="chevron-forward" size={18} color="#087F8C" />
          </TouchableOpacity>
        </View>
      </AppPage>
    );
  }

  /* =========================================================
     BOOKING FORM
  ========================================================= */

  if (screen === 'booking') {
    const selectedItem = selectedService || selectedEquipment;

    // Safety guard: never render the booking form without a selected item.
    if (!selectedItem) {
      return (
        <AppPage
          title="Book Service"
          onBack={() => setScreen('services')}
        >
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 22, padding: 24, alignItems: 'center', marginTop: 20 }}>
            <Ionicons name="calendar-outline" size={54} color="#087F8C" />
            <Text style={{ marginTop: 14, fontSize: 20, fontWeight: '900', color: '#123F61', textAlign: 'center' }}>
              No service selected
            </Text>
            <Text style={{ marginTop: 7, fontSize: 14, color: '#71869A', textAlign: 'center', lineHeight: 21 }}>
              Please choose a healthcare service first, then start your booking.
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setScreen('services')}
              style={{ marginTop: 18, backgroundColor: '#087F8C', borderRadius: 14, paddingHorizontal: 22, paddingVertical: 13, flexDirection: 'row', alignItems: 'center' }}
            >
              <Ionicons name="grid-outline" size={19} color="#FFFFFF" />
              <Text style={{ marginLeft: 7, color: '#FFFFFF', fontWeight: '800' }}>Choose Service</Text>
            </TouchableOpacity>
          </View>
        </AppPage>
      );
    }

    const itemName = selectedItem.name;
    const amount = selectedItem.price;

    return (
      <AppPage
        title="Book Service"
        onBack={() =>
          setScreen(
            selectedService
              ? 'serviceDetails'
              : 'equipmentDetails'
          )
        }
      >
        <View style={styles.bookingSummary}>
          <Text style={styles.bookingSummaryLabel}>
            SELECTED SERVICE
          </Text>

          <Text style={styles.bookingSummaryName}>
            {itemName}
          </Text>

          <Text style={styles.bookingSummaryPrice}>
            ₹{amount}
          </Text>
        </View>

        <Text style={styles.formHeading}>
          When do you need the service?
        </Text>

        <View style={styles.segment}>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              bookingType === 'now' &&
                styles.segmentActive,
            ]}
            onPress={() => setBookingType('now')}
          >
            <Ionicons
              name="flash"
              size={20}
              color={
                bookingType === 'now'
                  ? '#fff'
                  : '#17617B'
              }
            />

            <Text
              style={[
                styles.segmentText,
                bookingType === 'now' &&
                  styles.segmentTextActive,
              ]}
            >
              Request Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.segmentButton,
              bookingType === 'later' &&
                styles.segmentActive,
            ]}
            onPress={() => setBookingType('later')}
          >
            <Ionicons
              name="calendar"
              size={20}
              color={
                bookingType === 'later'
                  ? '#fff'
                  : '#17617B'
              }
            />

            <Text
              style={[
                styles.segmentText,
                bookingType === 'later' &&
                  styles.segmentTextActive,
              ]}
            >
              Schedule
            </Text>
          </TouchableOpacity>
        </View>

        {bookingType === 'later' && (
          <View style={{ marginTop: 4 }}>
            <Text style={styles.formHeading}>Schedule Details</Text>

            <TouchableOpacity
              activeOpacity={0.86}
              style={[
                styles.bookingPickerButton,
                bookingDate && styles.bookingPickerButtonSelected,
              ]}
              onPress={() => openBookingPicker('date')}
            >
              <Ionicons name="calendar-outline" size={22} color="#087F8C" />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.bookingPickerLabel}>Date</Text>
                <Text style={styles.bookingPickerValue}>
                  {bookingDate || 'Select service date'}
                </Text>
              </View>
              <Ionicons name="chevron-down" size={19} color="#6C8490" />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.86}
              style={[
                styles.bookingPickerButton,
                bookingTime && styles.bookingPickerButtonSelected,
              ]}
              onPress={() => openBookingPicker('time')}
            >
              <Ionicons name="time-outline" size={22} color="#087F8C" />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.bookingPickerLabel}>Time</Text>
                <Text style={styles.bookingPickerValue}>
                  {bookingTime || 'Select service time'}
                </Text>
              </View>
              <Ionicons name="chevron-down" size={19} color="#6C8490" />
            </TouchableOpacity>

            <Text style={{ color: '#71869A', fontSize: 12.5, marginTop: 7, marginBottom: 8 }}>
              Select the date and time from the available options.
            </Text>
          </View>
        )}

        <Modal
          visible={bookingPickerVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setBookingPickerVisible(false)}
        >
          <View style={styles.appointmentPickerBackdrop}>
            <TouchableOpacity
              style={StyleSheet.absoluteFillObject}
              activeOpacity={1}
              onPress={() => setBookingPickerVisible(false)}
            />
            <View style={styles.appointmentPickerSheet}>
              <View style={styles.appointmentPickerHandle} />
              <View style={styles.appointmentPickerHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.appointmentPickerTitle}>
                    {bookingPickerType === 'date' ? 'Select Service Date' : 'Select Service Time'}
                  </Text>
                  <Text style={styles.appointmentPickerSubtitle}>
                    {bookingPickerType === 'date' ? 'Choose a date from the next 14 days' : 'Choose an available service slot'}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setBookingPickerVisible(false)}
                  style={styles.appointmentPickerClose}
                >
                  <Ionicons name="close" size={22} color="#173E56" />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false} style={styles.appointmentPickerList}>
                {bookingPickerType === 'date' ? (
                  appointmentDateOptions.map((item, index) => {
                    const displayDate = formatBookingDate(item.value);
                    const selected = bookingDate === displayDate;
                    return (
                      <TouchableOpacity
                        key={`booking-date-${item.value}`}
                        activeOpacity={0.84}
                        style={[styles.appointmentOption, selected && styles.appointmentOptionActive]}
                        onPress={() => {
                          setBookingDate(displayDate);
                          setBookingPickerVisible(false);
                        }}
                      >
                        <View style={[styles.appointmentDateCircle, selected && styles.appointmentDateCircleActive]}>
                          <Text style={[styles.appointmentDateDay, selected && styles.appointmentDateActiveText]}>
                            {index === 0 ? 'Today' : item.day}
                          </Text>
                          <Text style={[styles.appointmentDateNumber, selected && styles.appointmentDateActiveText]}>
                            {item.dateNumber}
                          </Text>
                        </View>
                        <Text style={[styles.appointmentOptionText, selected && styles.appointmentOptionTextActive]}>
                          {item.label}
                        </Text>
                        {selected && <Ionicons name="checkmark-circle" size={23} color="#087F8C" />}
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  appointmentTimeOptions.map((time) => {
                    const selected = bookingTime === time;
                    return (
                      <TouchableOpacity
                        key={`booking-time-${time}`}
                        activeOpacity={0.84}
                        style={[styles.appointmentOption, selected && styles.appointmentOptionActive]}
                        onPress={() => {
                          setBookingTime(time);
                          setBookingPickerVisible(false);
                        }}
                      >
                        <View style={styles.timeOptionIcon}>
                          <Ionicons name="time-outline" size={20} color="#087F8C" />
                        </View>
                        <Text style={[styles.appointmentOptionText, selected && styles.appointmentOptionTextActive]}>
                          {time}
                        </Text>
                        {selected && <Ionicons name="checkmark-circle" size={23} color="#087F8C" />}
                      </TouchableOpacity>
                    );
                  })
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>

        <Text style={styles.formHeading}>
          Patient Details
        </Text>

        <InputField
          label="Patient Name"
          placeholder="Enter patient name"
          value={patientName}
          onChangeText={setPatientName}
          icon="person-outline"
        />

        <InputField
          label="Patient Mobile"
          placeholder="Enter mobile number"
          value={patientPhone}
          onChangeText={setPatientPhone}
          keyboard="phone-pad"
          icon="call-outline"
        />

        <InputField
          label="Service Address"
          placeholder="Enter complete address"
          value={address}
          onChangeText={setAddress}
          icon="location-outline"
          multiline
        />

        <InputField
          label="Instructions / Notes"
          placeholder="Any important operational instructions"
          value={notes}
          onChangeText={setNotes}
          icon="document-text-outline"
          multiline
        />

        <TouchableOpacity
          style={styles.bookButton}
          onPress={continueToPayment}
        >
          <Text style={styles.bookButtonText}>
            Continue to Payment
          </Text>

          <Ionicons
            name="arrow-forward"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </AppPage>
    );
  }


  /* =========================================================
     BOOKING PAYMENT
  ========================================================= */

  if (screen === 'bookingPayment') {
    const selectedItem = selectedService || selectedEquipment;

    // Extra safety: never render payment UI without a valid item.
    if (!selectedItem || !selectedItem.name) {
      return (
        <AppPage
          title="Booking Payment"
          onBack={() => setScreen('services')}
        >
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 22, padding: 24, alignItems: 'center', marginTop: 20 }}>
            <Ionicons name="alert-circle-outline" size={54} color="#E53935" />
            <Text style={{ marginTop: 14, fontSize: 20, fontWeight: '900', color: '#123F61', textAlign: 'center' }}>
              Booking details missing
            </Text>
            <Text style={{ marginTop: 8, fontSize: 14, color: '#71869A', textAlign: 'center', lineHeight: 21 }}>
              Please choose a service or medical equipment again before continuing to payment.
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setScreen('services')}
              style={{ marginTop: 18, backgroundColor: '#087F8C', borderRadius: 14, paddingHorizontal: 22, paddingVertical: 13, flexDirection: 'row', alignItems: 'center' }}
            >
              <Ionicons name="grid-outline" size={19} color="#FFFFFF" />
              <Text style={{ marginLeft: 7, color: '#FFFFFF', fontWeight: '800' }}>Choose Service</Text>
            </TouchableOpacity>
          </View>
        </AppPage>
      );
    }

    const bookingAmount = Number(selectedItem.price) || 0;
    const safeWalletBalance = Number(walletBalance) || 0;
    const safeSavedMethods = Array.isArray(savedPaymentMethods) ? savedPaymentMethods : [];
    const hasSavedCard = safeSavedMethods.some((method) =>
      String(method || '').toLowerCase().includes('card')
    );
    const bookingSchedule = bookingType === 'now'
      ? 'Immediate Request'
      : `${bookingDate || 'Date not selected'} • ${bookingTime || 'Time not selected'}`;

    const bookingPaymentOptions = [
      { key: 'UPI', title: 'UPI', subtitle: 'Pay instantly using your UPI app', icon: 'phone-portrait-outline', color: '#087F8C' },
      { key: 'Card', title: 'Credit / Debit Card', subtitle: hasSavedCard ? 'Use your saved card securely' : 'Add a card from Payment Methods first', icon: 'card-outline', color: '#1768B1' },
      { key: 'Wallet', title: 'Healthome Wallet', subtitle: `Available balance ₹${safeWalletBalance.toLocaleString('en-IN')}`, icon: 'wallet-outline', color: '#0A8B6E' },
      { key: 'Cash on Service', title: 'Cash on Service', subtitle: 'Pay at the time of service', icon: 'cash-outline', color: '#E67C26' },
    ];

    return (
      <AppPage
        title="Booking Payment"
        onBack={() => setScreen('booking')}
      >
        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 22, padding: 18, marginBottom: 16, borderWidth: 1, borderColor: '#DCECEF' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 48, height: 48, borderRadius: 16, backgroundColor: '#E7F7F8', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="calendar-outline" size={25} color="#087F8C" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={{ color: '#7A8D9D', fontSize: 11, fontWeight: '800', letterSpacing: 0.7 }}>BOOKING SUMMARY</Text>
              <Text style={{ marginTop: 4, color: '#123F61', fontSize: 18, fontWeight: '900' }}>{selectedItem.name}</Text>
            </View>
          </View>

          <View style={{ marginTop: 16, paddingTop: 14, borderTopWidth: 1, borderTopColor: '#EDF2F4' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 9 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Patient</Text>
              <Text style={{ color: '#173E56', fontSize: 13, fontWeight: '800', flex: 1, textAlign: 'right' }} numberOfLines={1}>
                {patientName || 'Not provided'}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 9 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Schedule</Text>
              <Text style={{ color: '#173E56', fontSize: 13, fontWeight: '800', flex: 1, textAlign: 'right' }} numberOfLines={2}>
                {bookingSchedule}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Total</Text>
              <Text style={{ color: '#087F8C', fontSize: 19, fontWeight: '900' }}>
                ₹{bookingAmount.toLocaleString('en-IN')}
              </Text>
            </View>
          </View>
        </View>

        <Text style={{ color: '#123F61', fontSize: 18, fontWeight: '900', marginBottom: 10 }}>
          Choose Payment Method
        </Text>

        {bookingPaymentOptions.map((option) => {
          const active = paymentMethod === option.key;
          return (
            <TouchableOpacity
              key={option.key}
              activeOpacity={0.88}
              onPress={() => {
                setPaymentMethod(option.key);
                if (option.key !== 'UPI') setSelectedUpiApp('');
              }}
              style={{
                backgroundColor: active ? '#F0FAFA' : '#FFFFFF',
                borderRadius: 18,
                borderWidth: active ? 2 : 1,
                borderColor: active ? '#087F8C' : '#DCECEF',
                padding: 16,
                marginBottom: 11,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ width: 48, height: 48, borderRadius: 15, backgroundColor: active ? '#DDF4F5' : '#F4F8FA', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name={option.icon} size={25} color={option.color} />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ color: '#173E56', fontSize: 15.5, fontWeight: '900' }}>{option.title}</Text>
                <Text style={{ color: '#71869A', fontSize: 12.5, marginTop: 4, lineHeight: 18 }}>{option.subtitle}</Text>
              </View>
              <Ionicons name={active ? 'radio-button-on' : 'radio-button-off'} size={23} color={active ? '#087F8C' : '#AAB9C2'} />
            </TouchableOpacity>
          );
        })}

        {paymentMethod === 'UPI' && (
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 18, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#DCECEF' }}>
            <Text style={{ color: '#173E56', fontSize: 14, fontWeight: '900', marginBottom: 10 }}>Select UPI App</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {['Google Pay', 'PhonePe', 'Paytm', 'Other UPI'].map((app) => {
                const active = selectedUpiApp === app;
                return (
                  <TouchableOpacity
                    key={app}
                    activeOpacity={0.85}
                    onPress={() => setSelectedUpiApp(app)}
                    style={{ borderWidth: active ? 2 : 1, borderColor: active ? '#087F8C' : '#DCECEF', backgroundColor: active ? '#EAF8F8' : '#FFFFFF', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 13, marginRight: 8, marginBottom: 8 }}
                  >
                    <Text style={{ color: active ? '#087F8C' : '#4C6476', fontSize: 12.5, fontWeight: '800' }}>{app}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        {paymentMethod === 'Card' && !hasSavedCard && (
          <View style={{ backgroundColor: '#FFF8E8', borderRadius: 16, padding: 14, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="information-circle-outline" size={22} color="#D58A00" />
            <Text style={{ flex: 1, marginLeft: 9, color: '#6C5A2C', fontSize: 13, lineHeight: 19 }}>
              No saved card was found. Please save a card in Profile → Payment Methods, or choose another payment method.
            </Text>
          </View>
        )}

        {paymentMethod === 'Wallet' && (
          <View style={{ backgroundColor: safeWalletBalance >= bookingAmount ? '#EAF8F4' : '#FFF4E8', borderRadius: 16, padding: 14, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={safeWalletBalance >= bookingAmount ? 'checkmark-circle' : 'alert-circle'} size={23} color={safeWalletBalance >= bookingAmount ? '#0A8B6E' : '#E67C26'} />
            <Text style={{ flex: 1, marginLeft: 9, color: '#45606F', fontSize: 13, lineHeight: 19 }}>
              {safeWalletBalance >= bookingAmount
                ? 'Your wallet has enough balance for this booking.'
                : `Add ₹${Math.max(0, bookingAmount - safeWalletBalance).toLocaleString('en-IN')} more to use the wallet.`}
            </Text>
          </View>
        )}

        <View style={{ backgroundColor: '#F4FAFB', borderRadius: 16, padding: 14, marginTop: 4, marginBottom: 14, flexDirection: 'row' }}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#087F8C" />
          <Text style={{ flex: 1, marginLeft: 9, color: '#607887', fontSize: 12.5, lineHeight: 18 }}>
            This is a demo payment screen. No real money is charged.
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={confirmPayment}
          style={{ backgroundColor: paymentMethod ? '#087F8C' : '#B8C9CE', borderRadius: 16, paddingVertical: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 22 }}
        >
          <Ionicons name="lock-closed-outline" size={20} color="#FFFFFF" />
          <Text style={{ color: '#FFFFFF', fontSize: 15.5, fontWeight: '900', marginLeft: 8 }}>
            Confirm Booking • ₹{bookingAmount.toLocaleString('en-IN')}
          </Text>
        </TouchableOpacity>
      </AppPage>
    );
  }

  /* =========================================================
     BOOKING SUCCESS
  ========================================================= */

  if (screen === 'bookingSuccess') {
    const confirmed = lastConfirmedBooking;

    if (!confirmed) {
      return (
        <AppPage title="Booking Confirmed" onBack={() => setScreen('home')}>
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 22, padding: 26, alignItems: 'center', marginTop: 20 }}>
            <Ionicons name="checkmark-circle-outline" size={70} color="#087F8C" />
            <Text style={{ marginTop: 14, color: '#123F61', fontSize: 22, fontWeight: '900', textAlign: 'center' }}>Booking completed</Text>
            <TouchableOpacity activeOpacity={0.85} onPress={() => setScreen('bookings')} style={{ marginTop: 20, backgroundColor: '#087F8C', borderRadius: 14, paddingHorizontal: 22, paddingVertical: 13 }}>
              <Text style={{ color: '#FFFFFF', fontWeight: '900' }}>View My Bookings</Text>
            </TouchableOpacity>
          </View>
        </AppPage>
      );
    }

    return (
      <AppPage title="Booking Confirmed" onBack={() => setScreen('home')}>
        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 24, padding: 24, alignItems: 'center', marginTop: 10, borderWidth: 1, borderColor: '#DCECEF' }}>
          <View style={{ width: 78, height: 78, borderRadius: 39, backgroundColor: '#E3F8F2', alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="checkmark" size={46} color="#0A8B6E" />
          </View>
          <Text style={{ marginTop: 18, color: '#123F61', fontSize: 24, fontWeight: '900', textAlign: 'center' }}>Booking Confirmed</Text>
          <Text style={{ marginTop: 7, color: '#71869A', fontSize: 14, lineHeight: 20, textAlign: 'center' }}>Your Healthome request has been received successfully.</Text>

          <View style={{ width: '100%', backgroundColor: '#F4FAFB', borderRadius: 18, padding: 16, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 11 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Service</Text>
              <Text style={{ color: '#173E56', fontSize: 13, fontWeight: '900', flex: 1, textAlign: 'right' }} numberOfLines={2}>{confirmed.service}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 11 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Booking ID</Text>
              <Text style={{ color: '#087F8C', fontSize: 14, fontWeight: '900' }}>{confirmed.id}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 11 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Patient</Text>
              <Text style={{ color: '#173E56', fontSize: 13, fontWeight: '800' }}>{confirmed.patient}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 11 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Schedule</Text>
              <Text style={{ color: '#173E56', fontSize: 13, fontWeight: '800', flex: 1, textAlign: 'right' }} numberOfLines={2}>{confirmed.date}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Amount</Text>
              <Text style={{ color: '#087F8C', fontSize: 17, fontWeight: '900' }}>₹{Number(confirmed.amount || 0).toLocaleString('en-IN')}</Text>
            </View>
          </View>

          <View style={{ width: '100%', backgroundColor: '#EAF8F4', borderRadius: 16, padding: 14, marginTop: 14, flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="navigate-outline" size={23} color="#0A8B6E" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ color: '#0A6F5A', fontSize: 11, fontWeight: '900' }}>TRACKING ID</Text>
              <Text style={{ color: '#173E56', fontSize: 16, fontWeight: '900', marginTop: 2 }}>{confirmed.id}</Text>
            </View>
          </View>

          <View style={{ width: '100%', marginTop: 18 }}>
            <TouchableOpacity activeOpacity={0.88} onPress={() => { setTrackingId(confirmed.id); setTrackingReturnScreen('bookingSuccess'); setTrackingPath([]); setTrackingLocation(null); setTrackingError(''); setScreen('tracking'); }} style={{ backgroundColor: '#087F8C', borderRadius: 15, paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="navigate-outline" size={20} color="#FFFFFF" />
              <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '900', marginLeft: 8 }}>Track Booking</Text>
            </TouchableOpacity>

            {confirmed.status !== 'Cancelled' && confirmed.status !== 'Completed' && (
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => cancelBooking(confirmed)}
                style={{ marginTop: 10, borderWidth: 1, borderColor: '#E05252', backgroundColor: '#FFF7F7', borderRadius: 15, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
              >
                <Ionicons name="close-circle-outline" size={20} color="#D94343" />
                <Text style={{ color: '#D94343', fontSize: 15, fontWeight: '900', marginLeft: 8 }}>Cancel Booking</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity activeOpacity={0.85} onPress={() => setScreen('bookings')} style={{ marginTop: 10, borderWidth: 1, borderColor: '#087F8C', borderRadius: 15, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="list-outline" size={20} color="#087F8C" />
              <Text style={{ color: '#087F8C', fontSize: 15, fontWeight: '900', marginLeft: 8 }}>View My Bookings</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.85} onPress={() => setScreen('home')} style={{ marginTop: 10, paddingVertical: 12, alignItems: 'center' }}>
              <Text style={{ color: '#71869A', fontSize: 13, fontWeight: '800' }}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AppPage>
    );
  }

  /* =========================================================
     REFUND / CANCELLATION
  ========================================================= */

  if (screen === 'refund') {
    const refundBooking = selectedRefundBooking;

    if (!refundBooking) {
      return (
        <AppPage title="Refund & Cancellation" onBack={() => setScreen('bookings')}>
          <View style={{ backgroundColor: '#FFFFFF', borderRadius: 22, padding: 25, alignItems: 'center', marginTop: 18 }}>
            <Ionicons name="receipt-outline" size={64} color="#087F8C" />
            <Text style={{ marginTop: 14, color: '#173E56', fontSize: 21, fontWeight: '900', textAlign: 'center' }}>
              No refund details available
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setScreen('bookings')}
              style={{ marginTop: 20, backgroundColor: '#087F8C', borderRadius: 14, paddingHorizontal: 22, paddingVertical: 13 }}
            >
              <Text style={{ color: '#FFFFFF', fontWeight: '900' }}>Back to My Bookings</Text>
            </TouchableOpacity>
          </View>
        </AppPage>
      );
    }

    const refundAmount = Number(refundBooking.refundAmount || 0);
    const isRefundApplicable = refundAmount > 0;
    const refundStatus = refundBooking.refundStatus || (isRefundApplicable ? 'Refund Initiated' : 'Not Applicable');

    return (
      <AppPage title="Refund & Cancellation" onBack={() => setScreen('bookings')}>
        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 24, padding: 22, marginTop: 10, borderWidth: 1, borderColor: '#DCECEF' }}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: 76, height: 76, borderRadius: 38, backgroundColor: isRefundApplicable ? '#EAF8F4' : '#FFF4E8', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons
                name={isRefundApplicable ? 'cash-outline' : 'information-circle-outline'}
                size={42}
                color={isRefundApplicable ? '#0A8B6E' : '#E67C26'}
              />
            </View>

            <Text style={{ marginTop: 16, color: '#173E56', fontSize: 23, fontWeight: '900', textAlign: 'center' }}>
              {isRefundApplicable ? 'Refund Initiated' : 'Booking Cancelled'}
            </Text>

            <Text style={{ marginTop: 7, color: '#71869A', fontSize: 13.5, lineHeight: 20, textAlign: 'center' }}>
              {isRefundApplicable
                ? 'Your cancellation has been recorded and the refund request has been initiated.'
                : 'Your booking has been cancelled. No online payment refund is applicable for Cash on Service.'}
            </Text>
          </View>

          <View style={{ backgroundColor: '#F4FAFB', borderRadius: 18, padding: 16, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Booking ID</Text>
              <Text style={{ color: '#087F8C', fontSize: 14, fontWeight: '900' }}>{refundBooking.id}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Service</Text>
              <Text style={{ color: '#173E56', fontSize: 13, fontWeight: '900', flex: 1, textAlign: 'right' }} numberOfLines={2}>
                {refundBooking.service || 'Healthcare Service'}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Payment Method</Text>
              <Text style={{ color: '#173E56', fontSize: 13, fontWeight: '800' }}>
                {refundBooking.payment || 'Not available'}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Refund Status</Text>
              <Text style={{ color: isRefundApplicable ? '#0A8B6E' : '#E67C26', fontSize: 13, fontWeight: '900' }}>
                {refundStatus}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#71869A', fontSize: 13 }}>Refund Amount</Text>
              <Text style={{ color: '#087F8C', fontSize: 18, fontWeight: '900' }}>
                ₹{refundAmount.toLocaleString('en-IN')}
              </Text>
            </View>
          </View>

          {isRefundApplicable && (
            <View style={{ marginTop: 14, backgroundColor: '#EAF8F4', borderRadius: 16, padding: 14, flexDirection: 'row', alignItems: 'flex-start' }}>
              <Ionicons name="information-circle-outline" size={21} color="#0A8B6E" />
              <Text style={{ flex: 1, marginLeft: 9, color: '#45606F', fontSize: 12.5, lineHeight: 18 }}>
                Refunds are shown as initiated in this prototype. In a production app, the actual refund timing and status must come from your payment gateway/backend.
              </Text>
            </View>
          )}

          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => setScreen('bookings')}
            style={{ marginTop: 18, backgroundColor: '#087F8C', borderRadius: 15, paddingVertical: 15, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '900' }}>Back to My Bookings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setScreen('support')}
            style={{ marginTop: 10, borderWidth: 1, borderColor: '#087F8C', borderRadius: 15, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          >
            <Ionicons name="headset-outline" size={19} color="#087F8C" />
            <Text style={{ color: '#087F8C', fontSize: 14.5, fontWeight: '900', marginLeft: 7 }}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </AppPage>
    );
  }

  /* =========================================================
     PERSONAL INFORMATION
  ========================================================= */

  if (screen === 'personalInformation') {
    return (
      <View style={styles.personalInfoRoot}>
        <StatusBar barStyle="light-content" backgroundColor="#087F8C" />

        <LinearGradient
          colors={['#034B6A', '#087F8C', '#0A9AA4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.personalInfoHeader}
        >
          <TouchableOpacity
            style={styles.personalInfoBack}
            activeOpacity={0.8}
            onPress={() => setScreen('profile')}
          >
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.personalInfoHeaderText}>
            <Text style={styles.personalInfoTitle}>Personal Information</Text>
            <Text style={styles.personalInfoSubtitle}>
              Keep your Healthome profile up to date
            </Text>
          </View>

          <View style={styles.personalInfoHeaderIcon}>
            <Ionicons name="person-outline" size={23} color="#FFFFFF" />
          </View>
        </LinearGradient>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.personalInfoContent}
        >
          <View style={styles.personalInfoProfileCard}>
            <View style={styles.personalInfoPhotoRing}>
              <View style={styles.personalInfoPhoto}>
                {profilePhoto ? (
                  <Image
                    source={{ uri: profilePhoto }}
                    style={styles.personalInfoPhotoImage}
                  />
                ) : (
                  <Ionicons name="person" size={54} color="#0A9AA4" />
                )}
              </View>

              <TouchableOpacity
                style={styles.personalInfoCamera}
                activeOpacity={0.85}
                onPress={openProfilePhotoOptions}
              >
                <Ionicons name="camera" size={18} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.personalInfoProfileText}>
              <Text style={styles.personalInfoWelcome}>
                Your Profile
              </Text>
              <Text style={styles.personalInfoName}>
                {userName || 'Healthome Customer'}
              </Text>
              <Text style={styles.personalInfoPhone}>
                {phone ? `${countryCode} ${phone}` : 'Mobile number not available'}
              </Text>
            </View>

            <View style={styles.personalInfoVerified}>
              <Ionicons name="checkmark-circle" size={19} color="#087F8C" />
              <Text style={styles.personalInfoVerifiedText}>Verified</Text>
            </View>
          </View>

          <View style={styles.personalInfoPhotoHint}>
            <Ionicons name="information-circle-outline" size={19} color="#0A9AA4" />
            <Text style={styles.personalInfoPhotoHintText}>
              Tap the camera icon to take a new profile photo or choose one from your gallery.
            </Text>
          </View>

          <View style={styles.personalInfoSectionCard}>
            <View style={styles.personalInfoSectionHeader}>
              <View style={styles.personalInfoSectionIcon}>
                <Ionicons name="person-outline" size={21} color="#0A9AA4" />
              </View>
              <View>
                <Text style={styles.personalInfoSectionTitle}>Basic Details</Text>
                <Text style={styles.personalInfoSectionSubtitle}>
                  Information used for your Healthome account
                </Text>
              </View>
            </View>

            <Text style={styles.personalInfoLabel}>Full Name</Text>
            <View style={styles.personalInfoInputWrap}>
              <Ionicons name="person-outline" size={20} color="#087F8C" />
              <TextInput
                value={userName}
                onChangeText={setUserName}
                placeholder="Enter your full name"
                placeholderTextColor="#8AA0AF"
                style={styles.personalInfoInput}
              />
            </View>

            <Text style={styles.personalInfoLabel}>Mobile Number</Text>
            <View style={[styles.personalInfoInputWrap, styles.personalInfoDisabledWrap]}>
              <Ionicons name="phone-portrait-outline" size={20} color="#087F8C" />
              <TextInput
                value={phone ? `${countryCode} ${phone}` : ''}
                editable={false}
                placeholder="Mobile number"
                placeholderTextColor="#8AA0AF"
                style={[styles.personalInfoInput, styles.personalInfoDisabledInput]}
              />
              <Ionicons name="lock-closed-outline" size={18} color="#8AA0AF" />
            </View>
            <Text style={styles.personalInfoFieldNote}>
              Your mobile number is linked to OTP verification and cannot be edited here.
            </Text>

            <Text style={styles.personalInfoLabel}>Email Address</Text>
            <View style={styles.personalInfoInputWrap}>
              <Ionicons name="mail-outline" size={20} color="#087F8C" />
              <TextInput
                value={profileEmail}
                onChangeText={setProfileEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Enter your email address"
                placeholderTextColor="#8AA0AF"
                style={styles.personalInfoInput}
              />
            </View>
          </View>

          <View style={styles.personalInfoSectionCard}>
            <View style={styles.personalInfoSectionHeader}>
              <View style={styles.personalInfoSectionIconTeal}>
                <Ionicons name="options-outline" size={21} color="#087F8C" />
              </View>
              <View>
                <Text style={styles.personalInfoSectionTitle}>Personal Preferences</Text>
                <Text style={styles.personalInfoSectionSubtitle}>
                  Help us personalize your experience
                </Text>
              </View>
            </View>

            <Text style={styles.personalInfoLabel}>Gender</Text>
            <View style={styles.personalInfoGenderRow}>
              {['Male', 'Female', 'Other'].map((item) => (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.8}
                  style={[
                    styles.personalInfoGenderButton,
                    profileGender === item && styles.personalInfoGenderButtonSelected,
                  ]}
                  onPress={() => setProfileGender(item)}
                >
                  <Ionicons
                    name={
                      item === 'Male'
                        ? 'male-outline'
                        : item === 'Female'
                        ? 'female-outline'
                        : 'people-outline'
                    }
                    size={18}
                    color={profileGender === item ? '#FFFFFF' : '#0A9AA4'}
                  />
                  <Text
                    style={[
                      styles.personalInfoGenderText,
                      profileGender === item && styles.personalInfoGenderTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.personalInfoSecurityCard}>
            <View style={styles.personalInfoSecurityIcon}>
              <Ionicons name="shield-checkmark-outline" size={25} color="#087F8C" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.personalInfoSecurityTitle}>
                Your information is protected
              </Text>
              <Text style={styles.personalInfoSecurityText}>
                Your account information is used to manage your healthcare services and bookings.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.personalInfoSaveButton}
            activeOpacity={0.88}
            onPress={() => {
              Alert.alert(
                'Profile Updated',
                'Your personal information has been updated successfully.'
              );
              setScreen('profile');
            }}
          >
            <Ionicons name="checkmark-circle-outline" size={23} color="#FFFFFF" />
            <Text style={styles.personalInfoSaveText}>Save Personal Information</Text>
          </TouchableOpacity>

          <Text style={styles.personalInfoFooter}>
            You can update these details whenever you need to.
          </Text>
        </ScrollView>
      </View>
    );
  }


  if (screen === 'savedAddresses') {
    const saveAddress = () => {
      const value = address.trim();

      if (!value) {
        Alert.alert('Address Required', 'Please enter an address first.');
        return;
      }

      if (editingAddressIndex !== null) {
        setSavedAddresses((items) =>
          items.map((item, index) =>
            index === editingAddressIndex
              ? {
                  ...(typeof item === 'string'
                    ? { address: item }
                    : item),
                  address: value,
                  label: addressLabel,
                }
              : item
          )
        );
        setEditingAddressIndex(null);
        setAddress('');
        setAddressLabel('Home');
        Alert.alert('Address Updated', 'Your service address has been updated.');
        return;
      }

      setSavedAddresses((items) => [
        ...items,
        { address: value, label: addressLabel },
      ]);

      if (defaultAddressIndex === null) {
        setDefaultAddressIndex(0);
      }

      setAddress('');
      Alert.alert('Address Saved', 'Your new service address has been saved.');
    };

    const editAddress = (index) => {
      const item = savedAddresses[index];
      setAddress(typeof item === 'string' ? item : item?.address || '');
      setAddressLabel(typeof item === 'string' ? 'Other' : (item?.label || 'Other'));
      setEditingAddressIndex(index);
    };

    const removeAddress = (index) => {
      Alert.alert(
        'Remove Address',
        'Are you sure you want to remove this saved address?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Remove',
            style: 'destructive',
            onPress: () => {
              setSavedAddresses((items) =>
                items.filter((_, itemIndex) => itemIndex !== index)
              );

              setDefaultAddressIndex((currentDefault) => {
                if (currentDefault === null) return null;
                if (currentDefault === index) return null;
                if (currentDefault > index) return currentDefault - 1;
                return currentDefault;
              });

              if (editingAddressIndex === index) {
                setEditingAddressIndex(null);
                setAddress('');
                setAddressLabel('Home');
              }
            },
          },
        ]
      );
    };

    const setAsDefaultAddress = (index) => {
      setDefaultAddressIndex(index);
      Alert.alert(
        'Default Address',
        'This address is now your default service address.'
      );
    };

    return (
      <AppPage title="Saved Addresses" onBack={() => setScreen('profile')}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.savedAddressesScroll}
        >
          <LinearGradient
            colors={['#E8FAF9', '#F5FCFD']}
            style={styles.savedAddressHero}
          >
            <View style={styles.savedAddressHeroIcon}>
              <Ionicons name="location" size={30} color="#087F8C" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.savedAddressHeroTitle}>
                Manage your addresses
              </Text>
              <Text style={styles.savedAddressHeroText}>
                Save Home, Work or Other locations and use them for faster healthcare bookings.
              </Text>
            </View>
          </LinearGradient>

          {savedAddresses.length > 0 && (
            <View style={styles.addressSectionHeader}>
              <View>
                <Text style={styles.addressSectionTitle}>Your Addresses</Text>
                <Text style={styles.addressSectionSubtitle}>
                  {savedAddresses.length} saved location{savedAddresses.length === 1 ? '' : 's'}
                </Text>
              </View>

              <View style={styles.addressCountPill}>
                <Ionicons name="location-outline" size={15} color="#087F8C" />
                <Text style={styles.addressCountText}>
                  {savedAddresses.length}
                </Text>
              </View>
            </View>
          )}

          {savedAddresses.length === 0 ? (
            <View style={styles.savedAddressEmpty}>
              <View style={styles.savedAddressEmptyIcon}>
                <Ionicons name="location-outline" size={44} color="#07958F" />
              </View>
              <Text style={styles.savedAddressEmptyTitle}>
                No saved addresses
              </Text>
              <Text style={styles.savedAddressEmptyText}>
                Add your home, work or any frequently used healthcare service address below.
              </Text>
            </View>
          ) : (
            savedAddresses.map((item, index) => {
              const isDefault = defaultAddressIndex === index;
              const addressText =
                typeof item === 'string' ? item : item.address;

              return (
                <View key={`${addressText}-${index}`} style={styles.savedAddressModernCard}>
                  <View style={styles.savedAddressTopRow}>
                    <View style={styles.savedAddressLocationIcon}>
                      <Ionicons
                        name={
                          (typeof item === 'string' ? 'Other' : item.label) === 'Home'
                            ? 'home-outline'
                            : (typeof item === 'string' ? 'Other' : item.label) === 'Work'
                            ? 'briefcase-outline'
                            : 'location-outline'
                        }
                        size={23}
                        color="#087F8C"
                      />
                    </View>

                    <View style={{ flex: 1 }}>
                      <View style={styles.savedAddressTitleRow}>
                        <Text style={styles.savedAddressModernTitle}>
                          {typeof item === 'string' ? `Address ${index + 1}` : (item.label || 'Address')}
                        </Text>

                        {isDefault && (
                          <View style={styles.defaultAddressBadge}>
                            <Ionicons name="checkmark-circle" size={13} color="#087F8C" />
                            <Text style={styles.defaultAddressBadgeText}>Default</Text>
                          </View>
                        )}
                      </View>

                      <Text style={styles.savedAddressModernText}>
                        {addressText}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.addressMoreButton}
                      onPress={() =>
                        Alert.alert(
                          'Address Options',
                          'Choose an action for this address.',
                          [
                            {
                              text: isDefault ? 'Default Address' : 'Set as Default',
                              onPress: () => {
                                if (!isDefault) setAsDefaultAddress(index);
                              },
                            },
                            {
                              text: 'Edit Address',
                              onPress: () => editAddress(index),
                            },
                            {
                              text: 'Remove Address',
                              style: 'destructive',
                              onPress: () => removeAddress(index),
                            },
                            { text: 'Cancel', style: 'cancel' },
                          ]
                        )
                      }
                    >
                      <Ionicons name="ellipsis-vertical" size={21} color="#547381" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.savedAddressDivider} />

                  <View style={styles.savedAddressActions}>
                    <TouchableOpacity
                      style={styles.addressActionButton}
                      onPress={() => editAddress(index)}
                    >
                      <Ionicons name="create-outline" size={18} color="#087F8C" />
                      <Text style={styles.addressActionText}>Edit</Text>
                    </TouchableOpacity>

                    <View style={styles.addressActionDivider} />

                    <TouchableOpacity
                      style={styles.addressActionButton}
                      onPress={() => setAsDefaultAddress(index)}
                    >
                      <Ionicons
                        name={isDefault ? "checkmark-circle" : "star-outline"}
                        size={18}
                        color="#087F8C"
                      />
                      <Text style={styles.addressActionText}>
                        {isDefault ? 'Default' : 'Set Default'}
                      </Text>
                    </TouchableOpacity>

                    <View style={styles.addressActionDivider} />

                    <TouchableOpacity
                      style={styles.addressActionButton}
                      onPress={() => removeAddress(index)}
                    >
                      <Ionicons name="trash-outline" size={18} color="#D64A4A" />
                      <Text style={styles.addressRemoveText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          )}

          <View style={styles.addAddressModernCard}>
            <View style={styles.addAddressHeader}>
              <View style={styles.addAddressIcon}>
                <Ionicons
                  name={editingAddressIndex !== null ? "create-outline" : "add"}
                  size={24}
                  color="#087F8C"
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.addAddressTitle}>
                  {editingAddressIndex !== null ? 'Edit Address' : 'Add New Address'}
                </Text>
                <Text style={styles.addAddressSubtitle}>
                  {editingAddressIndex !== null
                    ? 'Update this service location.'
                    : 'Add a frequently used service location.'}
                </Text>
              </View>

              {editingAddressIndex !== null && (
                <TouchableOpacity
                  style={styles.cancelEditButton}
                  onPress={() => {
                    setEditingAddressIndex(null);
                    setAddress('');
                    setAddressLabel('Home');
                  }}
                >
                  <Ionicons name="close" size={19} color="#5D7682" />
                </TouchableOpacity>
              )}
            </View>

            <Text style={styles.addressInputLabel}>Complete Address</Text>

            <View style={styles.addressModernInputBox}>
              <Ionicons name="navigate-outline" size={21} color="#087F8C" />
              <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="House no., street, area, city..."
                placeholderTextColor="#9AAEB7"
                multiline
                style={styles.addressModernInput}
              />
            </View>

            <Text style={[styles.addressInputLabel, { marginTop: 16 }]}>
              Save Address As
            </Text>

            <View style={styles.addressTypeSelector}>
              {[
                {
                  value: 'Home',
                  icon: 'home-outline',
                  subtitle: 'House',
                },
                {
                  value: 'Work',
                  icon: 'briefcase-outline',
                  subtitle: 'Office',
                },
                {
                  value: 'Other',
                  icon: 'location-outline',
                  subtitle: 'Other place',
                },
              ].map((option) => {
                const selected = addressLabel === option.value;

                return (
                  <TouchableOpacity
                    key={option.value}
                    activeOpacity={0.85}
                    onPress={() => setAddressLabel(option.value)}
                    style={[
                      styles.addressTypeOption,
                      selected && styles.addressTypeOptionSelected,
                    ]}
                  >
                    <Ionicons
                      name={option.icon}
                      size={21}
                      color={selected ? '#FFFFFF' : '#087F8C'}
                    />
                    <Text
                      style={[
                        styles.addressTypeOptionTitle,
                        selected && styles.addressTypeOptionTitleSelected,
                      ]}
                    >
                      {option.value}
                    </Text>
                    <Text
                      style={[
                        styles.addressTypeOptionSubtitle,
                        selected && styles.addressTypeOptionSubtitleSelected,
                      ]}
                    >
                      {option.subtitle}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.addressTipRow}>
              <Ionicons name="shield-checkmark-outline" size={17} color="#07958F" />
              <Text style={styles.addressTipText}>
                Your address is used only to arrange your healthcare service.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.saveAddressModernButton}
              onPress={saveAddress}
            >
              <Ionicons
                name={editingAddressIndex !== null ? "checkmark" : "add"}
                size={21}
                color="#FFFFFF"
              />
              <Text style={styles.saveAddressModernButtonText}>
                {editingAddressIndex !== null ? 'Update Address' : 'Save Address'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </AppPage>
    );
  }


  const endSupportChat = () => {
    Alert.alert(
      'End Chat',
      'Are you sure you want to end this support chat?',
      [
        { text: 'Keep Chat', style: 'cancel' },
        {
          text: 'End Chat',
          style: 'destructive',
          onPress: () => {
            setSupportChatOpen(false);
            setSupportChatInput('');
            setSupportChatAttachment(null);
            setSupportChatStep('category');
            setSupportAgentRequested(false);
            setSupportChatMessages([
              {
                id: `support-welcome-${Date.now()}`,
                sender: 'bot',
                text: 'Hi! I am the Healthome Support Assistant. Before connecting you to an agent, I will ask a quick question so I can understand what you need.',
              },
              {
                id: `support-question-${Date.now()}`,
                sender: 'bot',
                text: 'What do you need help with today?',
              },
            ]);
          },
        },
      ]
    );
  };

  const addSupportChatMessage = (message) => {
    setSupportChatMessages((messages) => [
      ...messages,
      { id: `support-${Date.now()}-${Math.random()}`, ...message },
    ]);
  };

  const chooseSupportPhoto = async () => {
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          'Photo Permission',
          'Please allow photo access so you can attach a photo to your support chat.'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: false,
        quality: 0.8,
      });

      if (!result.canceled && result.assets?.length) {
        const photo = result.assets[0];
        setSupportChatAttachment({
          type: 'photo',
          uri: photo.uri,
          name: photo.fileName || 'Support photo',
        });

        addSupportChatMessage({
          sender: 'user',
          text: '📷 Photo attached',
        });

        setSupportChatStep('followup');
      }
    } catch (error) {
      Alert.alert('Photo Error', 'Unable to open your photo library.');
    }
  };

  const recordSupportVoice = () => {
    Alert.alert(
      'Voice Message',
      'The microphone button is ready in the chat UI. Connect Expo Audio/AV recording here later to send a real voice message to your support backend.',
      [
        { text: 'OK' },
      ]
    );
  };

  if (screen === 'reports') {
    const openReport = (booking) => {
      Alert.alert(
        'Service Report',
        `Service: ${booking.service}\nBooking ID: ${booking.id}\nDate: ${booking.date}\nPatient: ${booking.patient}\nStatus: ${booking.status}\n\nThis report preview is linked to the booking in the Healthome prototype. A PDF/report viewer can be connected to your backend here.`,
        [
          { text: 'Close', style: 'cancel' },
          {
            text: 'Download',
            onPress: () =>
              Alert.alert(
                'Download',
                'Report download can be connected to your backend storage here.'
              ),
          },
        ]
      );
    };

    const openPrescription = (booking) => {
      Alert.alert(
        'Prescription',
        `Prescription for ${booking.service}\nBooking ID: ${booking.id}\n\nPrescription documents can be uploaded and displayed here once connected to your healthcare document storage.`,
        [
          { text: 'Close', style: 'cancel' },
          {
            text: 'Upload',
            onPress: () =>
              Alert.alert(
                'Upload Prescription',
                'Connect your document picker/backend here to upload a prescription for this booking.'
              ),
          },
        ]
      );
    };

    return (
      <AppPage title="Reports & Prescriptions" onBack={() => setScreen('profile')}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        >
          <LinearGradient
            colors={['#034B6A', '#087F8C', '#0A9AA4']}
            style={{
              borderRadius: 26,
              padding: 22,
              marginBottom: 16,
              flexDirection: 'row',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                width: 62,
                height: 62,
                borderRadius: 20,
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}
            >
              <Ionicons name="document-text-outline" size={31} color="#087F8C" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#FFFFFF', fontSize: 23, fontWeight: '900' }}>
                Your Health Documents
              </Text>
              <Text
                style={{
                  color: '#DDF7F7',
                  fontSize: 13.5,
                  lineHeight: 20,
                  marginTop: 5,
                }}
              >
                Access your service reports and prescriptions from one place.
              </Text>
            </View>
          </LinearGradient>

          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 22,
              padding: 17,
              marginBottom: 16,
              borderWidth: 1,
              borderColor: '#E0EEF1',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 16,
                backgroundColor: '#E7F8F7',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="shield-checkmark-outline" size={25} color="#087F8C" />
            </View>

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={{ color: '#123F61', fontSize: 16, fontWeight: '800' }}>
                Secure document area
              </Text>
              <Text style={{ color: '#71869A', fontSize: 12.5, lineHeight: 18, marginTop: 3 }}>
                Keep reports and prescriptions associated with your Healthome bookings.
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F1FAFA',
              borderRadius: 18,
              padding: 5,
              marginBottom: 17,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setDocumentTab('reports')}
              style={{
                flex: 1,
                backgroundColor: documentTab === 'reports' ? '#087F8C' : 'transparent',
                borderRadius: 14,
                paddingVertical: 12,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: documentTab === 'reports' ? '#FFFFFF' : '#547381',
                  fontWeight: '800',
                }}
              >
                Reports
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setDocumentTab('prescriptions')}
              style={{
                flex: 1,
                backgroundColor: documentTab === 'prescriptions' ? '#087F8C' : 'transparent',
                borderRadius: 14,
                paddingVertical: 12,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: documentTab === 'prescriptions' ? '#FFFFFF' : '#547381',
                  fontWeight: '800',
                }}
              >
                Prescriptions
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ color: '#123F61', fontSize: 18, fontWeight: '900' }}>
              {documentTab === 'reports' ? 'Service Reports' : 'Prescriptions'}
            </Text>
            <Text style={{ color: '#71869A', fontSize: 12.5, marginTop: 3 }}>
              {documentTab === 'reports'
                ? 'Review reports connected to your Healthome bookings.'
                : 'Review or upload prescriptions connected to your bookings.'}
            </Text>
          </View>

          {bookings.length === 0 ? (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 25,
                padding: 30,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#E0EEF1',
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: 82,
                  height: 82,
                  borderRadius: 41,
                  backgroundColor: '#E8F8F7',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 15,
                }}
              >
                <Ionicons name="folder-open-outline" size={42} color="#087F8C" />
              </View>
              <Text style={{ color: '#123F61', fontSize: 20, fontWeight: '900' }}>
                No documents yet
              </Text>
              <Text
                style={{
                  color: '#71869A',
                  fontSize: 14,
                  lineHeight: 21,
                  textAlign: 'center',
                  marginTop: 7,
                }}
              >
                Your booking-related reports and prescriptions will appear here after you make a booking.
              </Text>

              <TouchableOpacity
                activeOpacity={0.85}
                style={{
                  marginTop: 19,
                  backgroundColor: '#087F8C',
                  borderRadius: 15,
                  paddingHorizontal: 22,
                  paddingVertical: 13,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => setScreen('services')}
              >
                <Ionicons name="add" size={20} color="#FFFFFF" />
                <Text style={{ color: '#FFFFFF', fontWeight: '800', marginLeft: 7 }}>
                  Explore Services
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            bookings.map((booking) => (
              <View
                key={booking.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 22,
                  padding: 16,
                  marginBottom: 14,
                  borderWidth: 1,
                  borderColor: '#E0EEF1',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 17,
                      backgroundColor: '#E8F8F7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Ionicons
                      name={documentTab === 'reports' ? 'document-text-outline' : 'medkit-outline'}
                      size={27}
                      color="#087F8C"
                    />
                  </View>

                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={{ color: '#123F61', fontSize: 16, fontWeight: '900' }}>
                      {booking.service}
                    </Text>
                    <Text style={{ color: '#71869A', fontSize: 12.5, marginTop: 4 }}>
                      Booking {booking.id}
                    </Text>
                    <Text style={{ color: '#71869A', fontSize: 12.5, marginTop: 2 }}>
                      {booking.date}
                    </Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: '#E8F8F0',
                      borderRadius: 12,
                      paddingHorizontal: 9,
                      paddingVertical: 6,
                    }}
                  >
                    <Text style={{ color: '#008B70', fontSize: 11, fontWeight: '900' }}>
                      {booking.status || 'Received'}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 1,
                    backgroundColor: '#E8EFF2',
                    marginVertical: 14,
                  }}
                />

                <View style={{ flexDirection: 'row', gap: 9 }}>
                  <TouchableOpacity
                    activeOpacity={0.82}
                    style={{
                      flex: 1,
                      backgroundColor: '#087F8C',
                      borderRadius: 14,
                      paddingVertical: 12,
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                    onPress={() =>
                      documentTab === 'reports'
                        ? openReport(booking)
                        : openPrescription(booking)
                    }
                  >
                    <Ionicons
                      name={documentTab === 'reports' ? 'document-text-outline' : 'medkit-outline'}
                      size={18}
                      color="#FFFFFF"
                    />
                    <Text style={{ color: '#FFFFFF', fontWeight: '800', marginLeft: 6 }}>
                      {documentTab === 'reports' ? 'View Report' : 'View Prescription'}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.82}
                    style={{
                      flex: 1,
                      backgroundColor: '#EAF5FF',
                      borderRadius: 14,
                      paddingVertical: 12,
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                    onPress={() =>
                      documentTab === 'reports'
                        ? openPrescription(booking)
                        : openReport(booking)
                    }
                  >
                    <Ionicons
                      name={documentTab === 'reports' ? 'medkit-outline' : 'document-text-outline'}
                      size={18}
                      color="#1765B5"
                    />
                    <Text style={{ color: '#1765B5', fontWeight: '800', marginLeft: 6 }}>
                      {documentTab === 'reports' ? 'Prescription' : 'Report'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}

          {bookings.length > 0 && (
            <TouchableOpacity
              activeOpacity={0.85}
              style={{
                backgroundColor: '#F1FAFA',
                borderRadius: 18,
                padding: 16,
                marginTop: 2,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() =>
                Alert.alert(
                  'Upload Prescription',
                  'Connect your document picker/backend here to upload a prescription and attach it to a booking.'
                )
              }
            >
              <Ionicons name="cloud-upload-outline" size={25} color="#087F8C" />
              <View style={{ flex: 1, marginLeft: 11 }}>
                <Text style={{ color: '#123F61', fontSize: 15, fontWeight: '800' }}>
                  Upload a prescription
                </Text>
                <Text style={{ color: '#71869A', fontSize: 12.5, marginTop: 3 }}>
                  Add a prescription document for your healthcare team.
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={21} color="#087F8C" />
            </TouchableOpacity>
          )}
        </ScrollView>
      </AppPage>
    );
  }

  /* =========================================================
     PAYMENT METHODS - HEALTHOME PREMIUM DESIGN
  ========================================================= */

  if (screen === 'paymentMethods') {
    const cleanSavedMethods = savedPaymentMethods.filter(
      (method) =>
        method !== 'Cash on Service' &&
        method !== 'Cash' &&
        !method.startsWith('UPI')
    );

    const saveCard = () => {
      const cleanNumber = cardNumber.replace(/\s/g, '');
      const cleanCvv = cardCvv.replace(/\D/g, '');
      const expiry = cardExpiry.trim();

      if (!/^\d{12,19}$/.test(cleanNumber)) {
        Alert.alert('Invalid Card Number', 'Enter a valid 12–19 digit card number.');
        return;
      }
      if (!cardHolderName.trim()) {
        Alert.alert('Card Holder Name', 'Enter the name printed on the card.');
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        Alert.alert('Invalid Expiry', 'Enter expiry in MM/YY format.');
        return;
      }
      if (!/^\d{3,4}$/.test(cleanCvv)) {
        Alert.alert('Invalid CVV', 'Enter a valid 3 or 4 digit CVV.');
        return;
      }

      const label = `Card •••• ${cleanNumber.slice(-4)}`;
      setSavedPaymentMethods((methods) =>
        methods.includes(label) ? methods : [...methods, label]
      );
      if (saveCardForFuture) setDefaultPaymentMethod(label);

      setCardNumber('');
      setCardHolderName('');
      setCardExpiry('');
      setCardCvv('');
      setPaymentFlow(null);

      Alert.alert(
        'Card Saved',
        saveCardForFuture
          ? `${label} is ready for future payments.`
          : `${label} was added for this session.`
      );
    };

    const startWalletPayment = () => {
      const amount = Number(walletAmount);
      if (!amount || amount < 1) {
        Alert.alert('Choose Amount', 'Select an amount or enter a custom amount first.');
        return;
      }
      if (!walletMethod) {
        Alert.alert('Choose Payment Method', 'Select how you want to add money.');
        return;
      }
      setWalletPaymentStarted(true);
    };

    const completeWalletPayment = () => {
      const amount = Number(walletAmount);
      if (!amount || amount < 1 || !walletMethod) {
        Alert.alert('Payment Details', 'Choose an amount and payment method first.');
        return;
      }

      setWalletBalance((balance) => balance + amount);
      setSavedPaymentMethods((methods) =>
        methods.includes('Healthome Wallet')
          ? methods
          : [...methods, 'Healthome Wallet']
      );
      if (!defaultPaymentMethod) setDefaultPaymentMethod('Healthome Wallet');

      setWalletAmount('');
      setWalletMethod('');
      setWalletPaymentStarted(false);
      setPaymentFlow(null);

      Alert.alert(
        'Wallet Updated',
        `₹${amount.toLocaleString('en-IN')} has been added to your Healthome Wallet.`
      );
    };

    const removePaymentMethod = (method) => {
      Alert.alert('Remove Payment Method', `Remove ${method}?`, [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setSavedPaymentMethods((methods) =>
              methods.filter((item) => item !== method)
            );
            if (defaultPaymentMethod === method) setDefaultPaymentMethod(null);
          },
        },
      ]);
    };

    const openFlow = (flow) => {
      setPaymentFlow(flow);
      if (flow === 'wallet') setWalletPaymentStarted(false);
    };

    return (
      <AppPage title="Payment Methods" onBack={() => setScreen('profile')}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.paymentPagePremiumContent}
          keyboardShouldPersistTaps="handled"
        >
          {paymentFlow === null ? (
            <>
              {/* PREMIUM PAYMENT HERO */}
              <LinearGradient
                colors={['#EAFBFA', '#F7FEFE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.paymentPremiumHero}
              >
                <View style={styles.paymentPremiumHeroTextWrap}>
                  <Text style={styles.paymentPremiumEyebrow}>HEALTHOME PAYMENTS</Text>
                  <Text style={styles.paymentPremiumTitle}>
                    Safe. Simple.{"\n"}
                    <Text style={styles.paymentPremiumTitleAccent}>
                      Secure Payments.
                    </Text>
                  </Text>
                  <Text style={styles.paymentPremiumSubtitle}>
                    Manage your Healthome Wallet and save your card for quick,
                    secure payments.
                  </Text>

                  <View style={styles.paymentPremiumTrustRow}>
                    <View style={styles.paymentPremiumTrustItem}>
                      <Ionicons name="shield-checkmark" size={17} color="#087F8C" />
                      <Text style={styles.paymentPremiumTrustText}>Secure</Text>
                    </View>
                    <View style={styles.paymentPremiumTrustDivider} />
                    <View style={styles.paymentPremiumTrustItem}>
                      <Ionicons name="flash" size={17} color="#087F8C" />
                      <Text style={styles.paymentPremiumTrustText}>Fast</Text>
                    </View>
                    <View style={styles.paymentPremiumTrustDivider} />
                    <View style={styles.paymentPremiumTrustItem}>
                      <Ionicons name="checkmark-circle" size={17} color="#087F8C" />
                      <Text style={styles.paymentPremiumTrustText}>Reliable</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.paymentPremiumHeroVisual}>
                  <View style={styles.paymentPremiumPhone}>
                    <View style={styles.paymentPremiumPhoneTop} />
                    <View style={styles.paymentPremiumPhoneLine} />
                    <View style={styles.paymentPremiumPhoneLineSmall} />
                    <View style={styles.paymentPremiumCardMini}>
                      <Ionicons name="card" size={18} color="#FFFFFF" />
                    </View>
                  </View>
                  <View style={styles.paymentPremiumShield}>
                    <Ionicons name="shield-checkmark" size={28} color="#FFFFFF" />
                  </View>
                </View>
              </LinearGradient>

              {/* WALLET OPTION — MINT THEME */}
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.paymentChoiceWallet}
                onPress={() => openFlow('wallet')}
              >
                <View style={styles.paymentChoiceWalletIconBox}>
                  <Ionicons name="wallet" size={34} color="#087F8C" />
                  <View style={styles.paymentChoiceWalletRupee}>
                    <Text style={styles.paymentChoiceWalletRupeeText}>₹</Text>
                  </View>
                </View>

                <View style={styles.paymentChoiceContent}>
                  <Text style={styles.paymentChoiceEyebrow}>HEALTHOME WALLET</Text>
                  <Text style={styles.paymentChoiceTitle}>Wallet</Text>
                  <Text style={styles.paymentChoiceDescription}>
                    Use your wallet balance for faster bookings and payments.
                  </Text>
                  <View style={styles.paymentWalletBalancePill}>
                    <Text style={styles.paymentWalletBalanceAmount}>
                      ₹{walletBalance.toLocaleString('en-IN')}
                    </Text>
                    <Text style={styles.paymentWalletBalanceLabel}>
                      Available Balance
                    </Text>
                  </View>
                </View>

                <View style={styles.paymentChoiceArrowWallet}>
                  <Ionicons name="arrow-forward" size={23} color="#FFFFFF" />
                </View>
              </TouchableOpacity>

              {/* CARD OPTION — BLUE THEME */}
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.paymentChoiceCard}
                onPress={() => openFlow('card')}
              >
                <View style={styles.paymentChoiceCardIconBox}>
                  <Ionicons name="card" size={34} color="#1768B1" />
                  <View style={styles.paymentChoiceCardPlus}>
                    <Ionicons name="add" size={16} color="#FFFFFF" />
                  </View>
                </View>

                <View style={styles.paymentChoiceContent}>
                  <Text style={styles.paymentChoiceEyebrowCard}>SECURE PAYMENT</Text>
                  <Text style={styles.paymentChoiceTitle}>Save Card</Text>
                  <Text style={styles.paymentChoiceDescription}>
                    Save your credit or debit card for quick future payments.
                  </Text>
                  <View style={styles.cardBrandRow}>
                    <View style={styles.cardBrandVisa}><Text style={styles.cardBrandVisaText}>VISA</Text></View>
                    <View style={styles.cardBrandMaster}><View style={styles.cardBrandCircleOne} /><View style={styles.cardBrandCircleTwo} /></View>
                    <View style={styles.cardBrandRupay}><Text style={styles.cardBrandRupayText}>RuPay</Text></View>
                    <View style={styles.cardBrandAmex}><Text style={styles.cardBrandAmexText}>AMEX</Text></View>
                  </View>
                </View>

                <View style={styles.paymentChoiceArrowCard}>
                  <Ionicons name="arrow-forward" size={23} color="#FFFFFF" />
                </View>
              </TouchableOpacity>

              {/* SAVED METHODS */}
              {cleanSavedMethods.length > 0 && (
                <View style={styles.paymentSavedSection}>
                  <Text style={styles.paymentSavedTitle}>Saved Payment Options</Text>
                  {cleanSavedMethods.map((method) => {
                    const isWallet = method === 'Healthome Wallet' || method === 'Wallet';
                    const isDefault = defaultPaymentMethod === method;
                    return (
                      <View key={method} style={styles.paymentSavedCard}>
                        <View style={styles.paymentSavedIcon}>
                          <Ionicons
                            name={isWallet ? 'wallet-outline' : 'card-outline'}
                            size={22}
                            color={isWallet ? '#087F8C' : '#1768B1'}
                          />
                        </View>
                        <View style={{ flex: 1 }}>
                          <View style={styles.savedPaymentNewTitleRow}>
                            <Text style={styles.paymentSavedMethodTitle}>
                              {isWallet ? 'Healthome Wallet' : method}
                            </Text>
                            {isDefault && (
                              <View style={styles.paymentDefaultNewBadge}>
                                <Text style={styles.paymentDefaultNewBadgeText}>DEFAULT</Text>
                              </View>
                            )}
                          </View>
                          <Text style={styles.paymentSavedMethodSubtitle}>
                            {isWallet
                              ? `Available balance ₹${walletBalance.toLocaleString('en-IN')}`
                              : 'Card saved securely • last 4 digits only'}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.paymentMoreButtonNew}
                          onPress={() =>
                            Alert.alert('Payment Method', method, [
                              ...(!isDefault
                                ? [{ text: 'Set as Default', onPress: () => setDefaultPaymentMethod(method) }]
                                : []),
                              ...(isWallet
                                ? [{ text: 'Add Money', onPress: () => openFlow('wallet') }]
                                : []),
                              { text: 'Remove', style: 'destructive', onPress: () => removePaymentMethod(method) },
                              { text: 'Cancel', style: 'cancel' },
                            ])
                          }
                        >
                          <Ionicons name="ellipsis-vertical" size={20} color="#607D8B" />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              )}

              {/* SECURITY NOTE */}
              <View style={styles.paymentSecurityNotePremium}>
                <View style={styles.paymentSecurityNoteIcon}>
                  <Ionicons name="lock-closed" size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.paymentSecurityNoteText}>
                  Your payment information is encrypted and protected. Card CVV
                  is never stored by Healthome.
                </Text>
              </View>
            </>
          ) : (
            <View style={styles.paymentFlowPageNew}>
              <TouchableOpacity
                style={styles.paymentFlowBackNew}
                onPress={() => setPaymentFlow(null)}
              >
                <Ionicons name="arrow-back" size={20} color="#173E56" />
                <Text style={styles.paymentFlowBackText}>Back to Payment Methods</Text>
              </TouchableOpacity>

              {paymentFlow === 'card' && (
                <View>
                  <View style={styles.paymentFlowHeroNew}>
                    <View style={styles.paymentFlowHeroIconNew}>
                      <Ionicons name="card" size={30} color="#2765B4" />
                    </View>
                    <Text style={styles.paymentFlowPageTitle}>Save Your Card</Text>
                    <Text style={styles.paymentFlowPageText}>
                      Add a credit or debit card for faster future payments.
                    </Text>
                  </View>

                  <View style={styles.cardPreviewNew}>
                    <Ionicons name="card" size={27} color="#FFFFFF" />
                    <Text style={styles.cardPreviewNumber}>
                      {cardNumber
                        ? `•••• •••• •••• ${cardNumber.replace(/\s/g, '').slice(-4)}`
                        : '•••• •••• •••• ••••'}
                    </Text>
                    <Text style={styles.cardPreviewName}>
                      {cardHolderName || 'CARD HOLDER NAME'}
                    </Text>
                    <Text style={styles.cardPreviewExpiry}>{cardExpiry || 'MM/YY'}</Text>
                  </View>

                  <Text style={styles.paymentInputLabelNew}>Card Number</Text>
                  <TextInput
                    value={cardNumber}
                    onChangeText={(value) =>
                      setCardNumber(
                        value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
                      )
                    }
                    placeholder="1234 5678 9012 3456"
                    placeholderTextColor="#9AAEB7"
                    keyboardType="number-pad"
                    maxLength={19}
                    style={styles.paymentTextInputNew}
                  />

                  <Text style={styles.paymentInputLabelNew}>Card Holder Name</Text>
                  <TextInput
                    value={cardHolderName}
                    onChangeText={setCardHolderName}
                    placeholder="Name on card"
                    placeholderTextColor="#9AAEB7"
                    autoCapitalize="words"
                    style={styles.paymentTextInputNew}
                  />

                  <View style={styles.cardFieldsRowNew}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.paymentInputLabelNew}>Expiry</Text>
                      <TextInput
                        value={cardExpiry}
                        onChangeText={setCardExpiry}
                        placeholder="MM/YY"
                        placeholderTextColor="#9AAEB7"
                        keyboardType="number-pad"
                        maxLength={5}
                        style={styles.paymentTextInputNew}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.paymentInputLabelNew}>CVV</Text>
                      <TextInput
                        value={cardCvv}
                        onChangeText={(value) =>
                          setCardCvv(value.replace(/\D/g, '').slice(0, 4))
                        }
                        placeholder="CVV"
                        placeholderTextColor="#9AAEB7"
                        keyboardType="number-pad"
                        maxLength={4}
                        secureTextEntry
                        style={styles.paymentTextInputNew}
                      />
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.saveCardRowNew}
                    onPress={() => setSaveCardForFuture((v) => !v)}
                  >
                    <Ionicons
                      name={saveCardForFuture ? 'checkbox' : 'square-outline'}
                      size={23}
                      color="#087F8C"
                    />
                    <Text style={styles.saveCardRowNewText}>
                      Save this card for future payments
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.88}
                    style={styles.paymentPrimaryNew}
                    onPress={saveCard}
                  >
                    <Ionicons name="lock-closed-outline" size={19} color="#FFFFFF" />
                    <Text style={styles.paymentPrimaryNewText}>Save Card Securely</Text>
                  </TouchableOpacity>

                  <View style={styles.paymentInfoNew}>
                    <Ionicons name="shield-checkmark-outline" size={21} color="#087F8C" />
                    <Text style={styles.paymentInfoNewText}>
                      For a production app, use a PCI-compliant payment gateway or
                      tokenization service. Never store raw card numbers or CVV.
                    </Text>
                  </View>
                </View>
              )}

              {paymentFlow === 'wallet' && (
                <View>
                  <View style={styles.paymentFlowHeroNew}>
                    <View style={[styles.paymentFlowHeroIconNew, { backgroundColor: '#E2F8F5' }]}>
                      <Ionicons name="wallet" size={30} color="#0A8B6E" />
                    </View>
                    <Text style={styles.paymentFlowPageTitle}>Healthome Wallet</Text>
                    <Text style={styles.paymentFlowPageText}>
                      Add money to your wallet and use the balance for future bookings.
                    </Text>
                  </View>

                  <View style={styles.walletFlowBalanceCard}>
                    <Text style={styles.walletFlowBalanceLabel}>AVAILABLE BALANCE</Text>
                    <Text style={styles.walletFlowBalanceAmount}>
                      ₹{walletBalance.toLocaleString('en-IN')}
                    </Text>
                  </View>

                  <Text style={styles.paymentInputLabelNew}>Choose Amount</Text>
                  <View style={styles.walletAmountGridNew}>
                    {[500, 1000, 2000, 5000].map((amount) => (
                      <TouchableOpacity
                        key={amount}
                        style={[
                          styles.walletAmountNew,
                          Number(walletAmount) === amount && styles.walletAmountNewSelected,
                        ]}
                        onPress={() => setWalletAmount(String(amount))}
                      >
                        <Text
                          style={[
                            styles.walletAmountNewText,
                            Number(walletAmount) === amount && styles.walletAmountNewTextSelected,
                          ]}
                        >
                          ₹{amount.toLocaleString('en-IN')}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <TextInput
                    value={walletAmount}
                    onChangeText={(value) => setWalletAmount(value.replace(/\D/g, ''))}
                    placeholder="Or enter custom amount"
                    placeholderTextColor="#9AAEB7"
                    keyboardType="number-pad"
                    style={styles.paymentTextInputNew}
                  />

                  <Text style={styles.paymentInputLabelNew}>Payment Method</Text>
                  {[
                    ['UPI', 'phone-portrait-outline'],
                    ['Credit / Debit Card', 'card-outline'],
                    ['Net Banking', 'globe-outline'],
                  ].map(([method, icon]) => (
                    <TouchableOpacity
                      key={method}
                      style={[
                        styles.walletMethodNew,
                        walletMethod === method && styles.walletMethodNewSelected,
                      ]}
                      onPress={() => {
                        setWalletMethod(method);
                        setWalletPaymentStarted(false);
                      }}
                    >
                      <Ionicons name={icon} size={22} color="#087F8C" />
                      <Text style={styles.walletMethodNewText}>{method}</Text>
                      <Ionicons
                        name={walletMethod === method ? 'radio-button-on' : 'radio-button-off'}
                        size={21}
                        color="#087F8C"
                      />
                    </TouchableOpacity>
                  ))}

                  <TouchableOpacity
                    activeOpacity={0.88}
                    style={styles.paymentPrimaryNew}
                    onPress={walletPaymentStarted ? completeWalletPayment : startWalletPayment}
                  >
                    <Ionicons
                      name={walletPaymentStarted ? 'checkmark-circle-outline' : 'arrow-forward-circle-outline'}
                      size={20}
                      color="#FFFFFF"
                    />
                    <Text style={styles.paymentPrimaryNewText}>
                      {walletPaymentStarted ? 'Payment Completed' : 'Continue to Payment'}
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.walletDemoNote}>
                    Demo behavior: wallet balance updates after you press “Payment Completed”.
                    Connect a real payment gateway before accepting live payments.
                  </Text>
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </AppPage>
    );
  }

  if (screen === 'profile') {
    const profileOptions = [
      {
        icon: 'person-outline',
        title: 'Personal Information',
        subtitle: 'View and update your details',
        iconBg: '#DCEEFF',
        iconColor: '#1478C8',
      },
      {
        icon: 'location-outline',
        title: 'Saved Addresses',
        subtitle: 'Manage your delivery & service addresses',
        iconBg: '#D9F7F2',
        iconColor: '#07958F',
      },
      {
        icon: 'document-text-outline',
        title: 'Reports & Prescriptions',
        subtitle: 'View, download and manage your reports',
        iconBg: '#EDE4FF',
        iconColor: '#6D36C7',
      },
      { icon: 'folder-open-outline', title: 'Health Records', subtitle: 'Prescriptions, reports and documents', iconBg: '#DDF6F5', iconColor: '#087F8C' },
      { icon: 'people-outline', title: 'Family Members', subtitle: 'Manage people you care for', iconBg: '#EAF5FF', iconColor: '#1478C8' },
      { icon: 'wallet-outline', title: 'Healthome Wallet', subtitle: 'Balance, top-ups and transactions', iconBg: '#FFF0D9', iconColor: '#D98611' },
      {
        icon: 'card-outline',
        title: 'Payment Methods',
        subtitle: 'Manage cards, UPI, wallets and payment history',
        iconBg: '#FFF0D9',
        iconColor: '#D98611',
      },
      {
        icon: 'headset-outline',
        title: 'Help & Support',
        subtitle: 'Get assistance anytime',
        iconBg: '#DCEEFF',
        iconColor: '#1478C8',
      },
      {
        icon: 'lock-closed-outline',
        title: 'Privacy & Security',
        subtitle: 'Manage your data and account security',
        iconBg: '#FFE2EA',
        iconColor: '#D72E61',
      },
    ];

    return (
      <View style={styles.profilePageRoot}>
        <StatusBar barStyle="light-content" backgroundColor="#087F8C" />

        <LinearGradient
          colors={['#057589', '#078D98', '#E9F8F8']}
          locations={[0, 0.20, 0.52]}
          style={styles.profilePageBackground}
        >
          <SafeAreaView style={styles.profileSafeArea}>

            {/* Header */}
            <View style={styles.profileTopHeader}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setScreen('home')}
                style={styles.profileBackButton}
              >
                <Ionicons name="arrow-back" size={27} color="#FFFFFF" />
              </TouchableOpacity>

              <View style={styles.profileHeaderCenter}>
                <Text style={styles.profilePageTitle}>My Profile</Text>
                <Text style={styles.profilePageSubtitle}>
                  Manage your account and preferences
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setScreen('notifications')}
                style={styles.profileNotificationButton}
                accessibilityLabel="Notifications"
              >
                <Ionicons name="notifications-outline" size={27} color="#FFFFFF" />
                {notifications.length > 0 ? (
                  <View style={styles.profileNotificationDot} />
                ) : null}
              </TouchableOpacity>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.profilePageContent}
            >

              {/* Profile summary card */}
              <View style={styles.profileSummaryCard}>
                <View style={styles.profileLeafOne} />
                <View style={styles.profileLeafTwo} />

                <View style={styles.profileSummaryTop}>
                  <View style={styles.profileAvatarWrap}>
                    <View style={styles.profileAvatarLarge}>
                      {profilePhoto ? (
                        <Image
                          source={{ uri: profilePhoto }}
                          style={styles.profileAvatarImage}
                        />
                      ) : (
                        <Ionicons name="person" size={55} color="#0A9AA4" />
                      )}
                    </View>
                    <TouchableOpacity
                      style={styles.profileCameraButton}
                      activeOpacity={0.8}
                      onPress={openProfilePhotoOptions}
                    >
                      <Ionicons name="camera" size={18} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.profileIdentity}>
                    <Text style={styles.profileSummaryName}>
                      {userName || 'Healthome User'}
                    </Text>
                    <Text style={styles.profileSummaryPhone}>
                      {phone ? `${countryCode} ${phone}` : '+91 Mobile Number'}
                    </Text>
                  </View>

                  <View style={styles.profileGreeting}>
                    <Text style={styles.profileGreetingText}>
                      Better{'\n'}Health{'\n'}Brighter{'\n'}Tomorrow
                    </Text>
                    <Ionicons name="heart-outline" size={25} color="#087F8C" />
                  </View>
                </View>

                <View style={styles.profileStatsRow}>
                  <View style={styles.profileStat}>
                    <Ionicons
                      name="shield-checkmark-outline"
                      size={25}
                      color="#07958F"
                    />
                    <View style={styles.profileStatTextWrap}>
                      <Text style={styles.profileStatLabel}>Member Since</Text>
                      <Text style={styles.profileStatValue}>
                        {memberSince
                          ? new Date(memberSince).toLocaleDateString('en-IN', {
                              month: 'short',
                              year: 'numeric',
                            })
                          : 'Not set'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.profileStatDivider} />

                  <View style={styles.profileStat}>
                    <Ionicons name="people" size={25} color="#07958F" />
                    <View style={styles.profileStatTextWrap}>
                      <Text style={styles.profileStatLabel}>Total Bookings</Text>
                      <Text style={styles.profileStatValue}>
                        {bookings.length}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.profileStatDivider} />

                  <View style={styles.profileStat}>
                    <Ionicons name="star" size={25} color="#07958F" />
                    <View style={styles.profileStatTextWrap}>
                      <Text style={styles.profileStatLabel}>Health Points</Text>
                      <Text style={styles.profileStatValue}>
                        {bookings.reduce(
                          (total, booking) =>
                            total + Number(booking.healthPoints || 0),
                          0
                        )}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Account catalog */}
              <View style={styles.profileCatalogHeading}>
                <View>
                  <Text style={styles.profileCatalogTitle}>Your Healthome Space</Text>
                  <Text style={styles.profileCatalogSubtitle}>Everything you need, neatly organized</Text>
                </View>
                <View style={styles.profileCatalogBadge}>
                  <Ionicons name="sparkles" size={15} color="#087F8C" />
                  <Text style={styles.profileCatalogBadgeText}>MY HUB</Text>
                </View>
              </View>

              <View style={styles.profileOptionsCard}>
                {profileOptions.map((item) => (
                  <TouchableOpacity
                    key={item.title}
                    activeOpacity={0.82}
                    style={[
                      styles.profileModernOption,
                      { borderLeftColor: item.iconColor },
                    ]}
                    onPress={() => {
                      if (item.title === 'Personal Information') {
                        setScreen('personalInformation');
                      } else if (item.title === 'Saved Addresses') {
                        setScreen('savedAddresses');
                      } else if (item.title === 'Reports & Prescriptions') {
                        setScreen('reports');
                      } else if (item.title === 'Health Records') {
                        setScreen('healthRecords');
                      } else if (item.title === 'Family Members') {
                        setScreen('family');
                      } else if (item.title === 'Healthome Wallet') {
                        setScreen('wallet');
                      } else if (item.title === 'Payment Methods') {
                        setScreen('paymentMethods');
                      } else if (item.title === 'Help & Support') {
                        setScreen('support');
                      } else if (item.title === 'Privacy & Security') {
                        setScreen('privacySecurity');
                      }
                    }}
                  >
                    <View
                      style={[
                        styles.profileModernIcon,
                        { backgroundColor: item.iconBg },
                      ]}
                    >
                      <Ionicons
                        name={item.icon}
                        size={25}
                        color={item.iconColor}
                      />
                    </View>

                    <View style={styles.profileModernText}>
                      <View style={styles.profileModernTitleRow}>
                        <Text style={styles.profileModernTitle}>{item.title}</Text>

                      </View>
                      <Text style={styles.profileModernSubtitle}>
                        {item.subtitle}
                      </Text>
                    </View>

                    <Ionicons
                      name="chevron-forward"
                      size={27}
                      color={item.iconColor}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              {/* Health banner */}
              <View style={styles.profileHealthBanner}>
                <View style={styles.profileHealthCopy}>
                  <Text style={styles.profileHealthTitle}>
                    Your Health{'\n'}Our Priority
                  </Text>
                  <Text style={styles.profileHealthSubtitle}>
                    Manage your healthcare journey{'\n'}with ease.
                  </Text>

                  <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.profileExploreButton}
                    onPress={() => setScreen('services')}
                  >
                    <Text style={styles.profileExploreText}>Explore Services</Text>
                    <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>

                <View style={styles.profileHealthIllustration}>
                  <View style={styles.profileHealthHeart}>
                    <Ionicons name="add" size={42} color="#FFFFFF" />
                  </View>
                  <Ionicons
                    name="medical-outline"
                    size={80}
                    color="#087F8C"
                    style={styles.profileMedicalIcon}
                  />
                  <View style={styles.profileHealthLeaves}>
                    <Ionicons name="leaf-outline" size={30} color="#48BDAE" />
                    <Ionicons name="leaf-outline" size={25} color="#27AFA6" />
                  </View>
                </View>

                <View style={styles.profileHealthBenefits}>
                  <View style={styles.profileHealthBenefit}>
                    <Ionicons name="shield-checkmark-outline" size={24} color="#07958F" />
                    <Text style={styles.profileHealthBenefitText}>Trusted{'\n'}Care</Text>
                  </View>
                  <View style={styles.profileHealthBenefit}>
                    <Ionicons name="people-outline" size={24} color="#07958F" />
                    <Text style={styles.profileHealthBenefitText}>Verified{'\n'}Professionals</Text>
                  </View>
                  <View style={styles.profileHealthBenefit}>
                    <Ionicons name="heart-outline" size={24} color="#07958F" />
                    <Text style={styles.profileHealthBenefitText}>At Your{'\n'}Doorstep</Text>
                  </View>
                </View>
              </View>

              {/* Logout */}
              <TouchableOpacity
                activeOpacity={0.82}
                style={styles.profileLogoutModern}
                onPress={async () => {
                  try {
                    await removeItem('@healthome_session');
                  } catch (error) {
                    console.log('Healthome logout error:', error);
                  }
                  setIsLoggedIn(false);
                  setPhone('');
                  setOtp('');
                  setUserName('');
                  setMemberSince('');
                  setScreen('login');
                }}
              >
                <Ionicons name="log-out-outline" size={22} color="#D73535" />
                <Text style={styles.profileLogoutText}>Logout</Text>
              </TouchableOpacity>

            </ScrollView>

            <BottomNav
              active="Profile"
              onHome={() => setScreen('home')}
              onServices={() => setScreen('services')}
              onBookings={() => setScreen('bookings')}
              onMedicine={() => setScreen('medicine')}
              onProfile={() => setScreen('profile')}
            />

          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  /* =========================================================
     SUPPORT
  ========================================================= */

  /* =========================================================
     MEDICINE SCREEN
  ========================================================= */

  if (screen === 'medicine') {
    const medicineItems = [
      { id: 'm1', name: 'Prescription Medicines', description: 'Upload a valid prescription and request your medicines for home delivery.', icon: 'document-text-outline', badge: 'Prescription', category: 'Prescription' },
      { id: 'm2', name: 'Daily Wellness', description: 'Everyday healthcare and wellness essentials for you and your family.', icon: 'heart-outline', badge: 'Wellness', category: 'Wellness' },
      { id: 'm3', name: 'First Aid Essentials', description: 'Basic first-aid products for common home healthcare needs.', icon: 'medkit-outline', badge: 'First Aid', category: 'First Aid' },
      { id: 'm4', name: 'Health & Personal Care', description: 'Personal care and healthcare products delivered to your doorstep.', icon: 'shield-checkmark-outline', badge: 'Care', category: 'Care' },
    ];

    const visibleMedicineItems = medicineItems.filter((item) => {
      const query = search.trim().toLowerCase();
      return (
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    });

    const openMedicineItem = (item) => {
      setSelectedMedicineItem(item);
      setMedicinePrescription(null);
      setMedicineQuantity('1');
      setMedicineOrderVisible(true);
    };

    const pickMedicinePrescription = async (useCamera = false) => {
      try {
        const permission = useCamera
          ? await ImagePicker.requestCameraPermissionsAsync()
          : await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
          Alert.alert(
            'Permission Required',
            useCamera
              ? 'Please allow camera access to photograph the prescription.'
              : 'Please allow photo-library access to upload the prescription.'
          );
          return;
        }

        const result = useCamera
          ? await ImagePicker.launchCameraAsync({
              mediaTypes: ['images'],
              quality: 0.85,
            })
          : await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ['images'],
              quality: 0.85,
            });

        if (!result.canceled && result.assets?.[0]) {
          setMedicinePrescription(result.assets[0]);
        }
      } catch (error) {
        Alert.alert('Upload Failed', 'We could not access the prescription image. Please try again.');
      }
    };

    const submitMedicineRequest = () => {
      if (!selectedMedicineItem) return;

      if (
        selectedMedicineItem.category === 'Prescription' &&
        !medicinePrescription
      ) {
        Alert.alert(
          'Prescription Required',
          'Please upload or photograph your prescription before requesting prescription medicines.'
        );
        return;
      }

      const quantity = Math.max(
        1,
        Math.min(10, parseInt(medicineQuantity || '1', 10) || 1)
      );
      const requestId = `MED${Math.floor(100000 + Math.random() * 900000)}`;

      setNotifications((previous) => [
        {
          id: `medicine-${requestId}`,
          type: 'medicine',
          title: 'Medicine Request Received',
          text: `${selectedMedicineItem.name} request received for quantity ${quantity}. Reference: ${requestId}.`,
          time: 'Just now',
          icon: 'medical-outline',
        },
        ...previous,
      ]);

      setMedicineOrderVisible(false);
      setSelectedMedicineItem(null);
      setMedicinePrescription(null);

      Alert.alert(
        'Request Submitted',
        `Your ${selectedMedicineItem.name.toLowerCase()} request has been received.\n\nReference: ${requestId}\n\nHealthome will review the request and contact you for delivery/payment details if required.`
      );
    };

    return (
      <View style={styles.medicinePageRoot}>
        <StatusBar barStyle="dark-content" backgroundColor="#F4FBFD" />
        <SafeAreaView style={styles.medicineSafeArea}>
          <Header
            onMenu={() => setMenuVisible(true)}
            onNotifications={() => setScreen('notifications')}
            showNotifications={notifications.length > 0}
          />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.medicinePageContent}
            keyboardShouldPersistTaps="handled"
          >
            <LinearGradient
              colors={['#073F5A', '#087F8C', '#12A8A0']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.medicinePremiumHero}
            >
              <View style={styles.medicinePremiumHeroGlow} />
              <View style={styles.medicinePremiumHeroIcon}>
                <Ionicons name="medical" size={32} color="#087F8C" />
              </View>
              <Text style={styles.medicinePremiumEyebrow}>
                HEALTHCARE ESSENTIALS
              </Text>
              <Text style={styles.medicinePremiumTitle}>
                Medicines at Your Doorstep
              </Text>
              <Text style={styles.medicinePremiumSubtitle}>
                Simple, trusted access to medicines and healthcare products from Healthome.
              </Text>
              <View style={styles.medicinePremiumTrustRow}>
                <View style={styles.medicinePremiumTrustItem}>
                  <Ionicons name="shield-checkmark" size={16} color="#DDF8F5" />
                  <Text style={styles.medicinePremiumTrustText}>Trusted</Text>
                </View>
                <View style={styles.medicinePremiumTrustItem}>
                  <Ionicons name="home" size={16} color="#DDF8F5" />
                  <Text style={styles.medicinePremiumTrustText}>Home Delivery</Text>
                </View>
                <View style={styles.medicinePremiumTrustItem}>
                  <Ionicons name="document-text" size={16} color="#DDF8F5" />
                  <Text style={styles.medicinePremiumTrustText}>Prescription Safe</Text>
                </View>
              </View>
            </LinearGradient>

            <View style={styles.medicineSearchBox}>
              <Ionicons name="search-outline" size={24} color="#164F72" />
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search medicines or healthcare products..."
                placeholderTextColor="#7891A3"
                style={styles.medicineSearchInput}
              />
              {search.length > 0 && (
                <TouchableOpacity onPress={() => setSearch('')}>
                  <Ionicons name="close-circle" size={20} color="#8AA1AE" />
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.medicineQuickActionRow}>
              <TouchableOpacity
                style={styles.medicineQuickAction}
                activeOpacity={0.86}
                onPress={() => {
                  const prescriptionItem = medicineItems[0];
                  openMedicineItem(prescriptionItem);
                }}
              >
                <View style={styles.medicineQuickActionIcon}>
                  <Ionicons name="cloud-upload-outline" size={22} color="#087F8C" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.medicineQuickActionTitle}>Upload Prescription</Text>
                  <Text style={styles.medicineQuickActionText}>Send your prescription to Healthome</Text>
                </View>
                <Ionicons name="chevron-forward" size={19} color="#087F8C" />
              </TouchableOpacity>
            </View>

            <View style={styles.medicineInfoBanner}>
              <View style={styles.medicineInfoIcon}>
                <Ionicons name="shield-checkmark-outline" size={23} color="#087F8C" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.medicineInfoTitle}>Safe & Convenient</Text>
                <Text style={styles.medicineInfoText}>
                  Prescription medicines require a valid prescription. Healthome will review the request before fulfilment.
                </Text>
              </View>
            </View>

            <View style={styles.medicineSectionHeaderRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.medicineSectionTitle}>Healthcare Essentials</Text>
                <Text style={styles.medicineSectionSubtext}>
                  {visibleMedicineItems.length} option{visibleMedicineItems.length === 1 ? '' : 's'} available
                </Text>
              </View>
              <View style={styles.medicineSecureBadge}>
                <Ionicons name="lock-closed" size={13} color="#087F8C" />
                <Text style={styles.medicineSecureBadgeText}>Secure</Text>
              </View>
            </View>

            {visibleMedicineItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.88}
                style={styles.medicineCard}
                onPress={() => openMedicineItem(item)}
              >
                <View style={styles.medicineCardIcon}>
                  <Ionicons name={item.icon} size={29} color="#087F8C" />
                </View>
                <View style={styles.medicineCardContent}>
                  <View style={styles.medicineCardTitleRow}>
                    <Text style={styles.medicineCardTitle}>{item.name}</Text>
                    <View style={styles.medicineCardArrow}>
                      <Ionicons name="chevron-forward" size={18} color="#087F8C" />
                    </View>
                  </View>
                  <Text style={styles.medicineCardDescription}>{item.description}</Text>
                  <View style={styles.medicineBadge}>
                    <Ionicons name="medical-outline" size={13} color="#087F8C" />
                    <Text style={styles.medicineBadgeText}>{item.badge}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {visibleMedicineItems.length === 0 && (
              <View style={styles.medicineEmptyCard}>
                <View style={styles.medicineEmptyIcon}>
                  <Ionicons name="search-outline" size={30} color="#087F8C" />
                </View>
                <Text style={styles.medicineEmptyTitle}>No healthcare products found</Text>
                <Text style={styles.medicineEmptyText}>
                  Try another search or select All to view every option.
                </Text>
                <TouchableOpacity
                  style={styles.medicineEmptyButton}
                  onPress={() => {
                    setSearch('');
                    setMedicineCategory('All');
                  }}
                >
                  <Text style={styles.medicineEmptyButtonText}>View All</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>

          <Modal
            visible={medicineOrderVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setMedicineOrderVisible(false)}
          >
            <View style={styles.medicineModalBackdrop}>
              <View style={styles.medicineModalSheet}>
                <View style={styles.medicineModalHandle} />
                <View style={styles.medicineModalHeader}>
                  <View style={styles.medicineModalTitleIcon}>
                    <Ionicons
                      name={selectedMedicineItem?.icon || 'medical-outline'}
                      size={25}
                      color="#087F8C"
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.medicineModalTitle}>
                      {selectedMedicineItem?.name || 'Medicine Request'}
                    </Text>
                    <Text style={styles.medicineModalSubtitle}>
                      Home healthcare delivery request
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.medicineModalClose}
                    onPress={() => setMedicineOrderVisible(false)}
                  >
                    <Ionicons name="close" size={22} color="#31566B" />
                  </TouchableOpacity>
                </View>

                {selectedMedicineItem?.category === 'Prescription' && (
                  <View style={styles.medicinePrescriptionPanel}>
                    <View style={styles.medicinePrescriptionHeader}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.medicinePrescriptionTitle}>Prescription</Text>
                        <Text style={styles.medicinePrescriptionText}>
                          Upload a clear photo of the doctor's prescription.
                        </Text>
                      </View>
                      <Ionicons name="document-text" size={28} color="#087F8C" />
                    </View>

                    {medicinePrescription ? (
                      <View style={styles.medicineUploadedRow}>
                        <View style={styles.medicineUploadedIcon}>
                          <Ionicons name="checkmark" size={22} color="#FFFFFF" />
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.medicineUploadedTitle}>Prescription uploaded</Text>
                          <Text style={styles.medicineUploadedText}>Ready to attach to your request</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMedicinePrescription(null)}>
                          <Ionicons name="trash-outline" size={21} color="#C84646" />
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={styles.medicineUploadButtons}>
                        <TouchableOpacity
                          style={styles.medicineUploadButton}
                          onPress={() => pickMedicinePrescription(false)}
                        >
                          <Ionicons name="images-outline" size={20} color="#087F8C" />
                          <Text style={styles.medicineUploadButtonText}>Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.medicineUploadButton}
                          onPress={() => pickMedicinePrescription(true)}
                        >
                          <Ionicons name="camera-outline" size={20} color="#087F8C" />
                          <Text style={styles.medicineUploadButtonText}>Camera</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                )}

                <View style={styles.medicineQuantityRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.medicineQuantityTitle}>Quantity</Text>
                    <Text style={styles.medicineQuantityText}>Number of packs/items requested</Text>
                  </View>
                  <View style={styles.medicineQuantityControls}>
                    <TouchableOpacity
                      style={styles.medicineQuantityButton}
                      onPress={() =>
                        setMedicineQuantity((value) =>
                          String(Math.max(1, (parseInt(value || '1', 10) || 1) - 1))
                        )
                      }
                    >
                      <Ionicons name="remove" size={18} color="#087F8C" />
                    </TouchableOpacity>
                    <TextInput
                      value={medicineQuantity}
                      onChangeText={(value) => setMedicineQuantity(value.replace(/\D/g, '').slice(0, 2))}
                      keyboardType="number-pad"
                      style={styles.medicineQuantityInput}
                      textAlign="center"
                    />
                    <TouchableOpacity
                      style={styles.medicineQuantityButton}
                      onPress={() =>
                        setMedicineQuantity((value) =>
                          String(Math.min(10, (parseInt(value || '1', 10) || 1) + 1))
                        )
                      }
                    >
                      <Ionicons name="add" size={18} color="#087F8C" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.medicineModalNote}>
                  <Ionicons name="information-circle-outline" size={19} color="#087F8C" />
                  <Text style={styles.medicineModalNoteText}>
                    This prototype records your request and shows it in Notifications. Final medicine availability, prescription validation and payment are handled by Healthome.
                  </Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.88}
                  style={styles.medicineRequestButton}
                  onPress={submitMedicineRequest}
                >
                  <Ionicons name="checkmark-circle" size={21} color="#FFFFFF" />
                  <Text style={styles.medicineRequestButtonText}>Request Medicines</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <BottomNav
            active="Medicine"
            onHome={() => setScreen('home')}
            onServices={() => setScreen('services')}
            onBookings={() => setScreen('bookings')}
            onMedicine={() => setScreen('medicine')}
            onProfile={() => setScreen('profile')}
          />
        </SafeAreaView>
      </View>
    );
  }

  if (screen === 'support') {
    const supportNumber = '8766380995';

    const callNumber = async (number) => {
      try {
        const url = `tel:${number}`;
        const supported = await Linking.canOpenURL(url);
        if (supported) await Linking.openURL(url);
        else Alert.alert('Calling unavailable', `Please call ${number} manually.`);
      } catch (error) {
        Alert.alert('Calling unavailable', `Please call ${number} manually.`);
      }
    };

    const openEmergency = () => {
      Alert.alert(
        'Emergency Assistance',
        'For a life-threatening emergency, contact your local emergency service immediately. In India, you can call 112.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Call Healthome', onPress: () => callNumber(supportNumber) },
          { text: 'Call 112', onPress: () => callNumber('112') },
        ]
      );
    };

    const healthomeAIResponse = (rawQuestion) => {
      const question = rawQuestion.trim().toLowerCase();
      const amount = (value) => `₹${Number(value || 0).toLocaleString('en-IN')}`;

      if (!question) {
        return 'Tell me what you need help with. You can ask about bookings, services, payments, wallet, saved cards, medicine, reports, tracking, or your profile.';
      }

      if (/(hello|hi|hey|namaste|good morning|good evening)/.test(question)) {
        return 'Hi! I’m Healthome Assistant. I can help you understand bookings, home-care services, payments, wallet, medicine, reports, tracking and support. What would you like to do?';
      }

      if (/(emergency|ambulance|urgent|life.?threatening)/.test(question)) {
        return 'If this is a life-threatening emergency, please call 112 immediately. For Healthome coordination, you can also call the Healthome support team at 8766380995.';
      }

      if (/(booking|appointment|book|schedule)/.test(question)) {
        const latest = bookings[0];
        if (latest) {
          return `I can help with bookings. Your latest booking is ${latest.id} for ${latest.service}, with status “${latest.status}”. You can open My Bookings to view its details or Tracking to follow the service.`;
        }
        return 'To make a booking, open Services, select the healthcare service or medical equipment you need, enter the patient and address details, then continue to Payment. You can choose immediate service or schedule it for later.';
      }

      if (/(track|tracking|location|where is|live location)/.test(question)) {
        const latest = bookings[0];
        return latest
          ? `Your latest booking tracking ID is ${latest.id}. Open Tracking and enter this ID to view the tracking page.`
          : 'For service tracking, open Tracking from the Healthome home screen and enter your HLT tracking ID, for example HLT146159.';
      }

      if (/(payment|pay|card|upi|wallet|refund|money|charge)/.test(question)) {
        if (/(wallet|balance)/.test(question)) {
          return `Your current Healthome Wallet balance is ${amount(walletBalance)}. Wallet funds can be used for eligible bookings. Open Payment Methods to add money or manage your wallet.`;
        }
        if (/(card|saved card)/.test(question)) {
          return 'You can save a credit or debit card in Payment Methods for faster future payments. Your card details should be handled through your secure payment provider in a production backend.';
        }
        if (/(refund)/.test(question)) {
          return 'For a refund or payment amount issue, keep your booking ID and payment reference ready. I can guide you through the support process, or you can request a Healthome support agent.';
        }
        return 'Payment Methods in Healthome lets you manage your Wallet and saved cards. During a booking, select the available payment method and confirm the payment.';
      }

      if (/(medicine|medication|tablet|drug|prescription)/.test(question)) {
        return 'You can use the Medicine section to browse medicine-related options and upload a prescription where required. For medicine-specific clinical advice, please follow your doctor’s prescription or speak with a qualified healthcare professional.';
      }

      if (/(report|document|prescription|upload)/.test(question)) {
        return 'You can manage reports and prescriptions from the Reports section. For doctor consultation, Healthome can also collect a prescription before scheduling the consultation.';
      }

      if (/(service|nurse|caregiver|physio|physiotherapy|elder|diabetes|paralysis|cancer|critical)/.test(question)) {
        const matches = services
          .filter((item) => item.name.toLowerCase().includes(question) || question.split(/\s+/).some((word) => word.length > 3 && item.name.toLowerCase().includes(word)))
          .slice(0, 3);
        if (matches.length) {
          return `I found these Healthome services that may match your question: ${matches.map((item) => `${item.name} (${amount(item.price)} / ${item.duration})`).join(', ')}. Open Services to see the full details.`;
        }
        return 'Healthome offers home-care services, on-call procedures and medical equipment. Tell me the type of care you need, such as elder care, physiotherapy, diabetic care or critical care, and I can guide you.';
      }

      if (/(call|support|agent|human|representative|customer care)/.test(question)) {
        return 'I can continue helping here, or you can request a Healthome support agent. You can also call Healthome support at 8766380995.';
      }

      if (/(profile|account|phone|address)/.test(question)) {
        return 'You can manage your personal details, saved addresses, payment methods and account settings from your Profile section.';
      }

      return 'I can help with Healthome bookings, services, payments, wallet, saved cards, medicine, reports, tracking and support. Try asking something like “How do I book a nurse?”, “Where is my booking?”, or “How do I use my wallet?”';
    };

    const sendHealthomeAIMessage = () => {
      const question = supportChatInput.trim();
      if (!question && !supportChatAttachment) return;

      const userText = question || 'I attached a photo for help.';
      addSupportChatMessage({ sender: 'user', text: userText });
      setSupportChatInput('');

      const reply = supportChatAttachment
        ? 'I received your attachment. I can help explain the Healthome process, but I cannot diagnose a medical condition from an image. Tell me what you want help with, or request a support agent.'
        : healthomeAIResponse(question);

      setTimeout(() => {
        addSupportChatMessage({ sender: 'bot', text: reply });
      }, 250);

      setSupportChatStep('followup');
    };

    const requestSupportAgent = () => {
      setSupportAgentRequested(true);
      addSupportChatMessage({
        sender: 'bot',
        text: 'Your request for a Healthome support agent has been recorded in this prototype. Please call 8766380995 for direct assistance while the live-agent backend is connected.',
      });
    };

    return (
      <View style={styles.supportPageRoot}>
        <StatusBar barStyle="light-content" backgroundColor="#075A70" />

        <LinearGradient
          colors={['#075A70', '#087F8C', '#DFF6F5', '#F5FBFC']}
          locations={[0, 0.27, 0.60, 1]}
          style={styles.supportPageBackground}
        >
          <SafeAreaView style={styles.supportSafeArea}>
            <View style={styles.supportTopHeader}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setScreen('profile')}
                style={styles.supportBackButton}
              >
                <Ionicons name="arrow-back" size={27} color="#FFFFFF" />
              </TouchableOpacity>

              <View style={styles.supportHeaderCenter}>
                <View style={styles.supportHeaderPill}>
                  <View style={styles.supportOnlineDot} />
                  <Text style={styles.supportHeaderPillText}>HEALTHOME CARE</Text>
                </View>
                <Text style={styles.supportPageTitle}>Help Center</Text>
                <Text style={styles.supportPageSubtitle}>Support that understands your Healthome journey</Text>
              </View>

              <View style={{ width: 48 }} />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.supportPageContent}
            >
              <View style={styles.supportAIHero}>
                <View style={styles.supportAIHeroGlow} />
                <View style={styles.supportAIIconLarge}>
                  <Ionicons name="sparkles" size={38} color="#087F8C" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.supportAIKicker}>HEALTHOME AI ASSISTANT</Text>
                  <Text style={styles.supportAIHeroTitle}>How can we help today?</Text>
                  <Text style={styles.supportAIHeroText}>
                    Ask naturally about bookings, services, payments, wallet, medicine, reports or tracking.
                  </Text>
                  <View style={styles.supportAIStatusRow}>
                    <View style={styles.supportAIStatusDot} />
                    <Text style={styles.supportAIStatusText}>Ready to help</Text>
                    <View style={styles.supportAIStatusDivider} />
                    <Ionicons name="shield-checkmark-outline" size={15} color="#087F8C" />
                    <Text style={styles.supportAIStatusText}>Healthome support</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.supportSectionTitle}>Quick Help</Text>

              <View style={styles.supportQuickGrid}>
                {[
                  ['calendar-outline', 'My Booking', 'booking'],
                  ['card-outline', 'Payment', 'payment'],
                  ['medkit-outline', 'Services', 'service'],
                  ['location-outline', 'Tracking', 'tracking'],
                ].map(([icon, title, prompt]) => (
                  <TouchableOpacity
                    key={prompt}
                    activeOpacity={0.85}
                    style={styles.supportQuickCard}
                    onPress={() => {
                      setSupportChatOpen(true);
                      setTimeout(() => {
                        addSupportChatMessage({ sender: 'user', text: title });
                        addSupportChatMessage({ sender: 'bot', text: healthomeAIResponse(prompt) });
                      }, 120);
                    }}
                  >
                    <View style={styles.supportQuickIcon}>
                      <Ionicons name={icon} size={22} color="#087F8C" />
                    </View>
                    <Text style={styles.supportQuickTitle}>{title}</Text>
                    <Ionicons name="arrow-forward-circle" size={20} color="#087F8C" />
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.supportSectionTitle}>Talk to Healthome</Text>

              <TouchableOpacity
                activeOpacity={0.88}
                style={styles.supportContactCard}
                onPress={() => callNumber(supportNumber)}
              >
                <View style={styles.supportContactIcon}>
                  <Ionicons name="call" size={25} color="#087F8C" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.supportContactTitle}>Call Healthome Support</Text>
                  <Text style={styles.supportContactNumber}>{supportNumber}</Text>
                  <Text style={styles.supportContactSubtext}>Direct support for bookings and coordination</Text>
                </View>
                <View style={styles.supportCallBadge}>
                  <Ionicons name="call-outline" size={20} color="#FFFFFF" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.88}
                style={styles.supportChatLauncher}
                onPress={() => setSupportChatOpen(true)}
              >
                <View style={styles.supportChatLauncherIcon}>
                  <Ionicons name="sparkles" size={26} color="#FFFFFF" />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.supportAINameRow}>
                    <Text style={styles.supportChatLauncherTitle}>Chat with Healthome AI</Text>
                    <View style={styles.supportAIBadge}><Text style={styles.supportAIBadgeText}>AI</Text></View>
                  </View>
                  <Text style={styles.supportChatLauncherText}>
                    Ask a question in your own words. The assistant uses Healthome-specific guidance and can hand you to support.
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={25} color="#087F8C" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.88}
                style={styles.supportEmergencyCard}
                onPress={openEmergency}
              >
                <View style={styles.supportEmergencyIcon}>
                  <Ionicons name="warning" size={28} color="#FFFFFF" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.supportEmergencyTitle}>Emergency Assistance</Text>
                  <Text style={styles.supportEmergencyText}>For life-threatening emergencies, call 112.</Text>
                </View>
                <Ionicons name="chevron-forward" size={25} color="#D73535" />
              </TouchableOpacity>

              <View style={styles.supportBottomInfo}>
                <Ionicons name="shield-checkmark-outline" size={23} color="#087F8C" />
                <Text style={styles.supportBottomInfoText}>
                  Healthome AI provides app and service guidance. It does not replace emergency services or professional medical diagnosis.
                </Text>
              </View>

              <Modal
                visible={supportChatOpen}
                animationType="slide"
                transparent={false}
                onRequestClose={() => setSupportChatOpen(false)}
              >
                <SafeAreaView style={styles.supportChatModalRoot}>
                  <StatusBar barStyle="light-content" backgroundColor="#075A70" translucent={false} />

                  <LinearGradient colors={['#075A70', '#087F8C']} style={styles.supportChatModalHeader}>
                    <View style={styles.supportChatModalHeaderSafe}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setSupportChatOpen(false)}
                        style={styles.supportChatCloseButton}
                      >
                        <Ionicons name="arrow-back" size={25} color="#FFFFFF" />
                      </TouchableOpacity>

                      <View style={styles.supportChatHeaderIcon}>
                        <Ionicons name="sparkles" size={23} color="#087F8C" />
                      </View>

                      <View style={{ flex: 1 }}>
                        <Text style={styles.supportChatModalTitle}>Healthome AI</Text>
                        <View style={styles.supportChatOnlineRow}>
                          <View style={styles.supportOnlineDot} />
                          <Text style={styles.supportChatModalSubtitle}>Healthome-trained assistant</Text>
                        </View>
                      </View>

                      <TouchableOpacity
                        activeOpacity={0.85}
                        style={styles.supportEndChatButton}
                        onPress={endSupportChat}
                      >
                        <Ionicons name="refresh-outline" size={17} color="#FFFFFF" />
                        <Text style={styles.supportEndChatButtonText}>Reset</Text>
                      </TouchableOpacity>
                    </View>
                  </LinearGradient>

                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                  >
                    <ScrollView
                      ref={supportChatScrollRef}
                      contentContainerStyle={styles.supportChatMessages}
                      showsVerticalScrollIndicator={false}
                      keyboardShouldPersistTaps="handled"
                      onContentSizeChange={() =>
                        supportChatScrollRef.current?.scrollToEnd({ animated: true })
                      }
                    >
                      <View style={styles.supportChatIntroCard}>
                        <Ionicons name="sparkles-outline" size={19} color="#087F8C" />
                        <Text style={styles.supportChatIntroText}>
                          I can answer common Healthome questions and guide you through the app. Ask me naturally — you do not need to choose a category.
                        </Text>
                      </View>

                      {supportChatMessages.map((message) => (
                        <View
                          key={message.id}
                          style={[
                            styles.supportChatMessageRow,
                            message.sender === 'user' ? styles.supportChatUserRow : styles.supportChatBotRow,
                          ]}
                        >
                          {message.sender === 'bot' && (
                            <View style={styles.supportChatBotAvatar}>
                              <Ionicons name="sparkles" size={16} color="#087F8C" />
                            </View>
                          )}
                          <View
                            style={[
                              styles.supportChatBubble,
                              message.sender === 'user' ? styles.supportChatUserBubble : styles.supportChatBotBubble,
                            ]}
                          >
                            <Text
                              style={[
                                styles.supportChatBubbleText,
                                message.sender === 'user' ? styles.supportChatUserBubbleText : styles.supportChatBotBubbleText,
                              ]}
                            >
                              {message.text}
                            </Text>
                          </View>
                        </View>
                      ))}

                      <Text style={styles.supportChatSuggestionTitle}>Try asking</Text>
                      <View style={styles.supportChatSuggestionRow}>
                        {[
                          'How do I book a service?',
                          'What is my wallet balance?',
                          'Where is my booking?',
                          'How do I save a card?',
                        ].map((prompt) => (
                          <TouchableOpacity
                            key={prompt}
                            activeOpacity={0.84}
                            style={styles.supportChatSuggestion}
                            onPress={() => {
                              addSupportChatMessage({ sender: 'user', text: prompt });
                              setTimeout(() => addSupportChatMessage({ sender: 'bot', text: healthomeAIResponse(prompt) }), 180);
                            }}
                          >
                            <Text style={styles.supportChatSuggestionText}>{prompt}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>

                      <TouchableOpacity
                        activeOpacity={0.86}
                        style={styles.supportChatAgentCard}
                        onPress={requestSupportAgent}
                      >
                        <View style={styles.supportChatAgentIcon}>
                          <Ionicons name="person-add-outline" size={22} color="#087F8C" />
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.supportChatAgentTitle}>Need a human?</Text>
                          <Text style={styles.supportChatAgentText}>
                            Request Healthome support assistance.
                          </Text>
                        </View>
                        <View style={styles.supportChatAgentButton}>
                          <Text style={styles.supportChatAgentButtonText}>Agent</Text>
                        </View>
                      </TouchableOpacity>
                    </ScrollView>

                    {supportChatAttachment && (
                      <View style={styles.supportAttachmentPreview}>
                        <Ionicons name="image-outline" size={19} color="#087F8C" />
                        <Text style={styles.supportAttachmentText}>{supportChatAttachment.name || 'Photo attached'}</Text>
                        <TouchableOpacity
                          style={styles.supportAttachmentRemove}
                          onPress={() => setSupportChatAttachment(null)}
                        >
                          <Ionicons name="close" size={18} color="#567482" />
                        </TouchableOpacity>
                      </View>
                    )}

                    <View style={styles.supportChatInputArea}>
                      <TouchableOpacity
                        activeOpacity={0.85}
                        style={styles.supportChatMediaButton}
                        onPress={chooseSupportPhoto}
                      >
                        <Ionicons name="image-outline" size={20} color="#087F8C" />
                      </TouchableOpacity>

                      <TextInput
                        value={supportChatInput}
                        onChangeText={setSupportChatInput}
                        placeholder="Ask Healthome AI anything..."
                        placeholderTextColor="#8EA4AF"
                        multiline
                        style={styles.supportChatInput}
                        returnKeyType="send"
                      />

                      <TouchableOpacity
                        activeOpacity={0.85}
                        style={styles.supportChatSendButton}
                        onPress={sendHealthomeAIMessage}
                      >
                        <Ionicons name="arrow-up" size={21} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>
                  </KeyboardAvoidingView>
                </SafeAreaView>
              </Modal>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  /* =========================================================
     PRIVACY & SECURITY
  ========================================================= */

  const saveGstNumber = async () => {
    const cleanGst = gstNumber.trim().toUpperCase();
    if (!cleanGst) {
      Alert.alert('GST Number', 'Please enter your GST number.');
      return;
    }
    if (!/^[0-9A-Z]{15}$/.test(cleanGst)) {
      Alert.alert('Invalid GST Number', 'Please enter a valid 15-character GST number.');
      return;
    }
    setGstNumber(cleanGst);
    try {
      await setItem('@healthome_gst_number', cleanGst);
      Alert.alert('GST Number Saved', 'Your GST number has been saved successfully.');
    } catch (error) {
      Alert.alert('GST Number', 'Unable to save the GST number on this device. Please try again.');
    }
  };

  const openFamilyMemberEditor = (member = null) => {
    if (member) {
      setEditingFamilyMemberId(member.id);
      setFamilyMemberName(member.name || '');
      setFamilyMemberRelation(member.relation || '');
      setFamilyMemberPhone(member.phone || '');
    } else {
      setEditingFamilyMemberId(null);
      setFamilyMemberName('');
      setFamilyMemberRelation('');
      setFamilyMemberPhone('');
    }
    setFamilyMemberModalVisible(true);
  };

  const closeFamilyMemberEditor = () => {
    setFamilyMemberModalVisible(false);
    setEditingFamilyMemberId(null);
    setFamilyMemberName('');
    setFamilyMemberRelation('');
    setFamilyMemberPhone('');
    Keyboard.dismiss();
  };

  const deleteFamilyMember = (member) => {
    Alert.alert(
      'Delete Family Member',
      `Are you sure you want to remove ${member.name} from your family members?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setFamilyMembers((previous) =>
              previous.filter((item) => item.id !== member.id)
            );

            if (editingFamilyMemberId === member.id) {
              closeFamilyMemberEditor();
            }
          },
        },
      ]
    );
  };

  const saveFamilyMember = () => {
    const name = familyMemberName.trim();
    const relation = familyMemberRelation.trim();
    const memberPhone = familyMemberPhone.replace(/\D/g, '');

    if (!name || !relation) {
      Alert.alert('Complete Details', 'Please enter the family member name and relationship.');
      return;
    }

    if (memberPhone && memberPhone.length !== 10) {
      Alert.alert('Invalid Mobile Number', 'Please enter a valid 10-digit mobile number or leave it blank.');
      return;
    }

    if (editingFamilyMemberId) {
      setFamilyMembers((previous) =>
        previous.map((member) =>
          member.id === editingFamilyMemberId
            ? { ...member, name, relation, phone: memberPhone }
            : member
        )
      );
    } else {
      setFamilyMembers((previous) => [
        ...previous,
        {
          id: `family-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          name,
          relation,
          phone: memberPhone,
        },
      ]);
    }

    closeFamilyMemberEditor();
  };

  if (screen === 'privacySecurity') {
    return (
      <View style={styles.privacyPageRoot}>
        <StatusBar barStyle="light-content" backgroundColor="#075A70" />
        <LinearGradient
          colors={['#075A70', '#087F8C', '#DFF7F6', '#F6FBFC']}
          locations={[0, 0.28, 0.62, 1]}
          style={styles.privacyPageBackground}
        >
          <SafeAreaView style={styles.privacySafeArea}>
            <View style={styles.privacyTopHeader}>
              <TouchableOpacity
                activeOpacity={0.82}
                onPress={() => setScreen('profile')}
                style={styles.privacyBackButton}
              >
                <Ionicons name="arrow-back" size={27} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={styles.privacyHeaderCenter}>
                <Text style={styles.privacyPageTitle}>Privacy & Security</Text>
                <Text style={styles.privacyPageSubtitle}>Your data. Your control. Your trust.</Text>
              </View>
              <View style={{ width: 48 }} />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.privacyPageContent}
            >
              <View style={styles.privacySecurityHero}>
                <LinearGradient
                  colors={['#E7FBF9', '#FFFFFF']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.privacySecurityHeroInner}
                >
                  <View style={styles.privacySecurityHeroIcon}>
                    <Ionicons name="shield-checkmark" size={39} color="#087F8C" />
                  </View>
                  <Text style={styles.privacySecurityHeroTitle}>Protected with Healthome</Text>
                  <Text style={styles.privacySecurityHeroText}>
                    Review how your account, contact details and healthcare information are handled inside this app.
                  </Text>
                  <View style={styles.privacySecurityTrustRow}>
                    <View style={styles.privacySecurityTrustItem}>
                      <Ionicons name="lock-closed" size={16} color="#087F8C" />
                      <Text style={styles.privacySecurityTrustText}>Secure</Text>
                    </View>
                    <View style={styles.privacySecurityTrustItem}>
                      <Ionicons name="shield-checkmark" size={16} color="#087F8C" />
                      <Text style={styles.privacySecurityTrustText}>Private</Text>
                    </View>
                    <View style={styles.privacySecurityTrustItem}>
                      <Ionicons name="checkmark-circle" size={16} color="#087F8C" />
                      <Text style={styles.privacySecurityTrustText}>Verified</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>

              <Text style={styles.privacySecuritySectionTitle}>Account Protection</Text>
              <View style={styles.privacySecurityCard}>
                <View style={styles.privacySecurityRow}>
                  <View style={styles.privacySecurityIconBox}>
                    <Ionicons name="shield-checkmark-outline" size={23} color="#087F8C" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.privacySecurityRowTitle}>OTP Account Verification</Text>
                    <Text style={styles.privacySecurityRowText}>Your account is verified through your mobile number and OTP.</Text>
                  </View>
                  <View style={styles.privacySecurityStatus}>
                    <Ionicons name="checkmark" size={15} color="#FFFFFF" />
                  </View>
                </View>

                <View style={styles.privacySecurityDivider} />

                <View style={styles.privacySecurityRow}>
                  <View style={[styles.privacySecurityIconBox, { backgroundColor: '#EAF3FF' }]}>
                    <Ionicons name="phone-portrait-outline" size={23} color="#2879C7" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.privacySecurityRowTitle}>Registered Mobile</Text>
                    <Text style={styles.privacySecurityRowText}>
                      {phone ? `${countryCode} ${phone}` : 'No mobile number available'}
                    </Text>
                  </View>
                </View>
              </View>

              <Text style={styles.privacySecuritySectionTitle}>Billing & Family</Text>

              <View style={styles.privacySecurityFormCard}>
                <View style={styles.privacySecurityFormHeader}>
                  <View style={[styles.privacySecurityIconBox, { backgroundColor: '#EAF3FF' }]}>
                    <Ionicons name="business-outline" size={23} color="#2879C7" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.privacySecurityRowTitle}>GST Number</Text>
                    <Text style={styles.privacySecurityRowText}>Add your 15-character GSTIN for billing details.</Text>
                  </View>
                </View>

                <TextInput
                  value={gstNumber}
                  onChangeText={(value) =>
                    setGstNumber(
                      value
                        .toUpperCase()
                        .replace(/[^0-9A-Z]/g, '')
                        .slice(0, 15)
                    )
                  }
                  placeholder="Enter 15-character GSTIN"
                  placeholderTextColor="#9AAEBA"
                  autoCapitalize="characters"
                  autoCorrect={false}
                  maxLength={15}
                  style={styles.privacySecurityInput}
                />
                <Text style={{ marginTop: 6, color: gstNumber.length === 15 ? '#0A8F7A' : '#8A9AA5', fontSize: 12, fontWeight: '700' }}>
                  {gstNumber.length}/15 characters {gstNumber.length === 15 ? '• Ready to save' : ''}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.86}
                  style={styles.privacySecuritySaveButton}
                  onPress={saveGstNumber}
                >
                  <Ionicons name="checkmark-circle-outline" size={19} color="#FFFFFF" />
                  <Text style={styles.privacySecuritySaveButtonText}>Save GST Number</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.privacySecurityFamilyCard}>
                <View style={styles.privacySecurityFamilyHeader}>
                  <View style={[styles.privacySecurityIconBox, { backgroundColor: '#E8F8F7' }]}>
                    <Ionicons name="people-outline" size={23} color="#087F8C" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.privacySecurityRowTitle}>Family Members</Text>
                    <Text style={styles.privacySecurityRowText}>Add family members for easier booking and care coordination.</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.privacySecurityAddButton}
                    onPress={() => openFamilyMemberEditor()}
                  >
                    <Ionicons name="add" size={22} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>

                {familyMembers.length === 0 ? (
                  <View style={styles.privacySecurityEmptyFamily}>
                    <Ionicons name="person-add-outline" size={22} color="#7B94A3" />
                    <Text style={styles.privacySecurityEmptyFamilyText}>No family members added yet</Text>
                  </View>
                ) : (
                  familyMembers.map((member) => (
                    <View key={member.id} style={styles.privacySecurityFamilyMemberRow}>
                      <View style={styles.privacySecurityFamilyAvatar}>
                        <Ionicons name="person" size={20} color="#087F8C" />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.privacySecurityRowTitle}>{member.name}</Text>
                        <Text style={styles.privacySecurityRowText}>
                          {member.relation}{member.phone ? ` • ${member.phone}` : ''}
                        </Text>
                      </View>
                      <View style={styles.familyMemberActionRow}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={styles.familyMemberEditButton}
                          onPress={() => openFamilyMemberEditor(member)}
                        >
                          <Ionicons name="create-outline" size={18} color="#087F8C" />
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={styles.familyMemberDeleteButton}
                          onPress={() => deleteFamilyMember(member)}
                        >
                          <Ionicons name="trash-outline" size={18} color="#D93434" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))
                )}
              </View>


              <Modal
                visible={familyMemberModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setFamilyMemberModalVisible(false)}
              >
                <View style={styles.familyMemberModalBackdrop}>
                  <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.familyMemberKeyboard}
                  >
                    <View style={styles.familyMemberModalCard}>
                      <View style={styles.familyMemberModalHeader}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.familyMemberModalTitle}>
                            {editingFamilyMemberId ? 'Edit Family Member' : 'Add Family Member'}
                          </Text>
                          <Text style={styles.familyMemberModalSubtitle}>
                            {editingFamilyMemberId ? 'Update the saved family member details.' : 'Save a family member for faster bookings.'}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.familyMemberModalClose}
                          onPress={closeFamilyMemberEditor}
                        >
                          <Ionicons name="close" size={22} color="#173E56" />
                        </TouchableOpacity>
                      </View>

                      <ScrollView
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 4 }}
                      >

                    <TextInput
                      value={familyMemberName}
                      onChangeText={setFamilyMemberName}
                      placeholder="Full name"
                      placeholderTextColor="#9AAEBA"
                      style={styles.familyMemberInput}
                    />
                    <TextInput
                      value={familyMemberRelation}
                      onChangeText={setFamilyMemberRelation}
                      placeholder="Relationship (e.g. Mother)"
                      placeholderTextColor="#9AAEBA"
                      style={styles.familyMemberInput}
                    />
                    <TextInput
                      value={familyMemberPhone}
                      onChangeText={(value) => setFamilyMemberPhone(value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Mobile number (optional)"
                      placeholderTextColor="#9AAEBA"
                      keyboardType="phone-pad"
                      style={styles.familyMemberInput}
                    />

                    <TouchableOpacity
                      activeOpacity={0.86}
                      style={styles.familyMemberSaveButton}
                      onPress={saveFamilyMember}
                    >
                      <Ionicons
                        name={editingFamilyMemberId ? 'checkmark-circle-outline' : 'person-add-outline'}
                        size={20}
                        color="#FFFFFF"
                      />
                      <Text style={styles.familyMemberSaveText}>
                        {editingFamilyMemberId ? 'Save Changes' : 'Add Family Member'}
                      </Text>
                    </TouchableOpacity>
                      </ScrollView>
                    </View>
                  </KeyboardAvoidingView>
                </View>
              </Modal>
              <View style={styles.privacySecurityNotice}>
                <Ionicons name="lock-closed-outline" size={21} color="#087F8C" />
                <Text style={styles.privacySecurityNoticeText}>
                  Never share your OTP, card PIN, CVV or banking password with anyone, including support staff.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.privacySecurityBackProfile}
                activeOpacity={0.86}
                onPress={() => setScreen('profile')}
              >
                <Ionicons name="arrow-back" size={19} color="#FFFFFF" />
                <Text style={styles.privacySecurityBackText}>Back to Profile</Text>
              </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  return null;
}
