import Auth from "../Auth/Auth";
import Restaurant from "../Restaurant/Restaurant";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
const restaurant: number[] = Array(11).fill(1);
const Home = () => {
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50w] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-50">Resto App</p>
          <p className="z-6 text-gray-300 text-xl lg:text-4xl">
            La restauration, c'est l'art de créer des souvenirs délicieux.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          Meilleurs Repas
        </p>
        <MultiItemCarousel />
      </section>
      <section className="px-5 lg:px-20">
        <h1 className="text-2xl font-serif text-gray-400 py-3">
          Commandez parmi nos favoris triés sur le volet
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-4">
          {restaurant.map((item, index) => (
            <Restaurant key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
