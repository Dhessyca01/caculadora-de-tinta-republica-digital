import styled from "styled-components"

const StyledButton = styled.button`
  width: 250px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.9px;
  cursor: grabbing;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  background: #DC143C;
  color: Cornsilk;
  margin: 25px;
`

export default StyledButton;
