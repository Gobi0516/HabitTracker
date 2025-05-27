# 📱 Habit Tracker App (React Native CLI)

This is a mobile application built using *React Native CLI* that helps users creat and track and manage daily/weekly habits.

## 📝 Project Description

This Habit Tracker app allows users to:

- Register and Login locally (async storage)
- Add daily or weekly habits
- Mark habits as completed each day
- Filter and view habits (All, Daily, Weekly)
- Track their progress with basic statistics
- Store and retrieve all data locally using *AsyncStorage*
- user can able to change the Ui theme 

## 📦 Setup Instructions

1. *Clone the repository*
   bash
   git clone https:(https://github.com/Gobi0516/HabitTracker.git)
   cd habit-tracker-cli
   

2. *Install dependencies*
   bash
   npm install
   

3. *Run on Android*
   bash
   npx react-native run-android
   

4. *Run on iOS* (macOS only)
   bash
   npx pod-install
   npx react-native run-ios
   

---

## 📱 App Screens & Features

### 🔐 Login & Registration
- Input: Name, Email, Password
- Saves user info in AsyncStorage
- Auto-login if user is already registered

### ➕ Create Habit
- Add habit name
- Choose frequency: Daily or Weekly
- Saved in AsyncStorage

### 📋 Habit List
- View all habits in a FlatList
- Mark as “Completed” or “Not Completed” for the day
- Filter: All /Daily/Completed
- Completed habits will be shown

### 📊 Progress Tracking
- Shows:
  - % of habits completed today
  - Weekly progress 


### 🚪 Logout
-profile section incleudes logout and name and email of an user
- Clears user info and navigates back to Login screen

---

## 📽 Demo Video
>Google Drive Link below here
>https://drive.google.com/drive/folders/1uVHeGJ3zLPbk7L-YMtDwRwRSB90-hUsl?usp=drive_link

---

## ⚙️ Tech Stack

- React Native CLI
- TypeScript / JavaScript
- AsyncStorage
- React Navigation
- Custom Styling / Optional UI Library (e.g., NativeBase, React Native Paper)
