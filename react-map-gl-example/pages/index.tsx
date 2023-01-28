import React, { useState, useEffect } from "react";
import styles from "@/styles/styles.module.css";

// import Header from "@/components/Header";

const Index = () => {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    // Fetch random dog image from API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>Welcome to Agrograph</h1>
        <h2 className={styles.subtitle}>
          Revolutionizing the way we understand agriculture
        </h2>
        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.rightColumn}>
        {dogImage && (
          <img src={dogImage} className={styles.dogImage} alt="Random Dog" />
        )}
      </div>
    </div>
  );
};

export default Index;
