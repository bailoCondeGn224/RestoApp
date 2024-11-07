import Restaurant from "../Restaurant/Restaurant";

const Favorites = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Mes Favories</h1>
      <div className="flex flex-wrap justify-center gap-3 items-center">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <Restaurant />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
