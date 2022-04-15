import React from "react";
import styled from "styled-components";
import { Container } from "../shared/Style";
import { AiOutlineClose } from "react-icons/ai";

const Header = styled.span`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const Contant = styled.span`
  display: flex;
  margin-top: 15px;
  margin-bottom: 33px;
`;

const Fotter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
const Submit = styled.button`
  margin: 15px;
`;
const Cancle = styled.button`
  margin: 15px;
`;

const Dialogstyle = styled.dialog`
  background-color: gray;
  color: black;
  text-align: center;
  border: none;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.25);
  max-width: 50%;
`;

const MissingProductModal = () => {
  return (
    <Dialogstyle open={true}>
      <Container>

        <Header>
          Missing product
            <AiOutlineClose />
        </Header>

        <Contant>Is 'Chicken Breast fillets,Boneless...'urgent? </Contant>

        <Fotter>
          <Cancle>No</Cancle>
          <Submit>yes</Submit>
        </Fotter>

      </Container>
    </Dialogstyle>
  );
};

export default MissingProductModal;
