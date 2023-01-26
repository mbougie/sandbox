import axios from "axios";
type Props = {
  images: string[] | undefined;
};

const Gallery = ({ images }: Props) => {
  if (!images) {
    return <div>error has occured</div>;
  }
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
