# AI Powered Task Scheduler

**AI Powered Task Scheduler** is a cross-platform mobile application that intelligently manages and automates tasks using **Generative AI** and **Natural Language Processing (NLP)**.  
It offers seamless real-time synchronization across devices and calendars, delivering a smart, automated, and intuitive scheduling experience.

## 🌟 Features

- 🤖 **AI-Driven Task Creation**: Automatically generates tasks based on user-entered natural language input (leveraging ChatGPT-based NLP).
- 🔄 **Real-Time Sync**: Tasks are instantly synchronized with **Firebase** cloud database.
- 📅 **Calendar Integration**: Two-way sync with **Google Calendar**, **Microsoft Outlook Calendar**, and **Apple Calendar**.
- 📱 **Cross-Platform Support**: Built using **React Native** for both Android and iOS.
- 🔔 **Smart Notifications**: Reminders and alerts for upcoming tasks and meetings.
- 🎯 **Task Prioritization**: Intelligent tagging and prioritization based on task content.

## 🛠️ Tech Stack

- **Frontend**: React Native, TypeScript
- **Backend**: Firebase (Authentication, Firestore, Real-time Database)
- **AI & NLP**: Generative AI (ChatGPT API or similar)
- **Calendar APIs**: Google Calendar API, Microsoft Graph API, Apple Calendar API (via device sync)
- **Deployment**: Android Studio, Xcode

## 🚀 Getting Started

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/AI-Powered-Task-Scheduler.git
    cd AI-Powered-Task-Scheduler
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
   - Create a Firebase project.
   - Enable Authentication (Email/Password, Google Sign-In).
   - Set up Firestore Database.
   - Replace `firebaseConfig.ts` with your project credentials.

4. Run the app:
    ```bash
    npm run android   # For Android
    npm run ios       # For iOS (requires macOS + Xcode)
    ```

5. Configure Calendar Integrations:
   - Set up OAuth credentials for Google/Microsoft Calendars.
   - Link device calendar for Apple integration.
