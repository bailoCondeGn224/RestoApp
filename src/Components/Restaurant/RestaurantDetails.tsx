import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState } from "react";
import { ClassSharp } from "@mui/icons-material";
import MenuCard from "./MenuCard";

const RestaurantDetails = () => {
  const categories: string[] = [
    "All",
    "Riz Sauce",
    "Poulet Yassa",
    "Poulet DG",
    "Fouti",
    "Bouillie de Mil",
    "Plat de Poisson",
    "Boulettes de Manioc",
  ];
  const foodType = [
    { label: "All", value: "all" },
    { label: "Vegetarien", value: "vegetarien" },
    { label: "Non Vegetarien", value: " non_vegetarien" },
  ];
  const [foodTypes, setFoodTypes] = useState("All");
  const [foodTypesCategorie, setFoodTypesCategorie] = useState("All");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodTypes(e.target.value);
    console.log(e.target.value, e.target.value);
  };

  const handleFilterCategorie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodTypesCategorie(e.target.value);
    console.log(e.target.value, e.target.value);
  };
  const menu = [1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10 ">
          Home/Guinee/Restaurant en Guinee/1
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold ">Restaurant Guineen</h1>
          <p className="text-gray-500 flex items-center gap-3">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              ad voluptatibus tempore neque aperiam maiores repudiandae ad
              voluptatibus tempore neque aperiam maiores repudiandae ad
              voluptatibus tempore neque aperiam maiores repudiandae ad
              voluptatibus tempore neque aperiam maiores repudiandae
            </span>
          </p>
          <div className="space-y-3 mt-3">
            <p className="">
              <RoomIcon />
              <span>Guinee Conakry Ratoma</span>
            </p>
            <p className="">
              <DateRangeIcon />
              <span>Lundi-Dimanche: 9:00 PM(Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative ">
        <div className="space-y-10 lg:w-[20%] filter p-5 shadow-sm">
          <div className="box space-y-5 lg:sticky top-28 d">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Type de nouriture
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  name="food-meels"
                  value={foodTypes}
                  onChange={handleFilter}
                >
                  {foodType.map((item) => (
                    <FormControlLabel
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Categories Nouriture
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  name="food-meelscattogorie"
                  value={foodTypesCategorie}
                  onChange={handleFilterCategorie}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] filter lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
