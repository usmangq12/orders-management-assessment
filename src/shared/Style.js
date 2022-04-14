import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #277a39;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 80%;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
`;

export const IconList = styled.li`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 3rem;
  list-style: none;
  font-family: Georgia, serif;
`;

export const Linked = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
`;

export const NavBarItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const OrderList = styled.ul`
  display: flex;
`;

export const Flip = styled.div`
  transform: rotateY(180deg);
  color: white;
  margin-right: 3rem;
`;

export const DropDown = styled.div`
  color: white;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderSection = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: 0px 0px 5px 0px grey;
  border-bottom: 1px solid transparent;
`;

export const Heading = styled.h2`
  display: flex;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border: 1px solid #277a39;
  border-radius: 15px;
  background-color: #fff;
  color: #277a39;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #277a39;
    color: #fff;
  }
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonSection = styled.div`
  display: flex;
`;

export const BreadCrumb = styled.ol`
  display: inline-block;
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 1.5rem;
`;
export const Link = styled.a`
  text-decoration: underline;
  color: #000;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 2rem;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90%;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  width: 13%;
  margin: 20px;
  border-right: 1px solid gray;
  &:last-child {
    border-right: 1px solid transparent;
  }
`;

export const Title = styled.span`
  display: flex;
  font-size: 12px;
  color: darkgray;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Discreption = styled.span`
  display: flex;
  font-size: 15px;
  font-weight: bold;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CaytegoryRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 5px;
`;
