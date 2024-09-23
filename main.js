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

// Sample data
const categoryData = [
    {
        id: 'places-to-visit',
        title: 'Places To Visit',
        items: [
            {
                title: "Taj Mahal",
                description: "The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum...",
                imageSrc: "Images/Taj-Mahel.jpg"
            },
            {
                title: "Goa",
                description: "Goa is a coastal state in India known for its beautiful beaches, vibrant nightlife, and Portuguese heritage. It features a tropical climate, historic sites like Fort Aguada, and a mix of Indian and Portuguese cuisine. Key cities include Panaji (the capital) and Margao. Tourism drives its economy, with attractions ranging from serene beaches to lively festivals.",
                imageSrc: "Images/Goa.jpg"
            },
            
            {
                title: "Amber Palace",
                description: "One of the top tourist attractions of Jaipur, the huge Amer Palace Fort sits atop a small hill, and is located at a distance about 11 km from the main city. The magnificent Amer Fort is an extensive palace complex that has been built with pale yellow and pink sandstone, and with white marble.",
                imageSrc: "Images/AmberPalace.jpg"
            },
            
            {
                title: "Jaipur",
                description: "Jaipur was founded in 1727 by Sawai Jai Singh II, the Kachhwaha Rajput ruler of Amer, after whom the city is named. It is one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya. During the British colonial period, the city served as the capital of Jaipur State",
                imageSrc: "Images/Jaipur.jpg"
            },
            
            {
                title: "Gateway of India",
                description: "Situated in Mumbai, the Gateway of India is an iconic landmark built in 1924...",
                imageSrc: "Images/Getway-of-India.jpg"
            },
            
            {
                title: "Ladakh",
                description: "Ladakh is a cold desert in India. It lies in the Great Himalayas, on the eastern side of Jammu and Kashmir. It has the mighty Karakoram Range in the North and in the south, it is bound by the Zanskar mountains. Several rivers flow through Ladakh",
                imageSrc: "Images/Ladakh.jpeg"
            },
            
            {
                title: "Golden Temple",
                description: "The Golden Temple in Amritsar, India, is the central place of worship for the Sikh people, who often journey on pilgrimages to worship there. The temple is also known as Sri Darbar Sahib and Sri Harmandir Sahib after its creator, Guru Sahib, and is also named after its distinctive gold foil covering.",
                imageSrc: "Images/GoldenTemple.jpg"
            },
            
            {
                title: "Statue of Unity",
                description: "The 182-metre (600 feet aprox.) statue is dedicated to Sardar Vallabhbhai Patel, the architect of independent India. The colossal monument towers over River Narmada, a tribute to India 'from the people of Gujarat' to the leader who placed people's welfare first.",
                imageSrc: "Images/Statue of Unity.jpg"
            },

            // ... add all other places

        ]
    },
    {
        id: 'festivals',
        title: 'Festivals',
        items: [
            {
                title: "Diwali",
                description: "Diwali, or Deepavali, is a major Indian festival celebrating the triumph of light over darkness...",
                imageSrc: "Images/diwali.jpg"
            },
            {
                title: "Janmastmi",
                description: "Janmashtami is a Hindu festival celebrating the birth of Lord Krishna, the eighth avatar of Vishnu...",
                imageSrc: "Images/janamastmi.jpg"
            },
            {
                title: "Holi",
                description: "Holi is a Hindu festival that takes place every spring. It's all about new beginnings — Holi welcomes the spring season and celebrates the end of winter. The Holi festival always falls on Purnima, or the day of the full moon. It's a two-day holiday; the day before the full moon is Holika Dahan.",
                imageSrc: "Images/holi.jpg"
            },
            {
                title: "Navratri",
                description: "Navratri, in Hinduism, major festival held in honour of the divine feminine. Navratri occurs over 9 days during the month of Ashvin, or Ashvina (in the Gregorian calendar, usually September–October). It often ends with the Dussehra (also called Vijayadashami) celebration on the 10th day.",
                imageSrc: "Images/navratri.jpg"
            },
            {
                title: "Pongal",
                description: "It is a celebration to thank the Sun, Mother Nature and the various farm animals that help to contribute to a bountiful harvest. Celebrated over four days, Pongal also marks the beginning of the Tamil month called Thai, which is considered an auspicious month. It usually falls on the 14th or 15th of January each year.",
                imageSrc: "Images/pongal.jpg "
            },
            {
                title: "Baisakhi",
                description: "The festival of Baisakhi is celebrated to mark the onset of spring in India. The time of Baisakhi usually signifies the end of the harvest season, and is an occasion of tremendous joy and festivity for farmers. The celebrations are concentrated in the states of Punjab and Haryana.",
                imageSrc: "Images/baisakhi.jpg"
            },
            {
                title: "Durga Puja",
                description: "Durga Puja celebrates the victory of the goddess Durga over the demon king Mahishasura. It begins on the same day as Navratri, a nine-night festival in many northern and western states that more broadly celebrates the divine feminine (shakti). Durga Puja's first day is Mahalaya, which heralds the advent of the goddess.",
                imageSrc: "Images/durgapuja.jpg"
            },
            {
                title: "Ganesh Chaturthi ",
                description: "Ganesha Chaturthi is the 10 day-long Hindu festival held on the birthday of the Lord Ganesha. He is the son of Shiva and Parvati. It is celebrated all over India. The festival is held on shukla chaturthi in the Hindu month of Bhaadrapada and ends on Anant chaturdashi.",
                imageSrc: "Images/ganeshchaturthi.jpg"
            },


            // ... add all other festivals
        ]
    },
    {
        id: 'art-music',
        title: 'Art & Music',
        items: [
            {
                title: "Madhubani Painting",
                description: "Originating from the Mithila region of Bihar, Madhubani paintings are known for their vibrant colors...",
                imageSrc: "Images/Madhubani%20Painting.jpg"
            },
            {
                title: "Warli Art",
                description: "A tribal art form from Maharashtra, Warli painting uses simple geometric shapes...",
                imageSrc: "Images/Warli%20Art.jpg"
            },
            {
                title: " Patachitra ",
                description: "Patachitra or Pattachitra is a general term for traditional, cloth-based scroll painting, based in the eastern Indian states of Odisha, West Bengal and parts of Bangladesh. Patachitra artform is known for its intricate details as well as mythological narratives and folktales inscribed in it.",
                imageSrc: "Images/patachitra.jpg"
            },
            {
                title: " Miniature painting",
                description: "A small sized paintings generally done in water colour on cloth or paper are known as miniatures. The colours used for miniatures are handmade. The best part of these paintings is the complex and delicate brushwork, which gives them a distinctive identity.",
                imageSrc: "Images/miniature.jpg "
            },
            {
                title: " Tabla",
                description: "The tabla consists of two small drums of slightly different sizes and shapes. Each drum is made of hollowed-out wood, clay or metal. The smaller drum (dayan/tabla) is used for creating treble and tonal sounds, while the primary function of the larger drum (baya/dagga) is for producing bass.",
                imageSrc: "Images/table.jpg "
            },
            {
                title: "Flute",
                description: "flute, Woodwind instrument in which the sound is produced by blowing against a sharp edge. In its broad sense, a flute may be end-blown, like the recorder, or may have a globular shape, like the ocarina. In its narrow sense, discussed below, flute refers to the transverse flute of Western music.",
                imageSrc: "Images/flute.jpg "
            },
            {
                title: "Sitar",
                description: "The sitar is a traditional and classical stringed instrument believed to have been invented in India around 700 years ago. It is played by striking a plectrum known as the mizrab (in Persian) or mezrab on the main strings of the instrument. There are two types of sitar: sada and tarabdar (also spelt tarafdar).",
                imageSrc: "Images/sitar.jpg "
            },
            {
                title: "Harmonium",
                description: "harmonium, free-reed keyboard instrument that produces sound when wind sent by foot-operated bellows through a pressure-equalizing air reservoir causes metal reeds screwed over slots in metal frames to vibrate through the frames with close tolerance.",
                imageSrc: "Images/harmonium.jpg"
            },

            // ... add all other art and music items
        ]
    }
];

// Function to store data in Firestore
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


// Store places, cuisines, and events in Firestore
storeData('places', places);
storeData('cuisines', cuisines);
storeData('events', events);