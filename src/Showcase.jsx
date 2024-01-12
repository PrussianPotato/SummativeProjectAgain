import { React, useEffect, useState } from "react";
import { collection, doc, getDocs, addDoc, deleteDoc} from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "@firebase/storage";
import { db } from "./firebase-config";
import { v4 as uuidv4 } from "uuid"; 

export default function Showcase(){
  const [showcase, setShowcase] = useState([]);

  useEffect(() => {
    console.log("useEffect")
    getData()
  }, [])

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "Art"))
    const showcaseArray = []
    querySnapshot.forEach((doc) => {
      let item = doc.data()
      item.id = doc.id
      showcaseArray.push(item)
    })
    setShowcase(showcaseArray)
  }

  const printList = async () => {
    const storage = getStorage().ref(storage, "images/")
    
    const listOfImages = storage.listAll().then(function(result) {
      result.items.forEach(function(imageRef) {
        console.log(imageRef.getDownloadURL())
      })
    })


    /*
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          console.log(itemRef.name)
        })
        console.log(res)

        let img = getDownloadURL(res)
        console.log(img)
      })
    */
  }

  const deleteData = async () => {
    
  }
  
  return(
    <main>
      <button onClick={() => printList()}>Print Data</button>
    </main>
  )
}