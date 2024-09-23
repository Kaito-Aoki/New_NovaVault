
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC6P7wlNv0qLL634yoLAVFC_8Pjjn_dRvA",
  authDomain: "novavault.firebaseapp.com",
  projectId: "novavault",
  storageBucket: "novavault.appspot.com",
  messagingSenderId: "882868843122",
  appId: "1:882868843122:web:45750d9a47d97a6486c8eb",
  measurementId: "G-M2C71W3JJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const places = [
  {
      id: 1,
      name: "Rann of Kutch",
      type: "Famous",
      category: "Desert",
      image: "https://www.nativeplanet.com/img/2020/01/rann-of-kutch-1578570105.jpg",
      summary: "The vast white salt desert, one of the most famous attractions in Kutch."
  },
  {
      id: 2,
      name: "Kala Dungar",
      type: "Famous",
      category: "Hill",
      image: "https://www.nativeplanet.com/img/2020/01/kala-dungar-1578570213.jpg",
      summary: "The highest point in Kutch, offering panoramic views of the Rann."
  },
  {
      id: 3,
      name: "Kutch Desert Wildlife Sanctuary",
      type: "Famous",
      category: "Wildlife",
      image: "https://www.nativeplanet.com/img/2020/01/kutch-desert-wildlife-sanctuary-1578570472.jpg",
      summary: "A large wildlife sanctuary home to flamingos and other migratory birds."
  },
  {
      id: 4,
      name: "Aina Mahal",
      type: "Famous",
      category: "Palace",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Aina_Mahal.jpg",
      summary: "A beautiful 18th-century palace in Bhuj, known for its intricate mirror work."
  },
  {
      id: 5,
      name: "Prag Mahal",
      type: "Famous",
      category: "Palace",
      image: "https://www.nativeplanet.com/img/2020/01/prag-mahal-1578570725.jpg",
      summary: "An Italian Gothic-style palace built in the 19th century in Bhuj."
  },
  {
      id: 6,
      name: "Mandvi Beach",
      type: "Famous",
      category: "Beach",
      image: "https://www.nativeplanet.com/img/2018/07/mandvi-beach1-1532086537.jpg",
      summary: "A serene beach known for its sunset views and calm waters."
  },
  {
      id: 7,
      name: "Vijay Vilas Palace",
      type: "Famous",
      category: "Palace",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Vijay_Vilas_Palace.JPG",
      summary: "A royal palace near Mandvi, used in many Bollywood films."
  },
  {
      id: 8,
      name: "Bhujodi Village",
      type: "Underrated",
      category: "Handicraft",
      image: "https://www.nativeplanet.com/img/2020/01/bhujodi-1578570585.jpg",
      summary: "A small village famous for its handicrafts, particularly textiles."
  },
  {
      id: 9,
      name: "White Desert Camp",
      type: "Underrated",
      category: "Adventure",
      image: "https://www.nativeplanet.com/img/2020/01/white-desert-camp-1578570034.jpg",
      summary: "A desert camp offering unique stay experiences in the middle of the white desert."
  },
  {
      id: 10,
      name: "Kalo Dungar Magnetic Hill",
      type: "Underrated",
      category: "Phenomenon",
      image: "https://www.nativeplanet.com/img/2020/01/kala-dungar-1578570173.jpg",
      summary: "A gravity hill where vehicles seem to defy gravity and roll uphill."
  },
  {
      id: 11,
      name: "Narayan Sarovar",
      type: "Famous",
      category: "Religious",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Narayan_Sarovar.JPG",
      summary: "One of the five holy lakes in Hinduism, located in Kutch."
  },
  {
      id: 12,
      name: "Hodka Village",
      type: "Underrated",
      category: "Cultural",
      image: "https://www.nativeplanet.com/img/2020/01/hodka-1578570648.jpg",
      summary: "A traditional village offering homestays and cultural experiences."
  },
  {
      id: 13,
      name: "Kutch Fossil Park",
      type: "Underrated",
      category: "Nature",
      image: "https://www.nativeplanet.com/img/2020/01/kutch-fossil-park-1578570521.jpg",
      summary: "A park showcasing fossils from millions of years ago, found in Kutch."
  },
  {
      id: 14,
      name: "Chhari Dhandh Wetland",
      type: "Underrated",
      category: "Birdwatching",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chhari_Dhandh_Wetland.JPG",
      summary: "A wetland famous for birdwatching, especially during winter migration."
  },
  {
      id: 15,
      name: "Roha Fort",
      type: "Underrated",
      category: "Fort",
      image: "https://www.nativeplanet.com/img/2020/01/roha-fort-1578570307.jpg",
      summary: "A historical fort located in the remote parts of Kutch, known for its stunning views."
  }
];

const cuisines = [
  { id: 1, name: "Kutchi Dabeli", image: "https://www.cookwithmanali.com/wp-content/uploads/2016/09/Dabeli-Kutchi-Dabeli-500x500.jpg", summary: "A spicy mashed potato dish served in a bun, native to Kutch." },
  { id: 2, name: "Bajra Roti", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breads_Bajra_Roti.jpg", summary: "A traditional flatbread made from millet, served with local curries." },
  { id: 3, name: "Khichdi", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Snacks_Khichdi.jpg", summary: "A simple rice and lentil dish, a staple in Kutch households." },
  { id: 4, name: "Kadhi", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Soups_Kadhi.jpg", summary: "A yogurt-based curry served with rice or roti." },
  { id: 5, name: "Kutchi Pakwan", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Snacks_Pakwan.jpg", summary: "A crispy deep-fried bread served with spicy dal." },
  { id: 6, name: "Gughra", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Gughra.jpg", summary: "Sweet dumplings filled with coconut and dry fruits." },
  { id: 7, name: "Sev Tameta", image: "https://www.cookingwithsiddhi.com/wp-content/uploads/2018/08/sev-tameta-curry1.jpg", summary: "A tangy tomato curry topped with crispy sev." },
  { id: 8, name: "Handvo", image: "https://www.cookwithmanali.com/wp-content/uploads/2020/02/Handvo.jpg", summary: "A savory baked dish made from rice and lentils." },
  { id: 9, name: "Bhakri", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breads_Bhakri.jpg", summary: "A thick flatbread made from whole wheat, served with chutney." },
  { id: 10, name: "Thepla", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Bread_Thepla.jpg", summary: "A spiced flatbread made with fenugreek leaves." },
  { id: 11, name: "Khichu", image: "https://www.cookingwithsiddhi.com/wp-content/uploads/2018/08/Khichu.jpg", summary: "A steamed rice flour dish, seasoned with spices." },
  { id: 12, name: "Puran Poli", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Puran_Poli.jpg", summary: "A sweet stuffed flatbread filled with lentil jaggery mixture." },
  { id: 13, name: "Muthiya", image: "https://www.cookingwithsiddhi.com/wp-content/uploads/2018/08/Muthiya-1.jpg", summary: "Steamed dumplings made from gram flour and fenugreek leaves." },
  { id: 14, name: "Patra", image: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Snacks_Patra.jpg", summary: "Colocasia leaves rolled with gram flour and spices, then steamed and fried." },
  { id: 15, name: "Ganthia", image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Ganthia.JPG", summary: "A crunchy snack made from gram flour, often served with chutneys." }
];

const events = [
  { id: 1, name: "Rann Utsav", image: "https://www.india.com/wp-content/uploads/2022/11/Rann-Utsav.jpg", summary: "A vibrant festival celebrating the culture and heritage of Kutch." },
  { id: 2, name: "Bhuj Haat", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Bhuj_Haat.jpg", summary: "A local fair in Bhuj showcasing traditional Kutchi handicrafts." },
  { id: 3, name: "Dhrang Fair", image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dhrang_Fair.jpg", summary: "A religious fair held in honor of Saint Mekan Dada, attracting devotees from Kutch." },
  { id: 4, name: "Kutch Carnival", image: "https://www.nativeplanet.com/img/2020/01/kutch-carnival-1578570905.jpg", summary: "A festive celebration of Kutchi culture, featuring folk music and dance." },
  { id: 5, name: "Narayan Sarovar Fair", image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Narayan_Sarovar.JPG", summary: "A religious fair held at the sacred Narayan Sarovar Lake." },
  { id: 6, name: "Shyamji Krishna Varma Jayanti", image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Shyamji_Krishna_Varma.jpg", summary: "A celebration of the birth of freedom fighter Shyamji Krishna Varma." },
  { id: 7, name: "Rukmavati Fair", image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Rukmavati_Fair.jpg", summary: "A fair held near the Rukmavati River, featuring traditional Kutch performances." },
  { id: 8, name: "Makar Sankranti in Mandvi", image: "https://www.nativeplanet.com/img/2020/01/makar-sankranti-mandvi-1578570802.jpg", summary: "A grand kite festival held in Mandvi during Makar Sankranti." },
  { id: 9, name: "Navratri in Bhuj", image: "https://static.toiimg.com/photo/msid-90494922/90494922.jpg", summary: "Nine nights of traditional dance and celebrations in Bhuj." },
  { id: 10, name: "Ashapura Mata Fair", image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Ashapura_Mata_Fair.jpg", summary: "A religious fair dedicated to the goddess Ashapura, held in Mata no Madh." },
  { id: 11, name: "Kutchi New Year", image: "https://www.nativeplanet.com/img/2020/01/kutchi-new-year-1578570734.jpg", summary: "A celebration marking the beginning of the Kutchi calendar year." },
  { id: 12, name: "Shivratri in Kera", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Shivratri_Kera_Temple.jpg", summary: "A grand celebration of Shivratri at the Shiva temple in Kera village." },
  { id: 13, name: "Modhera Dance Festival", image: "https://www.nativeplanet.com/img/2020/01/modhera-dance-festival-1578570673.jpg", summary: "A classical dance festival held at the Sun Temple in Kutch." },
  { id: 14, name: "Purnima in Bhuj", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Purnima_Bhuj.jpg", summary: "A celebration of the full moon night in the city of Bhuj, with cultural performances." },
  { id: 15, name: "Kutch Camel Festival", image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Kutch_Camel_Festival.jpg", summary: "A festival celebrating camels, featuring races and parades in Kutch." }
];



// function  to store data in Firestore
async function storeData(collectionName, data) {
    try {
        for (const item of data) {
            // Exclude 'id' from data before adding to Firestore
            const { id, ...dataWithoutId } = item;
            const docRef = await addDoc(collection(db, collectionName), dataWithoutId);
            console.log(`Document added with ID: ${docRef.id}`);
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


//Store places, cuisines, and events in Firestore
storeData('places', places);
storeData('cuisines', cuisines);
storeData('events', events);