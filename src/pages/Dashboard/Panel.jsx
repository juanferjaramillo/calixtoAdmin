import PanelBase from "./PanelBase";
import Content from "./Content";
import { Modal } from "../../components/Modals/EditModal/Modal";
import EditForm from "./EditForm";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Panel() {
  return (
    <PanelBase>
      <Content />
      <Modal>
        <EditForm />
      </Modal>
    </PanelBase>
  );
}
export default Panel;
