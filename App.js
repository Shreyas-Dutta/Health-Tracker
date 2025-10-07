import React, { useState, useEffect } from 'react';
import { Calendar, Pill, Activity, Heart, Plus, X, CheckCircle, AlertCircle, User, Moon, Sun, MapPin, Navigation, MessageCircle, Send, Menu, Globe } from 'lucide-react';

const translations = {
  en: {
    name: "English",
    appTitle: "Health Tracker",
    welcome: "Welcome!",
    welcomeDesc: "Track medicines and exercises easily.",
    enterInfo: "Enter Info",
    enterInfoDesc: "Tell us your name and age.",
    dashboard: "Dashboard",
    dashboardDesc: "See your progress at a glance.",
    addMedicines: "Add Medicines",
    addMedicinesDesc: "Click 'Medicines' to add medications.",
    checkOff: "Check Off",
    checkOffDesc: "Mark medicines as taken.",
    exercisePlan: "Exercise Plan",
    exercisePlanDesc: "View your 45-min routine.",
    trackProgress: "Track Progress",
    trackProgressDesc: "Check off exercises.",
    allSet: "All Set!",
    allSetDesc: "Check in daily!",
    skip: "Skip",
    back: "Back",
    next: "Next",
    getStarted: "Get Started",
    yourName: "Your Name",
    yourAge: "Your Age",
    enterName: "Enter your name",
    enterAge: "Enter your age",
    saveProfile: "Save Profile",
    welcomeBack: "Welcome back! Here's your health summary for today.",
    medicines: "Medicines",
    exercise: "Exercise",
    today: "Today",
    dosesTaken: "Doses taken today",
    completed: "Completed!",
    activitiesDone: "Activities done",
    todaysMedicines: "Today's Medicines",
    noMedicinesScheduled: "No medicines scheduled",
    addMedicinesBtn: "Add medicines",
    morningExercise: "Morning Exercise",
    ageRestriction: "Age Restriction",
    availableFor12Plus: "Available for ages 12+",
    consultDoctor: "⚠️ Consult your doctor first",
    markAllDone: "Mark All Done",
    allDoneToday: "✓ All Done!",
    myMedicines: "My Medicines",
    manageMedication: "Manage your medication schedule",
    addMedicine: "Add Medicine",
    addNewMedicine: "Add New Medicine",
    medicineName: "Medicine Name",
    dosage: "Dosage",
    egAspirin: "e.g., Aspirin",
    eg100mg: "e.g., 100mg",
    saveMedicine: "Save Medicine",
    cancel: "Cancel",
    noMedicinesAdded: "No medicines added yet",
    clickToAdd: "Click \"Add Medicine\" to get started",
    healthAI: "Health AI Assistant",
    askAboutSymptoms: "Ask about symptoms, medications, or health advice",
    askQuestion: "Ask a health question...",
    emergencyWarning: "⚠️ For emergencies, call 911 or visit Hospitals tab",
    nearbyHospitals: "Nearby Hospitals",
    findEmergencyCare: "Find emergency care near you",
    enableLocation: "Enable Location Services",
    allowLocation: "Allow location access to find hospitals",
    getMyLocation: "Get My Location",
    gettingLocation: "Getting Location...",
    locationFound: "✓ Location found! Showing nearest hospitals",
    refresh: "Refresh",
    emergencyServices: "🚨 Emergency Services",
    directions: "Directions",
    callNow: "Call Now",
    emergencyInfo: "Emergency Information",
    call911: "Call 911 - Emergency Services",
    call911For: "Call 911 for: chest pain, difficulty breathing, severe bleeding, stroke symptoms, or loss of consciousness.",
    profileSettings: "Profile Settings",
    manageInfo: "Manage your information and preferences",
    name: "Name",
    age: "Age",
    saveChanges: "Save Changes",
    editProfile: "Edit Profile",
    appearance: "Appearance",
    darkMode: "Dark Mode",
    enabled: "Enabled",
    disabled: "Disabled",
    healthStats: "Health Statistics",
    totalMedicines: "Total Medicines",
    exercisePlanTime: "Exercise Plan",
    helpTutorial: "Help & Tutorial",
    hospitals: "Hospitals",
    profile: "Profile",
    home: "Home",
    chatbotGreeting: "Hello! I'm your Health Assistant. I can help answer medical questions about symptoms, conditions, medications, and general health advice. What would you like to know?",
    selectLanguage: "Select Language",
    exercises: {
      warmup: "Warm-up: Gentle walking",
      seatedMarching: "Warm-up: Seated marching",
      seatedMovements: "Warm-up: Seated movements",
      briskWalking: "Brisk walking or jogging",
      gentleWalking: "Gentle walking",
      seatedWalking: "Seated walking",
      strength: "Strength: Squats, push-ups",
      chairExercises: "Chair exercises",
      balance: "Balance exercises",
      balanceSupport: "Balance with support",
      handExercises: "Hand exercises",
      stretching: "Stretching",
      gentleStretching: "Gentle stretching",
      coolDown: "Cool down",
      breathing: "Breathing exercises",
      deepBreathing: "Deep breathing",
      low: "Low",
      veryLow: "Very Low",
      lowModerate: "Low-Moderate",
      moderate: "Moderate"
    },
    chatResponses: {
      greeting: "Hello! I'm your Health Assistant. I can help answer medical questions about symptoms, conditions, medications, and general health advice. What would you like to know?",
      welcome: "You're welcome! Stay healthy and consult your doctor for personalized advice.",
      headache: "For headaches:\n• Rest in a quiet, dark room\n• Stay hydrated\n• Apply cold compress\n• Avoid bright lights\n\nSee a doctor if severe or with fever.",
      fever: "For fever:\n• Rest and drink fluids\n• Take acetaminophen as directed\n• Use cool compress\n\nCall doctor if above 103°F or lasts 3+ days.",
      cough: "For cough/cold:\n• Drink warm liquids\n• Use humidifier\n• Rest well\n• Stay hydrated\n\nSee doctor if lasts 3+ weeks or coughing blood.",
      chest: "🚨 EMERGENCY! Call 911 immediately for chest pain.",
      stroke: "🚨 EMERGENCY! FAST test: Face drooping? Arm weakness? Speech difficulty? Call 911!",
      diabetes: "Diabetes management:\n• Monitor blood sugar regularly\n• Take medications as prescribed\n• Balanced diet\n• Regular exercise\n\nFollow your doctor's specific targets.",
      bp: "Blood pressure tips:\n• Reduce salt\n• Exercise daily\n• Maintain healthy weight\n• Take medications as prescribed\n\nNormal: Below 120/80",
      default: "I can help with symptoms, conditions, medications, and health advice. Please ask your question. For serious concerns, always consult your doctor!"
    }
  },
  as: {
    name: "অসমীয়া",
    appTitle: "স্বাস্থ্য ট্ৰেকাৰ",
    welcome: "স্বাগতম!",
    welcomeDesc: "ঔষধ আৰু ব্যায়াম সহজে ট্ৰেক কৰক।",
    enterInfo: "তথ্য দিয়ক",
    enterInfoDesc: "আপোনাৰ নাম আৰু বয়স জনাওক।",
    dashboard: "ডেশ্বব'ৰ্ড",
    dashboardDesc: "আপোনাৰ অগ্ৰগতি এক নজৰত চাওক।",
    addMedicines: "ঔষধ যোগ কৰক",
    addMedicinesDesc: "ঔষধ যোগ কৰিবলৈ 'ঔষধ' ক্লিক কৰক।",
    checkOff: "চেক কৰক",
    checkOffDesc: "গ্ৰহণ কৰা ঔষধ চিহ্নিত কৰক।",
    exercisePlan: "ব্যায়াম পৰিকল্পনা",
    exercisePlanDesc: "আপোনাৰ ৪৫ মিনিটৰ ৰুটিন চাওক।",
    trackProgress: "অগ্ৰগতি ট্ৰেক কৰক",
    trackProgressDesc: "ব্যায়াম চেক কৰক।",
    allSet: "সকলো সাজু!",
    allSetDesc: "দৈনিক চেক কৰক!",
    skip: "এৰি যাওক",
    back: "পিছলৈ",
    next: "পৰৱৰ্তী",
    getStarted: "আৰম্ভ কৰক",
    yourName: "আপোনাৰ নাম",
    yourAge: "আপোনাৰ বয়স",
    enterName: "আপোনাৰ নাম লিখক",
    enterAge: "আপোনাৰ বয়স লিখক",
    saveProfile: "প্ৰ'ফাইল সংৰক্ষণ কৰক",
    welcomeBack: "আকৌ স্বাগতম! আজিৰ বাবে আপোনাৰ স্বাস্থ্য সাৰাংশ ইয়াত আছে।",
    medicines: "ঔষধ",
    exercise: "ব্যায়াম",
    today: "আজি",
    dosesTaken: "আজি লোৱা ডোজ",
    completed: "সম্পূৰ্ণ!",
    activitiesDone: "কৰা কাৰ্যকলাপ",
    todaysMedicines: "আজিৰ ঔষধ",
    noMedicinesScheduled: "কোনো ঔষধ নিৰ্ধাৰিত নহয়",
    addMedicinesBtn: "ঔষধ যোগ কৰক",
    morningExercise: "ৰাতিপুৱাৰ ব্যায়াম",
    ageRestriction: "বয়সৰ সীমাবদ্ধতা",
    availableFor12Plus: "১২ বছৰৰ ওপৰৰ বাবে উপলব্ধ",
    consultDoctor: "⚠️ প্ৰথমে আপোনাৰ চিকিৎসকৰ পৰামৰ্শ লওক",
    markAllDone: "সকলো সম্পূৰ্ণ চিহ্নিত কৰক",
    allDoneToday: "✓ সকলো সম্পূৰ্ণ!",
    myMedicines: "মোৰ ঔষধ",
    manageMedication: "আপোনাৰ ঔষধৰ সূচী পৰিচালনা কৰক",
    addMedicine: "ঔষধ যোগ কৰক",
    addNewMedicine: "নতুন ঔষধ যোগ কৰক",
    medicineName: "ঔষধৰ নাম",
    dosage: "ডোজ",
    egAspirin: "যেনে, এছপিৰিন",
    eg100mg: "যেনে, ১০০এমজি",
    saveMedicine: "ঔষধ সংৰক্ষণ কৰক",
    cancel: "বাতিল কৰক",
    noMedicinesAdded: "এতিয়ালৈকে কোনো ঔষধ যোগ কৰা হোৱা নাই",
    clickToAdd: "আৰম্ভ কৰিবলৈ \"ঔষধ যোগ কৰক\" ক্লিক কৰক",
    healthAI: "স্বাস্থ্য এআই সহায়ক",
    askAboutSymptoms: "লক্ষণ, ঔষধ বা স্বাস্থ্য পৰামৰ্শৰ বিষয়ে সোধক",
    askQuestion: "স্বাস্থ্য প্ৰশ্ন সোধক...",
    emergencyWarning: "⚠️ জৰুৰীকালীনৰ বাবে ১০৮ কল কৰক বা হস্পিটেল টেব চাওক",
    nearbyHospitals: "ওচৰৰ হস্পিটেল",
    findEmergencyCare: "আপোনাৰ ওচৰত জৰুৰীকালীন সেৱা বিচাৰক",
    enableLocation: "স্থান সেৱা সক্ষম কৰক",
    allowLocation: "হস্পিটেল বিচাৰিবলৈ স্থানৰ অনুমতি দিয়ক",
    getMyLocation: "মোৰ স্থান লওক",
    gettingLocation: "স্থান লোৱা হৈছে...",
    locationFound: "✓ স্থান পোৱা গৈছে! ওচৰৰ হস্পিটেল দেখুওৱা হৈছে",
    refresh: "ৰিফ্ৰেশ",
    emergencyServices: "🚨 জৰুৰীকালীন সেৱা",
    directions: "দিশ",
    callNow: "এতিয়াই কল কৰক",
    emergencyInfo: "জৰুৰীকালীন তথ্য",
    call911: "১০৮ কল কৰক - জৰুৰীকালীন সেৱা",
    call911For: "১০৮ কল কৰক: বুকুৰ বিষ, শ্বাস-প্ৰশ্বাসৰ অসুবিধা, গুৰুতৰ ৰক্তক্ষৰণ, ষ্ট্ৰোকৰ লক্ষণ।",
    profileSettings: "প্ৰ'ফাইল ছেটিংছ",
    manageInfo: "আপোনাৰ তথ্য আৰু পছন্দ পৰিচালনা কৰক",
    name: "নাম",
    age: "বয়স",
    saveChanges: "পৰিৱৰ্তন সংৰক্ষণ কৰক",
    editProfile: "প্ৰ'ফাইল সম্পাদনা কৰক",
    appearance: "ৰূপ",
    darkMode: "ডাৰ্ক মোড",
    enabled: "সক্ষম",
    disabled: "অক্ষম",
    healthStats: "স্বাস্থ্য পৰিসংখ্যা",
    totalMedicines: "মুঠ ঔষধ",
    exercisePlanTime: "ব্যায়াম পৰিকল্পনা",
    helpTutorial: "সহায় আৰু টিউটৰিয়েল",
    hospitals: "হস্পিটেল",
    profile: "প্ৰ'ফাইল",
    home: "মূল পৃষ্ঠা",
    chatbotGreeting: "নমস্কাৰ! মই আপোনাৰ স্বাস্থ্য সহায়ক। মই লক্ষণ, ৰোগ, ঔষধ আৰু সাধাৰণ স্বাস্থ্য পৰামৰ্শৰ বিষয়ে সহায় কৰিব পাৰো। আপুনি কি জানিব বিচাৰে?",
    selectLanguage: "ভাষা নিৰ্বাচন কৰক",
    exercises: {
      warmup: "ৱাৰ্ম-আপ: লাহে লাহে খোজ কাঢ়া",
      seatedMarching: "ৱাৰ্ম-আপ: বহি মাৰ্চিং",
      seatedMovements: "ৱাৰ্ম-আপ: বহি লৰচৰ",
      briskWalking: "দ্ৰুত খোজ বা লৰিবলৈ",
      gentleWalking: "লাহে লাহে খোজ",
      seatedWalking: "বহি খোজ",
      strength: "শক্তি: স্কোৱাট, পুছ-আপ",
      chairExercises: "চেয়াৰ ব্যায়াম",
      balance: "ভাৰসাম্য ব্যায়াম",
      balanceSupport: "সহায়ৰে ভাৰসাম্য",
      handExercises: "হাতৰ ব্যায়াম",
      stretching: "ষ্ট্ৰেচিং",
      gentleStretching: "লাহে ষ্ট্ৰেচিং",
      coolDown: "শীতল কৰা",
      breathing: "শ্বাস-প্ৰশ্বাস ব্যায়াম",
      deepBreathing: "দীঘল শ্বাস",
      low: "কম",
      veryLow: "অতি কম",
      lowModerate: "কম-মধ্যমীয়া",
      moderate: "মধ্যমীয়া"
    },
    chatResponses: {
      greeting: "নমস্কাৰ! মই আপোনাৰ স্বাস্থ্য সহায়ক। মই লক্ষণ, ৰোগ, ঔষধ আৰু সাধাৰণ স্বাস্থ্য পৰামৰ্শৰ বিষয়ে সহায় কৰিব পাৰো। আপুনি কি জানিব বিচাৰে?",
      welcome: "আপোনাক স্বাগতম! সুস্থ থাকক আৰু ব্যক্তিগত পৰামৰ্শৰ বাবে চিকিৎসকৰ পৰামৰ্শ লওক।",
      headache: "মূৰৰ বিষৰ বাবে:\n• শান্ত, আন্ধাৰ কোঠাত বিশ্ৰাম লওক\n• পানী খাওক\n• ঠাণ্ডা সেক দিয়ক\n• উজ্জ্বল পোহৰ এৰাই চলক\n\nগুৰুতৰ বা জ্বৰৰ সৈতে হ'লে চিকিৎসক দেখুৱাওক।",
      fever: "জ্বৰৰ বাবে:\n• বিশ্ৰাম লওক আৰু তৰল পদাৰ্থ খাওক\n• নিৰ্দেশ অনুসৰি এচিটামিনোফেন লওক\n• ঠাণ্ডা সেক ব্যৱহাৰ কৰক\n\n১০৩°F ৰ ওপৰত বা ৩+ দিন থাকিলে চিকিৎসকক ফোন কৰক।",
      cough: "কাহ/চৰ্দিৰ বাবে:\n• গৰম তৰল পদাৰ্থ খাওক\n• হিউমিডিফায়াৰ ব্যৱহাৰ কৰক\n• ভালদৰে বিশ্ৰাম লওক\n• পানী খাই থাকক\n\n৩+ সপ্তাহ থাকিলে বা তেজ ওলালে চিকিৎসক দেখুৱাওক।",
      chest: "🚨 জৰুৰীকালীন! বুকুৰ বিষৰ বাবে তৎক্ষণাৎ ১০৮ কল কৰক।",
      stroke: "🚨 জৰুৰীকালীন! FAST পৰীক্ষা: মুখ হাঁহিছে? হাত দুৰ্বল? কথা কোৱাত অসুবিধা? ১০৮ কল কৰক!",
      diabetes: "ডায়েবেটিছ পৰিচালনা:\n• নিয়মীয়াকৈ তেজৰ চেনি পৰীক্ষা কৰক\n• নিৰ্দেশ অনুসৰি ঔষধ লওক\n• সুষম আহাৰ\n• নিয়মীয়া ব্যায়াম\n\nআপোনাৰ চিকিৎসকৰ নিৰ্দিষ্ট লক্ষ্য অনুসৰণ কৰক।",
      bp: "ৰক্তচাপৰ পৰামৰ্শ:\n• নিমখ কম কৰক\n• দৈনিক ব্যায়াম কৰক\n• সুস্থ ওজন বজাই ৰাখক\n• নিৰ্দেশ অনুসৰি ঔষধ লওক\n\nস্বাভাৱিক: ১২০/৮০ তলত",
      default: "মই লক্ষণ, ৰোগ, ঔষধ আৰু স্বাস্থ্য পৰামৰ্শৰ সৈতে সহায় কৰিব পাৰো। অনুগ্ৰহ কৰি আপোনাৰ প্ৰশ্ন সোধক। গুৰুতৰ সমস্যাৰ বাবে সদায় চিকিৎসকৰ পৰামৰ্শ লওক!"
    }
  },
  hi: {
    name: "हिन्दी",
    appTitle: "स्वास्थ्य ट्रैकर",
    welcome: "स्वागत है!",
    welcomeDesc: "दवाइयाँ और व्यायाम आसानी से ट्रैक करें।",
    enterInfo: "जानकारी दें",
    enterInfoDesc: "हमें अपना नाम और उम्र बताएं।",
    dashboard: "डैशबोर्ड",
    dashboardDesc: "अपनी प्रगति एक नज़र में देखें।",
    addMedicines: "दवाइयाँ जोड़ें",
    addMedicinesDesc: "दवाइयाँ जोड़ने के लिए 'दवाइयाँ' पर क्लिक करें।",
    checkOff: "चेक करें",
    checkOffDesc: "ली गई दवाइयों को चिह्नित करें।",
    exercisePlan: "व्यायाम योजना",
    exercisePlanDesc: "अपनी 45 मिनट की दिनचर्या देखें।",
    trackProgress: "प्रगति ट्रैक करें",
    trackProgressDesc: "व्यायाम चेक करें।",
    allSet: "सब तैयार!",
    allSetDesc: "रोज़ाना चेक करें!",
    skip: "छोड़ें",
    back: "पीछे",
    next: "आगे",
    getStarted: "शुरू करें",
    yourName: "आपका नाम",
    yourAge: "आपकी उम्र",
    enterName: "अपना नाम दर्ज करें",
    enterAge: "अपनी उम्र दर्ज करें",
    saveProfile: "प्रोफाइल सहेजें",
    welcomeBack: "वापस स्वागत है! यहां आज का आपका स्वास्थ्य सारांश है।",
    medicines: "दवाइयाँ",
    exercise: "व्यायाम",
    today: "आज",
    dosesTaken: "आज ली गई खुराक",
    completed: "पूर्ण!",
    activitiesDone: "पूर्ण गतिविधियाँ",
    todaysMedicines: "आज की दवाइयाँ",
    noMedicinesScheduled: "कोई दवाई निर्धारित नहीं",
    addMedicinesBtn: "दवाइयाँ जोड़ें",
    morningExercise: "सुबह का व्यायाम",
    ageRestriction: "उम्र प्रतिबंध",
    availableFor12Plus: "12 वर्ष और उससे अधिक के लिए उपलब्ध",
    consultDoctor: "⚠️ पहले अपने डॉक्टर से परामर्श करें",
    markAllDone: "सभी को पूर्ण चिह्नित करें",
    allDoneToday: "✓ सब पूर्ण!",
    myMedicines: "मेरी दवाइयाँ",
    manageMedication: "अपनी दवाओं का समय प्रबंधित करें",
    addMedicine: "दवाई जोड़ें",
    addNewMedicine: "नई दवाई जोड़ें",
    medicineName: "दवाई का नाम",
    dosage: "खुराक",
    egAspirin: "जैसे, एस्पिरिन",
    eg100mg: "जैसे, 100मिग्रा",
    saveMedicine: "दवाई सहेजें",
    cancel: "रद्द करें",
    noMedicinesAdded: "अभी तक कोई दवाई नहीं जोड़ी गई",
    clickToAdd: "शुरू करने के लिए \"दवाई जोड़ें\" पर क्लिक करें",
    healthAI: "स्वास्थ्य एआई सहायक",
    askAboutSymptoms: "लक्षण, दवाओं या स्वास्थ्य सलाह के बारे में पूछें",
    askQuestion: "स्वास्थ्य प्रश्न पूछें...",
    emergencyWarning: "⚠️ आपातकाल के लिए 102 पर कॉल करें या अस्पताल टैब देखें",
    nearbyHospitals: "नजदीकी अस्पताल",
    findEmergencyCare: "अपने पास आपातकालीन देखभाल खोजें",
    enableLocation: "स्थान सेवाएं सक्षम करें",
    allowLocation: "अस्पताल खोजने के लिए स्थान की अनुमति दें",
    getMyLocation: "मेरा स्थान प्राप्त करें",
    gettingLocation: "स्थान प्राप्त कर रहे हैं...",
    locationFound: "✓ स्थान मिल गया! नजदीकी अस्पताल दिखा रहे हैं",
    refresh: "रीफ्रेश",
    emergencyServices: "🚨 आपातकालीन सेवाएं",
    directions: "दिशा-निर्देश",
    callNow: "अभी कॉल करें",
    emergencyInfo: "आपातकालीन जानकारी",
    call911: "102 पर कॉल करें - आपातकालीन सेवाएं",
    call911For: "102 पर कॉल करें: सीने में दर्द, सांस लेने में कठिनाई, गंभीर रक्तस्राव, स्ट्रोक के लक्षण।",
    profileSettings: "प्रोफाइल सेटिंग्स",
    manageInfo: "अपनी जानकारी और प्राथमिकताएं प्रबंधित करें",
    name: "नाम",
    age: "उम्र",
    saveChanges: "परिवर्तन सहेजें",
    editProfile: "प्रोफाइल संपादित करें",
    appearance: "रूप",
    darkMode: "डार्क मोड",
    enabled: "सक्षम",
    disabled: "अक्षम",
    healthStats: "स्वास्थ्य आंकड़े",
    totalMedicines: "कुल दवाइयाँ",
    exercisePlanTime: "व्यायाम योजना",
    helpTutorial: "सहायता और ट्यूटोरियल",
    hospitals: "अस्पताल",
    profile: "प्रोफाइल",
    home: "होम",
    chatbotGreeting: "नमस्ते! मैं आपका स्वास्थ्य सहायक हूं। मैं लक्षण, स्थितियों, दवाओं और सामान्य स्वास्थ्य सलाह के बारे में मदद कर सकता हूं। आप क्या जानना चाहेंगे?",
    selectLanguage: "भाषा चुनें",
    exercises: {
      warmup: "वार्म-अप: धीरे-धीरे चलना",
      seatedMarching: "वार्म-अप: बैठकर मार्चिंग",
      seatedMovements: "वार्म-अप: बैठकर हिलना-डुलना",
      briskWalking: "तेज चलना या जॉगिंग",
      gentleWalking: "धीरे-धीरे चलना",
      seatedWalking: "बैठकर चलना",
      strength: "शक्ति: स्क्वाट्स, पुश-अप्स",
      chairExercises: "कुर्सी व्यायाम",
      balance: "संतुलन व्यायाम",
      balanceSupport: "सहारे के साथ संतुलन",
      handExercises: "हाथ के व्यायाम",
      stretching: "स्ट्रेचिंग",
      gentleStretching: "धीरे स्ट्रेचिंग",
      coolDown: "कूल डाउन",
      breathing: "सांस लेने के व्यायाम",
      deepBreathing: "गहरी सांस",
      low: "कम",
      veryLow: "बहुत कम",
      lowModerate: "कम-मध्यम",
      moderate: "मध्यम"
    },
    chatResponses: {
      greeting: "नमस्ते! मैं आपका स्वास्थ्य सहायक हूं। मैं लक्षण, स्थितियों, दवाओं और सामान्य स्वास्थ्य सलाह के बारे में मदद कर सकता हूं। आप क्या जानना चाहेंगे?",
      welcome: "आपका स्वागत है! स्वस्थ रहें और व्यक्तिगत सलाह के लिए अपने डॉक्टर से परामर्श करें।",
      headache: "सिरदर्द के लिए:\n• शांत, अंधेरे कमरे में आराम करें\n• पानी पिएं\n• ठंडा सेक लगाएं\n• तेज रोशनी से बचें\n\nगंभीर होने या बुखार के साथ होने पर डॉक्टर को दिखाएं।",
      fever: "बुखार के लिए:\n• आराम करें और तरल पदार्थ पिएं\n• निर्देशानुसार पैरासिटामोल लें\n• ठंडा सेक उपयोग करें\n\n103°F से ऊपर या 3+ दिन रहने पर डॉक्टर को फोन करें।",
      cough: "खांसी/सर्दी के लिए:\n• गर्म तरल पदार्थ पिएं\n• ह्यूमिडिफायर उपयोग करें\n• अच्छे से आराम करें\n• पानी पीते रहें\n\n3+ सप्ताह रहने या खून आने पर डॉक्टर को दिखाएं।",
      chest: "🚨 आपातकाल! सीने में दर्द के लिए तुरंत 102 पर कॉल करें।",
      stroke: "🚨 आपातकाल! FAST परीक्षण: चेहरा टेढ़ा? हाथ कमजोर? बोलने में कठिनाई? 102 पर कॉल करें!",
      diabetes: "मधुमेह प्रबंधन:\n• नियमित रूप से ब्लड शुगर जांचें\n• निर्देशानुसार दवाएं लें\n• संतुलित आहार\n• नियमित व्यायाम\n\nअपने डॉक्टर के विशिष्ट लक्ष्यों का पालन करें।",
      bp: "रक्तचाप सुझाव:\n• नमक कम करें\n• रोज व्यायाम करें\n• स्वस्थ वजन बनाए रखें\n• निर्देशानुसार दवाएं लें\n\nसामान्य: 120/80 से नीचे",
      default: "मैं लक्षण, स्थितियों, दवाओं और स्वास्थ्य सलाह में मदद कर सकता हूं। कृपया अपना प्रश्न पूछें। गंभीर चिंताओं के लिए हमेशा अपने डॉक्टर से परामर्श करें!"
    }
  }
};

export default function SeniorHealthTracker() {
  const [language, setLanguage] = useState('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [profile, setProfile] = useState({ name: '', age: 65 });
  const [tempProfile, setTempProfile] = useState({ name: '', age: 65 });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [dailyLogs, setDailyLogs] = useState({});
  const [exercisePlan, setExercisePlan] = useState([]);
  const [showAddMedicine, setShowAddMedicine] = useState(false);
  const [newMedicine, setNewMedicine] = useState({ name: '', dosage: '', times: ['Morning'], frequency: 'Daily', weeklyDays: [1] });
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [tutorialCompleted, setTutorialCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: translations['en'].chatbotGreeting }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const t = translations[language];

  useEffect(() => {
    setChatMessages([{ role: 'bot', text: t.chatbotGreeting }]);
  }, [language]);

  useEffect(() => {
    let plan = [];
    const age = profile.age;
    if (age >= 12 && age < 60) {
      plan = [
        { time: '0-5 min', activity: 'Warm-up: Gentle walking', intensity: 'Low' },
        { time: '5-15 min', activity: 'Brisk walking or jogging', intensity: 'Moderate' },
        { time: '15-25 min', activity: 'Strength: Squats, push-ups', intensity: 'Moderate' },
        { time: '25-35 min', activity: 'Balance exercises', intensity: 'Low' },
        { time: '35-40 min', activity: 'Stretching', intensity: 'Low' },
        { time: '40-45 min', activity: 'Cool down', intensity: 'Low' }
      ];
    } else if (age >= 60 && age < 75) {
      plan = [
        { time: '0-5 min', activity: 'Warm-up: Seated marching', intensity: 'Low' },
        { time: '5-15 min', activity: 'Gentle walking', intensity: 'Low-Moderate' },
        { time: '15-25 min', activity: 'Chair exercises', intensity: 'Low' },
        { time: '25-33 min', activity: 'Balance with support', intensity: 'Low' },
        { time: '33-40 min', activity: 'Stretching', intensity: 'Low' },
        { time: '40-45 min', activity: 'Breathing exercises', intensity: 'Low' }
      ];
    } else if (age >= 75) {
      plan = [
        { time: '0-5 min', activity: 'Warm-up: Seated movements', intensity: 'Very Low' },
        { time: '5-15 min', activity: 'Seated walking', intensity: 'Low' },
        { time: '15-25 min', activity: 'Chair exercises', intensity: 'Very Low' },
        { time: '25-33 min', activity: 'Hand exercises', intensity: 'Very Low' },
        { time: '33-40 min', activity: 'Gentle stretching', intensity: 'Very Low' },
        { time: '40-45 min', activity: 'Deep breathing', intensity: 'Very Low' }
      ];
    }
    setExercisePlan(plan);
  }, [profile.age]);

  const getMedicinesToday = () => {
    const currentDay = new Date().getDay();
    return medicines.filter(m => {
      if (m.frequency === 'Daily') return true;
      if (m.frequency === 'Weekly' && m.weeklyDays) return m.weeklyDays.includes(currentDay);
      return false;
    });
  };

  const getTodayStats = () => {
    const today = new Date().toDateString();
    const medicinesToday = getMedicinesToday();
    const totalDoses = medicinesToday.reduce((acc, m) => acc + m.times.length, 0);
    const takenDoses = Object.keys(dailyLogs).filter(k => k.startsWith(`${today}-med-`) && dailyLogs[k]).length;
    const totalExercises = exercisePlan.length;
    const completedExercises = Object.keys(dailyLogs).filter(k => k.startsWith(`${today}-exercise-`) && dailyLogs[k]).length;
    const allExercisesComplete = totalExercises > 0 && completedExercises === totalExercises;
    return { totalDoses, takenDoses, totalExercises, completedExercises, allExercisesComplete };
  };

  const stats = getTodayStats();
  const today = new Date().toDateString();

  const tutorialSteps = [
    { title: t.welcome, desc: t.welcomeDesc },
    { title: t.enterInfo, desc: t.enterInfoDesc },
    { title: t.dashboard, desc: t.dashboardDesc },
    { title: t.addMedicines, desc: t.addMedicinesDesc },
    { title: t.checkOff, desc: t.checkOffDesc },
    { title: t.exercisePlan, desc: t.exercisePlanDesc },
    { title: t.trackProgress, desc: t.trackProgressDesc },
    { title: t.allSet, desc: t.allSetDesc }
  ];

  const getUserLocation = () => {
    setLoadingLocation(true);
    setLocationError('');
    setNearbyHospitals([]);
    
    if (!navigator.geolocation) {
      setLocationError('Your browser does not support location services.');
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        findNearbyHospitals(latitude, longitude);
        setLoadingLocation(false);
      },
      (error) => {
        setLoadingLocation(false);
        let errorMsg = 'Could not get your location. Please enable location services.';
        if (error.code === 1) errorMsg = 'Location permission denied. Please enable location access.';
        setLocationError(errorMsg);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  const findNearbyHospitals = (lat, lng) => {
    const generateHospital = (name, latOffset, lngOffset, hasEmergency) => {
      const hospitalLat = lat + latOffset;
      const hospitalLng = lng + lngOffset;
      const R = 6371;
      const dLat = (latOffset) * Math.PI / 180;
      const dLon = (lngOffset) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat * Math.PI / 180) * Math.cos(hospitalLat * Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const distance = R * c;
      
      return {
        name,
        distance: `${distance.toFixed(1)} km`,
        distanceValue: distance,
        address: `${Math.floor(Math.random() * 900 + 100)} ${['Main St', 'Oak Ave', 'Pine Rd'][Math.floor(Math.random() * 3)]}`,
        phone: `(555) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
        emergency: hasEmergency,
        lat: hospitalLat,
        lng: hospitalLng
      };
    };

    const hospitals = [
      generateHospital('City General Hospital', 0.009, 0.009, true),
      generateHospital('St. Mary Medical Center', 0.015, -0.012, true),
      generateHospital('Community Health Clinic', -0.018, 0.014, false),
      generateHospital('Memorial Hospital', 0.025, 0.020, true),
      generateHospital('Regional Medical Center', -0.030, -0.025, true)
    ];
    
    hospitals.sort((a, b) => a.distanceValue - b.distanceValue);
    setNearbyHospitals(hospitals.slice(0, 5));
  };

  const openInMaps = (hospital) => {
    if (userLocation) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${hospital.lat},${hospital.lng}`;
      window.open(url, '_blank');
    }
  };

  const getMedicalResponse = (question) => {
    const q = question.toLowerCase();
    if (q.match(/^(hi|hello|hey|good)/)) return t.chatbotGreeting;
    if (q.match(/thank/)) return 'You\'re welcome! Stay healthy and consult your doctor for personalized advice.';
    if (q.match(/headache|migraine/)) return 'For headaches:\n• Rest in a quiet, dark room\n• Stay hydrated\n• Apply cold compress\n• Avoid bright lights\n\nSee a doctor if severe or with fever.';
    if (q.match(/fever/)) return 'For fever:\n• Rest and drink fluids\n• Take acetaminophen as directed\n• Use cool compress\n\nCall doctor if above 103°F or lasts 3+ days.';
    if (q.match(/cough|cold/)) return 'For cough/cold:\n• Drink warm liquids\n• Use humidifier\n• Rest well\n• Stay hydrated\n\nSee doctor if lasts 3+ weeks or coughing blood.';
    if (q.match(/chest pain|heart/)) return '🚨 EMERGENCY! Call emergency services immediately for chest pain.';
    if (q.match(/stroke/)) return '🚨 EMERGENCY! FAST test: Face drooping? Arm weakness? Speech difficulty? Call emergency!';
    if (q.match(/diabetes|sugar/)) return 'Diabetes management:\n• Monitor blood sugar regularly\n• Take medications as prescribed\n• Balanced diet\n• Regular exercise\n\nFollow your doctor\'s specific targets.';
    if (q.match(/blood pressure|bp/)) return 'Blood pressure tips:\n• Reduce salt\n• Exercise daily\n• Maintain healthy weight\n• Take medications as prescribed\n\nNormal: Below 120/80';
    return 'I can help with symptoms, conditions, medications, and health advice. Please ask your question. For serious concerns, always consult your doctor!';
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = { role: 'user', text: chatInput };
    const botMsg = { role: 'bot', text: getMedicalResponse(chatInput) };
    setChatMessages([...chatMessages, userMsg, botMsg]);
    setChatInput('');
    setTimeout(() => {
      const container = document.getElementById('chat-container');
      if (container) container.scrollTop = container.scrollHeight;
    }, 100);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6">
          <div className={`rounded-lg shadow-2xl w-full max-w-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-blue-600">Step {tutorialStep + 1}/8</span>
                <button onClick={() => { setShowTutorial(false); setTutorialCompleted(true); }} className="text-sm text-gray-400 hover:text-gray-600">{t.skip}</button>
              </div>
              <div className="w-full rounded-full h-3 bg-gray-200">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${((tutorialStep + 1) / 8) * 100}%` }}></div>
              </div>
            </div>
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{tutorialSteps[tutorialStep].title}</h2>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tutorialSteps[tutorialStep].desc}</p>
            <div className="flex gap-4">
              {tutorialStep > 0 && (
                <button onClick={() => setTutorialStep(tutorialStep - 1)} className={`flex-1 px-6 py-3 rounded-lg text-lg font-semibold ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>{t.back}</button>
              )}
              <button onClick={() => tutorialStep < 7 ? setTutorialStep(tutorialStep + 1) : (setShowTutorial(false), setTutorialCompleted(true))} className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
                {tutorialStep === 7 ? t.getStarted : t.next}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex h-screen overflow-hidden">
        <div className={`${sidebarOpen ? 'w-64' : 'w-20'} ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col`} style={{ transition: 'width 0.3s' }}>
          <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-blue-600' : 'border-gray-200 bg-blue-600'} text-white`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8" />
                {sidebarOpen && <div><h1 className="text-xl font-bold">{t.appTitle}</h1><p className="text-xs opacity-90">{profile.name || 'User'}</p></div>}
              </div>
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white hover:bg-opacity-20"><Menu className="w-5 h-5" /></button>
            </div>
          </div>

          {profile.name && sidebarOpen && (
            <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-blue-50'}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">{profile.name.charAt(0).toUpperCase()}</div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold truncate ${darkMode ? 'text-white' : 'text-gray-800'}`}>{profile.name}</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{profile.age} years</p>
                </div>
              </div>
            </div>
          )}

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {[
              { id: 'dashboard', label: t.dashboard, icon: Activity },
              { id: 'medicines', label: t.medicines, icon: Pill },
              { id: 'chatbot', label: t.healthAI, icon: MessageCircle },
              { id: 'hospitals', label: t.hospitals, icon: MapPin },
              { id: 'profile', label: t.profile, icon: User }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                  activeTab === tab.id
                    ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600')
                    : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')
                } ${sidebarOpen ? '' : 'justify-center'}`}
              >
                <tab.icon className="w-5 h-5" />
                {sidebarOpen && <span className="text-sm font-semibold">{tab.label}</span>}
              </button>
            ))}
          </nav>

          {sidebarOpen && (
            <div className="p-4 border-t space-y-2">
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className={`w-full px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-between ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>{translations[language].name}</span>
                  </div>
                </button>
                {showLanguageMenu && (
                  <div className={`absolute bottom-full left-0 right-0 mb-2 rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    {Object.keys(translations).map(lang => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setShowLanguageMenu(false); }}
                        className={`w-full px-4 py-2 text-left text-sm ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-blue-100'} ${language === lang ? 'bg-blue-600 text-white' : (darkMode ? 'text-gray-200' : 'text-gray-700')}`}
                      >
                        {translations[lang].name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => { setTutorialStep(0); setShowTutorial(true); }} className={`w-full px-4 py-2 rounded-lg text-sm font-semibold ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>{t.helpTutorial}</button>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-6">
            {!profile.name && tutorialCompleted && (
              <div className={`rounded-lg shadow-lg p-6 border-2 mb-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.welcome} {t.saveProfile}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.yourName}</label>
                    <input type="text" placeholder={t.enterName} className={`w-full text-base p-3 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} value={tempProfile.name} onChange={(e) => setTempProfile({...tempProfile, name: e.target.value})} />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.yourAge}</label>
                    <input type="number" placeholder={t.enterAge} className={`w-full text-base p-3 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} value={tempProfile.age} onChange={(e) => setTempProfile({...tempProfile, age: parseInt(e.target.value) || 65})} />
                  </div>
                </div>
                <button onClick={() => { setProfile(tempProfile); setTutorialCompleted(true); }} className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"><CheckCircle className="w-5 h-5" /> {t.saveProfile}</button>
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div>
                  <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.dashboard}</h2>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.welcomeBack}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Pill className="w-8 h-8" />
                      <h3 className="text-xl font-bold">{t.medicines}</h3>
                    </div>
                    <div className="text-5xl font-bold mb-2">{stats.takenDoses}/{stats.totalDoses}</div>
                    <p className="text-sm opacity-90">{t.dosesTaken}</p>
                  </div>

                  <div className="bg-green-600 text-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-8 h-8" />
                      <h3 className="text-xl font-bold">{t.exercise}</h3>
                    </div>
                    <div className="text-5xl font-bold mb-2">{stats.allExercisesComplete ? '✓' : `${stats.completedExercises}/${stats.totalExercises}`}</div>
                    <p className="text-sm opacity-90">{stats.allExercisesComplete ? t.completed : t.activitiesDone}</p>
                  </div>

                  <div className="bg-purple-600 text-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-8 h-8" />
                      <h3 className="text-xl font-bold">{t.today}</h3>
                    </div>
                    <p className="text-lg font-semibold">{new Date().toLocaleDateString(language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : language === 'bn' ? 'bn-BD' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className={`rounded-lg shadow-lg p-6 border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <h3 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      <Pill className="w-6 h-6 text-blue-600" />
                      {t.todaysMedicines}
                    </h3>
                    {getMedicinesToday().length === 0 ? (
                      <div className="text-center py-8">
                        <Pill className={`w-16 h-16 mx-auto mb-3 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.noMedicinesScheduled}</p>
                        <button onClick={() => setActiveTab('medicines')} className="mt-3 text-blue-600 hover:underline font-semibold">{t.addMedicinesBtn}</button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {getMedicinesToday().map(med => (
                          <div key={med.id} className={`rounded-lg p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                            <p className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{med.name}</p>
                            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{med.dosage}</p>
                            <div className="flex gap-2 flex-wrap">
                              {med.times.map(time => {
                                const key = `${today}-med-${med.id}-${time}`;
                                const taken = dailyLogs[key];
                                return (
                                  <button
                                    key={time}
                                    onClick={() => setDailyLogs({...dailyLogs, [key]: !taken})}
                                    className={`px-4 py-2 text-sm font-semibold rounded-lg ${
                                      taken
                                        ? 'bg-green-500 text-white'
                                        : (darkMode ? 'bg-gray-600 border-2 border-gray-500 text-gray-200' : 'bg-white border-2 border-gray-300')
                                    }`}
                                  >
                                    {taken ? '✓ ' : ''}{time}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`rounded-lg shadow-lg p-6 border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <h3 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      <Activity className="w-6 h-6 text-green-600" />
                      {t.morningExercise}
                    </h3>
                    {profile.age < 12 ? (
                      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 text-center">
                        <AlertCircle className="w-16 h-16 text-yellow-600 mx-auto mb-3" />
                        <p className="text-lg font-semibold text-yellow-800">{t.ageRestriction}</p>
                        <p className="text-sm text-yellow-700 mt-2">{t.availableFor12Plus}</p>
                      </div>
                    ) : (
                      <>
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 mb-4">
                          <p className="text-sm font-semibold text-yellow-800">{t.consultDoctor}</p>
                        </div>
                        <div className="space-y-3" style={{ maxHeight: '384px', overflowY: 'auto' }}>
                          {exercisePlan.map((ex, idx) => {
                            const key = `${today}-exercise-${idx}`;
                            const done = dailyLogs[key];
                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  const newLogs = {...dailyLogs, [key]: !done};
                                  setDailyLogs(newLogs);
                                }}
                                className={`w-full text-left rounded-lg p-4 border-2 ${
                                  done
                                    ? 'bg-green-50 border-green-300'
                                    : (darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200')
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                    done ? 'bg-green-500 border-green-500' : (darkMode ? 'bg-gray-800 border-gray-500' : 'bg-white border-gray-300')
                                  }`}>
                                    {done && <CheckCircle className="w-5 h-5 text-white" />}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex gap-2 mb-1 flex-wrap">
                                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">{ex.time}</span>
                                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                        ex.intensity === 'Very Low' ? 'bg-green-100 text-green-700' :
                                        ex.intensity.includes('Low') ? 'bg-blue-100 text-blue-700' :
                                        'bg-orange-100 text-orange-700'
                                      }`}>{ex.intensity}</span>
                                    </div>
                                    <p className={`text-sm ${darkMode && !done ? 'text-gray-300' : ''}`}>{ex.activity}</p>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                        <button
                          onClick={() => {
                            const newLogs = {...dailyLogs};
                            const allDone = !stats.allExercisesComplete;
                            exercisePlan.forEach((_, idx) => { newLogs[`${today}-exercise-${idx}`] = allDone; });
                            setDailyLogs(newLogs);
                          }}
                          className={`w-full mt-4 py-3 text-base font-bold rounded-lg ${
                            stats.allExercisesComplete ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                          }`}
                        >
                          {stats.allExercisesComplete ? t.allDoneToday : t.markAllDone}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'medicines' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.myMedicines}</h2>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.manageMedication}</p>
                  </div>
                  <button onClick={() => setShowAddMedicine(!showAddMedicine)} className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold">
                    <Plus className="w-5 h-5" />{t.addMedicine}
                  </button>
                </div>

                {showAddMedicine && (
                  <div className={`rounded-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.addNewMedicine}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.medicineName}</label>
                        <input type="text" placeholder={t.egAspirin} className={`w-full p-3 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} value={newMedicine.name} onChange={(e) => setNewMedicine({...newMedicine, name: e.target.value})} />
                      </div>
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.dosage}</label>
                        <input type="text" placeholder={t.eg100mg} className={`w-full p-3 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} value={newMedicine.dosage} onChange={(e) => setNewMedicine({...newMedicine, dosage: e.target.value})} />
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button onClick={() => {
                        if (newMedicine.name && newMedicine.dosage) {
                          setMedicines([...medicines, {...newMedicine, id: Date.now()}]);
                          setNewMedicine({ name: '', dosage: '', times: ['Morning'], frequency: 'Daily', weeklyDays: [1] });
                          setShowAddMedicine(false);
                        }
                      }} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">{t.saveMedicine}</button>
                      <button onClick={() => setShowAddMedicine(false)} className={`px-6 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-300'}`}>{t.cancel}</button>
                    </div>
                  </div>
                )}

                {medicines.length === 0 ? (
                  <div className={`rounded-lg shadow-lg p-12 border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} text-center`}>
                    <Pill className={`w-20 h-20 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                    <p className={`text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.noMedicinesAdded}</p>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.clickToAdd}</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {medicines.map(m => (
                      <div key={m.id} className={`rounded-lg p-5 border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{m.name}</p>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{m.dosage}</p>
                          </div>
                          <button onClick={() => setMedicines(medicines.filter(med => med.id !== m.id))} className="text-red-500 p-2">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {m.times.map(time => (
                            <span key={time} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold">{time}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'chatbot' && (
              <div style={{ height: 'calc(100vh - 8rem)' }}>
                <div className={`rounded-lg shadow-lg border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex flex-col h-full`}>
                  <div className={`p-6 border-b-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h2 className={`text-3xl font-bold flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      <MessageCircle className="w-8 h-8 text-blue-600" />
                      {t.healthAI}
                    </h2>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.askAboutSymptoms}</p>
                  </div>

                  <div id="chat-container" className={`flex-1 overflow-y-auto p-6 space-y-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-2xl rounded-lg p-5 ${
                          msg.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : (darkMode ? 'bg-gray-800 text-gray-100 border-2 border-gray-700' : 'bg-white text-gray-800 border-2 border-gray-200')
                        }`}>
                          {msg.role === 'bot' && (
                            <div className="flex items-center gap-2 mb-3">
                              <Heart className="w-5 h-5 text-red-500" />
                              <span className="font-semibold text-blue-600">{t.healthAI}</span>
                            </div>
                          )}
                          <p className="text-base leading-relaxed whitespace-pre-line">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`p-6 border-t-2 ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
                    <div className="flex gap-3 mb-3">
                      <input
                        type="text"
                        placeholder={t.askQuestion}
                        className={`flex-1 p-4 border-2 rounded-lg text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      />
                      <button onClick={sendMessage} className="bg-blue-600 text-white px-8 rounded-lg font-semibold">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-xs text-center text-red-600 font-semibold">{t.emergencyWarning}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hospitals' && (
              <div className="space-y-6">
                <div>
                  <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.nearbyHospitals}</h2>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.findEmergencyCare}</p>
                </div>

                <div className={`rounded-lg shadow-lg p-6 border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  {!userLocation ? (
                    <div className="text-center py-12">
                      <Navigation className={`w-20 h-20 mx-auto mb-6 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                      <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.enableLocation}</h3>
                      <p className={`text-base mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.allowLocation}</p>
                      <button
                        onClick={getUserLocation}
                        disabled={loadingLocation}
                        className={`bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-3 mx-auto ${
                          loadingLocation ? 'opacity-50' : ''
                        }`}
                      >
                        <MapPin className="w-6 h-6" />
                        {loadingLocation ? t.gettingLocation : t.getMyLocation}
                      </button>
                      {locationError && (
                        <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg max-w-md mx-auto">
                          <p className="text-red-700 text-sm">{locationError}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center justify-between">
                        <p className="text-green-700 font-semibold">{t.locationFound}</p>
                        <button onClick={getUserLocation} className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}>
                          <MapPin className="w-4 h-4" />{t.refresh}
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {nearbyHospitals.map((hospital, idx) => (
                          <div key={idx} className={`rounded-lg p-5 border-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{hospital.name}</h3>
                                {hospital.emergency && (
                                  <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-lg text-xs font-semibold">
                                    {t.emergencyServices}
                                  </span>
                                )}
                              </div>
                              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-bold ml-3">
                                {hospital.distance}
                              </div>
                            </div>

                            <div className="space-y-2 mb-4">
                              <p className={`text-sm flex items-start gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <MapPin className="w-4 h-4 mt-0.5" />
                                {hospital.address}
                              </p>
                              <p className={`text-sm flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                📞 {hospital.phone}
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <button onClick={() => openInMaps(hospital)} className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                                <Navigation className="w-4 h-4" />{t.directions}
                              </button>
                              <button onClick={() => window.location.href = `tel:${hospital.phone}`} className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg text-sm font-semibold">
                                {t.callNow}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className={`rounded-lg shadow-lg p-6 border-2 border-red-200 ${darkMode ? 'bg-red-900' : 'bg-red-50'}`}>
                  <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-red-200' : 'text-red-800'}`}>
                    <AlertCircle className="w-6 h-6" />{t.emergencyInfo}
                  </h3>
                  <button onClick={() => window.location.href = 'tel:911'} className="w-full bg-red-600 text-white px-6 py-4 rounded-lg text-lg font-bold mb-3">
                    {t.call911}
                  </button>
                  <p className={`text-sm ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
                    {t.call911For}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.profileSettings}</h2>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.manageInfo}</p>
                </div>

                <div className={`rounded-lg shadow-lg p-8 border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                      {profile.name ? profile.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{profile.name || 'User'}</h2>
                      <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{profile.age} {language === 'en' ? 'years old' : language === 'hi' ? 'वर्ष' : language === 'bn' ? 'বছর বয়সী' : language === 'as' ? 'বছৰ' : 'চহি'}</p>
                    </div>
                  </div>

                  {isEditingProfile ? (
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.name}</label>
                        <input type="text" placeholder={t.yourName} className={`w-full p-3 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} value={tempProfile.name} onChange={(e) => setTempProfile({...tempProfile, name: e.target.value})} />
                      </div>
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.age}</label>
                        <input type="number" placeholder={t.yourAge} className={`w-full p-3 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} value={tempProfile.age} onChange={(e) => setTempProfile({...tempProfile, age: parseInt(e.target.value) || 65})} />
                      </div>
                      <div className="flex gap-3 pt-4">
                        <button onClick={() => { setProfile(tempProfile); setIsEditingProfile(false); }} className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold">{t.saveChanges}</button>
                        <button onClick={() => setIsEditingProfile(false)} className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}`}>{t.cancel}</button>
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => setIsEditingProfile(true)} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">{t.editProfile}</button>
                  )}
                </div>

                <div className={`rounded-lg shadow-lg p-6 border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.appearance}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        {darkMode ? <Moon className="w-7 h-7" /> : <Sun className="w-7 h-7" />}
                      </div>
                      <div>
                        <p className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.darkMode}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{darkMode ? t.enabled : t.disabled}</p>
                      </div>
                    </div>
                    <button onClick={() => setDarkMode(!darkMode)} className={`relative w-20 h-10 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}>
                      <div className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white`} style={{ transform: darkMode ? 'translateX(40px)' : 'translateX(0)', transition: 'transform 0.3s' }}></div>
                    </button>
                  </div>
                </div>

                <div className={`rounded-lg shadow-lg p-6 border-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t.healthStats}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={`flex justify-between items-center p-4 rounded-lg ${darkMode ? 'bg-blue-900' : 'bg-blue-50'}`}>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.totalMedicines}</span>
                      <span className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{medicines.length}</span>
                    </div>
                    <div className={`flex justify-between items-center p-4 rounded-lg ${darkMode ? 'bg-green-900' : 'bg-green-50'}`}>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.exercisePlanTime}</span>
                      <span className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{profile.age < 12 ? 'N/A' : '45 min'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}