import { FloatingLabel, Form } from "react-bootstrap";

const OPTIONS = ["Rating", "Title", "Year"];

interface IProps {
  onChange: Function;
}

const SortField = ({ onChange }: IProps) => {
  return (
    <FloatingLabel
      controlId="floatingSelect"
      label="Ordina per"
      style={{ whiteSpace: "nowrap" }}
    >
      <Form.Select
        name="sort"
        aria-label="Floating label select example"
        onChange={(e: any) => {
          console.log(e.target.value);
          onChange(e.target.value);
        }}
      >
        {OPTIONS.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
  );
};

export default SortField;
