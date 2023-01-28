import Link from "next/link";

const GetBreed = () => {
  return (
    <div>
      <Link href="/breed/[breed]" as="/breed/boxer">
        <button>View Boxer Breed</button>
      </Link>
    </div>
  );
};

export default GetBreed;
