import axios from "axios";

const Breed = ({ breed, images }) => {
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

export async function getStaticProps({ params }) {
  const { breed } = params;
  const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  const images = res.data.message;

  return {
    props: { breed, images },
  };
}

export async function getStaticPaths() {
  const res = await axios.get("https://dog.ceo/api/breeds/list/all");
  const breeds = Object.keys(res.data.message);

  const paths = breeds.map((breed) => ({
    params: { breed },
  }));

  return {
    paths,
    fallback: false,
  };
}
