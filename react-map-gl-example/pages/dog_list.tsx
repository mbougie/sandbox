import { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/styles/dog_list.module.css";

const DogList = ({ breeds }) => {
  const [breedsList, setBreedsList] = useState(breeds);

  useEffect(() => {
    setBreedsList(breeds);
  }, [breeds]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>List of Dog Breeds</h1>
      <div className={styles.cardContainer}>
        {breedsList.map((breed) => (
          <div key={breed} className={styles.card}>
            <h2 className={styles.cardTitle}>{breed}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;

export const getServerSideProps = async () => {
  const res = await axios.get("https://dog.ceo/api/breeds/list/all");
  const breeds = Object.keys(res.data.message);

  return { props: { breeds } };
};
