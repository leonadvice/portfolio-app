// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyAC6Y2wA1DA-DEYqqm81IvDs0kYuVab8AM",
  authDomain: "malllog-300908.firebaseapp.com",
  projectId: "malllog-300908",
  storageBucket: "malllog-300908.appspot.com",
  messagingSenderId: "219398965782",
  appId: "1:219398965782:web:fd36827498043959f44337",
  measurementId: "G-9N21GFBW7L",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

function appendMessage(payload) {
  const messagesElement = document.querySelector("#messages");
  const dataHeaderELement = document.createElement("h5");
  const dataElement = document.createElement("pre");
  dataElement.style = "overflow-x:hidden;";
  dataHeaderELement.textContent = "BACKGROUND job received:";
  dataElement.textContent = JSON.stringify(payload, null, 2);
  messagesElement.appendChild(dataHeaderELement);
  messagesElement.appendChild(dataElement);
}

messaging.onBackgroundMessage(function (payload) {
  console.log("RECEIVED BACKGROUND JOB: ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  // self.registration.showNotification(notificationTitle, notificationOptions);
});
