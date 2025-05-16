# Welcome to Quiz App 👋

This is a little app which render a form quiz in order to determine the user's economic profile. It is designed to work properly on both iOS and Android.

## Technologies
- Expo
- Expo Router
- React Native

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app
   
   If you are sure your pc and phone are in the same network execute this

   ```bash
   npx expo start
   ```
   Your devices might be on different subnets even when they are in the same network, in that case execute

   ```bash
   npx expo start --tunnel
   ```
3. Run Quiz App on your phone using Expo Go

   Once you have executed the step 2 command, you should scann the QR code that appears on your console with your phone.
   We assume that you should have installed Expo Go previously.

   The server will start bundling the application. Once this process is complete, you will be able to see and interact with the app.

If you want to learn more about other options that are available, please read the following docs:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## App Short Description

   This app consists of two screens: Quiz and About. The first one renders the questions that the user must complete so that the system can make an analysis of the user's economic profile. The second one provides the user with useful information about the quiz and below it shows a small form for users to provide their information so that they can receive the results via the email provided.

   These two screens are linked by a tabs navigator, so feel free to use the tabs to switch between them. However, they are also linked by logic; you will not be able to send data if you haven't completed the quiz form first. In that case, an alert will pop up asking you to answer the questions and return later. Otherwise, if everything is okay and you provide your name and email, this alert will show a message indicating that your data will be sent.

   IMPORTANT NOTE: The Quiz Screen can receive a dynamic array of questions, so you can add as many questions as you need to this quiz as long as its format is maintained. A JSON file is currently used to retrieve this information and build the render. The information is hardcoded at the moment, but again, as long as the format is maintained, it could also be fetched from a remote endpoint.

