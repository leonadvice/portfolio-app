// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCT_IoPb1h2nqcVV6jPtTFjuINBRy2ue3s",
  authDomain: "realtime-demo-24800.firebaseapp.com",
  databaseURL: "https://realtime-demo-24800.firebaseio.com",
  projectId: "realtime-demo-24800",
  storageBucket: "realtime-demo-24800.appspot.com",
  messagingSenderId: "26134859627",
  appId: "1:26134859627:web:c5e1ed67aa84a62ce4862e",
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
