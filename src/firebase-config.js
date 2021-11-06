const firebaseConfig = {
    apiKey: "AIzaSyCwwKGbBq_rlQoTmXHRGajMpfl_1dZ4aAM",
    authDomain: "quiz2-c9345.firebaseapp.com",
    databaseURL: "https://quiz2-c9345-default-rtdb.firebaseio.com",
    projectId: "quiz2-c9345",
    storageBucket: "quiz2-c9345.appspot.com",
    messagingSenderId: "209297664656",
    appId: "1:209297664656:web:26d55a17ea3fc805740615"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
