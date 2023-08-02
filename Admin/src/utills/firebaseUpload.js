import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "./firebase";
  import { v4 } from "uuid";
  export   const uploadFile = async (file) => {
    if (file == null) return;
    try {
      const imageRef = ref(storage, `grocerImage/${file?.name + v4()}`);
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);  
      return url;
    } catch (error) {
      // Handle any potential errors
      console.error(error);
    }
  };