import React from "react";
import { CategoryContainer, CaytegoryRow } from "../shared/Style";
import { BsChevronDown } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsSnow } from "react-icons/bs";
import { MdIcecream } from "react-icons/md";
import { GiGarlic } from "react-icons/gi";
import { GiWineBottle } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";
import { GiBroccoli } from "react-icons/gi";

export function Cateogaries() {
  return (
    <CategoryContainer>
      <CaytegoryRow>
        <BsChevronDown />
        <BsCart3 />
        <BsSnow />
        <MdIcecream />
      </CaytegoryRow>
      <CaytegoryRow>
        <GiGarlic />
        <GiWineBottle />
        <GiSandwich />
        <GiBroccoli />
      </CaytegoryRow>
    </CategoryContainer>
  );
}

export default Cateogaries;