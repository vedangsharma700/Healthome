import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from '../theme/styles';

const SERVICE_MEANING_ICONS = {
  '1': { primary: 'brain-outline', secondary: 'pulse-outline', secondaryColor: '#4F86C6' },
  '2': { primary: 'bandage-outline', secondary: 'medkit-outline', secondaryColor: '#E53935' },
  '3': { primary: 'bed-outline', secondary: 'pulse-outline', secondaryColor: '#1870C9' },
  '4': { primary: 'happy-outline', secondary: 'heart-outline', secondaryColor: '#E91E63' },
  '5': { primary: 'speedometer-outline', secondary: 'water-outline', secondaryColor: '#008B70' },
  '6': { primary: 'accessibility-outline', secondary: 'medkit-outline', secondaryColor: '#1462A8' },
  '7': { primary: 'people-outline', secondary: 'heart-outline', secondaryColor: '#008F69' },
  '8': { primary: 'brain-outline', secondary: 'heart-outline', secondaryColor: '#E56825' },
  '9': { primary: 'bed-outline', secondary: 'heart-outline', secondaryColor: '#D81B60' },
  '10': { primary: 'ribbon-outline', secondary: 'heart-outline', secondaryColor: '#D81B60' },
  '11': { primary: 'fitness-outline', secondary: 'body-outline', secondaryColor: '#1465B5' },
  '12': { primary: 'git-network-outline', secondary: 'pulse-outline', secondaryColor: '#C2185B' },
  '13': { primary: 'heart-outline', secondary: 'pulse-outline', secondaryColor: '#E53935' },
  '14': { primary: 'walk-outline', secondary: 'pulse-outline', secondaryColor: '#E64A19' },
}

function HeroTrust({ icon, text }) {
  return (
    <View style={styles.heroTrust}>
      <Ionicons name={icon} size={22} color="#0B587B" />
      <Text style={styles.heroTrustText}>{text}</Text>
    </View>
  );
}

function QuickService({ icon, title, bg, color, onPress }) {
  return (
    <TouchableOpacity
      style={styles.quickService}
      activeOpacity={0.78}
      onPress={onPress}
    >
      <View style={[styles.quickServiceIcon, { backgroundColor: bg }]}>
        <Ionicons name={icon} size={26} color={color} />
      </View>
      <Text style={styles.quickServiceText}>{title}</Text>
    </TouchableOpacity>
  );
}

function ExploreCard({ icon, iconBg, iconColor, title, description, onPress }) {
  return (
    <TouchableOpacity
      style={styles.exploreCard}
      activeOpacity={0.88}
      onPress={onPress}
    >
      <View style={[styles.exploreIcon, { backgroundColor: iconBg }]}>
        <View style={[styles.exploreIconInner, { backgroundColor: '#FFFFFF' }]}>
          <Ionicons name={icon} size={29} color={iconColor} />
        </View>
      </View>

      <View style={styles.exploreCardInfo}>
        <Text style={styles.exploreCardTitle} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.exploreCardDescription} numberOfLines={2}>
          {description.replace('\n', ' ')}
        </Text>
      </View>

      <View style={styles.exploreArrow}>
        <Ionicons name="chevron-forward" size={18} color="#087F8C" />
      </View>
    </TouchableOpacity>
  );
}

function FamilyTrust({ icon, text }) {
  return (
    <View style={styles.familyTrust}>
      <Ionicons name={icon} size={22} color="#FFFFFF" />
      <Text style={styles.familyTrustText}>{text}</Text>
    </View>
  );
}


function PremiumTrust({ icon, text }) {
  return (
    <View style={styles.premiumTrustItem}>
      <Ionicons name={icon} size={18} color="#087F8C" />
      <Text style={styles.premiumTrustText}>{text}</Text>
    </View>
  );
}

function PremiumShortcut({
  title,
  subtitle,
  icon,
  iconColor,
  bg,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={styles.premiumShortcutCard}
      onPress={onPress}
    >
      <View style={[styles.premiumShortcutIcon, { backgroundColor: bg }]}>
        <View style={styles.premiumShortcutIconInner}>
          <Ionicons name={icon} size={27} color={iconColor} />
        </View>
      </View>
      <View style={styles.premiumShortcutText}>
        <Text style={styles.premiumShortcutTitle}>{title}</Text>
        <Text style={styles.premiumShortcutSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.premiumShortcutArrow}>
        <Ionicons name="chevron-forward" size={16} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
}

function PremiumHomeSection({
  title,
  subtitle,
  icon,
  headerColors,
  services,
  onViewAll,
  onPress,
  equipment = false,
}) {
  return (
    <View style={styles.premiumCategoryCard}>
      <LinearGradient
        colors={headerColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.premiumCategoryHeader}
      >
        <View style={styles.premiumCategoryHeaderIcon}>
          <Ionicons name={icon} size={27} color="#FFFFFF" />
        </View>
        <View style={styles.premiumCategoryHeaderText}>
          <Text style={styles.premiumCategoryTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.premiumCategorySubtitle} numberOfLines={2}>
            {subtitle}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onViewAll}
          style={styles.premiumCategoryArrow}
          activeOpacity={0.8}
        >
          <Ionicons name="chevron-forward" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.premiumCategoryGrid}>
        {services.length === 0 ? (
          <View style={styles.premiumCategoryEmpty}>
            <Ionicons name="search-outline" size={24} color="#8CA4AF" />
            <Text style={styles.premiumCategoryEmptyText}>
              No matching {equipment ? 'equipment' : 'services'} found.
            </Text>
          </View>
        ) : (
          services.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.86}
              style={styles.premiumCategoryItem}
              onPress={() => onPress(item)}
            >
              <View
                style={[
                  styles.premiumCategoryItemIcon,
                  {
                    backgroundColor: item.color || '#EAF7F8',
                  },
                ]}
              >
                <MeaningfulServiceIcon
                  service={item}
                  size={27}
                  color={item.iconColor || '#087F8C'}
                  compact
                />
              </View>
              <Text style={styles.premiumCategoryItemText} numberOfLines={2}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  );
}

function PremiumFeatureCard({
  title,
  subtitle,
  description,
  icon,
  iconColor,
  background,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={onPress}
      style={[styles.premiumFeatureCard, { backgroundColor: background }]}
    >
      <View style={styles.premiumFeatureIcon}>
        <Ionicons name={icon} size={30} color={iconColor} />
      </View>
      <View style={styles.premiumFeatureContent}>
        <Text style={[styles.premiumFeatureTitle, { color: iconColor }]}>
          {title}
        </Text>
        <Text style={styles.premiumFeatureSubtitle}>{subtitle}</Text>
        <Text style={styles.premiumFeatureDescription} numberOfLines={2}>
          {description}
        </Text>
      </View>
      <View style={[styles.premiumFeatureArrow, { borderColor: iconColor }]}>
        <Ionicons name="chevron-forward" size={20} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
}

function PremiumEmergencyCard({ onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={onPress}
      style={styles.premiumEmergencyCard}
    >
      <View style={styles.premiumEmergencyHeader}>
        <View style={styles.premiumEmergencyIcon}>
          <Ionicons name="alert" size={29} color="#C92331" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.premiumEmergencyTitle}>Emergency Care</Text>
          <Text style={styles.premiumEmergencySubtitle}>
            24×7 support when you need it most
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={25} color="#C92331" />
      </View>

      <View style={styles.emergency247}>
        <Text style={styles.emergency247Number}>24/7</Text>
        <Text style={styles.emergency247Text}>Emergency Support</Text>
      </View>

      <TouchableOpacity style={styles.emergencyAmbulanceButton} activeOpacity={0.88} onPress={onPress}>
        <Ionicons name="call" size={21} color="#FFFFFF" />
        <Text style={styles.emergencyAmbulanceText}>Call Ambulance • 112</Text>
      </TouchableOpacity>

      <View style={styles.emergencyTrustRow}>
        <View style={styles.emergencyTrustItem}>
          <View style={styles.emergencyTrustIcon}>
            <Ionicons name="car" size={24} color="#173E73" />
          </View>
          <Text style={styles.emergencyTrustText}>Quick Response</Text>
        </View>
        <View style={styles.emergencyTrustItem}>
          <View style={styles.emergencyTrustIcon}>
            <Ionicons name="heart" size={24} color="#173E73" />
          </View>
          <Text style={styles.emergencyTrustText}>Trained Staff</Text>
        </View>
        <View style={styles.emergencyTrustItem}>
          <View style={styles.emergencyTrustIcon}>
            <Ionicons name="headset" size={24} color="#173E73" />
          </View>
          <Text style={styles.emergencyTrustText}>On Call Support</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Header({ onMenu, onNotifications, showNotifications }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerMenuButton}
        activeOpacity={0.75}
        onPress={onMenu}
      >
        <Ionicons name="menu-outline" size={27} color="#164F72" />
      </TouchableOpacity>

      <View style={styles.headerCenterTitle}>
        <Text style={styles.headerCenterTitleText}>Healthome</Text>
        <Text style={styles.headerCenterSubtitle}>Care at Your Home</Text>
      </View>

      <View style={styles.headerActions}>
        <TouchableOpacity
          style={styles.whatsappButton}
          activeOpacity={0.8}
          onPress={async () => {
            const supportNumber = '8766380995';
            const message = encodeURIComponent(
              'Hello Healthome Support, I need help with my healthcare request.'
            );
            const whatsappUrl = `https://wa.me/91${supportNumber}?text=${message}`;

            try {
              await Linking.openURL(whatsappUrl);
            } catch (error) {
              Alert.alert(
                'WhatsApp Unavailable',
                'WhatsApp could not be opened on this device. Please install WhatsApp or contact Healthome Support by phone.'
              );
            }
          }}
        >
          <Ionicons name="logo-whatsapp" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerNotification}
          activeOpacity={0.8}
          onPress={onNotifications}
          accessibilityLabel="Notifications"
        >
          <Ionicons name="notifications-outline" size={25} color="#087F8C" />
          {showNotifications ? <View style={styles.notificationDot} /> : null}
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ActionCard({
  icon,
  title,
  subtitle,
  description,
  iconColor,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.actionCard}
      onPress={onPress}
    >
      <View
        style={[
          styles.actionIcon,
          { backgroundColor: iconColor + '18' },
        ]}
      >
        <Ionicons
          name={icon}
          size={30}
          color={iconColor}
        />
      </View>

      <Text style={styles.actionTitle}>
        {title}
      </Text>

      <Text style={styles.actionSubtitle}>
        {subtitle}
      </Text>

      <Text style={styles.actionDescription}>
        {description}
      </Text>

      <Ionicons
        name="chevron-forward"
        size={22}
        color="#0D3D5A"
        style={styles.actionArrow}
      />
    </TouchableOpacity>
  );
}

function SectionHeader({ title, onPress }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionTitleRow}>
        <View style={styles.sectionBar} />

        <Text style={styles.sectionTitle}>
          {title}
        </Text>
      </View>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.viewAll}>
          View All ›
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeServiceSection({ title, subtitle, services, onViewAll, onPress, emergency = false }) {
  return (
    <View style={styles.homeServiceSection}>
      <View style={styles.homeServiceSectionHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.homeServiceSectionTitle}>{title}</Text>
          <Text style={styles.homeServiceSectionSubtitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onViewAll}
          style={styles.homeServiceViewAll}
        >
          <Text style={[styles.homeServiceViewAllText, emergency && styles.homeServiceEmergencyText]}>
            View All
          </Text>
          <Ionicons
            name="chevron-forward"
            size={16}
            color={emergency ? '#E53935' : '#087F8C'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.homeServiceGrid}>
        {services.map((service) => (
          <HomeServiceTile
            key={service.id}
            service={service}
            onPress={() => onPress(service)}
          />
        ))}
      </View>
    </View>
  );
}

;

function MeaningfulServiceIcon({ service, size = 28, color, compact = false }) {
  const config = SERVICE_MEANING_ICONS[service?.id] || {
    primary: service?.icon || 'medical-outline',
  };
  const primaryColor = color || service?.iconColor || '#087F8C';
  const secondarySize = Math.max(10, Math.round(size * 0.42));

  return (
    <View
      pointerEvents="none"
      style={{
        width: size + (compact ? 2 : 6),
        height: size + (compact ? 2 : 6),
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Ionicons
        name={config.primary}
        size={size}
        color={primaryColor}
      />
      {config.secondary ? (
        <View
          style={{
            position: 'absolute',
            right: compact ? -1 : -2,
            bottom: compact ? -1 : -2,
            width: secondarySize + 5,
            height: secondarySize + 5,
            borderRadius: (secondarySize + 5) / 2,
            backgroundColor: service?.color || '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons
            name={config.secondary}
            size={secondarySize}
            color={config.secondaryColor || primaryColor}
          />
        </View>
      ) : null}
    </View>
  );
}

function HomeServiceTile({ service, onPress }) {
  const theme = {
    backgroundColor: '#EAF7F8',
    iconColor: '#087F8C',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={[styles.homeServiceTile, { backgroundColor: theme.backgroundColor }]}
      onPress={onPress}
    >
      <View style={styles.homeServiceTileTopAccent} />
      <View style={styles.homeServiceTileIcon}>
        <MeaningfulServiceIcon service={service} size={27} color={theme.iconColor} compact />
      </View>
      <Text style={styles.homeServiceTileName} numberOfLines={2}>
        {service.name}
      </Text>
      <View style={styles.homeServiceTileArrow}>
        <Ionicons name="arrow-forward" size={12} color="#087F8C" />
      </View>
    </TouchableOpacity>
  );
}

function HomeEquipmentSection({ items, onViewAll, onPress }) {
  return (
    <View style={styles.homeServiceSection}>
      <View style={styles.homeServiceSectionHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.homeServiceSectionTitle}>MEDICAL EQUIPMENT</Text>
          <Text style={styles.homeServiceSectionSubtitle}>Rent or purchase medical equipment</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onViewAll}
          style={styles.homeServiceViewAll}
        >
          <Text style={styles.homeServiceViewAllText}>View All</Text>
          <Ionicons name="chevron-forward" size={16} color="#087F8C" />
        </TouchableOpacity>
      </View>

      <View style={styles.homeServiceGrid}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.86}
            style={[styles.homeServiceTile, styles.homeEquipmentTile]}
            onPress={() => onPress(item)}
          >
            <View style={styles.homeServiceTileIcon}>
              <Ionicons name={item.icon} size={28} color="#087F8C" />
            </View>
            <Text style={styles.homeServiceTileName} numberOfLines={2}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function ServiceCard({ service, onPress }) {
  return (
    <TouchableOpacity
      style={styles.serviceCard}
      onPress={onPress}
    >
      <View
        style={[
          styles.serviceIcon,
          { backgroundColor: service.color },
        ]}
      >
        <MeaningfulServiceIcon
          service={service}
          size={28}
          color={service.iconColor}
        />
      </View>

      <Text style={styles.serviceName}>
        {service.name}
      </Text>

      <Text style={styles.servicePrice}>
        From ₹{service.price}
      </Text>
    </TouchableOpacity>
  );
}

function LargeServiceCard({ service, onPress }) {
  return (
    <TouchableOpacity
      style={styles.largeServiceCard}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <LinearGradient
        colors={['#087F8C', '#0A9AA4', '#27C7C2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.serviceCardTopRibbon}
      >
        <View style={styles.serviceCardRibbonLeft}>
          <Ionicons name="shield-checkmark" size={12} color="#FFFFFF" />
          <Text style={styles.serviceCardRibbonText}>HEALTHOME HOME CARE</Text>
        </View>
        <Text style={styles.serviceCardRibbonAction}>EXPLORE</Text>
      </LinearGradient>

      <View style={styles.largeServiceCardBody}>
        <LinearGradient
          colors={[service.color, '#F7FDFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.largeServiceIcon}
        >
          <View
            style={[
              styles.serviceIconCircle,
              { borderColor: `${service.iconColor}22` },
            ]}
          >
            <MeaningfulServiceIcon
              service={service}
              size={31}
              color={service.iconColor}
            />
          </View>
        </LinearGradient>

        <View style={styles.largeServiceContent}>
          <View style={styles.serviceNameRow}>
            <Text style={styles.largeServiceName} numberOfLines={2}>
              {service.name}
            </Text>

            <View style={styles.serviceArrowCircle}>
              <Ionicons
                name="arrow-forward"
                size={17}
                color="#FFFFFF"
              />
            </View>
          </View>

          <Text
            style={styles.largeServiceDescription}
            numberOfLines={2}
          >
            {service.description}
          </Text>

          <View style={styles.serviceMetaRow}>
            <View style={styles.servicePricePill}>
              <Text style={styles.largeServicePrice}>
                From ₹{service.price}
              </Text>
            </View>

            <View style={styles.serviceDurationPill}>
              <Ionicons
                name="time-outline"
                size={14}
                color="#165A76"
              />
              <Text style={styles.largeServiceDuration}>
                {service.duration}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.serviceCardBottom}>
        <View style={styles.serviceCardBottomLabel}>
          <Ionicons name="home-outline" size={15} color="#087F8C" />
          <Text style={styles.serviceCardBottomText}>Professional care at your doorstep</Text>
        </View>
        <View style={styles.serviceCardBottomLink}>
          <Text style={styles.serviceCardBottomLinkText}>View Details</Text>
          <Ionicons name="chevron-forward" size={15} color="#087F8C" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

function EquipmentMiniCard({ item, onPress }) {
  return (
    <TouchableOpacity
      style={styles.equipmentMini}
      onPress={onPress}
    >
      <View style={styles.equipmentMiniIcon}>
        <Ionicons
          name={item.icon}
          size={30}
          color="#E67C26"
        />
      </View>

      <Text style={styles.equipmentMiniName}>
        {item.name}
      </Text>

      <Text style={styles.equipmentMiniPrice}>
        ₹{item.price}/day
      </Text>
    </TouchableOpacity>
  );
}

function DetailSection({ title, text, icon = 'medical-outline' }) {
  return (
    <View style={styles.detailSection}>
      <View style={styles.detailSectionHeader}>
        <View style={styles.detailSectionIcon}>
          <Ionicons name={icon} size={20} color="#087F8C" />
        </View>
        <Text style={styles.detailSectionTitle}>
          {title}
        </Text>
      </View>

      <Text style={styles.detailSectionText}>
        {text}
      </Text>
    </View>
  );
}

function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  keyboard,
  multiline,
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>
        {label}
      </Text>

      <View
        style={[
          styles.formInputBox,
          multiline && {
            alignItems: 'flex-start',
            minHeight: 90,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={21}
          color="#387087"
          style={{ marginTop: multiline ? 5 : 0 }}
        />

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#899BA5"
          keyboardType={keyboard || 'default'}
          multiline={multiline}
          style={[
            styles.formInput,
            multiline && {
              minHeight: 70,
              textAlignVertical: 'top',
            },
          ]}
        />
      </View>
    </View>
  );
}

function PaymentOption({
  icon,
  title,
  subtitle,
  selected,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.paymentOption,
        selected && styles.paymentSelected,
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.paymentIcon,
          selected && {
            backgroundColor: '#D9F6F1',
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={27}
          color={selected ? '#008A72' : '#365E78'}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.paymentTitle}>
          {title}
        </Text>

        <Text style={styles.paymentSubtitle}>
          {subtitle}
        </Text>
      </View>

      <View
        style={[
          styles.radio,
          selected && styles.radioSelected,
        ]}
      >
        {selected && (
          <View style={styles.radioInner} />
        )}
      </View>
    </TouchableOpacity>
  );
}


function AppPage({
  title,
  onBack,
  children,
  bottom,
  setScreen,
}) {
  return (
    <LinearGradient
      colors={['#034B6A', '#007D88', '#00A89F']}
      style={styles.appBackground}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.pageHeader}>
          <TouchableOpacity
            onPress={onBack}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={styles.pageHeaderTitle}>
            {title}
          </Text>

          <View style={{ width: 42 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.pageContent}
        >
          {children}
        </ScrollView>

        {bottom && (
          <BottomNav
            active={bottom}
            onHome={() => setScreen('home')}
            onServices={() => setScreen('services')}
            onBookings={() => setScreen('bookings')}
            onMedicine={() => setScreen('medicine')}
            onProfile={() => setScreen('profile')}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

function BottomNav({
  active,
  onHome,
  onServices,
  onBookings,
  onMedicine,
  onProfile,
}) {
  return (
    <View style={styles.bottomNav}>
      <NavItem
        icon="home-outline"
        label="Home"
        active={active === 'Home'}
        onPress={onHome}
      />

      <NavItem
        icon="medkit-outline"
        label="Services"
        active={active === 'Services'}
        onPress={onServices}
      />

      <NavItem
        icon="calendar-outline"
        label="Bookings"
        active={active === 'Bookings'}
        onPress={onBookings}
      />

      <NavItem
        icon="medical-outline"
        label="Medicine"
        active={active === 'Medicine'}
        onPress={onMedicine}
      />

      <NavItem
        icon="person-outline"
        label="Profile"
        active={active === 'Profile'}
        onPress={onProfile}
      />
    </View>
  );
}

function NavItem({
  icon,
  label,
  active,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      style={[
        styles.navItem,
        active && styles.navItemActive,
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.navIconWrap,
          active && styles.navIconWrapActive,
        ]}
      >
        <Ionicons
          name={icon}
          size={23}
          color={active ? '#FFFFFF' : '#087F8C'}
        />
      </View>

      <Text
        style={[
          styles.navLabel,
          active && styles.navLabelActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function SideMenu({
  visible,
  close,
  navigate,
}) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={close}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.sideMenu}>
          <View style={styles.menuHeader}>
            <Image
              source={require('../../assets/healthome-logo.png')}
              style={styles.menuLogo}
              resizeMode="contain"
            />

            <TouchableOpacity onPress={close}>
              <Ionicons
                name="close"
                size={30}
                color="#173F55"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.menuWelcome}>
            Welcome to Healthome
          </Text>

          <MenuItem
            icon="home-outline"
            title="Home"
            onPress={() => navigate('home')}
          />

          <MenuItem icon="grid-outline" title="Services" onPress={() => navigate('services')} />
          <MenuItem icon="medkit-outline" title="Find a Doctor" onPress={() => navigate('doctors')} />
          <MenuItem icon="flask-outline" title="Lab Tests" onPress={() => navigate('labs')} />

          <MenuItem icon="sparkles-outline" title="Explore Healthome" onPress={() => navigate('specialties')} />

          <MenuItem
            icon="calendar-outline"
            title="My Bookings"
            onPress={() => navigate('bookings')}
          />

          <MenuItem
            icon="medkit-outline"
            title="Medical Equipment"
            onPress={() => navigate('equipment')}
          />

          <MenuItem
            icon="headset-outline"
            title="Support"
            onPress={() => navigate('support')}
          />

          <MenuItem
            icon="person-outline"
            title="Profile"
            onPress={() => navigate('profile')}
          />

          <View style={styles.menuBottom}>
            <Text style={styles.menuTagline}>
              Quality Care At Your Home
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function MenuItem({ icon, title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={23}
        color="#17647D"
      />

      <Text style={styles.menuItemText}>
        {title}
      </Text>

      <Ionicons
        name="chevron-forward"
        size={19}
        color="#78909C"
      />
    </TouchableOpacity>
  );
}

export {
  HeroTrust,
  QuickService,
  ExploreCard,
  FamilyTrust,
  PremiumTrust,
  PremiumShortcut,
  PremiumHomeSection,
  PremiumFeatureCard,
  PremiumEmergencyCard,
  Header,
  ActionCard,
  SectionHeader,
  HomeServiceSection,
  MeaningfulServiceIcon,
  HomeServiceTile,
  HomeEquipmentSection,
  ServiceCard,
  LargeServiceCard,
  EquipmentMiniCard,
  DetailSection,
  InputField,
  PaymentOption,
  AppPage,
  BottomNav,
  NavItem,
  SideMenu,
  MenuItem,
};
