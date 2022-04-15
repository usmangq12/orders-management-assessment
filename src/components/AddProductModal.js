import { useState } from "react";
import {
  Modal,
  ModalBody,
  Button,
  ModalBox,
  Para,
  Header,
} from "../shared/Style";

export default function AddProductModal() {
  // modal state
  const [modal, setModal] = useState(false);
  // toggle modal
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>Add AddProductModal</Button>
      {modal && (
        <Modal>
              <Header>
              <h1>Add Product from Sysco's catalog</h1>{" "}
            </Header>
          <ModalBody>
          

            <ModalBox>
              <img
                src="https://i.pinimg.com/736x/70/40/5f/70405f68ba3a416658543134010b9ee5.jpg"
                alt=""
                width={200}
                height={200}
              />
              <Para>Search for your Product</Para>
            </ModalBox>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}
