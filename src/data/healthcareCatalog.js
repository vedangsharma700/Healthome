/**
 * Static catalog data used by the Healthome UI.
 * Keep this file free of React state and side effects so the data can
 * later be replaced by API responses without changing presentation code.
 */

const services = [
  {
    id: '1',
    name: 'Neuro Care',
    category: 'Services at Home',
    price: 999,
    duration: '8 Hours',
    icon: 'brain-outline',
    color: '#E8F3FF',
    iconColor: '#1665B8',
    description:
      'Professional home care support for patients requiring neurological care and assistance with daily activities.',
    treatment:
      'Patient monitoring, mobility assistance, medication support as instructed by the family/doctor, hygiene care and basic nursing assistance.',
  },
  {
    id: '2',
    name: 'Trauma Care',
    category: 'Services at Home',
    price: 1299,
    duration: '8 Hours',
    icon: 'bandage-outline',
    color: '#FFF0F1',
    iconColor: '#E53935',
    description:
      'Home assistance for patients recovering from trauma, injury or surgery.',
    treatment:
      'Basic wound-care assistance, mobility support, hygiene assistance and observation according to the prescribed care plan.',
  },
  {
    id: '3',
    name: 'Coma Patient Care',
    category: 'Services at Home',
    price: 1599,
    duration: '8 Hours',
    icon: 'bed-outline',
    color: '#EAF5FF',
    iconColor: '#1870C9',
    description:
      'Dedicated home care support for patients requiring continuous assistance.',
    treatment:
      'Position changes, hygiene assistance, feeding assistance as instructed and continuous observation.',
  },
  {
    id: '4',
    name: 'Babies Care',
    category: 'Services at Home',
    price: 899,
    duration: '8 Hours',
    icon: 'happy-outline',
    color: '#FFF0F5',
    iconColor: '#E91E63',
    description:
      'Home assistance for babies requiring additional care and support.',
    treatment:
      'Baby hygiene, feeding support, routine monitoring and caregiver assistance.',
  },
  {
    id: '5',
    name: 'Diabetic Care',
    category: 'Services at Home',
    price: 899,
    duration: '8 Hours',
    icon: 'water-outline',
    color: '#E8FFF7',
    iconColor: '#008B70',
    description:
      'Home support for patients managing diabetes.',
    treatment:
      'Routine monitoring support, diet-care assistance and medication reminders as instructed by the doctor.',
  },
  {
    id: '6',
    name: 'Paralysis Patient Care',
    category: 'Services at Home',
    price: 1299,
    duration: '8 Hours',
    icon: 'accessibility-outline',
    color: '#EAF5FF',
    iconColor: '#1462A8',
    description:
      'Specialized assistance for patients living with paralysis.',
    treatment:
      'Mobility support, positioning, hygiene care, feeding assistance and daily activity support.',
  },
  {
    id: '7',
    name: 'Elder Care',
    category: 'Services at Home',
    price: 899,
    duration: '8 Hours',
    icon: 'walk-outline',
    color: '#EAFBF3',
    iconColor: '#008F69',
    description:
      'Compassionate home care assistance for elderly patients.',
    treatment:
      'Daily activity support, mobility assistance, hygiene care and companionship.',
  },
  {
    id: '8',
    name: 'Dementia Care',
    category: 'Services at Home',
    price: 1299,
    duration: '8 Hours',
    icon: 'bulb-outline',
    color: '#FFF2EA',
    iconColor: '#E56825',
    description:
      'Home assistance for people requiring dementia care.',
    treatment:
      'Daily routine assistance, supervision, hygiene support and caregiver assistance.',
  },
  {
    id: '9',
    name: 'Bed Ridden Patient Care',
    category: 'Services at Home',
    price: 1299,
    duration: '8 Hours',
    icon: 'bed-outline',
    color: '#FFF0F6',
    iconColor: '#D81B60',
    description:
      'Complete daily assistance for bed-ridden patients.',
    treatment:
      'Position changes, hygiene care, feeding assistance, mobility support and routine observation.',
  },
  {
    id: '10',
    name: 'Cancer Care',
    category: 'Services at Home',
    price: 1499,
    duration: '8 Hours',
    icon: 'ribbon-outline',
    color: '#FFF0F5',
    iconColor: '#D81B60',
    description:
      'Compassionate home support for cancer patients.',
    treatment:
      'Daily living assistance, hygiene care, mobility assistance and caregiver support.',
  },
  {
    id: '11',
    name: 'Physiotherapist',
    category: 'Services at Home',
    price: 799,
    duration: '60 Minutes',
    icon: 'fitness-outline',
    color: '#EAF5FF',
    iconColor: '#1465B5',
    description:
      'Professional physiotherapy support at home.',
    treatment:
      'Assessment and exercises according to the physiotherapist-approved treatment plan.',
  },
  {
    id: '12',
    name: 'Motor Neuron Disease Care',
    category: 'Services at Home',
    price: 1499,
    duration: '8 Hours',
    icon: 'pulse-outline',
    color: '#FFF0F8',
    iconColor: '#C2185B',
    description:
      'Home support for patients requiring long-term assistance.',
    treatment:
      'Mobility assistance, positioning, hygiene care, feeding assistance and caregiver support.',
  },
  {
    id: '13',
    name: 'Critical Care',
    category: 'Services at Home',
    price: 1799,
    duration: '8 Hours',
    icon: 'pulse-outline',
    color: '#FFF0F0',
    iconColor: '#E53935',
    description:
      'Home care assistance for patients requiring higher levels of monitoring.',
    treatment:
      'Patient observation, hygiene care, positioning and assistance according to the approved care plan.',
  },
  {
    id: '14',
    name: 'Parkinsons Care',
    category: 'Services at Home',
    price: 1199,
    duration: '8 Hours',
    icon: 'hand-left-outline',
    color: '#FFF0EB',
    iconColor: '#E64A19',
    description:
      'Dedicated assistance for patients living with Parkinsons.',
    treatment:
      'Mobility support, daily activity assistance, hygiene care and caregiver support.',
  },

  /* ON CALL */

  {
    id: '15',
    name: 'Antibiotic Injection',
    category: 'On-Call Services',
    price: 299,
    duration: 'Visit',
    icon: 'medkit-outline',
    color: '#EAF3FF',
    iconColor: '#175EA8',
    description:
      'On-call injection administration service in Delhi/NCR.',
    treatment:
      'Administration by qualified healthcare personnel against a valid prescription.',
  },
  {
    id: '16',
    name: 'Dressing Care',
    category: 'On-Call Services',
    price: 399,
    duration: 'Visit',
    icon: 'bandage-outline',
    color: '#FFF0F1',
    iconColor: '#E53935',
    description:
      'Professional dressing assistance at your location.',
    treatment:
      'Wound dressing according to the prescribed treatment plan.',
  },
  {
    id: '17',
    name: 'Intramuscular Injection',
    category: 'On-Call Services',
    price: 299,
    duration: 'Visit',
    icon: 'medical-outline',
    color: '#EAF3FF',
    iconColor: '#155EA8',
    description:
      'IM injection administration at home.',
    treatment:
      'Administration by qualified healthcare personnel against a valid prescription.',
  },
  {
    id: '18',
    name: 'Sputum Culture',
    category: 'On-Call Services',
    price: 499,
    duration: 'Visit',
    icon: 'flask-outline',
    color: '#EAFBF3',
    iconColor: '#008F69',
    description:
      'Sample collection support for sputum culture.',
    treatment:
      'Sample collection and handling according to the applicable laboratory process.',
  },
  {
    id: '19',
    name: 'Subcutaneous Injection',
    category: 'On-Call Services',
    price: 299,
    duration: 'Visit',
    icon: 'medkit-outline',
    color: '#FFF0F5',
    iconColor: '#D81B60',
    description:
      'Subcutaneous injection administration at home.',
    treatment:
      'Administration by qualified healthcare personnel against a valid prescription.',
  },
  {
    id: '20',
    name: 'Ryles Tube Change',
    category: 'On-Call Services',
    price: 699,
    duration: 'Visit',
    icon: 'medical-outline',
    color: '#FFF3EA',
    iconColor: '#E56825',
    description:
      'Ryles tube change service at home.',
    treatment:
      'Procedure performed by qualified healthcare personnel according to the prescribed care plan.',
  },
  {
    id: '21',
    name: 'Tracheostomy Tube Change',
    category: 'On-Call Services',
    price: 899,
    duration: 'Visit',
    icon: 'body-outline',
    color: '#EAF3FF',
    iconColor: '#1665B8',
    description:
      'Tracheostomy tube change assistance.',
    treatment:
      'Procedure performed by qualified healthcare personnel according to clinical instructions.',
  },
  {
    id: '22',
    name: 'Folies Catheter Change',
    category: 'On-Call Services',
    price: 699,
    duration: 'Visit',
    icon: 'water-outline',
    color: '#FFF0F5',
    iconColor: '#D81B60',
    description:
      'Foley catheter change at home.',
    treatment:
      'Procedure performed by qualified healthcare personnel according to the prescribed plan.',
  },
  {
    id: '23',
    name: 'Oral Suction',
    category: 'On-Call Services',
    price: 499,
    duration: 'Visit',
    icon: 'water-outline',
    color: '#EAFBF3',
    iconColor: '#008F69',
    description:
      'Oral suction assistance at home.',
    treatment:
      'Procedure performed by qualified healthcare personnel according to the patient care plan.',
  },
];

const equipment = [
  {
    id: 'e1',
    name: 'Oxygen Concentrator 5 LPM',
    price: 500,
    unit: 'per day',
    icon: 'pulse-outline',
  },
  {
    id: 'e2',
    name: 'Oxygen Concentrator 10 LPM',
    price: 750,
    unit: 'per day',
    icon: 'pulse-outline',
  },
  {
    id: 'e3',
    name: 'Oxygen Cylinder (Alum)',
    price: 350,
    unit: 'per day',
    icon: 'flame-outline',
  },
  {
    id: 'e4',
    name: 'BiPAP / CPAP Machine',
    price: 700,
    unit: 'per day',
    icon: 'medical-outline',
  },
  {
    id: 'e5',
    name: 'Ventilator Trilogy 100',
    price: 2500,
    unit: 'per day',
    icon: 'pulse-outline',
  },
  {
    id: 'e6',
    name: 'Ventilator A40',
    price: 2200,
    unit: 'per day',
    icon: 'pulse-outline',
  },
  {
    id: 'e7',
    name: 'ICU Monitor',
    price: 1200,
    unit: 'per day',
    icon: 'monitor-outline',
  },
  {
    id: 'e8',
    name: 'Pulse Oximeter',
    price: 100,
    unit: 'per day',
    icon: 'heart-outline',
  },
];

const homeHeroSlides = [
  {
    eyebrow: 'TRUSTED HOME HEALTHCARE',
    title: 'Expert Care',
    accent: 'At Your Home',
    subtitle: 'Because your health\\ndeserves the best care.',
  },
];

const doctors = [
  { id:'d1', name:'Dr. Ananya Sharma', specialty:'General Physician', experience:'9 years', fee:499, rating:'4.8', available:true, icon:'medkit-outline' },
  { id:'d2', name:'Dr. Rohan Mehta', specialty:'Internal Medicine', experience:'12 years', fee:699, rating:'4.9', available:true, icon:'heart-outline' },
  { id:'d3', name:'Dr. Priya Kapoor', specialty:'Dermatologist', experience:'8 years', fee:599, rating:'4.7', available:false, icon:'sparkles-outline' },
  { id:'d4', name:'Dr. Arjun Verma', specialty:'Orthopedic Specialist', experience:'15 years', fee:799, rating:'4.9', available:true, icon:'body-outline' },
];

const labs = [
  { id:'l1', name:'Healthome Diagnostics', category:'Full Body Checkup', price:1499, tests:'72 tests', turnaround:'24 hours' },
  { id:'l2', name:'Healthome Diagnostics', category:'Diabetes Care Panel', price:699, tests:'12 tests', turnaround:'12 hours' },
  { id:'l3', name:'Healthome Diagnostics', category:'Thyroid Profile', price:499, tests:'3 tests', turnaround:'12 hours' },
  { id:'l4', name:'Healthome Diagnostics', category:'CBC', price:299, tests:'24 parameters', turnaround:'8 hours' },
];

const healthRecordTypes = [
  { id:'r1', title:'Prescriptions', subtitle:'Your doctor prescriptions', icon:'document-text-outline', color:'#6D36C7' },
  { id:'r2', title:'Lab Reports', subtitle:'Blood, urine and diagnostic reports', icon:'flask-outline', color:'#087F8C' },
  { id:'r3', title:'Medical Documents', subtitle:'Upload and keep important documents', icon:'folder-open-outline', color:'#1478C8' },
  { id:'r4', title:'Vaccination Records', subtitle:'Vaccines and immunization history', icon:'shield-checkmark-outline', color:'#D98611' },
];

export {
  services,
  equipment,
  homeHeroSlides,
  doctors,
  labs,
  healthRecordTypes,
};
