import PropTypes from "prop-types";
import styled from "styled-components";
import { toast } from "react-toastify";

const WallForm = ({ wall, formData, onChange }) => {
  const handleInputChange = (e, wall) => {
    const { name, value } = e.target;
    if (name === "window" || name === "door") {
      if (!Number.isInteger(Number(value))) {
        toast.error("Por favor, insira um número inteiro.");
        return;
      }
    }
    onChange(e, wall);
  };

  return (
    <div>
      <h2>Parede {wall}</h2>
      <label>
        Altura:
        <Input
          type="number"
          name="height"
          value={formData[wall].height}
          onChange={(e) => handleInputChange(e, wall)}
        />
        Largura:
        <Input
          type="number"
          name="length"
          value={formData[wall].length}
          onChange={(e) => handleInputChange(e, wall)}
        />
        Número de Janelas:
        <Input
          type="number"
          name="window"
          value={formData[wall].window}
          onChange={(e) => handleInputChange(e, wall)}
        />
        Número de Portas:
        <Input
          type="number"
          name="door"
          value={formData[wall].door}
          onChange={(e) => handleInputChange(e, wall)}
        />
      </label>
    </div>
  );
};

WallForm.propTypes = {
  wall: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

const Input = styled.input`
  width: 75%;
  padding: 15px;
  border: 4px solid #ccc;
  border-radius: 0px;
  border-style: solid;
  border-color: gray;
  font-size: 17px;
  text-align: left;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

export default WallForm;
