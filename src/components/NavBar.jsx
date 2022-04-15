import { useState } from "react";
import {
  Main,
  Nav,
  List,
  Container,
  Linked,
  OrderList,
  NavBarItems,
  LogoList,
  Flip,
  Section,
  OrderSection,
  Heading,
  Button,
  SubSection,
  ButtonSection,
  Box,
  Width,
  Oval,
  Select,
  Option,
  Modal,
  ModalBody,
  ModalHeader,
} from "../shared/Style";
import { BsCart3 } from "react-icons/bs";
import { BreadCrumbs } from "./BreadCrumbs";

export function NavBar() {
  return (
    <Main>
      <Container>
        <Nav>
          <NavBarItems>
            <OrderList>
              <LogoList>Recco</LogoList>
              <List>
                <Linked href="#Store">Store </Linked>
              </List>
              <List>
                <Linked href="#Orders">Orders</Linked>
              </List>
              <List>
                <Linked href="#Analytics">Analytics</Linked>
              </List>
            </OrderList>
            <Section>
              <Width>
                <Oval>27</Oval>
                <Flip>
                  <BsCart3 />
                </Flip>
              </Width>
              <Select>
                <Option value={"Hello, James"}>Hello, James</Option>
                <Option value={"Logout"}>Logout</Option>
              </Select>
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
