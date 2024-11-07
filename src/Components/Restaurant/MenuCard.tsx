import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const ingredients = [
  {
    category: "Nuts & Seeds",
    ingredient: "Cashews",
  },
  {
    category: "Proteines",
    ingredient: "Proteine",
  },
  {
    category: "Proteines",
    ingredient: "Bacon Strips",
  },
];

const demo = [
  {
    category: "Nuts & Seeds",
    ingredient: ["Cashews"],
  },
  {
    category: "Proteines",
    ingredient: ["Ground beefs", "Bacon Strips"],
  },
];

const MenuCard = () => {
  const handleCheckBoxChange = (ingredient: any) => {
    console.log(ingredient);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <div className="lg:flex items-center justify-center">
          <div className="lg:flex items-center lg:gap-5 ">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>40000 GNF</p>
              <p className="text-gray-400">bonne nouriture</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form action="">
          <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div key={item.category}>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredient.map((ingredient, index) => (
                    <FormControlLabel
                      onChange={() => handleCheckBoxChange(ingredient)}
                      key={index}
                      control={<Checkbox />}
                      label={ingredient}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button type="submit" variant="contained" disabled={false}>
              {true ? "Ajouter au panier" : "Out of stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
