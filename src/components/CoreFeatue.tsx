import { Feature } from "../interfaces/feature";

function CoreFeature({ title, image, description }: Feature) {
  return (
    <div className="grid justify-items-center">
      <img src={image} alt={title} className="w-14 h-14"/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CoreFeature;
