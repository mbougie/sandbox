import axios from "axios";

const Gallery = ({ images }) => {
  return (
    <div>
      <h1>Boxer Images</h1>
      <div className="gallery">
        {images.map((image) => (
          <img key={image} src={image} alt="Boxer" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

export const getServerSideProps = async () => {
  const res = await axios.get(`https://dog.ceo/api/breed/boxer/images`);
  const images = res.data.message;

  return { props: { images } };
};
