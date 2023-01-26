import React, { useState } from "react";
import axios from "axios";

const Breed = ({ breed }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => {
        setImages(res.data.message);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, [breed]);

  return (
    <div>
      <h1>{breed} Images</h1>
      <div className="collage">
        {images.map((image) => (
          <img key={image} src={image} alt={breed} />
        ))}
      </div>
    </div>
  );
};

export default Breed;

export const getServerSideProps = async ({ params }) => {
  const { breed } = params;
  // const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  const res = await axios.get(`https://dog.ceo/api/breed/boxer/images`);
  const images = res.data.message;

  return { props: { breed, images } };
};
