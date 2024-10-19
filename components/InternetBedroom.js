// pages/index.js
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Import CSS module

export default function Home() {
  const [selectedHeadphone, setSelectedHeadphone] = useState('/images/headphone1.png');

  // Headphone gallery images
  const headphoneGallery = [
    '/images/headphone1.png',
    '/images/headphone2.png',
    '/images/headphone3.png',
    '/images/headphone4.png',
  ];

  // return (
  //   <div className={styles.containerBedRoom}>
      
  //     {/* Left-Side Desk Section */}
  //     <div className={styles.deskArea}>
  //       <div className={styles.desk}>
  //         <Image
  //           src="/images/desk.jpg" // Replace with the correct desk image in your public folder
  //           alt="Desk"
  //           width={600}
  //           height={300}
  //           className={styles.deskImage}
  //         />
          
  //         {/* Headphone Object on Desk */}
  //         <div style={{
  //           position: 'absolute', 
  //           zIndex: 155, 
  //           left: '27.1%', 
  //           top: '33.8906%', 
  //           width: '41.8%', 
  //           height: '26.0437%', 
  //           pointerEvents: 'none', 
  //           opacity: 1, 
  //           willChange: 'auto', 
  //           transform: 'scale(0.402879) rotate(0.24812rad)'
  //         }}>
  //           <img 
  //             src={selectedHeadphone} 
  //             alt="Headphones" 
  //             style={{ 
  //               width: '100%', 
  //               height: '100%', 
  //               objectFit: 'contain' 
  //             }} 
  //           />
  //         </div>

  //         {/* Chair Object */}
  //         <div style={{
  //           position: 'absolute', 
  //           zIndex: 200, 
  //           left: '60.95%', 
  //           top: '53.9156%', 
  //           width: '28.1%', 
  //           height: '26.0437%', 
  //           pointerEvents: 'none', 
  //           opacity: 1, 
  //           willChange: 'auto', 
  //           transform: 'scale(3)'
  //         }}>
  //           <img 
  //             src="https://discz-production-s3-bucket.s3.amazonaws.com/photo_element/1c1f5013-8a3b-40c4-95eb-658378c84f66.png" 
  //             alt="Chair" 
  //             style={{ 
  //               width: '100%', 
  //               height: '100%', 
  //               objectFit: 'contain' 
  //             }} 
  //           />
  //         </div>

  //         {/* Dog Object */}
  //         <div style={{
  //           position: 'absolute', 
  //           zIndex: 200, 
  //           left: '6.85%', 
  //           top: '69.1875%', 
  //           width: '76.3%', 
  //           height: '33.5%', 
  //           pointerEvents: 'none', 
  //           opacity: 1, 
  //           willChange: 'auto', 
  //           transform: 'scale(1.8)'
  //         }}>
  //           <img 
  //             src="https://discz-production-s3-bucket.s3.amazonaws.com/spotify-bedroom/PETS/ASSET_8.webp" 
  //             alt="Dog" 
  //             style={{ 
  //               width: '100%', 
  //               height: '100%', 
  //               objectFit: 'contain' 
  //             }}
  //           />
  //         </div>

  //       </div>
  //     </div>

  //     {/* Right-Side Headphone Gallery Section */}
  //     <div className={styles.gallery}>
  //       <h3>Select a Headphone</h3>
  //       <div className={styles.imageGrid}>
  //         {headphoneGallery.map((headphone, index) => (
  //           <div key={index} className={styles.galleryItem}>
  //             <img
  //               src={headphone}
  //               alt={`Headphone ${index + 1}`}
  //               onClick={() => setSelectedHeadphone(headphone)} // On click, update the selected headphone
  //               style={{
  //                 cursor: 'pointer',
  //                 width: '80px',
  //                 height: '80px',
  //                 objectFit: 'contain',
  //                 border: headphone === selectedHeadphone ? '2px solid blue' : 'none',
  //               }}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>

  //   </div>
  // );


  return (
    <div className={styles.containerBedRoom}>
      
      {/* Left-Side Desk Section */}
      <div className={styles.deskArea}>
        <div className={styles.desk}>
          <Image
            src="/images/desk.jpg" // Replace with the correct desk image in your public folder
            alt="Desk"
            width={600}
            height={300}
            className={styles.deskImage}
          />
          
          {/* Headphone Object on Desk */}
          <div style={{
            position: 'absolute', 
            zIndex: 155, 
            left: '12.1%', 
            top: '10.8906%', 
            width: '61.8%', 
            height: '46.0437%', 
            pointerEvents: 'none', 
            opacity: 0.85,  // Slight transparency
            willChange: 'auto', 
            transform: 'scale(0.402879) rotate(0.24812rad)'
          }}>
            <img 
              src={selectedHeadphone} 
              alt="Headphones" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                background: 'transparent', // Ensure transparent background
              }} 
            />
          </div>

          {/* Chair Object */}
          <div style={{
            position: 'absolute', 
            zIndex: 200, 
            left: '20.95%', 
            top: '53.9156%', 
            width: '28.1%', 
            height: '26.0437%', 
            pointerEvents: 'none', 
            opacity: 1, 
            willChange: 'auto', 
            transform: 'scale(3)'
          }}>
            <img 
              src="https://discz-production-s3-bucket.s3.amazonaws.com/photo_element/1c1f5013-8a3b-40c4-95eb-658378c84f66.png" 
              alt="Chair" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                opacity: 1, // No opacity change for chair
              }} 
            />
          </div>

          {/* Dog Object */}
          <div style={{
            position: 'absolute', 
            zIndex: 200, 
            left: '2.85%', 
            top: '69.1875%', 
            width: '76.3%', 
            height: '33.5%', 
            pointerEvents: 'none', 
            opacity: 1, 
            willChange: 'auto', 
            transform: 'scale(1.8)'
          }}>
            <img 
              src="https://discz-production-s3-bucket.s3.amazonaws.com/spotify-bedroom/PETS/ASSET_8.webp" 
              alt="Dog" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                opacity: 1, // No opacity change for dog
              }}
            />
          </div>

        </div>
      </div>

      {/* Right-Side Headphone Gallery Section */}
      <div className={styles.gallery}>
        <h3>Select a Headphone</h3>
        <div className={styles.imageGrid}>
          {headphoneGallery.map((headphone, index) => (
            <div key={index} className={styles.galleryItem} style={{ position: 'relative' }}>
              <img
                src={headphone}
                alt={`Headphone ${index + 1}`}
                onClick={() => setSelectedHeadphone(headphone)} // On click, update the selected headphone
                style={{
                  cursor: 'pointer',
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  background: 'transparent', // Transparent background
                  opacity: headphone === selectedHeadphone ? '1' : '0.7', // Highlight selected headphone
                  border: headphone === selectedHeadphone ? '2px solid blue' : 'none',
                  boxShadow: headphone === selectedHeadphone ? '0 0 10px rgba(0, 0, 255, 0.5)' : 'none', // Add shadow to the selected headphone
                }}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}