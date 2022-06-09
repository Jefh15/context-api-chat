// para usar los servicios
import firebase from 'firebase/app'
// para la autenticacion
import 'firebase/auth'
// importo mi base de datos
import 'firebase/firestore'
// para usar el servicio de almacenamiento de archivos
// import 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwcWkJ1t1KIvExt5LEm5lq0-Q1okAKVXQ",
    authDomain: "chat-context-api-25fb9.firebaseapp.com",
    projectId: "chat-context-api-25fb9",
    storageBucket: "chat-context-api-25fb9.appspot.com",
    messagingSenderId: "257411094769",
    appId: "1:257411094769:web:8083971aae3b097fbbb150"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// tomo el almacenamiento en modo funcion
const db = firebase.firestore()

// tomo la autenticacion en modo funcion
const auth = firebase.auth()

// para poder usar mi firebase.Storage() en modo funcion
// const storage = firebase.storage()

// para hacer nuestra autenticacion, configuramos el provider dentro de firebase.js
// asi no tenemos que estar exportando todo este firebase ---> firebase.auth.GoogleAuthProvider()
const provider = new firebase.auth.GoogleAuthProvider()

// exportamos el auth y firebase y db y storage
// export { auth, firebase, db, storage }
export { auth, db, provider }