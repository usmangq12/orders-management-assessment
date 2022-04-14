import {
  Main,
  Nav,
  List,
  Container,
  Linked,
  OrderList,
  NavBarItems,
  IconList,
  Flip,
  DropDown,
  Section,
  OrderSection,
  Heading,
  Button,
  SubSection,
  ButtonSection,
  Box,
} from "../shared/Style";
import { BsCart3 } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BreadCrumbs } from "./BreadCrumbs";

export function NavBar() {
  return (
    <Main>
      <Container>
        <Nav>
          <NavBarItems>
            <OrderList>
              <IconList>
                <Linked>Recco</Linked>
              </IconList>
              <List>
                <Linked>Store </Linked>
              </List>
              <List>
                <Linked>Orders</Linked>
              </List>
              <List>
                <Linked>Analytics</Linked>
              </List>
            </OrderList>
            <Section>
              <Flip>
                <BsCart3 />
              </Flip>
              <DropDown>
                Hello, James
                <BsChevronDown />
              </DropDown>
            </Section>
          </NavBarItems>
        </Nav>
      </Container>

      <OrderSection>
        <Container>
          <SubSection>
            <BreadCrumbs />
            <Box>
              <Heading>Order 32457ABC</Heading>
              <ButtonSection>
                <Button>Back</Button>
                <Button>Approve Order</Button>
              </ButtonSection>
            </Box>
          </SubSection>
        </Container>
      </OrderSection>
    </Main>
  );
}
