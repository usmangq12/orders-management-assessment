import { BreadCrumb, ListItem, Link } from "../shared/Style";

export default function BreadCrumbs() {
  return (
    <BreadCrumb>
      <ListItem>
        Orders > &nbsp;
        <Link href="https://www.google.com/">Order 32457ABC</Link>
      </ListItem>
    </BreadCrumb>
  );
}
