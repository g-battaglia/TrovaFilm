import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

interface IProps {
  onChange: Function;
}

const TitleField = ({ onChange }: IProps) => {
  return (
    <FloatingLabel controlId="floatingSelect" label="Titolo">
      <Form.Control
        name="movieTitle"
        type="text"
        placeholder="Titolo"
        onChange={(e: any) => onChange(e.target.value)}
      />
    </FloatingLabel>
  );
};

export default TitleField;
