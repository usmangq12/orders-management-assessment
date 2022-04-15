import { BreadCrumb, ListItem } from "../shared/Style";
import { Link } from "react-router-dom";

export default function BreadCrumbs() {
  return (
    <BreadCrumb>
      <ListItem>
        Orders > &nbsp;
        <Link to="/OrderDetails" style={{ color: "black" }}>Order 32457ABC</Link>
      </ListItem>
    </BreadCrumb>
  );
}
