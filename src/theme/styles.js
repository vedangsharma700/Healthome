import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundColor: '#F4FBFD',
  },

  otpCodeRoot: {
    flex: 1,
    backgroundColor: '#F4FBFD',
  },

  otpCodeBackground: {
    flex: 1,
    width: '100%',
  },

  otpCodeSafeArea: {
    flex: 1,
  },

  otpCodeKeyboard: {
    flex: 1,
  },

  otpCodeScroll: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  otpCodeContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 14,
  },

  otpGlowOne: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(157,226,238,0.22)',
    top: 70,
    left: -130,
  },

  otpGlowTwo: {
    position: 'absolute',
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: 'rgba(39,172,190,0.10)',
    top: 390,
    right: -130,
  },

  otpWaveOne: {
    position: 'absolute',
    width: '130%',
    height: 190,
    borderRadius: 100,
    backgroundColor: 'rgba(74,190,216,0.13)',
    bottom: -105,
    left: '-15%',
    transform: [{ rotate: '-8deg' }],
  },

  otpWaveTwo: {
    position: 'absolute',
    width: '130%',
    height: 145,
    borderRadius: 100,
    backgroundColor: 'rgba(20,154,184,0.10)',
    bottom: -65,
    left: '-10%',
    transform: [{ rotate: '8deg' }],
  },

  otpTopBrandRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },

  otpBrandLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  otpBrandLine: {
    width: 3,
    height: 47,
    borderRadius: 2,
    backgroundColor: '#0B92A0',
    marginRight: 11,
  },

  otpBrandText: {
    color: '#164F72',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '600',
  },

  otpBrandRight: {
    alignItems: 'flex-end',
  },

  otpBrandRightText: {
    color: '#164F72',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    textAlign: 'right',
  },

  otpBrandUnderline: {
    width: 52,
    height: 2,
    backgroundColor: '#087F8C',
    marginTop: 8,
  },

  otpCodeTitle: {
    fontSize: 38,
    lineHeight: 45,
    fontWeight: '900',
    color: '#164F72',
    textAlign: 'center',
    marginBottom: 8,
  },

  otpCodeDescription: {
    fontSize: 15,
    lineHeight: 21,
    color: '#71889E',
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  otpCodePhone: {
    fontSize: 20,
    lineHeight: 27,
    color: '#087F8C',
    fontWeight: '900',
    marginTop: 5,
    marginBottom: 18,
    textAlign: 'center',
  },

  otpCodeCard: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.97)',
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 19,
    paddingBottom: 18,
    shadowColor: '#164F72',
    shadowOpacity: 0.13,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 9 },
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
  },

  otpCodeLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: '#164F72',
    marginBottom: 14,
  },

  otpCodeBoxes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  otpCodeBox: {
    width: 58,
    height: 62,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#D7E3EB',
    backgroundColor: '#FBFDFE',
    color: '#164F72',
    fontSize: 25,
    fontWeight: '900',
  },

  otpCodeBoxFilled: {
    borderColor: '#087F8C',
    backgroundColor: '#F0FBFC',
  },

  otpCodeVerifyButton: {
    width: '100%',
    height: 58,
    borderRadius: 30,
    backgroundColor: '#91AAB3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#087F8C',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  otpCodeVerifyButtonActive: {
    backgroundColor: '#087F8C',
  },

  otpCodeVerifyText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },

  otpCodeResend: {
    textAlign: 'center',
    color: '#087F8C',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 17,
  },

  otpCodeResendTimer: {
    color: '#8999AB',
    fontWeight: '700',
  },

  otpTerms: {
    maxWidth: 360,
    fontSize: 11.5,
    lineHeight: 17,
    color: '#71889A',
    textAlign: 'center',
    marginTop: 14,
    paddingHorizontal: 8,
  },

  otpTermsAccent: {
    color: '#087F8C',
    fontWeight: '800',
  },

  otpTrustRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 17,
    paddingHorizontal: 4,
  },

  otpTrustItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },

  otpTrustText: {
    color: '#164F72',
    fontSize: 11.5,
    lineHeight: 16,
    fontWeight: '600',
    marginLeft: 6,
  },

  otpTrustDivider: {
    width: 1,
    height: 42,
    backgroundColor: '#BBD7E1',
    marginHorizontal: 3,
  },

  otpFooter: {
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
    marginTop: 22,
    marginRight: 7,
    paddingBottom: 4,
  },

  otpFooterText: {
    color: '#15517A',
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 3,
    fontWeight: '700',
  },

  otpFooterLine: {
    width: 54,
    height: 2,
    backgroundColor: '#15517A',
    marginTop: 8,
  },

  authRoot: {
    flex: 1,
    backgroundColor: '#F3FAFC',
  },

  otpShieldCircle:{width:88,height:88,borderRadius:44,backgroundColor:'#087F8C',alignItems:'center',justifyContent:'center',borderWidth:7,borderColor:'rgba(255,255,255,0.8)',shadowColor:'#087F8C',shadowOpacity:0.18,shadowRadius:14,shadowOffset:{width:0,height:6},elevation:6,marginBottom:13},

  headerCenterTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  headerCenterTitleText: {
    color: '#087F8C',
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 0.4,
  },

  headerCenterSubtitle: {
    color: '#78909C',
    fontSize: 9.5,
    fontWeight: '700',
    marginTop: 1,
    letterSpacing: 0.2,
  },

  header: {
    minHeight: 82,
    paddingHorizontal: 18,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F4FBFD',
  },

  notificationDot: {
    width: 10,
    height: 10,
    backgroundColor: '#FF3E43',
    borderRadius: 5,
    position: 'absolute',
    right: 6,
    top: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  homeRoot: {
    flex: 1,
    backgroundColor: '#F4FBFD',
  },

  homeSafeArea: {
    flex: 1,
    backgroundColor: '#F4FBFD',
  },

  headerMenuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#164F72',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  whatsappButton: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#16C77A',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  headerNotification: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#164F72',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  heroTrust: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },

  heroTrustText: {
    color: '#0E5573',
    fontSize: 8.5,
    lineHeight: 11,
    fontWeight: '700',
  },

  quickService: {
    width: '15.5%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  quickServiceIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },

  quickServiceText: {
    color: '#174668',
    fontSize: 8.7,
    lineHeight: 11,
    fontWeight: '800',
    textAlign: 'center',
  },

  homeServiceSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 15,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#D3E7F7',
    shadowColor: '#0B6170',
    shadowOpacity: 0.09,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  homeServiceSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    paddingHorizontal: 1,
  },

  homeServiceSectionTitle: {
    color: '#103E5C',
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '900',
    letterSpacing: 0.2,
  },

  homeServiceSectionSubtitle: {
    color: '#6C8792',
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 3,
  },

  homeServiceViewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 11,
    backgroundColor: '#E8F7F7',
  },

  homeServiceViewAllText: {
    color: '#087F8C',
    fontSize: 10.5,
    fontWeight: '900',
  },

  homeServiceEmergencyText: {
    color: '#087F8C',
  },

  homeServiceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
  },

  homeServiceTile: {
    width: '31.8%',
    minHeight: 104,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingTop: 12,
    paddingBottom: 9,
    borderWidth: 1,
    borderColor: '#CFE8EB',
    position: 'relative',
    overflow: 'hidden',
  },

  homeEquipmentTile: {
    backgroundColor: '#EAF7F8',
  },

  homeServiceTileTopAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#087F8C',
  },

  homeServiceTileIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#CDE8EB',
    shadowColor: '#087F8C',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  homeServiceTileName: {
    color: '#123D57',
    fontSize: 10.2,
    lineHeight: 13,
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: 2,
  },

  homeServiceTileArrow: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#D9F2F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  premiumHomeContent: {
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 165,
    backgroundColor: '#F3F8FE',
  },

  premiumSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 13,
  },

  premiumSearchBox: {
    flex: 1,
    height: 53,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9EAEE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    shadowColor: '#164F72',
    shadowOpacity: 0.06,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  premiumSearchIcon: {
    width: 37,
    height: 37,
    borderRadius: 13,
    backgroundColor: '#E6F7F6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  premiumSearchInput: {
    flex: 1,
    minWidth: 0,
    marginLeft: 9,
    color: '#173E56',
    fontSize: 13,
    fontWeight: '600',
    paddingVertical: 0,
  },

  searchClearButton: {
    padding: 6,
  },

  callPageHero: {
    backgroundColor: '#087F8C',
    borderRadius: 22,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#087F8C',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  callPageHeroIcon: {
    width: 54,
    height: 54,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  callPageHeroTitle: { color: '#FFFFFF', fontSize: 21, fontWeight: '900' },

  callPageHeroText: { color: '#DDF6F5', fontSize: 11.5, lineHeight: 17, marginTop: 4 },

  callPageStepRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 17 },

  callPageStepActive: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#087F8C', alignItems: 'center', justifyContent: 'center' },

  callPageStepDone: { backgroundColor: '#0A9A7E' },

  callPageStepNumber: { color: '#FFFFFF', fontSize: 12, fontWeight: '900' },

  callPageStepLine: { width: 42, height: 2, backgroundColor: '#B8DADC', marginHorizontal: 5 },

  callPageSectionTitle: { color: '#173E56', fontSize: 16, fontWeight: '900', marginTop: 5, marginBottom: 8 },

  callPageHint: { color: '#71889A', fontSize: 11.5, lineHeight: 17, marginBottom: 10 },

  doctorConsultantCard: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 13, flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#A9DCDC', marginBottom: 12, shadowColor: '#087F8C', shadowOpacity: 0.07, shadowRadius: 9, shadowOffset: { width: 0, height: 4 }, elevation: 2 },

  doctorConsultantIcon: { width: 52, height: 52, borderRadius: 16, backgroundColor: '#DDF6F5', alignItems: 'center', justifyContent: 'center', marginRight: 11, position: 'relative' },

  doctorConsultantCross: { position: 'absolute', right: 3, top: 3, width: 16, height: 16, borderRadius: 8, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },

  doctorConsultantCrossV: { position: 'absolute', width: 7, height: 2, backgroundColor: '#E53935' },

  doctorConsultantCrossH: { position: 'absolute', width: 2, height: 7, backgroundColor: '#E53935' },

  doctorConsultantTitle: { color: '#173E56', fontSize: 14, fontWeight: '900' },

  doctorConsultantText: { color: '#71889A', fontSize: 10.5, lineHeight: 15, marginTop: 3 },

  selectedCheck: { width: 27, height: 27, borderRadius: 14, backgroundColor: '#087F8C', alignItems: 'center', justifyContent: 'center' },

  prescriptionActionRow: { flexDirection: 'row', gap: 10, marginBottom: 13 },

  prescriptionActionCard: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 18, padding: 14, borderWidth: 1, borderColor: '#D3E8EA', alignItems: 'center', shadowColor: '#087F8C', shadowOpacity: 0.05, shadowRadius: 7, shadowOffset: { width: 0, height: 3 }, elevation: 2 },

  prescriptionActionIcon: { width: 48, height: 48, borderRadius: 15, backgroundColor: '#E4F7F6', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },

  prescriptionActionTitle: { color: '#173E56', fontSize: 13, fontWeight: '900' },

  prescriptionActionText: { color: '#8195A0', fontSize: 10, marginTop: 3 },

  prescriptionPreviewCard: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#BDE2DE', marginBottom: 13, gap: 10 },

  prescriptionPreviewImage: { width: 58, height: 58, borderRadius: 12, backgroundColor: '#EDF7F7' },

  prescriptionPreviewTitle: { color: '#173E56', fontSize: 13, fontWeight: '900' },

  prescriptionPreviewText: { color: '#71889A', fontSize: 10.5, marginTop: 2 },

  appointmentModeRow: { flexDirection: 'row', gap: 10, marginBottom: 13 },

  appointmentModeCard: { flex: 1, minHeight: 124, backgroundColor: '#FFFFFF', borderRadius: 18, padding: 13, borderWidth: 1.5, borderColor: '#D3E8EA', alignItems: 'flex-start', shadowColor: '#087F8C', shadowOpacity: 0.05, shadowRadius: 7, shadowOffset: { width: 0, height: 3 }, elevation: 2 },

  appointmentModeCardActive: { backgroundColor: '#087F8C', borderColor: '#087F8C' },

  appointmentModeTitle: { color: '#173E56', fontSize: 14, fontWeight: '900', marginTop: 10 },

  appointmentModeTitleActive: { color: '#FFFFFF' },

  appointmentModeText: { color: '#71889A', fontSize: 10.5, lineHeight: 15, marginTop: 3 },

  appointmentModeTextActive: { color: '#DDF6F5' },

  appointmentPickerRow: { flexDirection: 'row', gap: 10, marginBottom: 13 },

  appointmentPickerButton: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#D3E8EA', padding: 12, flexDirection: 'row', alignItems: 'center', gap: 9, minHeight: 67 },

  appointmentPickerButtonSelected: { borderColor: '#087F8C', backgroundColor: '#F1FBFA' },

  appointmentPickerLabel: { color: '#8A9BA5', fontSize: 9.5, fontWeight: '800', textTransform: 'uppercase' },

  appointmentPickerValue: { color: '#173E56', fontSize: 12, fontWeight: '900', marginTop: 4 },

  callPageInfoCard: { backgroundColor: '#EAF8F6', borderRadius: 15, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 9, marginBottom: 13 },

  callPageInfoText: { flex: 1, color: '#4C707C', fontSize: 10.5, lineHeight: 15 },

  confirmConsultationButton: { backgroundColor: '#087F8C', minHeight: 54, borderRadius: 17, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, marginBottom: 18, shadowColor: '#087F8C', shadowOpacity: 0.18, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 4 },

  confirmConsultationButtonDisabled: { opacity: 0.55 },

  confirmConsultationText: { color: '#FFFFFF', fontSize: 14, fontWeight: '900' },

  appointmentPickerBackdrop: { flex: 1, backgroundColor: 'rgba(8,40,54,0.42)', justifyContent: 'flex-end' },

  appointmentPickerSheet: { backgroundColor: '#F7FCFC', borderTopLeftRadius: 27, borderTopRightRadius: 27, maxHeight: '78%', paddingHorizontal: 16, paddingTop: 10, paddingBottom: 20 },

  appointmentPickerHandle: { width: 45, height: 5, borderRadius: 3, backgroundColor: '#B7CDD2', alignSelf: 'center', marginBottom: 12 },

  appointmentPickerHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },

  appointmentPickerTitle: { color: '#173E56', fontSize: 17, fontWeight: '900' },

  appointmentPickerSubtitle: { color: '#78909D', fontSize: 10.5, marginTop: 3 },

  appointmentPickerClose: { width: 38, height: 38, borderRadius: 13, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },

  appointmentPickerList: { marginBottom: 2 },

  appointmentOption: { backgroundColor: '#FFFFFF', borderRadius: 15, minHeight: 57, marginBottom: 8, paddingHorizontal: 11, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E0ECEE', gap: 10 },

  appointmentOptionActive: { borderColor: '#087F8C', backgroundColor: '#EAF8F6' },

  appointmentOptionText: { flex: 1, color: '#365B75', fontSize: 12.5, fontWeight: '800' },

  appointmentOptionTextActive: { color: '#087F8C' },

  appointmentDateCircle: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#EAF5F6', alignItems: 'center', justifyContent: 'center' },

  appointmentDateCircleActive: { backgroundColor: '#087F8C' },

  appointmentDateDay: { color: '#5C7B87', fontSize: 8.5, fontWeight: '800' },

  appointmentDateNumber: { color: '#173E56', fontSize: 15, fontWeight: '900', marginTop: 1 },

  appointmentDateActiveText: { color: '#FFFFFF' },

  timeOptionIcon: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#EAF8F6', alignItems: 'center', justifyContent: 'center' },

  changePrescriptionText: { color: '#087F8C', fontSize: 11, fontWeight: '900' },

  homeWelcomeRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCEDEF',
    marginBottom: 14,
    shadowColor: '#164F72',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  homeWelcomeLogo: {
    width: 55,
    height: 55,
    borderRadius: 18,
    marginRight: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F2FF',
    position: 'relative',
  },

  homeWelcomeLogoBack: {
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor: '#1677C8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeWelcomeHeart: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#D43E61',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  homeWelcomeCross: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeWelcomeCrossV: {
    position: 'absolute',
    width: 4,
    height: 13,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },

  homeWelcomeCrossH: {
    position: 'absolute',
    width: 13,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },

  homeWelcomeTitle: {
    color: '#123D5B',
    fontSize: 17,
    fontWeight: '900',
  },

  homeWelcomeSubtitle: {
    color: '#718897',
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 3,
    fontWeight: '600',
    paddingRight: 5,
  },

  homeVerifiedPill: {
    backgroundColor: '#E8F2FF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 3,
  },

  homeVerifiedText: {
    color: '#1677C8',
    fontSize: 9.5,
    fontWeight: '900',
  },

  premiumHeroCard: {
    width: '100%',
    height: 252,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#E6F2FF',
    shadowColor: '#164F72',
    shadowOpacity: 0.12,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  premiumHeroSlide: {
    width: 0,
    minWidth: '100%',
    height: '100%',
  },


  premiumHeroOverlay: {
    flex: 1,
    paddingLeft: 19,
    paddingTop: 19,
    paddingBottom: 16,
    paddingRight: 10,
  },

  heroTextColumn: {
    width: '68%',
    flex: 1,
    justifyContent: 'flex-start',
  },

  premiumHeroEyebrow: {
    color: '#1677C8',
    fontSize: 8.5,
    fontWeight: '900',
    letterSpacing: 1.05,
    marginBottom: 8,
  },

  premiumHeroTitle: {
    color: '#164E7A',
    fontSize: 29,
    lineHeight: 32,
    fontWeight: '900',
    letterSpacing: -0.8,
  },

  premiumHeroAccent: {
    color: '#1677C8',
    fontSize: 26,
    lineHeight: 29,
    fontWeight: '900',
  },

  premiumHeroSubtitle: {
    color: '#315B72',
    fontSize: 11.5,
    lineHeight: 16,
    fontWeight: '600',
    marginTop: 6,
    maxWidth: 230,
  },

  premiumHeroTrustRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 9,
    gap: 5,
  },

  premiumTrustItem: {
    flex: 1,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  premiumTrustText: {
    color: '#31566C',
    fontSize: 8,
    lineHeight: 11,
    fontWeight: '800',
  },

  premiumHeroButton: {
    height: 38,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#1677C8',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    shadowColor: '#087F8C',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  premiumHeroButtonText: {
    color: '#FFFFFF',
    fontSize: 11.5,
    fontWeight: '900',
  },

  premiumHeroDots: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    minHeight: 30,
    marginTop: -1,
    marginBottom: 14,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    shadowColor: '#164F72',
    shadowOpacity: 0.07,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  premiumHeroDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C8E2EC',
    marginHorizontal: 4,
  },

  premiumHeroDotActive: {
    width: 23,
    backgroundColor: '#1677C8',
  },

  premiumSectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 2,
  },

  premiumSectionTitle: {
    color: '#123D5B',
    fontSize: 21,
    lineHeight: 26,
    fontWeight: '900',
    letterSpacing: -0.3,
  },

  premiumSectionSubtitle: {
    color: '#718896',
    fontSize: 11,
    marginTop: 2,
    fontWeight: '600',
  },

  premiumViewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingVertical: 5,
    paddingLeft: 8,
  },

  premiumViewAllText: {
    color: '#087F8C',
    fontSize: 11,
    fontWeight: '900',
  },

  premiumShortcutGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
    marginBottom: 16,
  },

  premiumShortcutCard: {
    width: '48.7%',
    minHeight: 88,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCEDEF',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#164F72',
    shadowOpacity: 0.055,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  premiumShortcutIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.75)',
  },

  premiumShortcutIconInner: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  premiumShortcutText: {
    flex: 1,
    paddingRight: 13,
  },

  premiumShortcutTitle: {
    color: '#123D5B',
    fontSize: 12.5,
    lineHeight: 16,
    fontWeight: '900',
  },

  premiumShortcutSubtitle: {
    color: '#718795',
    fontSize: 9.2,
    lineHeight: 12,
    marginTop: 3,
    fontWeight: '600',
  },

  premiumShortcutArrow: {
    position: 'absolute',
    right: 7,
    bottom: 8,
  },

  premiumCategoryCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DCEDEF',
    marginBottom: 13,
    shadowColor: '#164F72',
    shadowOpacity: 0.075,
    shadowRadius: 11,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  premiumCategoryHeader: {
    minHeight: 76,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  premiumCategoryHeaderIcon: {
    width: 51,
    height: 51,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.19)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.38)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  premiumCategoryHeaderText: {
    flex: 1,
    paddingRight: 5,
  },

  premiumCategoryTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '900',
  },

  premiumCategorySubtitle: {
    color: 'rgba(255,255,255,0.94)',
    fontSize: 9.5,
    lineHeight: 13,
    marginTop: 3,
    fontWeight: '600',
  },

  premiumCategoryArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  premiumCategoryGrid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
  },

  premiumCategoryItem: {
    width: '25%',
    minHeight: 92,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 2,
  },

  premiumCategoryItemIcon: {
    width: 53,
    height: 53,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#DCEEF0',
    shadowColor: '#164F72',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  premiumCategoryItemText: {
    color: '#123D5B',
    fontSize: 9.3,
    lineHeight: 12,
    fontWeight: '800',
    textAlign: 'center',
  },

  premiumCategoryEmpty: {
    width: '100%',
    minHeight: 85,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  premiumCategoryEmptyText: {
    color: '#7D929D',
    fontSize: 11,
    fontWeight: '600',
  },

  premiumFeatureCard: {
    width: '100%',
    minHeight: 116,
    borderRadius: 22,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
    shadowColor: '#164F72',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  premiumFeatureIcon: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.78)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  premiumFeatureContent: {
    flex: 1,
    paddingRight: 6,
  },

  premiumFeatureTitle: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
  },

  premiumFeatureSubtitle: {
    color: '#173E73',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 2,
    fontWeight: '800',
  },

  premiumFeatureDescription: {
    color: '#526D7D',
    fontSize: 9.5,
    lineHeight: 13,
    marginTop: 5,
    fontWeight: '600',
  },

  premiumFeatureArrow: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  premiumEmergencyCard: {
    width: '100%',
    borderRadius: 23,
    backgroundColor: '#FFE4E6',
    borderWidth: 1,
    borderColor: '#FFD0D4',
    padding: 13,
    marginBottom: 13,
    shadowColor: '#B93642',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  premiumEmergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  premiumEmergencyIcon: {
    width: 53,
    height: 53,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  premiumEmergencyTitle: {
    color: '#B62431',
    fontSize: 18,
    fontWeight: '900',
  },

  premiumEmergencySubtitle: {
    color: '#A9444D',
    fontSize: 10.5,
    lineHeight: 14,
    marginTop: 3,
    fontWeight: '700',
  },

  emergencyAmbulanceButton: { marginHorizontal: 14, marginBottom: 14, minHeight: 50, borderRadius: 15, backgroundColor: '#C92331', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },

  emergencyAmbulanceText: { color: '#FFFFFF', fontSize: 14, fontWeight: '900' },

  emergency247: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 2,
  },

  emergency247Number: {
    color: '#173E73',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '900',
    letterSpacing: -1,
  },

  emergency247Text: {
    color: '#173E73',
    fontSize: 11,
    fontWeight: '900',
    marginTop: 1,
  },

  emergencyTrustRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 8,
  },

  emergencyTrustItem: {
    width: '31%',
    alignItems: 'center',
  },

  emergencyTrustIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  emergencyTrustText: {
    color: '#173E73',
    fontSize: 8.5,
    lineHeight: 11,
    fontWeight: '800',
    textAlign: 'center',
  },

  premiumEmptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 25,
    alignItems: 'center',
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#DCEDEF',
  },

  premiumEmptyIcon: {
    width: 62,
    height: 62,
    borderRadius: 22,
    backgroundColor: '#E7F7F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  premiumEmptyTitle: {
    color: '#123D5B',
    fontSize: 17,
    fontWeight: '900',
  },

  premiumEmptyText: {
    color: '#718795',
    fontSize: 11,
    marginTop: 4,
    textAlign: 'center',
  },

  premiumEmptyButton: {
    marginTop: 12,
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 17,
    backgroundColor: '#087F8C',
  },

  premiumEmptyButtonText: {
    color: '#FFFFFF',
    fontSize: 10.5,
    fontWeight: '900',
  },

  homeBottomTrust: {
    minHeight: 68,
    borderRadius: 20,
    backgroundColor: '#087F8C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 7,
    marginTop: 2,
    marginBottom: 10,
  },

  homeBottomTrustItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  homeBottomTrustText: {
    color: '#FFFFFF',
    fontSize: 8.5,
    lineHeight: 11,
    textAlign: 'center',
    fontWeight: '800',
  },

  homeBottomDivider: {
    width: 1,
    height: 34,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },

  exploreCard: { width: '48.6%', minHeight: 148, borderRadius: 19, backgroundColor: '#FFFFFF', padding: 12, borderWidth: 1, borderColor: '#D7ECEF', shadowColor: '#0B6574', shadowOpacity: 0.07, shadowRadius: 9, shadowOffset: { width: 0, height: 3 }, elevation: 2 },

  exploreIcon: {
    width: 58,
    height: 58,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CDEBED',
    marginBottom: 10,
  },

  exploreIconInner: {
    width: 44,
    height: 44,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0B6574',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  exploreCardInfo: { flex: 1, paddingRight: 30 },

  exploreCardTitle: { color: '#123D57', fontSize: 14, lineHeight: 18, fontWeight: '800' },

  exploreCardDescription: { color: '#6A8290', fontSize: 10.5, lineHeight: 14, marginTop: 4, fontWeight: '500' },

  exploreArrow: { position: 'absolute', right: 10, bottom: 10, width: 29, height: 29, borderRadius: 15, backgroundColor: '#E7F7F7', alignItems: 'center', justifyContent: 'center' },

  familyTrust: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  familyTrustText: {
    color: '#FFFFFF',
    fontSize: 8.5,
    fontWeight: '700',
  },

  actionCard: {
    backgroundColor: '#F8FEFF',
    flex: 1,
    borderRadius: 20,
    padding: 13,
    minHeight: 190,
    position: 'relative',
  },

  actionIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
  },

  actionTitle: {
    color: '#102F56',
    fontSize: 15,
    fontWeight: '900',
  },

  actionSubtitle: {
    color: '#102F56',
    fontSize: 15,
    fontWeight: '900',
  },

  actionDescription: {
    color: '#45627A',
    fontSize: 11,
    lineHeight: 16,
    marginTop: 7,
  },

  actionArrow: {
    position: 'absolute',
    right: 11,
    bottom: 11,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 11,
  },

  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  sectionBar: {
    width: 7,
    height: 27,
    borderRadius: 5,
    backgroundColor: '#27D3E3',
    marginRight: 9,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },

  viewAll: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },

  serviceCard: {
  width: '23.5%',
  minHeight: 145,
  borderRadius: 18,
  borderWidth: 1,
  borderColor: '#E5E9ED',
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 5,
  paddingVertical: 10,
},

  serviceIcon: {
  width: 48,
  height: 48,
  borderRadius: 24,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 7,
},

  serviceName: {
  color: '#0C3057',
  fontSize: 12,
  lineHeight: 16,
  textAlign: 'center',
  fontWeight: '700',
},

  servicePrice: {
  color: '#118090',
  fontSize: 10,
  fontWeight: '700',
  marginTop: 5,
  textAlign: 'center',
},

  equipmentMini: {
    width: 150,
    backgroundColor: '#F9FEFF',
    borderRadius: 18,
    padding: 15,
    marginRight: 8,
  },

  equipmentMiniIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF0DF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  equipmentMiniName: {
    color: '#173B55',
    fontWeight: '800',
    fontSize: 12,
    marginTop: 10,
    lineHeight: 16,
  },

  equipmentMiniPrice: {
    color: '#087B89',
    fontWeight: '800',
    marginTop: 5,
    fontSize: 12,
  },

  bookingsHeroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9ECEE',
    shadowColor: '#0A6573',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    marginBottom: 13,
  },

  bookingsHeroIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#E5F7F6',
    borderWidth: 1,
    borderColor: '#CBECEC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookingsHeroContent: {
    flex: 1,
    marginLeft: 13,
  },

  bookingsHeroTitle: {
    color: '#123F61',
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '900',
  },

  bookingsHeroSubtitle: {
    color: '#71869A',
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 4,
  },

  bookingStatsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  bookingStatCard: {
    flex: 1,
    minHeight: 70,
    backgroundColor: '#F7FCFC',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DDEEEF',
    paddingHorizontal: 11,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bookingStatIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#E5F7F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  bookingStatNumber: {
    color: '#123F61',
    fontSize: 19,
    fontWeight: '900',
  },

  bookingStatLabel: {
    color: '#71869A',
    fontSize: 9.5,
    fontWeight: '700',
    marginTop: 1,
  },

  bookingSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 2,
  },

  bookingSectionTitle: {
    color: '#123F61',
    fontSize: 18,
    fontWeight: '900',
  },

  bookingSectionSubtitle: {
    color: '#71869A',
    fontSize: 11,
    marginTop: 3,
  },

  bookingSectionAccent: {
    width: 34,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#087F8C',
  },

  emptyBookingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 21,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9ECEE',
    shadowColor: '#0A6573',
    shadowOpacity: 0.07,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },

  emptyBookingIconOuter: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: '#E8F8F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CDEDEC',
    marginBottom: 17,
  },

  emptyBookingIconInner: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D7EEEE',
  },

  emptyBookingTitle: {
    color: '#123F61',
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'center',
  },

  emptyBookingText: {
    color: '#71869A',
    fontSize: 12.5,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
    maxWidth: 315,
  },

  bookServiceButton: {
    minHeight: 51,
    backgroundColor: '#087F8C',
    borderRadius: 16,
    paddingHorizontal: 17,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#087F8C',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  bookServiceButtonIcon: {
    width: 29,
    height: 29,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookServiceButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  trustedBookingNote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#F2FAFA',
  },

  trustedBookingNoteText: {
    color: '#5D7982',
    fontSize: 9.5,
    fontWeight: '700',
    marginLeft: 6,
  },

  bookingCardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  bookingServiceIcon: {
    width: 51,
    height: 51,
    borderRadius: 16,
    backgroundColor: '#E6F7F6',
    borderWidth: 1,
    borderColor: '#CDEDEC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookingCardTitleArea: {
    flex: 1,
    marginLeft: 11,
    paddingRight: 5,
  },

  bookingServiceName: {
    color: '#123F61',
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '900',
  },

  bookingIdText: {
    color: '#81929D',
    fontSize: 9.5,
    fontWeight: '700',
    marginTop: 4,
  },

  bookingStatusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9F8F3',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  bookingStatusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#008B70',
    marginRight: 5,
  },

  bookingStatusText: {
    color: '#008B70',
    fontSize: 9,
    fontWeight: '900',
  },

  bookingInfoRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 14,
  },

  bookingInfoItem: {
    flex: 1,
    minHeight: 53,
    backgroundColor: '#F6FBFB',
    borderRadius: 13,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2EFF0',
  },

  bookingInfoLabel: {
    color: '#81929D',
    fontSize: 8.5,
    fontWeight: '700',
    marginLeft: 7,
  },

  bookingInfoValue: {
    color: '#123F61',
    fontSize: 10.5,
    fontWeight: '900',
    marginLeft: 7,
    marginTop: 2,
    maxWidth: 105,
  },

  trackBookingButton: {
    minHeight: 43,
    backgroundColor: '#087F8C',
    borderRadius: 13,
    marginTop: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
  },

  trackBookingButtonText: {
    color: '#FFFFFF',
    fontSize: 11.5,
    fontWeight: '900',
  },

  bookingBottomHelp: {
    backgroundColor: '#EAF8F7',
    borderRadius: 18,
    padding: 12,
    marginTop: 5,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CDEDEC',
  },

  bookingHelpIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookingHelpTitle: {
    color: '#123F61',
    fontSize: 11.5,
    fontWeight: '900',
  },

  bookingHelpText: {
    color: '#71869A',
    fontSize: 9.5,
    marginTop: 3,
  },

  bookingHelpArrow: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomNav: {
    height: 82,
    zIndex: 50,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 30 : 8,
    left: 14,
    right: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    borderWidth: 1,
    borderColor: '#DCEFF1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 6,
    elevation: 14,
    shadowColor: '#087F8C',
    shadowOpacity: 0.13,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 5 },
  },

  navItem: {
    width: '20%',
    height: 72,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navItemActive: {
    backgroundColor: '#E6F6F7',
    borderWidth: 1,
    borderColor: '#C9EAEC',
    marginVertical: 4,
  },

  navIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF7F8',
    borderWidth: 1,
    borderColor: '#D5EFF1',
  },

  navIconWrapActive: {
    backgroundColor: '#087F8C',
    borderColor: '#087F8C',
    shadowColor: '#087F8C',
    shadowOpacity: 0.24,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },

  navLabel: {
    color: '#61778D',
    fontSize: 10.5,
    marginTop: 5,
    fontWeight: '600',
    textAlign: 'center',
  },

  navLabelActive: {
    color: '#087F8C',
    fontSize: 10.5,
    fontWeight: '900',
    marginTop: 5,
    textAlign: 'center',
  },

  pageHeader: {
    height: 70,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#ffffff25',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pageHeaderTitle: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '900',
  },

  pageContent: {
    backgroundColor: '#F4FBFC',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 18,
    paddingBottom: 150,
    minHeight: '100%',
  },

  pageDescription: {
    color: '#536D7B',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 17,
  },

  noServicesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCEDEF',
    marginTop: 4,
  },

  noServicesIcon: {
    width: 66,
    height: 66,
    borderRadius: 22,
    backgroundColor: '#E3F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },

  noServicesTitle: {
    color: '#123D5B',
    fontSize: 18,
    fontWeight: '900',
  },

  noServicesText: {
    color: '#6C8491',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 5,
  },

  clearServicesButton: {
    backgroundColor: '#087F8C',
    borderRadius: 13,
    paddingHorizontal: 17,
    paddingVertical: 11,
    marginTop: 15,
  },

  clearServicesButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },

  locationBanner: {
    backgroundColor: '#E4F7F5',
    borderRadius: 17,
    padding: 14,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginBottom: 18,
  },

  locationTitle: {
    color: '#075E70',
    fontWeight: '900',
    fontSize: 15,
  },

  locationText: {
    color: '#52707A',
    fontSize: 11,
    marginTop: 3,
  },

  equipmentRow: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginBottom: 10,
  },

  equipmentIcon: {
    width: 55,
    height: 55,
    borderRadius: 17,
    backgroundColor: '#FFF0DF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  equipmentName: {
    color: '#173D57',
    fontSize: 15,
    fontWeight: '800',
  },

  equipmentPrice: {
    color: '#087A88',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 5,
  },

  /* =========================================================
     HEALTHOME CARE DETAILS - PREMIUM TEAL THEME
  ========================================================= */

  careHeroCard: {
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 12,
    elevation: 6,
    shadowColor: '#073E4A',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
  },

  careHeroGradient: {
    padding: 20,
    minHeight: 275,
  },

  careHeroTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  careHeroIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  careHeroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },

  careHeroBadgeText: {
    color: '#087F8C',
    fontSize: 11,
    fontWeight: '900',
  },

  careHeroCategory: {
    color: '#BDECEF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.4,
    marginTop: 24,
  },

  careHeroTitle: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 34,
    fontWeight: '900',
    marginTop: 5,
  },

  careHeroSubtitle: {
    color: '#E5FAFB',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
    maxWidth: '94%',
  },

  careHeroBottomRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 19,
  },

  careHeroPriceLabel: {
    color: '#BDECEF',
    fontSize: 10,
    fontWeight: '700',
  },

  careHeroPrice: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    marginTop: 1,
  },

  careHeroDuration: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },

  careHeroDurationText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  careHighlightsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    minHeight: 82,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#D9EFF1',
  },

  careHighlightItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  careHighlightIcon: {
    width: 36,
    height: 36,
    borderRadius: 13,
    backgroundColor: '#E8F8F9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  careHighlightText: {
    color: '#466A76',
    fontSize: 10,
    fontWeight: '800',
  },

  careHighlightDivider: {
    width: 1,
    height: 35,
    backgroundColor: '#DCEDEF',
  },

  carePageSectionLabel: {
    color: '#087F8C',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 9,
    marginLeft: 3,
  },

  detailSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    padding: 17,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E1F0F2',
  },

  detailSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  detailSectionIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: '#E8F8F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  detailSectionTitle: {
    color: '#123F56',
    fontSize: 16,
    fontWeight: '900',
    flex: 1,
  },

  detailSectionText: {
    color: '#607986',
    fontSize: 13,
    lineHeight: 21,
  },

  careSafetyCard: {
    backgroundColor: '#E7F8F8',
    borderRadius: 19,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11,
    marginTop: 2,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#CBEDEE',
  },

  careSafetyIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  careSafetyTitle: {
    color: '#0B6570',
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 3,
  },

  careSafetyText: {
    color: '#54737D',
    fontSize: 11,
    lineHeight: 17,
  },

  careBookButton: {
    minHeight: 66,
    borderRadius: 20,
    backgroundColor: '#087F8C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 10,
    gap: 11,
    elevation: 5,
    shadowColor: '#087F8C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  careBookButtonIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  careBookButtonTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  careBookButtonSubtitle: {
    color: '#C9F0F2',
    fontSize: 10,
    marginTop: 2,
  },

  careBottomSpace: {
    height: 105,
  },

  /* Legacy detail styles retained for equipment and existing screens */

  detailTitle: {
    color: '#143C57',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },

  detailPrice: {
    color: '#087B89',
    fontSize: 24,
    fontWeight: '900',
  },

  duration: {
    color: '#687E89',
    fontSize: 13,
    marginLeft: 8,
  },

  bookButton: {
    height: 57,
    borderRadius: 17,
    backgroundColor: '#087C8A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 5,
    marginBottom: 20,
  },

  bookButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '900',
  },

  equipmentDetail: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    marginBottom: 18,
  },

  bigEquipmentIcon: {
    width: 115,
    height: 115,
    borderRadius: 35,
    backgroundColor: '#FFF0DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  equipmentDescription: {
    color: '#637A86',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 15,
  },

  bookingSummary: {
    backgroundColor: '#E5F7F5',
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
  },

  bookingSummaryLabel: {
    color: '#4A7580',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },

  bookingSummaryName: {
    color: '#153E57',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 6,
  },

  bookingSummaryPrice: {
    color: '#087B89',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 4,
  },

  formHeading: {
    color: '#173D57',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 11,
    marginTop: 5,
  },

  bookingPickerButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E7EC',
    borderRadius: 16,
    minHeight: 70,
    paddingHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingPickerButtonSelected: {
    borderColor: '#8ACDD3',
    backgroundColor: '#F3FBFC',
  },
  bookingPickerLabel: {
    fontSize: 11.5,
    fontWeight: '800',
    color: '#71869A',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  bookingPickerValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#173E56',
  },

  segment: {
    backgroundColor: '#E1F1F3',
    borderRadius: 15,
    padding: 4,
    flexDirection: 'row',
    marginBottom: 17,
  },

  segmentButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },

  segmentActive: {
    backgroundColor: '#087B89',
  },

  segmentText: {
    color: '#17617B',
    fontWeight: '800',
  },

  segmentTextActive: {
    color: '#fff',
  },

  inputGroup: {
    marginBottom: 13,
  },

  inputLabel: {
    color: '#315B72',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 7,
    marginLeft: 2,
  },

  formInputBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    minHeight: 55,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E8EB',
  },

  formInput: {
    flex: 1,
    color: '#173E56',
    fontSize: 14,
    marginLeft: 10,
  },

  savedAddressesScroll: {
    paddingBottom: 28,
  },

  savedAddressHero: {
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#D4EEEE',
  },

  savedAddressHeroIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  savedAddressHeroTitle: {
    color: '#173E56',
    fontSize: 17,
    fontWeight: '900',
  },

  savedAddressHeroText: {
    color: '#607C8B',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  addressSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  addressSectionTitle: {
    color: '#173E56',
    fontSize: 18,
    fontWeight: '900',
  },

  addressSectionSubtitle: {
    color: '#78909C',
    fontSize: 11.5,
    marginTop: 3,
  },

  addressCountPill: {
    minWidth: 43,
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: '#E6F7F5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  addressCountText: {
    color: '#087F8C',
    fontSize: 12,
    fontWeight: '900',
  },

  savedAddressModernCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DCEBED',
    shadowColor: '#0B6C7C',
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  savedAddressTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  savedAddressLocationIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#E4F7F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  savedAddressTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 7,
    paddingRight: 4,
  },

  savedAddressModernTitle: {
    color: '#173E56',
    fontSize: 15,
    fontWeight: '900',
  },

  defaultAddressBadge: {
    height: 23,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#E2F7F2',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  defaultAddressBadgeText: {
    color: '#087F8C',
    fontSize: 9.5,
    fontWeight: '900',
  },

  savedAddressModernText: {
    color: '#607C8B',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  addressMoreButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#F2F8F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },

  savedAddressDivider: {
    height: 1,
    backgroundColor: '#E9F0F2',
    marginTop: 14,
    marginBottom: 7,
  },

  savedAddressActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  addressActionButton: {
    flex: 1,
    minHeight: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingHorizontal: 3,
  },

  addressActionText: {
    color: '#087F8C',
    fontSize: 10.5,
    fontWeight: '900',
  },

  addressRemoveText: {
    color: '#D64A4A',
    fontSize: 10.5,
    fontWeight: '900',
  },

  addressActionDivider: {
    width: 1,
    height: 22,
    backgroundColor: '#E3ECEE',
  },

  savedAddressEmpty: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 28,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E1ECEE',
  },

  savedAddressEmptyIcon: {
    width: 82,
    height: 82,
    borderRadius: 28,
    backgroundColor: '#E4F7F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },

  savedAddressEmptyTitle: {
    color: '#173E56',
    fontSize: 18,
    fontWeight: '900',
  },

  savedAddressEmptyText: {
    color: '#71889A',
    fontSize: 12.5,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 7,
  },

  addAddressModernCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginTop: 3,
    borderWidth: 1,
    borderColor: '#DDEBED',
    shadowColor: '#0B6C7C',
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  addAddressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  addAddressIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: '#E4F7F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  addAddressTitle: {
    color: '#173E56',
    fontSize: 16,
    fontWeight: '900',
  },

  addAddressSubtitle: {
    color: '#78909C',
    fontSize: 11.5,
    marginTop: 3,
  },

  cancelEditButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#F1F6F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addressInputLabel: {
    color: '#496B7E',
    fontSize: 11.5,
    fontWeight: '900',
    marginBottom: 7,
  },

  addressModernInputBox: {
    minHeight: 94,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D4E3E7',
    backgroundColor: '#F9FCFC',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 13,
    paddingTop: 13,
  },

  addressModernInput: {
    flex: 1,
    color: '#173E56',
    fontSize: 13.5,
    lineHeight: 20,
    marginLeft: 9,
    padding: 0,
    minHeight: 70,
    textAlignVertical: 'top',
  },

  addressTipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FAF8',
    borderRadius: 12,
    padding: 10,
    marginTop: 10,
    gap: 7,
  },

  addressTipText: {
    flex: 1,
    color: '#5D777E',
    fontSize: 10.5,
    lineHeight: 15,
  },

  saveAddressModernButton: {
    minHeight: 52,
    borderRadius: 17,
    backgroundColor: '#087F8C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 13,
  },

  saveAddressModernButtonText: {
    color: '#FFFFFF',
    fontSize: 14.5,
    fontWeight: '900',
  },

  savedPaymentNewTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  paymentDefaultNewBadge: {
    backgroundColor: '#E0F5F2',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  paymentDefaultNewBadgeText: {
    color: '#087F8C',
    fontSize: 7,
    fontWeight: '900',
  },

  paymentMoreButtonNew: {
    width: 27,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
  },

  paymentPagePremiumContent: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 120,
  },

  paymentPremiumHero: {
    minHeight: 285,
    borderRadius: 30,
    paddingHorizontal: 19,
    paddingVertical: 22,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D5F0F0',
    flexDirection: 'row',
    shadowColor: '#087F8C',
    shadowOpacity: 0.10,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 4,
  },

  paymentPremiumHeroTextWrap: {
    flex: 1.55,
    justifyContent: 'center',
    zIndex: 2,
  },

  paymentPremiumEyebrow: {
    color: '#087F8C',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 9,
  },

  paymentPremiumTitle: {
    color: '#123D57',
    fontSize: 28,
    lineHeight: 33,
    fontWeight: '900',
    letterSpacing: -0.7,
  },

  paymentPremiumTitleAccent: {
    color: '#087F8C',
  },

  paymentPremiumSubtitle: {
    color: '#527489',
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 9,
    maxWidth: 220,
  },

  paymentPremiumTrustRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },

  paymentPremiumTrustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  paymentPremiumTrustText: {
    color: '#42697D',
    fontSize: 9.5,
    fontWeight: '800',
  },

  paymentPremiumTrustDivider: {
    width: 1,
    height: 18,
    backgroundColor: '#B9DFE0',
    marginHorizontal: 7,
  },

  paymentPremiumHeroVisual: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  paymentPremiumPhone: {
    width: 82,
    height: 148,
    borderRadius: 21,
    backgroundColor: '#0B8F98',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    transform: [{ rotate: '7deg' }],
    alignItems: 'center',
    paddingTop: 18,
    shadowColor: '#087F8C',
    shadowOpacity: 0.20,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  paymentPremiumPhoneTop: {
    width: 28,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#C9F4F1',
    marginBottom: 15,
  },

  paymentPremiumPhoneLine: {
    width: 48,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#D8F8F5',
    marginBottom: 8,
  },

  paymentPremiumPhoneLineSmall: {
    width: 33,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#B8EDE9',
  },

  paymentPremiumCardMini: {
    position: 'absolute',
    bottom: 25,
    left: 9,
    width: 64,
    height: 39,
    borderRadius: 10,
    backgroundColor: '#087F8C',
    borderWidth: 2,
    borderColor: '#C9F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paymentPremiumShield: {
    position: 'absolute',
    right: -2,
    bottom: 13,
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: '#11A6A4',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#087F8C',
    shadowOpacity: 0.20,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  paymentChoiceWallet: {
    minHeight: 184,
    borderRadius: 28,
    padding: 17,
    marginBottom: 16,
    backgroundColor: '#F2FCFA',
    borderWidth: 1.5,
    borderColor: '#C9EFEB',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#087F8C',
    shadowOpacity: 0.07,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  paymentChoiceCard: {
    minHeight: 184,
    borderRadius: 28,
    padding: 17,
    marginBottom: 18,
    backgroundColor: '#F4F8FF',
    borderWidth: 1.5,
    borderColor: '#CFE3FF',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#1768B1',
    shadowOpacity: 0.07,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  paymentChoiceWalletIconBox: {
    width: 72,
    height: 88,
    borderRadius: 22,
    backgroundColor: '#DDF8F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    position: 'relative',
  },

  paymentChoiceCardIconBox: {
    width: 72,
    height: 88,
    borderRadius: 22,
    backgroundColor: '#DCEBFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    position: 'relative',
  },

  paymentChoiceWalletRupee: {
    position: 'absolute',
    right: 7,
    bottom: 7,
    width: 25,
    height: 25,
    borderRadius: 10,
    backgroundColor: '#0A8B6E',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F2FCFA',
  },

  paymentChoiceWalletRupeeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  paymentChoiceCardPlus: {
    position: 'absolute',
    right: 7,
    bottom: 7,
    width: 25,
    height: 25,
    borderRadius: 10,
    backgroundColor: '#1768B1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F4F8FF',
  },

  paymentChoiceContent: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  paymentChoiceEyebrow: {
    color: '#4F8B83',
    fontSize: 8.5,
    fontWeight: '900',
    letterSpacing: 1.1,
  },

  paymentChoiceEyebrowCard: {
    color: '#517BA3',
    fontSize: 8.5,
    fontWeight: '900',
    letterSpacing: 1.1,
  },

  paymentChoiceTitle: {
    color: '#123D57',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 2,
  },

  paymentChoiceDescription: {
    color: '#688597',
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 4,
    paddingRight: 2,
  },

  paymentWalletBalancePill: {
    marginTop: 9,
    backgroundColor: '#DDF6F2',
    borderRadius: 14,
    paddingHorizontal: 11,
    paddingVertical: 7,
    alignSelf: 'flex-start',
  },

  paymentWalletBalanceAmount: {
    color: '#087F8C',
    fontSize: 17,
    fontWeight: '900',
  },

  paymentWalletBalanceLabel: {
    color: '#4E7D82',
    fontSize: 8.5,
    marginTop: 1,
  },

  paymentChoiceArrowWallet: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: '#159B9C',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },

  paymentChoiceArrowCard: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: '#1768B1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },

  cardBrandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
  },

  cardBrandVisa: {
    width: 40,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8E6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardBrandVisaText: {
    color: '#143E91',
    fontSize: 9,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  cardBrandMaster: {
    width: 40,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8E6F2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  cardBrandCircleOne: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#EB001B',
    marginRight: -3,
  },

  cardBrandCircleTwo: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#F79E1B',
  },

  cardBrandRupay: {
    width: 43,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8E6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardBrandRupayText: {
    color: '#1B5EAA',
    fontSize: 8,
    fontWeight: '900',
  },

  cardBrandAmex: {
    width: 40,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8E6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardBrandAmexText: {
    color: '#2471B8',
    fontSize: 7.5,
    fontWeight: '900',
  },

  paymentSavedSection: {
    marginTop: 2,
    marginBottom: 12,
  },

  paymentSavedTitle: {
    color: '#173E56',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 9,
  },

  paymentSavedCard: {
    minHeight: 66,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCECEF',
    paddingHorizontal: 11,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  paymentSavedIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#E8F6F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  paymentSavedMethodTitle: {
    color: '#173E56',
    fontSize: 12.5,
    fontWeight: '900',
  },

  paymentSavedMethodSubtitle: {
    color: '#78919D',
    fontSize: 9.5,
    marginTop: 3,
  },

  paymentSecurityNotePremium: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 3,
  },

  paymentSecurityNoteIcon: {
    width: 30,
    height: 30,
    borderRadius: 12,
    backgroundColor: '#18A6A0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  paymentSecurityNoteText: {
    flex: 1,
    color: '#668294',
    fontSize: 9.5,
    lineHeight: 14,
    textAlign: 'center',
  },

  walletFlowBalanceCard: {
    borderRadius: 20,
    backgroundColor: '#E6F8F4',
    borderWidth: 1,
    borderColor: '#C9ECE5',
    padding: 16,
    marginBottom: 15,
    alignItems: 'center',
  },

  walletFlowBalanceLabel: {
    color: '#4E7D82',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  walletFlowBalanceAmount: {
    color: '#087F8C',
    fontSize: 29,
    fontWeight: '900',
    marginTop: 3,
  },

  paymentFlowPageNew: {
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DCECEF',
    marginTop: 1,
  },

  paymentFlowBackNew: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 38,
    marginBottom: 9,
    gap: 7,
  },

  paymentFlowBackText: {
    color: '#365B75',
    fontSize: 12,
    fontWeight: '800',
  },

  paymentFlowHeroNew: {
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 12,
  },

  paymentFlowHeroIconNew: {
    width: 65,
    height: 65,
    borderRadius: 22,
    backgroundColor: '#E2F6F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
  },

  paymentFlowPageTitle: {
    color: '#173E56',
    fontSize: 21,
    fontWeight: '900',
    textAlign: 'center',
  },

  paymentFlowPageText: {
    color: '#6F8793',
    fontSize: 11.5,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 5,
  },

  paymentInfoNew: {
    backgroundColor: '#EEF9FA',
    borderRadius: 15,
    padding: 11,
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 7,
  },

  paymentInfoNewText: {
    flex: 1,
    color: '#557380',
    fontSize: 10.5,
    lineHeight: 16,
  },

  cardPreviewNew: {
    minHeight: 178,
    borderRadius: 22,
    padding: 20,
    marginBottom: 17,
    backgroundColor: '#0A6478',
    overflow: 'hidden',
  },

  cardPreviewNumber: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 1.3,
    marginTop: 37,
  },

  cardPreviewName: {
    color: '#D9F2F1',
    fontSize: 10.5,
    fontWeight: '800',
    marginTop: 18,
    textTransform: 'uppercase',
  },

  cardPreviewExpiry: {
    color: '#FFFFFF',
    fontSize: 10.5,
    position: 'absolute',
    right: 20,
    bottom: 22,
  },

  paymentInputLabelNew: {
    color: '#365B75',
    fontSize: 11.5,
    fontWeight: '900',
    marginBottom: 6,
    marginTop: 7,
  },

  paymentTextInputNew: {
    minHeight: 51,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D4E7EA',
    backgroundColor: '#FAFDFE',
    paddingHorizontal: 13,
    color: '#173E56',
    fontSize: 13,
  },

  cardFieldsRowNew: {
    flexDirection: 'row',
    gap: 10,
  },

  saveCardRowNew: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    gap: 8,
  },

  saveCardRowNewText: {
    color: '#456779',
    fontSize: 11.5,
    fontWeight: '700',
  },

  paymentPrimaryNew: {
    minHeight: 54,
    borderRadius: 16,
    backgroundColor: '#087F8C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 17,
    shadowColor: '#087F8C',
    shadowOpacity: 0.16,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  paymentPrimaryNewText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '900',
  },

  walletAmountGridNew: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },

  walletAmountNew: {
    width: '48%',
    minHeight: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D4E7EA',
    backgroundColor: '#FAFDFE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  walletAmountNewSelected: {
    backgroundColor: '#E1F7F4',
    borderColor: '#087F8C',
  },

  walletAmountNewText: {
    color: '#456779',
    fontSize: 13,
    fontWeight: '800',
  },

  walletAmountNewTextSelected: {
    color: '#087F8C',
    fontWeight: '900',
  },

  walletMethodNew: {
    minHeight: 53,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D4E7EA',
    backgroundColor: '#FAFDFE',
    paddingHorizontal: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  walletMethodNewSelected: {
    borderColor: '#087F8C',
    backgroundColor: '#EAF9F8',
  },

  walletMethodNewText: {
    flex: 1,
    color: '#365B75',
    fontSize: 12.5,
    fontWeight: '800',
  },

  walletDemoNote: {
    color: '#7A909B',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 10,
  },

  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 17,
    marginBottom: 12,
  },

  notificationRoot: {
    flex: 1,
    backgroundColor: '#F4FBFD',
  },

  notificationHero: {
    minHeight: 155,
    overflow: 'hidden',
    position: 'relative',
  },

  notificationHeroTop: {
    height: 82,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  notificationHeroCenter: {
    flex: 1,
    alignItems: 'center',
  },

  notificationHeroEyebrow: {
    color: '#BFEFF1',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2.5,
    marginBottom: 2,
  },

  notificationClearButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationHeroGlowOne: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255,255,255,0.08)',
    right: -35,
    top: 25,
  },

  notificationHeroGlowTwo: {
    position: 'absolute',
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: 'rgba(191,239,241,0.10)',
    left: -30,
    bottom: -38,
  },

  notificationBody: {
    flex: 1,
    marginTop: -22,
    backgroundColor: '#F4FBFD',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
  },

  notificationTrackCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 14, borderWidth: 1, borderColor: '#DCEBED', shadowColor: '#087F8C', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 3 }, elevation: 2 },

  notificationTrackIcon: { width: 46, height: 46, borderRadius: 15, backgroundColor: '#E4F7F6', alignItems: 'center', justifyContent: 'center', marginRight: 10 },

  notificationTrackTitle: { color: '#173E56', fontSize: 15, fontWeight: '900' },

  notificationTrackText: { color: '#7B8F9C', fontSize: 10.5, marginTop: 2, marginBottom: 8 },

  notificationTrackInputRow: { minHeight: 45, borderRadius: 13, borderWidth: 1, borderColor: '#DCE7EC', backgroundColor: '#FBFDFE', flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingRight: 4 },

  notificationTrackInput: { flex: 1, color: '#173E56', fontSize: 12, fontWeight: '700', marginLeft: 7 },

  notificationTrackButton: { width: 39, height: 37, borderRadius: 11, backgroundColor: '#087F8C', alignItems: 'center', justifyContent: 'center' },

  notificationStatusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E0EFF1',
    shadowColor: '#087F8C',
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  notificationStatusIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#E5F7F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  notificationStatusTitle: {
    color: '#123F61',
    fontSize: 15,
    fontWeight: '900',
  },

  notificationStatusText: {
    color: '#71869A',
    fontSize: 11,
    lineHeight: 16,
    marginTop: 3,
  },

  notificationCardNew: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2EEF0',
    shadowColor: '#123F61',
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  notificationItemIconNew: {
    width: 54,
    height: 54,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  notificationBookingIcon: {
    backgroundColor: '#DDF6F5',
  },

  notificationTrackingIcon: {
    backgroundColor: '#E5F0FF',
  },

  notificationNewTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationItemTitleNew: {
    flex: 1,
    color: '#123F61',
    fontSize: 15,
    fontWeight: '900',
  },

  notificationNewBadge: {
    backgroundColor: '#E1F8F0',
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 4,
    marginLeft: 7,
  },

  notificationNewBadgeText: {
    color: '#008363',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  notificationItemTextNew: {
    color: '#637984',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },

  notificationNewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 9,
  },

  notificationItemTimeNew: {
    color: '#98A9B3',
    fontSize: 10,
    fontWeight: '700',
  },

  notificationEmptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingBottom: 90,
  },

  notificationEmptyIcon: {
    width: 92,
    height: 92,
    borderRadius: 32,
    backgroundColor: '#DDF6F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },

  notificationEmptyTitle: {
    color: '#123F61',
    fontSize: 21,
    fontWeight: '900',
    textAlign: 'center',
  },

  notificationEmptyText: {
    color: '#71869A',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 8,
    maxWidth: 310,
  },

  notificationHomeButton: {
    marginTop: 20,
    height: 48,
    paddingHorizontal: 21,
    borderRadius: 16,
    backgroundColor: '#087F8C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  notificationHomeButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  notificationBackButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FFFFFF22',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationPageTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
  },

  notificationContent: {
    padding: 16,
    paddingBottom: 150,
  },

  profilePageRoot: {
    flex: 1,
    backgroundColor: '#EAF8F8',
  },

  profilePageBackground: {
    flex: 1,
  },

  profileSafeArea: {
    flex: 1,
  },

  profileTopHeader: {
    minHeight: 112,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profileBackButton: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileHeaderCenter: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  profilePageTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
  },

  profilePageSubtitle: {
    color: '#D8F1F3',
    fontSize: 13,
    marginTop: 4,
  },

  profileNotificationButton: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  profileNotificationDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F04B65',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },

  profilePageContent: {
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 150,
  },

  profileSummaryCard: {
    backgroundColor: 'rgba(250,254,255,0.98)',
    borderRadius: 25,
    padding: 16,
    marginBottom: 14,
    overflow: 'hidden',
    shadowColor: '#006B79',
    shadowOpacity: 0.12,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 7 },
    elevation: 6,
  },

  profileSummaryTop: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 145,
  },

  profileAvatarWrap: {
    width: 104,
    height: 104,
    marginRight: 13,
    position: 'relative',
  },

  profileAvatarLarge: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#DDF3F6',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#087F8C',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  personalInfoRoot: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  personalInfoHeader: {
    paddingTop: Platform.OS === 'ios' ? 52 : 36,
    paddingBottom: 20,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  personalInfoBack: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  personalInfoHeaderText: {
    flex: 1,
    marginLeft: 14,
  },

  personalInfoTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',
  },

  personalInfoSubtitle: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 12,
    marginTop: 4,
  },

  personalInfoHeaderIcon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  personalInfoContent: {
    padding: 17,
    paddingBottom: 35,
  },

  personalInfoProfileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#3E215B',
    shadowOpacity: 0.10,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  personalInfoPhotoRing: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: '#CDECEF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  personalInfoPhoto: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#E6F7F8',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  personalInfoPhotoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 39,
  },

  personalInfoCamera: {
    position: 'absolute',
    right: -2,
    bottom: -1,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#087F8C',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  personalInfoProfileText: {
    flex: 1,
    marginLeft: 14,
  },

  personalInfoWelcome: {
    fontSize: 11,
    fontWeight: '800',
    color: '#087F8C',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  personalInfoName: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: '800',
    color: '#173E56',
  },

  personalInfoPhone: {
    marginTop: 4,
    fontSize: 12,
    color: '#587789',
  },

  personalInfoVerified: {
    position: 'absolute',
    right: 15,
    top: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F7F5',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  personalInfoVerifiedText: {
    marginLeft: 4,
    fontSize: 10,
    fontWeight: '800',
    color: '#087F8C',
  },

  personalInfoPhotoHint: {
    marginTop: 12,
    marginBottom: 15,
    backgroundColor: '#E1F5F7',
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  personalInfoPhotoHintText: {
    flex: 1,
    marginLeft: 9,
    fontSize: 12,
    lineHeight: 17,
    color: '#3F6870',
  },

  personalInfoSectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 17,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E2EEF1',
  },

  personalInfoSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  personalInfoSectionIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#E1F5F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  personalInfoSectionIconTeal: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#E4F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  personalInfoSectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#173E56',
  },

  personalInfoSectionSubtitle: {
    marginTop: 3,
    fontSize: 11,
    color: '#6E8792',
  },

  personalInfoLabel: {
    marginTop: 11,
    marginBottom: 7,
    fontSize: 12,
    fontWeight: '800',
    color: '#365B75',
  },

  personalInfoInputWrap: {
    minHeight: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D5E8EC',
    backgroundColor: '#F9FCFD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  personalInfoDisabledWrap: {
    backgroundColor: '#EDF5F6',
    borderColor: '#D8E7EA',
  },

  personalInfoInput: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    color: '#173E56',
    fontSize: 14,
  },

  personalInfoDisabledInput: {
    color: '#6D8490',
  },

  personalInfoFieldNote: {
    marginTop: 6,
    fontSize: 10,
    lineHeight: 15,
    color: '#7B929D',
  },

  personalInfoGenderRow: {
    flexDirection: 'row',
    gap: 8,
  },

  personalInfoGenderButton: {
    flex: 1,
    minHeight: 47,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#CFE7EA',
    backgroundColor: '#F9FCFD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  personalInfoGenderButtonSelected: {
    backgroundColor: '#0A9AA4',
    borderColor: '#0A9AA4',
  },

  personalInfoGenderText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0A9AA4',
  },

  personalInfoGenderTextSelected: {
    color: '#FFFFFF',
  },

  personalInfoSecurityCard: {
    backgroundColor: '#E6F7F5',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#C9E9E8',
  },

  personalInfoSecurityIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  personalInfoSecurityTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#155D64',
  },

  personalInfoSecurityText: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 16,
    color: '#4C777D',
  },

  personalInfoSaveButton: {
    minHeight: 54,
    borderRadius: 16,
    backgroundColor: '#0A9AA4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    shadowColor: '#0A9AA4',
    shadowOpacity: 0.20,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  personalInfoSaveText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  personalInfoFooter: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 11,
    color: '#7B929D',
  },

  profileAvatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 52,
  },

  profileCameraButton: {
    position: 'absolute',
    right: -2,
    bottom: 1,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#087F8C',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIdentity: {
    flex: 1,
    justifyContent: 'center',
  },

  profileSummaryName: {
    color: '#123F5D',
    fontSize: 21,
    fontWeight: '900',
  },

  profileSummaryPhone: {
    color: '#617B88',
    fontSize: 14,
    marginTop: 4,
  },

  profileGreeting: {
    width: 86,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },

  profileGreetingText: {
    color: '#087F8C',
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  profileStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DCECEF',
    marginTop: 8,
    paddingTop: 12,
    paddingHorizontal: 2,
  },

  profileStat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minWidth: 0,
  },

  profileStatDivider: {
    width: 1,
    height: 34,
    backgroundColor: '#CFE1E6',
  },

  profileStatTextWrap: {
    flex: 1,
    minWidth: 0,
  },

  profileStatLabel: {
    color: '#4B687B',
    fontSize: 8.5,
    lineHeight: 11,
    flexShrink: 1,
  },

  profileStatValue: {
    color: '#173E56',
    fontSize: 10.5,
    lineHeight: 13,
    fontWeight: '900',
    marginTop: 1,
    flexShrink: 1,
  },

  profileLeafOne: {
    position: 'absolute',
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: 'rgba(77,191,179,0.07)',
    left: -45,
    top: -30,
  },

  profileLeafTwo: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(91,194,219,0.06)',
    right: 65,
    top: -55,
  },

  profileCatalogHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 4,
  },

  profileCatalogTitle: {
    color: '#123F5D',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: -0.2,
  },

  profileCatalogSubtitle: {
    color: '#6A8490',
    fontSize: 11.5,
    marginTop: 3,
    letterSpacing: 0.15,
  },

  profileCatalogBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#E6F7F7',
    borderWidth: 1,
    borderColor: '#CBEAEC',
    borderRadius: 16,
    paddingHorizontal: 9,
    paddingVertical: 7,
  },

  profileCatalogBadgeText: {
    color: '#087F8C',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
  },

  profileOptionsCard: {
    backgroundColor: 'rgba(250,253,255,0.98)',
    borderRadius: 24,
    padding: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2EEF1',
    shadowColor: '#0B6C7C',
    shadowOpacity: 0.08,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  profileModernOption: {
    minHeight: 82,
    borderRadius: 17,
    paddingHorizontal: 10,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(218,233,238,0.85)',
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 4,
  },

  profileModernIcon: {
    width: 57,
    height: 57,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  profileModernText: {
    flex: 1,
    paddingRight: 7,
  },

  profileModernTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profileModernTitle: {
    color: '#173E56',
    fontSize: 15.5,
    fontWeight: '900',
    letterSpacing: -0.15,
  },

  profileModernSubtitle: {
    color: '#526F82',
    fontSize: 11.5,
    lineHeight: 16,
    marginTop: 3,
  },

  profileHealthBanner: {
    minHeight: 205,
    backgroundColor: '#DDF6F4',
    borderRadius: 25,
    padding: 17,
    marginBottom: 13,
    overflow: 'hidden',
    flexDirection: 'row',
    position: 'relative',
    shadowColor: '#087F8C',
    shadowOpacity: 0.09,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  profileHealthCopy: {
    width: '48%',
    zIndex: 4,
  },

  profileHealthTitle: {
    color: '#123F5D',
    fontSize: 23,
    lineHeight: 26,
    fontWeight: '900',
  },

  profileHealthSubtitle: {
    color: '#456779',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 8,
  },

  profileExploreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#0A9AA4',
    borderRadius: 23,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 14,
  },

  profileExploreText: {
    color: '#FFFFFF',
    fontSize: 12.5,
    fontWeight: '900',
  },

  profileHealthIllustration: {
    position: 'absolute',
    width: 150,
    height: 160,
    left: '39%',
    top: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileHealthHeart: {
    width: 82,
    height: 72,
    borderRadius: 30,
    backgroundColor: '#11A9AE',
    transform: [{ rotate: '45deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#087F8C',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  profileMedicalIcon: {
    position: 'absolute',
    opacity: 0.82,
  },

  profileHealthLeaves: {
    position: 'absolute',
    top: 5,
    right: 8,
    flexDirection: 'row',
    gap: 4,
  },

  profileHealthBenefits: {
    position: 'absolute',
    right: 9,
    top: 24,
    width: 104,
    gap: 15,
  },

  profileHealthBenefit: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  profileHealthBenefitText: {
    color: '#27596B',
    fontSize: 9.5,
    lineHeight: 13,
    fontWeight: '700',
  },

  profileLogoutModern: {
    height: 52,
    borderRadius: 17,
    backgroundColor: '#FFF0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 5,
  },

  profileLogoutText: {
    color: '#D73535',
    fontSize: 14,
    fontWeight: '900',
  },

  supportPageRoot: {
    flex: 1,
    backgroundColor: '#F4FBFC',
  },

  supportPageBackground: {
    flex: 1,
  },

  supportSafeArea: {
    flex: 1,
  },

  supportTopHeader: {
    minHeight: 126,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  supportBackButton: {
    width: 48,
    height: 48,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.28)',
  },

  supportHeaderCenter: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  supportHeaderPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
  },

  supportOnlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#B7F4D7',
    marginRight: 6,
  },

  supportHeaderPillText: {
    color: '#DFFAF8',
    fontSize: 8.5,
    fontWeight: '900',
    letterSpacing: 1.2,
  },

  supportPageTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -0.7,
    marginTop: 7,
  },

  supportPageSubtitle: {
    color: '#D7F0F2',
    fontSize: 11.5,
    marginTop: 3,
    textAlign: 'center',
  },

  supportPageContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 115,
  },

  supportAIHero: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 18,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#CDEEEF',
    shadowColor: '#075A70',
    shadowOpacity: 0.10,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
  },

  supportAIHeroGlow: {
    position: 'absolute',
    width: 145,
    height: 145,
    borderRadius: 73,
    right: -45,
    top: -55,
    backgroundColor: '#DFF8F6',
  },

  supportAIIconLarge: {
    width: 78,
    height: 78,
    borderRadius: 25,
    backgroundColor: '#E3F8F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#C8ECEA',
  },

  supportAIKicker: {
    color: '#087F8C',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.1,
  },

  supportAIHeroTitle: {
    color: '#123D57',
    fontSize: 21,
    lineHeight: 25,
    fontWeight: '900',
    marginTop: 4,
  },

  supportAIHeroText: {
    color: '#607C8B',
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 5,
  },

  supportAIStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },

  supportAIStatusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#16A875',
    marginRight: 5,
  },

  supportAIStatusText: {
    color: '#5B7887',
    fontSize: 9.5,
    fontWeight: '800',
  },

  supportAIStatusDivider: {
    width: 1,
    height: 13,
    backgroundColor: '#D4E7E9',
    marginHorizontal: 8,
  },

  supportSectionTitle: {
    color: '#123D57',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 10,
    marginLeft: 3,
  },

  supportQuickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  supportQuickCard: {
    width: '48.5%',
    minHeight: 91,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    padding: 12,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: '#D7ECEE',
    shadowColor: '#075A70',
    shadowOpacity: 0.045,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  supportQuickIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: '#E5F8F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },

  supportQuickTitle: {
    color: '#173E56',
    fontSize: 12.5,
    fontWeight: '900',
  },

  supportContactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    minHeight: 91,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#D5ECEE',
    shadowColor: '#075A70',
    shadowOpacity: 0.055,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  supportContactIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#E1F7F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CBEDEA',
  },

  supportContactTitle: {
    color: '#173E56',
    fontSize: 14,
    fontWeight: '900',
  },

  supportContactNumber: {
    color: '#087F8C',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 2,
  },

  supportContactSubtext: {
    color: '#71889A',
    fontSize: 10.5,
    marginTop: 2,
  },

  supportCallBadge: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#087F8C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  supportAINameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  supportAIBadge: {
    backgroundColor: '#B9F2EC',
    borderRadius: 7,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  supportAIBadgeText: {
    color: '#075A70',
    fontSize: 8,
    fontWeight: '900',
  },

  supportEmergencyCard: {
    backgroundColor: '#FFF8F8',
    borderRadius: 22,
    minHeight: 88,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#FFDCDC',
  },

  supportEmergencyIcon: {
    width: 53,
    height: 53,
    borderRadius: 17,
    backgroundColor: '#D73535',
    alignItems: 'center',
    justifyContent: 'center',
  },

  supportEmergencyTitle: {
    color: '#A52222',
    fontSize: 14,
    fontWeight: '900',
  },

  supportEmergencyText: {
    color: '#8A5C5C',
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 3,
  },

  addressTypeSelector: {
    flexDirection: 'row',
    backgroundColor: '#F4FAFB',
    borderRadius: 18,
    padding: 5,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#DCECEF',
    gap: 5,
  },

  addressTypeOption: {
    flex: 1,
    minHeight: 82,
    borderRadius: 14,
    paddingVertical: 9,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1ECEF',
  },

  addressTypeOptionSelected: {
    backgroundColor: '#087F8C',
    borderColor: '#087F8C',
  },

  addressTypeOptionTitle: {
    color: '#123F61',
    fontSize: 13,
    fontWeight: '900',
    marginTop: 4,
  },

  addressTypeOptionTitleSelected: {
    color: '#FFFFFF',
  },

  addressTypeOptionSubtitle: {
    color: '#8AA0AC',
    fontSize: 10,
    marginTop: 2,
  },

  addressTypeOptionSubtitleSelected: {
    color: '#DDF7F7',
  },

  supportChatLauncher: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    minHeight: 92,
    padding: 13,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#D9ECEE',
  },

  supportChatLauncherIcon: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#087F8C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  supportChatLauncherTitle: {
    color: '#173E56',
    fontSize: 14.5,
    fontWeight: '900',
  },

  supportChatLauncherText: {
    color: '#71889A',
    fontSize: 11.5,
    lineHeight: 16,
    marginTop: 4,
  },

  supportChatModalRoot: {
    flex: 1,
    backgroundColor: '#F4FAFB',
  },

  supportChatModalHeader: {
    minHeight: Platform.OS === 'android' ? 94 + (StatusBar.currentHeight || 24) : 94,
  },

  supportChatModalHeaderSafe: {
    flex: 1,
    minHeight: 94,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 24) + 4 : 8,
    paddingBottom: 8,
    gap: 8,
  },

  supportChatCloseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  supportChatHeaderIcon: {
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  supportChatModalTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  supportChatOnlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  supportChatModalSubtitle: {
    color: '#D7F4F2',
    fontSize: 9.5,
  },

  supportEndChatButton: {
    minHeight: 36,
    paddingHorizontal: 10,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.30)',
    backgroundColor: 'rgba(255,255,255,0.11)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  supportEndChatButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },

  supportChatMessages: {
    padding: 14,
    paddingBottom: 28,
  },

  supportChatIntroCard: {
    backgroundColor: '#E9F8F7',
    borderRadius: 16,
    padding: 11,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 7,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#CDECEA',
  },

  supportChatIntroText: {
    flex: 1,
    color: '#486E7C',
    fontSize: 10.5,
    lineHeight: 16,
  },

  supportChatMessageRow: {
    flexDirection: 'row',
    marginBottom: 11,
    alignItems: 'flex-end',
  },

  supportChatUserRow: {
    justifyContent: 'flex-end',
  },

  supportChatBotRow: {
    justifyContent: 'flex-start',
  },

  supportChatBotAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#DDF6F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  supportChatBubble: {
    maxWidth: '84%',
    borderRadius: 18,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },

  supportChatBotBubble: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCECEF',
    borderBottomLeftRadius: 5,
  },

  supportChatUserBubble: {
    backgroundColor: '#087F8C',
    borderBottomRightRadius: 5,
  },

  supportChatBubbleText: {
    fontSize: 12.5,
    lineHeight: 18,
  },

  supportChatBotBubbleText: {
    color: '#294E61',
  },

  supportChatUserBubbleText: {
    color: '#FFFFFF',
  },

  supportChatSuggestionTitle: {
    color: '#607C8B',
    fontSize: 10.5,
    fontWeight: '900',
    marginTop: 2,
    marginBottom: 7,
    marginLeft: 37,
  },

  supportChatSuggestionRow: {
    marginLeft: 37,
    marginBottom: 12,
  },

  supportChatSuggestion: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4E9EB',
    borderRadius: 14,
    paddingHorizontal: 11,
    paddingVertical: 8,
    marginBottom: 6,
  },

  supportChatSuggestionText: {
    color: '#17647D',
    fontSize: 10.5,
    fontWeight: '800',
  },

  supportChatAgentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 11,
    marginTop: 3,
    marginLeft: 37,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    borderWidth: 1,
    borderColor: '#C9EAE8',
  },

  supportChatAgentIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#E7F8F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  supportChatAgentTitle: {
    color: '#173E56',
    fontSize: 12,
    fontWeight: '900',
  },

  supportChatAgentText: {
    color: '#607C8B',
    fontSize: 10,
    lineHeight: 14,
    marginTop: 2,
  },

  supportChatAgentButton: {
    backgroundColor: '#087F8C',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },

  supportChatAgentButtonText: {
    color: '#FFFFFF',
    fontSize: 10.5,
    fontWeight: '900',
  },

  supportAttachmentPreview: {
    backgroundColor: '#EAF8F7',
    borderTopWidth: 1,
    borderTopColor: '#DCECEF',
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  supportAttachmentText: {
    flex: 1,
    color: '#315D6C',
    fontSize: 11.5,
    fontWeight: '700',
  },

  supportAttachmentRemove: {
    width: 28,
    height: 28,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  supportChatMediaButton: {
    width: 40,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#EAF8F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D2EDEC',
  },

  supportChatInputArea: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DCECEF',
    paddingHorizontal: 10,
    paddingTop: 9,
    paddingBottom: Platform.OS === 'ios' ? 10 : 9,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },

  supportChatInput: {
    flex: 1,
    maxHeight: 92,
    minHeight: 44,
    backgroundColor: '#F1F7F8',
    borderRadius: 16,
    paddingHorizontal: 13,
    paddingTop: 11,
    paddingBottom: 10,
    color: '#173E56',
    fontSize: 12.5,
    borderWidth: 1,
    borderColor: '#DCECEF',
  },

  supportChatSendButton: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#087F8C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  supportBottomInfo: {
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderRadius: 17,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },

  supportBottomInfoText: {
    flex: 1,
    color: '#5E7786',
    fontSize: 10.5,
    lineHeight: 16,
  },

  privacyPageRoot: { flex: 1, backgroundColor: '#F6FBFC' },

  privacyPageBackground: { flex: 1 },

  privacySafeArea: { flex: 1 },

  privacyTopHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 7, paddingBottom: 13 },

  privacyBackButton: { width: 48, height: 48, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.18)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.28)', alignItems: 'center', justifyContent: 'center' },

  privacyHeaderCenter: { flex: 1, alignItems: 'center', paddingHorizontal: 8 },

  privacyPageTitle: { color: '#FFFFFF', fontSize: 23, fontWeight: '900' },

  privacyPageSubtitle: { color: '#DDF7F6', fontSize: 11.5, fontWeight: '600', marginTop: 3, textAlign: 'center' },

  privacyPageContent: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 28 },

  privacySecurityHero: { borderRadius: 28, overflow: 'hidden', marginBottom: 17, shadowColor: '#075A70', shadowOpacity: 0.10, shadowRadius: 14, shadowOffset: { width: 0, height: 6 }, elevation: 4 },

  privacySecurityHeroInner: { padding: 23, alignItems: 'center', borderWidth: 1, borderColor: '#CDEEEF', borderRadius: 28 },

  privacySecurityHeroIcon: { width: 76, height: 76, borderRadius: 25, backgroundColor: '#DDF6F4', alignItems: 'center', justifyContent: 'center', marginBottom: 13 },

  privacySecurityHeroTitle: { color: '#123D57', fontSize: 22, fontWeight: '900', textAlign: 'center' },

  privacySecurityHeroText: { color: '#698395', fontSize: 12, lineHeight: 18, textAlign: 'center', marginTop: 7 },

  privacySecurityTrustRow: { flexDirection: 'row', marginTop: 17, gap: 8 },

  privacySecurityTrustItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E8F8F7', borderRadius: 16, paddingHorizontal: 11, paddingVertical: 8, gap: 5 },

  privacySecurityTrustText: { color: '#087F8C', fontSize: 10.5, fontWeight: '900' },

  privacySecuritySectionTitle: { color: '#123D57', fontSize: 17, fontWeight: '900', marginBottom: 9, marginLeft: 3 },

  privacySecurityCard: { backgroundColor: '#FFFFFF', borderRadius: 22, paddingHorizontal: 14, marginBottom: 17, borderWidth: 1, borderColor: '#D9EFF0', shadowColor: '#0B5B6B', shadowOpacity: 0.06, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 2 },

  privacySecurityRow: { minHeight: 77, flexDirection: 'row', alignItems: 'center', gap: 11 },

  privacySecurityIconBox: { width: 48, height: 48, borderRadius: 15, backgroundColor: '#E5F8F6', alignItems: 'center', justifyContent: 'center' },

  privacySecurityRowTitle: { color: '#173E56', fontSize: 13.5, fontWeight: '900' },

  privacySecurityRowText: { color: '#708898', fontSize: 11, lineHeight: 16, marginTop: 3 },

  privacySecurityStatus: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#087F8C', alignItems: 'center', justifyContent: 'center' },

  privacySecurityDivider: { height: 1, backgroundColor: '#E6F0F2', marginLeft: 59 },

  privacySecurityFormCard: { backgroundColor: '#FFFFFF', borderRadius: 22, padding: 15, marginBottom: 14, borderWidth: 1, borderColor: '#D9EFF0', shadowColor: '#0B5B6B', shadowOpacity: 0.06, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 2 },

  privacySecurityFormHeader: { flexDirection: 'row', alignItems: 'center', gap: 11, marginBottom: 12 },

  privacySecurityInput: { height: 50, borderRadius: 15, backgroundColor: '#F5FAFB', borderWidth: 1, borderColor: '#CFE7EA', paddingHorizontal: 15, color: '#173E56', fontSize: 13, fontWeight: '800', letterSpacing: 1 },

  privacySecuritySaveButton: { height: 46, borderRadius: 15, backgroundColor: '#087F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 7, marginTop: 10 },

  privacySecuritySaveButtonText: { color: '#FFFFFF', fontSize: 12.5, fontWeight: '900' },

  privacySecurityFamilyCard: { backgroundColor: '#FFFFFF', borderRadius: 22, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#D9EFF0', shadowColor: '#0B5B6B', shadowOpacity: 0.06, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 2 },

  privacySecurityFamilyHeader: { flexDirection: 'row', alignItems: 'center', gap: 11 },

  privacySecurityAddButton: { width: 42, height: 42, borderRadius: 14, backgroundColor: '#087F8C', alignItems: 'center', justifyContent: 'center' },

  privacySecurityEmptyFamily: { marginTop: 13, minHeight: 58, borderRadius: 16, backgroundColor: '#F5FAFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, borderWidth: 1, borderColor: '#E1EFF1' },

  privacySecurityEmptyFamilyText: { color: '#7B94A3', fontSize: 11.5, fontWeight: '700' },

  privacySecurityFamilyMemberRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 13, paddingTop: 13, borderTopWidth: 1, borderTopColor: '#E8F1F3' },

  privacySecurityFamilyAvatar: { width: 42, height: 42, borderRadius: 14, backgroundColor: '#E5F8F6', alignItems: 'center', justifyContent: 'center' },

  familyMemberActionRow: { flexDirection: 'row', alignItems: 'center', gap: 7 },

  familyMemberEditButton: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#E8F7F7', borderWidth: 1, borderColor: '#CDEBED', alignItems: 'center', justifyContent: 'center' },

  familyMemberDeleteButton: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#FFF1F1', borderWidth: 1, borderColor: '#F6CACA', alignItems: 'center', justifyContent: 'center' },

  familyMemberKeyboard: { width: '100%' },

  familyMemberModalBackdrop: { flex: 1, backgroundColor: 'rgba(8, 39, 55, 0.48)', justifyContent: 'flex-end' },

  familyMemberModalCard: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, paddingBottom: 28 },

  familyMemberModalHeader: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 },

  familyMemberModalTitle: { color: '#173E56', fontSize: 20, fontWeight: '900' },

  familyMemberModalSubtitle: { color: '#708898', fontSize: 11.5, marginTop: 4 },

  familyMemberModalClose: { width: 38, height: 38, borderRadius: 13, backgroundColor: '#EEF7F8', alignItems: 'center', justifyContent: 'center' },

  familyMemberInput: { height: 50, borderRadius: 15, backgroundColor: '#F5FAFB', borderWidth: 1, borderColor: '#CFE7EA', paddingHorizontal: 15, color: '#173E56', fontSize: 13, marginBottom: 10 },

  familyMemberSaveButton: { height: 51, borderRadius: 17, backgroundColor: '#087F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 5 },

  familyMemberSaveText: { color: '#FFFFFF', fontSize: 13, fontWeight: '900' },

  privacySecurityNotice: { flexDirection: 'row', alignItems: 'flex-start', gap: 9, backgroundColor: '#EAF7FB', borderRadius: 18, padding: 14, marginBottom: 15 },

  privacySecurityNoticeText: { flex: 1, color: '#547387', fontSize: 10.5, lineHeight: 16 },

  privacySecurityBackProfile: { height: 51, borderRadius: 25, backgroundColor: '#087F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 10, shadowColor: '#087F8C', shadowOpacity: 0.16, shadowRadius: 9, shadowOffset: { width: 0, height: 4 }, elevation: 3 },

  privacySecurityBackText: { color: '#FFFFFF', fontSize: 13.5, fontWeight: '900' },

  medicinePremiumHero: {
    minHeight: 220,
    borderRadius: 26,
    padding: 20,
    marginBottom: 15,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#087F8C',
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
  },

  medicinePremiumHeroGlow: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    right: -65,
    top: -60,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },

  medicinePremiumHeroIcon: {
    width: 58,
    height: 58,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },

  medicinePremiumEyebrow: {
    color: '#BDEDEA',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
    marginBottom: 5,
  },

  medicinePremiumTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    lineHeight: 31,
    fontWeight: '900',
    maxWidth: '92%',
  },

  medicinePremiumSubtitle: {
    color: '#E3F7F6',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 7,
    maxWidth: '94%',
  },

  medicinePremiumTrustRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 15,
    flexWrap: 'wrap',
  },

  medicinePremiumTrustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  medicinePremiumTrustText: {
    color: '#FFFFFF',
    fontSize: 10.5,
    fontWeight: '800',
  },

  medicineQuickActionRow: {
    marginTop: 14,
  },

  medicineQuickAction: {
    minHeight: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#D6ECEE',
    paddingHorizontal: 13,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#0B5B6B',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  medicineQuickActionIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#E4F8F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  medicineQuickActionTitle: {
    color: '#123D57',
    fontSize: 13,
    fontWeight: '900',
  },

  medicineQuickActionText: {
    color: '#6A8290',
    fontSize: 10,
    marginTop: 2,
  },

  medicineSectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  medicineSectionSubtext: {
    color: '#78909D',
    fontSize: 10.5,
    marginTop: 2,
  },

  medicineSecureBadge: {
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#E8F8F6',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  medicineSecureBadgeText: {
    color: '#087F8C',
    fontSize: 10,
    fontWeight: '900',
  },

  medicineCardArrow: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#EAF8F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  medicineEmptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#D9ECEE',
    alignItems: 'center',
    padding: 25,
    marginTop: 4,
  },

  medicineEmptyIcon: {
    width: 62,
    height: 62,
    borderRadius: 21,
    backgroundColor: '#E5F8F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  medicineEmptyTitle: {
    color: '#123D57',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 12,
  },

  medicineEmptyText: {
    color: '#6B8290',
    fontSize: 11,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 5,
  },

  medicineEmptyButton: {
    marginTop: 14,
    minHeight: 43,
    paddingHorizontal: 22,
    borderRadius: 22,
    backgroundColor: '#087F8C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  medicineEmptyButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },

  medicineModalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(8,44,59,0.46)',
    justifyContent: 'flex-end',
  },

  medicineModalSheet: {
    backgroundColor: '#F6FCFD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 24,
    maxHeight: '88%',
    shadowColor: '#123D57',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -7 },
    elevation: 20,
  },

  medicineModalHandle: {
    width: 44,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#C7D9DF',
    alignSelf: 'center',
    marginBottom: 13,
  },

  medicineModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  medicineModalTitleIcon: {
    width: 49,
    height: 49,
    borderRadius: 16,
    backgroundColor: '#E3F8F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  medicineModalTitle: {
    color: '#123D57',
    fontSize: 17,
    fontWeight: '900',
  },

  medicineModalSubtitle: {
    color: '#718794',
    fontSize: 10.5,
    marginTop: 2,
  },

  medicineModalClose: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#EAF2F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  medicinePrescriptionPanel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#D7ECEE',
    padding: 14,
    marginBottom: 12,
  },

  medicinePrescriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  medicinePrescriptionTitle: {
    color: '#123D57',
    fontSize: 14,
    fontWeight: '900',
  },

  medicinePrescriptionText: {
    color: '#718794',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 3,
  },

  medicineUploadButtons: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 12,
  },

  medicineUploadButton: {
    flex: 1,
    minHeight: 46,
    borderRadius: 14,
    backgroundColor: '#EAF8F7',
    borderWidth: 1,
    borderColor: '#CDEBE9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
  },

  medicineUploadButtonText: {
    color: '#087F8C',
    fontSize: 12,
    fontWeight: '900',
  },

  medicineUploadedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    padding: 10,
    borderRadius: 14,
    backgroundColor: '#EAF9F4',
  },

  medicineUploadedIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#0A9A7D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  medicineUploadedTitle: {
    color: '#123D57',
    fontSize: 11.5,
    fontWeight: '900',
  },

  medicineUploadedText: {
    color: '#6C8390',
    fontSize: 9.5,
    marginTop: 2,
  },

  medicineQuantityRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#D7ECEE',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  medicineQuantityTitle: {
    color: '#123D57',
    fontSize: 13,
    fontWeight: '900',
  },

  medicineQuantityText: {
    color: '#718794',
    fontSize: 9.5,
    marginTop: 3,
  },

  medicineQuantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF8F8',
    borderRadius: 14,
    padding: 3,
  },

  medicineQuantityButton: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  medicineQuantityInput: {
    width: 35,
    height: 36,
    color: '#123D57',
    fontSize: 14,
    fontWeight: '900',
  },

  medicineModalNote: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EAF7FB',
    borderRadius: 15,
    padding: 11,
    marginBottom: 13,
  },

  medicineModalNoteText: {
    flex: 1,
    color: '#5F7887',
    fontSize: 9.5,
    lineHeight: 15,
    marginLeft: 7,
  },

  medicineRequestButton: {
    minHeight: 54,
    borderRadius: 27,
    backgroundColor: '#087F8C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#087F8C',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  medicineRequestButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  medicinePageRoot: { flex: 1, backgroundColor: '#F4FBFD' },

  medicineSafeArea: { flex: 1 },

  medicinePageContent: { padding: 18, paddingBottom: 120 },

  medicineSearchBox: { height: 56, marginTop: 16, backgroundColor: '#FFFFFF', borderRadius: 18, borderWidth: 1, borderColor: '#D6ECEE', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 },

  medicineSearchInput: { flex: 1, marginLeft: 11, color: '#163E58', fontSize: 14 },

  medicineInfoBanner: { flexDirection: 'row', alignItems: 'center', marginTop: 14, backgroundColor: '#EAF9F8', borderRadius: 18, padding: 14, borderWidth: 1, borderColor: '#D2EFED' },

  medicineInfoIcon: { width: 42, height: 42, borderRadius: 14, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', marginRight: 11 },

  medicineInfoTitle: { color: '#123D57', fontSize: 13, fontWeight: '900' },

  medicineInfoText: { color: '#617B89', fontSize: 10, lineHeight: 15, marginTop: 2 },

  medicineSectionTitle: { color: '#123D57', fontSize: 17, fontWeight: '900', marginTop: 20, marginBottom: 10 },

  medicineCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#D9ECEE', flexDirection: 'row', shadowColor: '#0B5B6B', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 3 }, elevation: 2 },

  medicineCardIcon: { width: 62, height: 62, borderRadius: 19, backgroundColor: '#E7F8F7', alignItems: 'center', justifyContent: 'center', marginRight: 13 },

  medicineCardContent: { flex: 1 },

  medicineCardTitleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },

  medicineCardTitle: { color: '#123D57', fontSize: 15, fontWeight: '900', flex: 1, paddingRight: 8 },

  medicineCardDescription: { color: '#667F8E', fontSize: 11, lineHeight: 17, marginTop: 4 },

  medicineBadge: { alignSelf: 'flex-start', marginTop: 8, paddingHorizontal: 9, paddingVertical: 5, borderRadius: 9, backgroundColor: '#F0FAFA', flexDirection: 'row', alignItems: 'center', gap: 4 },

  medicineBadgeText: { color: '#087F8C', fontSize: 9, fontWeight: '900' },

  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#001D2A88',
  },

  sideMenu: {
    width: '82%',
    height: '100%',
    backgroundColor: '#F7FCFD',
    paddingTop: Platform.OS === 'ios' ? 52 : 28,
    paddingHorizontal: 20,
    shadowColor: '#123F55',
    shadowOpacity: 0.20,
    shadowRadius: 18,
    shadowOffset: { width: 5, height: 0 },
    elevation: 20,
  },

  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  menuLogo: {
    width: 185,
    height: 75,
  },

  menuWelcome: {
    color: '#173E56',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 15,
  },

  menuItem: {
    height: 57,
    borderBottomWidth: 1,
    borderBottomColor: '#E1EAEC',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },

  menuItemText: {
    flex: 1,
    color: '#173E56',
    fontSize: 15,
    fontWeight: '700',
  },

  menuBottom: {
    marginTop: 30,
    padding: 18,
    borderRadius: 17,
    backgroundColor: '#E2F5F4',
  },

  menuTagline: {
    color: '#087B89',
    fontWeight: '900',
    textAlign: 'center',
  },

  /* =========================================================
     TRACKING SCREEN STYLES
  ========================================================= */

  trackingContainer: {
    flex: 1,
    backgroundColor: '#EAF4F7',
    position: 'relative',
  },

  trackingMap: {
    flex: 1,
    width: '100%',
    zIndex: 0,
    elevation: 0,
  },

  trackingTopBar: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 24 : 28,
    left: 0,
    right: 0,
    height: 82,
    paddingHorizontal: 18,
    backgroundColor: '#087F8C',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1000,
    elevation: 1000,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  trackingBack: {
    width: 50,
    height: 50,
    zIndex: 1001,
    elevation: 1001,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.20)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  trackingTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 1,
  },

  trackingCard: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    zIndex: 15,
    elevation: 12,
    shadowColor: '#002B40',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
  },

  trackingStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  liveDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#18B77A',
    marginRight: 10,
  },

  trackingStatusTitle: {
    color: '#173E56',
    fontSize: 16,
    fontWeight: '800',
  },

  trackingStatusText: {
    color: '#71828C',
    fontSize: 12,
    marginTop: 3,
  },

  arrivalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  arrivalLabel: {
    color: '#71828C',
    fontSize: 12,
    fontWeight: '600',
  },

  arrivalTime: {
    color: '#087F8C',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 2,
  },

  callButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#087F8C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  coordinates: {
    color: '#365B75',
    fontSize: 12,
    marginTop: 12,
    fontWeight: '600',
  },

  trackingError: {
    color: '#C0392B',
    fontSize: 12,
    marginTop: 8,
  },

  /* Browser/Snack fallback because react-native-maps is not rendered on web */

  webTrackingMap: {
    flex: 1,
    backgroundColor: '#DCECEF',
    overflow: 'hidden',
    position: 'relative',
  },

  webMapGridOne: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '33%',
    width: 2,
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    transform: [{ rotate: '14deg' }],
  },

  webMapGridTwo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: '28%',
    width: 2,
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    transform: [{ rotate: '-18deg' }],
  },

  webRoadHorizontal: {
    position: 'absolute',
    left: -40,
    right: -40,
    top: '52%',
    height: 42,
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '-8deg' }],
  },

  webRoadVertical: {
    position: 'absolute',
    top: -50,
    bottom: -50,
    left: '57%',
    width: 34,
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '20deg' }],
  },

  webRoute: {
    position: 'absolute',
    width: 230,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#087F8C',
    left: '20%',
    top: '48%',
    transform: [{ rotate: '-18deg' }],
    zIndex: 4,
  },

  webProviderMarker: {
    position: 'absolute',
    left: '58%',
    top: '38%',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#087F8C',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 8,
    elevation: 6,
  },

  webUserMarker: {
    position: 'absolute',
    left: '25%',
    top: '57%',
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 8,
    elevation: 5,
  },

  webUserDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#2878D8',
  },

  webMapLabel: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 6,
    zIndex: 7,
    elevation: 3,
  },

  webMapLabelText: {
    color: '#365B75',
    fontSize: 12,
    fontWeight: '800',
    marginLeft: 5,
  },

  webMapNotice: {
    position: 'absolute',
    top: 88,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 12,
    padding: 10,
    zIndex: 12,
    elevation: 4,
  },

  webMapNoticeText: {
    flex: 1,
    color: '#365B75',
    fontSize: 11,
    lineHeight: 16,
    marginLeft: 7,
  },
  /* Payment option redesign overrides */

  paymentOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    minHeight: 72,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DCEBED',
  },

  paymentSelected: {
    borderColor: '#087F8C',
    backgroundColor: '#F0FAF8',
    borderWidth: 1.5,
  },

  paymentIcon: {
    width: 47,
    height: 47,
    borderRadius: 14,
    backgroundColor: '#E4F7F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paymentTitle: {
    color: '#173E56',
    fontSize: 14,
    fontWeight: '900',
  },

  paymentSubtitle: {
    color: '#78909C',
    fontSize: 10.5,
    marginTop: 3,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#9BAFB6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioSelected: {
    borderColor: '#087F8C',
  },

  radioInner: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#087F8C',
  },

  /* Final interaction polish */

  servicesPageRoot: {
    flex: 1,
    backgroundColor: '#EFFBF9',
  },

  servicesSafeArea: {
    flex: 1,
    backgroundColor: '#EFFBF9',
  },

  servicesPageContent: {
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 118,
  },

  servicesHeroCard: {
    height: 176,
    borderRadius: 26,
    overflow: 'hidden',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#D5ECEF',
    backgroundColor: '#E6F2FF',
    shadowColor: '#164F72',
    shadowOpacity: 0.10,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  servicesHeroImage: {
    width: '100%',
    height: '100%',
  },


  servicesHeroOverlay: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 17,
    justifyContent: 'space-between',
  },

  servicesHeroCopy: {
    width: '66%',
  },

  servicesHeroEyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  servicesHeroEyebrowDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#1677C8',
    marginRight: 6,
  },

  servicesHeroEyebrowText: {
    color: '#1677C8',
    fontSize: 8.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  servicesHeroTitle: {
    color: '#164E7A',
    fontSize: 25,
    lineHeight: 28,
    fontWeight: '900',
    letterSpacing: -0.7,
  },

  servicesHeroTitleAccent: {
    color: '#1677C8',
  },

  servicesHeroSubtitle: {
    color: '#315B72',
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 7,
    paddingRight: 5,
  },

  servicesHeroTrustRow: {
    flexDirection: 'row',
    marginTop: 11,
    gap: 7,
  },

  servicesHeroTrustItem: {
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderRadius: 13,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(211,231,247,0.95)',
  },

  servicesHeroTrustText: {
    color: '#315B72',
    fontSize: 8.5,
    fontWeight: '800',
    marginLeft: 4,
  },

  servicesHeroDots: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 5,
  },

  servicesHeroDotActive: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#1677C8',
  },


  servicesPageHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    paddingHorizontal: 3,
  },

  servicesPageTitle: {
    color: '#123D5B',
    fontSize: 27,
    lineHeight: 31,
    fontWeight: '900',
    letterSpacing: -0.7,
  },

  servicesPageSubtitle: {
    color: '#648093',
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 5,
    paddingRight: 8,
  },

  servicesTitleIcon: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: '#DDF6F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C6E9EB',
    marginLeft: 8,
    shadowColor: '#087F8C',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  servicesSearchBox: {
    height: 58,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#D6EBEE',
    shadowColor: '#164F72',
    shadowOpacity: 0.06,
    shadowRadius: 11,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    marginBottom: 18,
  },

  servicesSearchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#173E56',
    fontSize: 15,
    fontWeight: '600',
  },

  servicesSearchClear: {
    padding: 4,
  },

  servicesSectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 3,
  },

  servicesSectionTitle: {
    color: '#123D5B',
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '900',
    letterSpacing: -0.2,
  },

  servicesSectionSubtitle: {
    color: '#78909C',
    fontSize: 11.5,
    marginTop: 3,
    fontWeight: '500',
  },

  trustedServiceBadge: {
    backgroundColor: '#E5F8F5',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C9ECE8',
  },

  trustedServiceBadgeText: {
    color: '#087F8C',
    fontSize: 10,
    fontWeight: '900',
    marginLeft: 5,
  },

  serviceList: {
    gap: 14,
  },

  largeServiceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#CFE9ED',
    shadowColor: '#087F8C',
    shadowOpacity: 0.11,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
    overflow: 'hidden',
  },

  serviceCardTopRibbon: {
    minHeight: 31,
    paddingHorizontal: 13,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  serviceCardRibbonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  serviceCardRibbonText: {
    color: '#FFFFFF',
    fontSize: 8.5,
    fontWeight: '900',
    letterSpacing: 0.7,
    marginLeft: 5,
  },

  serviceCardRibbonAction: {
    color: 'rgba(255,255,255,0.88)',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.7,
  },

  largeServiceCardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    paddingBottom: 12,
  },

  largeServiceIcon: {
    width: 82,
    height: 94,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
    borderWidth: 1,
    borderColor: '#D4ECEF',
    overflow: 'hidden',
  },

  serviceIconCircle: {
    width: 62,
    height: 62,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    shadowColor: '#087F8C',
    shadowOpacity: 0.08,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  largeServiceContent: {
    flex: 1,
    minWidth: 0,
  },

  serviceNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  largeServiceName: {
    color: '#123D5B',
    fontSize: 17.5,
    lineHeight: 21,
    fontWeight: '900',
    flex: 1,
    paddingRight: 7,
  },

  serviceArrowCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#087F8C',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#087F8C',
    shadowOpacity: 0.18,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  largeServiceDescription: {
    color: '#668091',
    fontSize: 11.3,
    lineHeight: 16,
    marginTop: 5,
    paddingRight: 4,
  },

  serviceMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 9,
  },

  servicePricePill: {
    backgroundColor: '#E0F8F5',
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#C7ECE8',
  },

  largeServicePrice: {
    color: '#087F8C',
    fontSize: 13.5,
    fontWeight: '900',
  },

  serviceDurationPill: {
    backgroundColor: '#EDF6FC',
    borderRadius: 13,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9EAF3',
  },

  largeServiceDuration: {
    color: '#165A76',
    fontSize: 9.8,
    fontWeight: '900',
    marginLeft: 4,
  },

  serviceCardBottom: {
    borderTopWidth: 1,
    borderTopColor: '#E5F1F3',
    backgroundColor: '#F8FCFD',
    minHeight: 43,
    paddingHorizontal: 13,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  serviceCardBottomLabel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },

  serviceCardBottomText: {
    color: '#648093',
    fontSize: 9.5,
    fontWeight: '700',
    marginLeft: 5,
  },

  serviceCardBottomLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  serviceCardBottomLinkText: {
    color: '#087F8C',
    fontSize: 10,
    fontWeight: '900',
    marginRight: 2,
  },
  /* =========================================================
     HEALTHOME SIGNATURE LOGIN — MIDNIGHT AURORA MEDICAL THEME
     No external images required.
  ========================================================= */








  premiumCountryBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(22,47,53,0.28)',
  },

  premiumCountryModal: {
    maxHeight: '78%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 22,
    borderWidth: 1,
    borderColor: 'rgba(53,200,180,0.15)',
  },

  premiumCountryHandle: {
    width: 42,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#A5BCBF',
    alignSelf: 'center',
    marginBottom: 18,
  },

  premiumCountryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
  },

  premiumCountryModalTitle: {
    color: '#F1FCFF',
    fontSize: 20,
    fontWeight: '900',
  },

  premiumCountryModalSubtitle: {
    color: '#86A4B1',
    fontSize: 10,
    marginTop: 3,
  },

  premiumCountryClose: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  premiumCountryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 6,
    backgroundColor: 'rgba(255,255,255,0.025)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.72)',
  },

  premiumCountryRowActive: {
    backgroundColor: 'rgba(98,232,219,0.08)',
    borderColor: 'rgba(98,232,219,0.24)',
  },

  premiumCountryRowFlag: {
    fontSize: 22,
    width: 41,
  },

  premiumCountryRowName: {
    flex: 1,
    color: '#D9EAF0',
    fontSize: 13.5,
    fontWeight: '700',
  },

  premiumCountryRowCode: {
    color: '#8BA6B2',
    fontSize: 12.5,
    fontWeight: '800',
    marginRight: 9,
  },


  /* =========================================================
     MODERN LOGIN + NAME SETUP
  ========================================================= */
  modernAuthRoot: {
    flex: 1,
    backgroundColor: HEALTHOME_THEME.colors.background,
    // Safe area for both Android status-bar icons and iOS notch/Dynamic Island.
    // Android edge-to-edge devices can draw app content behind the status bar,
    // so explicitly reserve the status-bar height for the login/name screens.
    paddingTop: Platform.OS === 'android'
      ? (StatusBar.currentHeight || 24) + 8
      : 0,
  },
  modernAuthScroll: {
    flexGrow: 1,
    paddingTop: 0,
  },
  modernAuthBackground: { flexGrow: 1, minHeight: '100%', paddingHorizontal: 16, paddingTop: Platform.OS === 'android' ? 10 : 10, paddingBottom: 24 },
  modernAuthTopRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  modernLogoBox: { width: 46, height: 46, borderRadius: 15, backgroundColor: HEALTHOME_THEME.colors.primary, alignItems: 'center', justifyContent: 'center', elevation: 4, shadowColor: '#087F8C', shadowOpacity: 0.18, shadowRadius: 9, shadowOffset: { width: 0, height: 4 } },
  modernLogoText: { color: HEALTHOME_THEME.colors.navy, fontSize: 20, fontWeight: '900', marginLeft: 11 },
  modernLogoSub: { color: HEALTHOME_THEME.colors.muted, fontSize: 7.5, fontWeight: '900', letterSpacing: 0.9, marginLeft: 11, marginTop: 2 },
  modernTopBadge: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 30, borderRadius: 15, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D6ECEE' },
  modernTopBadgeText: { color: HEALTHOME_THEME.colors.primary, fontSize: 9, fontWeight: '900', marginLeft: 4 },
  modernHeroCard: { minHeight: 190, borderRadius: 28, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8ECEE', padding: 18, flexDirection: 'row', alignItems: 'center', overflow: 'hidden', elevation: 4, shadowColor: '#0A6472', shadowOpacity: 0.08, shadowRadius: 15, shadowOffset: { width: 0, height: 6 } },
  modernHeroText: { flex: 1, paddingRight: 8 },
  modernHeroEyebrow: { color: HEALTHOME_THEME.colors.primary, fontSize: 8.5, fontWeight: '900', letterSpacing: 1.1, marginBottom: 7 },
  modernHeroTitle: { color: HEALTHOME_THEME.colors.navy, fontSize: 25, lineHeight: 30, fontWeight: '900' },
  modernHeroSubtitle: { color: HEALTHOME_THEME.colors.muted, fontSize: 11.5, lineHeight: 17, fontWeight: '600', marginTop: 8 },
  modernMedicalIllustration: { width: 120, height: 150, alignItems: 'center', justifyContent: 'center' },
  modernMonitor: { width: 88, height: 72, borderRadius: 15, backgroundColor: '#E8F7F7', borderWidth: 2, borderColor: '#B9E1E2', alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-3deg' }] },
  modernMonitorScreen: { width: 65, height: 43, borderRadius: 9, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#D8ECEE' },
  modernMonitorLine: { position: 'absolute', width: 38, height: 2, backgroundColor: '#19B8AA', top: 27, borderRadius: 2, transform: [{ rotate: '5deg' }] },
  modernMonitorStand: { position: 'absolute', width: 9, height: 24, backgroundColor: '#B9D9DE', bottom: -21, borderRadius: 4 },
  modernMedicalCross: { position: 'absolute', width: 42, height: 42, borderRadius: 14, backgroundColor: HEALTHOME_THEME.colors.primary, right: 0, top: 12, elevation: 5 },
  modernCrossV: { position: 'absolute', width: 7, height: 25, borderRadius: 3, backgroundColor: '#FFFFFF', left: 17.5, top: 8.5 },
  modernCrossH: { position: 'absolute', width: 25, height: 7, borderRadius: 3, backgroundColor: '#FFFFFF', left: 8.5, top: 17.5 },
  modernMedicalDot: { position: 'absolute', width: 12, height: 12, borderRadius: 6, backgroundColor: '#19B8AA', left: 7, bottom: 17, borderWidth: 3, borderColor: '#FFFFFF' },
  modernServiceRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 13 },
  modernServicePill: { flex: 1, minHeight: 52, borderRadius: 17, backgroundColor: 'rgba(255,255,255,0.78)', borderWidth: 1, borderColor: '#D9ECEE', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 7, marginHorizontal: 3 },
  modernServiceIcon: { width: 34, height: 34, borderRadius: 11, backgroundColor: '#E7F7F7', alignItems: 'center', justifyContent: 'center' },
  modernServiceText: { color: '#31596B', fontSize: 9.5, fontWeight: '800', flex: 1, marginLeft: 5 },
  modernLoginCard: { backgroundColor: '#FFFFFF', borderRadius: 28, padding: 18, borderWidth: 1, borderColor: HEALTHOME_THEME.colors.border, elevation: 7, shadowColor: '#0A6472', shadowOpacity: 0.11, shadowRadius: 18, shadowOffset: { width: 0, height: 7 } },
  modernLoginHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 17 },
  modernLoginEyebrow: { color: '#19A995', fontSize: 8.5, fontWeight: '900', letterSpacing: 1.2 },
  modernLoginTitle: { color: HEALTHOME_THEME.colors.navy, fontSize: 21, fontWeight: '900', marginTop: 4 },
  modernLoginSubtitle: { color: HEALTHOME_THEME.colors.muted, fontSize: 11, fontWeight: '600', marginTop: 4 },
  modernLockCircle: { width: 45, height: 45, borderRadius: 15, backgroundColor: '#E9F8F8', alignItems: 'center', justifyContent: 'center', marginLeft: 10 },
  modernFieldLabel: { color: '#58737E', fontSize: 9, fontWeight: '900', letterSpacing: 1, marginBottom: 7 },
  modernPhoneField: { minHeight: 59, borderRadius: 17, borderWidth: 1.3, borderColor: '#D5E4E8', backgroundColor: '#F9FCFD', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 7 },
  modernPhoneFieldActive: { borderColor: '#62C7C2', backgroundColor: '#F4FCFC' },
  modernCountryButton: { height: 44, minWidth: 87, borderRadius: 12, backgroundColor: '#EAF7F7', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
  modernFlag: { fontSize: 19, marginRight: 5 },
  modernCode: { color: HEALTHOME_THEME.colors.navy, fontSize: 13.5, fontWeight: '900', marginRight: 4 },
  modernDivider: { width: 1, height: 30, backgroundColor: '#D7E5E9', marginHorizontal: 8 },
  modernPhoneInput: { flex: 1, minHeight: 46, color: HEALTHOME_THEME.colors.navy, fontSize: 16, fontWeight: '700', paddingHorizontal: 2, paddingVertical: 0 },
  modernPrivacyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 2 },
  modernPrivacyText: { color: '#748B96', fontSize: 9.5, fontWeight: '600', marginLeft: 5, flex: 1 },
  modernContinueWrap: { marginTop: 17, borderRadius: 18, overflow: 'hidden' },
  modernContinueDisabled: { opacity: 0.72 },
  modernContinue: { minHeight: 58, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  modernContinueText: { color: '#FFFFFF', fontSize: 16, fontWeight: '900' },
  modernArrowCircle: { width: 35, height: 35, borderRadius: 18, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  modernTrustCard: { marginTop: 13, minHeight: 68, borderRadius: 21, backgroundColor: 'rgba(255,255,255,0.86)', borderWidth: 1, borderColor: '#D9ECEE', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 5 },
  modernTrustItem: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 3 },
  modernTrustText: { color: '#31596B', fontSize: 8.5, fontWeight: '800', textAlign: 'center', marginTop: 4 },
  modernTrustLine: { width: 1, height: 31, backgroundColor: '#D0E4E7' },
  modernFooter: { color: '#6C8792', fontSize: 8.5, fontWeight: '900', letterSpacing: 1.2, textAlign: 'center', marginTop: 15 },
  modernNameScroll: { flexGrow: 1 },
  modernNameBackground: { flexGrow: 1, minHeight: '100%', paddingHorizontal: 20, paddingTop: Platform.OS === 'android' ? 17 : 10, paddingBottom: 25 },
  modernBackButton: { width: 43, height: 43, borderRadius: 15, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D8ECEE', alignItems: 'center', justifyContent: 'center', marginBottom: 22, elevation: 2 },
  modernNameIllustration: { width: 145, height: 145, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 17 },
  modernNameCircleLarge: { width: 126, height: 126, borderRadius: 63, backgroundColor: '#DDF5F4', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#BDE7E5' },
  modernNameCircleSmall: { width: 84, height: 84, borderRadius: 42, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', elevation: 4, shadowColor: '#087F8C', shadowOpacity: 0.12, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
  modernNameMedicalBadge: { position: 'absolute', right: 4, top: 11, width: 38, height: 38, borderRadius: 13, backgroundColor: HEALTHOME_THEME.colors.primary, alignItems: 'center', justifyContent: 'center', elevation: 4 },
  modernNamePlusBadge: { position: 'absolute', left: 5, bottom: 12, width: 39, height: 39, borderRadius: 13, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#BDE7E5', alignItems: 'center', justifyContent: 'center', elevation: 3 },
  modernNameEyebrow: { color: HEALTHOME_THEME.colors.primary, fontSize: 9, fontWeight: '900', letterSpacing: 1.4, textAlign: 'center' },
  modernNameTitle: { color: HEALTHOME_THEME.colors.navy, fontSize: 28, lineHeight: 34, fontWeight: '900', textAlign: 'center', marginTop: 7 },
  modernNameSubtitle: { color: HEALTHOME_THEME.colors.muted, fontSize: 12.5, lineHeight: 19, fontWeight: '600', textAlign: 'center', marginTop: 9, paddingHorizontal: 8 },
  modernNameCard: { backgroundColor: '#FFFFFF', borderRadius: 27, padding: 18, borderWidth: 1, borderColor: HEALTHOME_THEME.colors.border, marginTop: 22, elevation: 7, shadowColor: '#0A6472', shadowOpacity: 0.1, shadowRadius: 18, shadowOffset: { width: 0, height: 7 } },
  modernNameInput: { minHeight: 59, borderRadius: 17, borderWidth: 1.3, borderColor: '#D5E4E8', backgroundColor: '#F9FCFD', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 9 },
  modernNameInputIcon: { width: 43, height: 43, borderRadius: 13, backgroundColor: '#E9F8F8', alignItems: 'center', justifyContent: 'center' },
  modernNameTextInput: { flex: 1, minHeight: 46, color: HEALTHOME_THEME.colors.navy, fontSize: 16, fontWeight: '700', paddingHorizontal: 10 },
  modernNameHint: { flexDirection: 'row', alignItems: 'center', marginTop: 11, paddingHorizontal: 2 },
  modernNameHintText: { color: '#748B96', fontSize: 9.5, lineHeight: 14, fontWeight: '600', marginLeft: 6, flex: 1 },
  modernNamePhone: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 },
  modernNamePhoneText: { color: HEALTHOME_THEME.colors.muted, fontSize: 9.5, fontWeight: '700', marginLeft: 5 },


  featureHero:{backgroundColor:'#E9F8F7',borderRadius:22,padding:18,marginBottom:14,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#CBE9E7'},
  featureEyebrow:{fontSize:10,fontWeight:'900',letterSpacing:1.2,color:'#087F8C'},
  featureTitle:{fontSize:23,fontWeight:'900',color:'#173E56',marginTop:4},
  featureSubtitle:{fontSize:11.5,lineHeight:17,color:'#71889A',marginTop:5},
  featureHeroIcon:{width:64,height:64,borderRadius:20,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',marginLeft:12},
  featureSearch:{height:50,borderRadius:15,borderWidth:1,borderColor:'#DCE7EC',backgroundColor:'#fff',flexDirection:'row',alignItems:'center',paddingHorizontal:13,marginBottom:13},
  featureSearchInput:{flex:1,fontSize:13,color:'#173E56',marginLeft:8},
  doctorCard:{backgroundColor:'#fff',borderRadius:18,padding:13,marginBottom:10,borderWidth:1,borderColor:'#DCEBED',flexDirection:'row',alignItems:'center'},
  doctorAvatar:{width:54,height:54,borderRadius:17,backgroundColor:'#DDF6F5',alignItems:'center',justifyContent:'center',marginRight:11},
  doctorName:{fontSize:14,fontWeight:'900',color:'#173E56'}, doctorSpecialty:{fontSize:11,color:'#71889A',marginTop:3}, doctorMeta:{fontSize:10.5,color:'#087F8C',marginTop:5,fontWeight:'700'},
  availabilityBadge:{paddingHorizontal:7,paddingVertical:4,borderRadius:8,marginLeft:6}, availabilityText:{fontSize:9,fontWeight:'900'},
  featureModalOverlay:{flex:1,backgroundColor:'rgba(0,0,0,.45)',justifyContent:'flex-end'}, featureModal:{backgroundColor:'#fff',borderTopLeftRadius:28,borderTopRightRadius:28,padding:22,minHeight:300}, modalHandle:{width:42,height:5,borderRadius:3,backgroundColor:'#D5DEE2',alignSelf:'center',marginBottom:15}, doctorModalAvatar:{width:70,height:70,borderRadius:22,backgroundColor:'#DDF6F5',alignItems:'center',justifyContent:'center',alignSelf:'center'}, modalTitle:{fontSize:20,fontWeight:'900',color:'#173E56',textAlign:'center',marginTop:12}, modalSubtitle:{fontSize:12,color:'#71889A',textAlign:'center',marginTop:4}, modalBody:{fontSize:12,color:'#71889A',lineHeight:18,textAlign:'center',marginTop:12},
  consultModeRow:{flexDirection:'row',gap:10,marginTop:16}, consultMode:{flex:1,borderWidth:1,borderColor:'#DCE7EC',borderRadius:14,padding:13,alignItems:'center',gap:5}, consultModeSelected:{borderColor:'#087F8C',backgroundColor:'#E9F8F7'}, consultModeText:{fontSize:12,fontWeight:'800',color:'#173E56'},
  primaryFeatureButton:{minHeight:50,borderRadius:15,backgroundColor:'#087F8C',alignItems:'center',justifyContent:'center',flexDirection:'row',gap:8,marginTop:16,paddingHorizontal:16}, primaryFeatureButtonText:{color:'#fff',fontSize:13,fontWeight:'900'}, secondaryFeatureButton:{minHeight:46,alignItems:'center',justifyContent:'center',marginTop:7}, secondaryFeatureButtonText:{color:'#087F8C',fontSize:13,fontWeight:'800'},
  consultationHero:{backgroundColor:'#173E56',borderRadius:24,padding:24,alignItems:'center',marginBottom:14}, consultationIcon:{width:70,height:70,borderRadius:24,backgroundColor:'#087F8C',alignItems:'center',justifyContent:'center'}, consultationTitle:{fontSize:22,fontWeight:'900',color:'#fff',marginTop:14}, consultationText:{fontSize:11,color:'#D6EEF0',marginTop:5,textAlign:'center'}, secureCard:{backgroundColor:'#E9F8F7',borderRadius:17,padding:14,flexDirection:'row',gap:10,alignItems:'center'}, secureTitle:{fontSize:13,fontWeight:'900',color:'#173E56'}, secureText:{fontSize:10.5,color:'#71889A',lineHeight:15,marginTop:3}, infoCard:{backgroundColor:'#fff',borderRadius:18,padding:16,borderWidth:1,borderColor:'#DCEBED',marginTop:13}, infoCardTitle:{fontSize:14,fontWeight:'900',color:'#173E56',marginBottom:8}, infoBullet:{fontSize:11,color:'#71889A',lineHeight:19},
  labCard:{backgroundColor:'#fff',borderRadius:18,padding:14,marginBottom:10,borderWidth:1,borderColor:'#DCEBED',flexDirection:'row',alignItems:'center'}, labIcon:{width:52,height:52,borderRadius:16,backgroundColor:'#E4F7F6',alignItems:'center',justifyContent:'center',marginRight:11}, labPrice:{fontSize:13,fontWeight:'900',color:'#087F8C',marginTop:5},
  recordCard:{backgroundColor:'#fff',borderRadius:18,padding:14,marginBottom:10,borderWidth:1,borderColor:'#DCEBED',flexDirection:'row',alignItems:'center'}, recordIcon:{width:52,height:52,borderRadius:16,alignItems:'center',justifyContent:'center',marginRight:11}, uploadRecordButton:{backgroundColor:'#fff',borderRadius:16,borderWidth:1,borderColor:'#BDE2DE',padding:15,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:8,marginTop:4}, uploadRecordText:{color:'#087F8C',fontWeight:'900',fontSize:12}, emptyFeature:{backgroundColor:'#fff',borderRadius:20,padding:30,alignItems:'center',borderWidth:1,borderColor:'#DCEBED'}, emptyFeatureTitle:{fontSize:15,fontWeight:'900',color:'#173E56',marginTop:10}, emptyFeatureText:{fontSize:11,color:'#71889A',textAlign:'center',marginTop:5}, familyCard:{backgroundColor:'#fff',borderRadius:18,padding:14,marginBottom:10,borderWidth:1,borderColor:'#DCEBED',flexDirection:'row',alignItems:'center'}, familyAvatar:{width:48,height:48,borderRadius:16,backgroundColor:'#DDF6F5',alignItems:'center',justifyContent:'center',marginRight:11},
  walletCard:{backgroundColor:'#173E56',borderRadius:24,padding:22,marginBottom:14}, walletLabel:{fontSize:10,fontWeight:'900',letterSpacing:1,color:'#B9D8DE'}, walletAmount:{fontSize:34,fontWeight:'900',color:'#fff',marginTop:7}, walletActions:{flexDirection:'row',gap:10,marginTop:20}, walletAction:{flex:1,borderRadius:13,backgroundColor:'rgba(255,255,255,.13)',padding:11,alignItems:'center',gap:5}, walletActionText:{fontSize:10,fontWeight:'800',color:'#fff'},
  quickFeatureGrid:{flexDirection:'row',flexWrap:'wrap',gap:9,marginBottom:15}, quickFeature:{width:'48%',backgroundColor:'#fff',borderRadius:17,padding:13,borderWidth:1,borderColor:'#DCEBED'}, quickFeatureIcon:{width:42,height:42,borderRadius:13,backgroundColor:'#E4F7F6',alignItems:'center',justifyContent:'center'}, quickFeatureTitle:{fontSize:12,fontWeight:'900',color:'#173E56',marginTop:8}, quickFeatureText:{fontSize:9.5,color:'#8195A0',marginTop:2},

});

export default styles;
