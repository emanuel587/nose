import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIxpSQOe9tTQg5N4LquXdDQSYlFI98i_w",
  authDomain: "mapa-146e4.firebaseapp.com",
  projectId: "mapa-146e4",
  storageBucket: "mapa-146e4.appspot.com",
  messagingSenderId: "360088646262",
  appId: "1:360088646262:web:3abff1ddc3fd5ecdc52557",
  measurementId: "G-1K7FXKFBL2"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Conexión a Firebase establecida correctamente.");


document.getElementById('Guardarform').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const lat = document.getElementById('lat').value;
    const lng = document.getElementById('lng').value;
  
    
    const docRef = await addDoc(collection(db, 'mapas'), { 
      lat,
      lng
    });
    

    swal.fire("Datos guardados correctamente");
  });
  