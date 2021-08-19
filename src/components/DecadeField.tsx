import { FloatingLabel, Form } from "react-bootstrap";

const OPTIONS = [
  "All",
  "1900",
  "1910",
  "1930",
  "1940",
  "1950",
  "1960",
  "1970",
  "1980",
  "1990",
  "2000",
  "2010",
  "2020",
];

interface IProps {
  onChange: Function;
}

const DecadeField = ({ onChange }: IProps) => {
  return (
    <FloatingLabel controlId="floatingSelect" label="Decade">
      <Form.Select
        name="decade"
        aria-label="Floating label select example"
        onChange={(e: any) => onChange(e.target.value)}
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

export default DecadeField;
