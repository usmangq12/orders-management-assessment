import React from "react";
import { Cateogaries } from "./Cateogaries";
import {
  Container,
  MainSection,
  Subsection,
  Title,
  Discreption,
} from "../shared/Style";

export const OrderStatCards = () => {
  return (
      <Container>
        <MainSection>
          <Subsection>
            <Title>Supllier</Title>
            <Discreption>East coast fruites & vegitables</Discreption>
          </Subsection>

          <Subsection>
            <Title>shipping date</Title>
            <Discreption>Thu,Feb 10</Discreption>
          </Subsection>
          <Subsection>
            <Title>Total</Title>
            <Discreption>$ 15,028.3</Discreption>
          </Subsection>
          <Subsection>
            <Title>Category</Title>
            <Cateogaries />
          </Subsection>

          <Subsection>
            <Title>Department</Title>
            <Discreption>300-444-678</Discreption>
          </Subsection>

          <Subsection>
            <Title>Status</Title>
            <Discreption>Awatig your approval</Discreption>
          </Subsection>
        </MainSection>
      </Container>
  );
}

export default OrderStatCards