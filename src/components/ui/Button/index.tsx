import styled from "@emotion/styled";
import { FONT_SIZE } from "components/ui/constants";

type ButtonProps = {
  started: boolean;
}

const Button = styled.button<ButtonProps>`
  margin: 0;
  outline: 0;
  height: 65px;
  width: 100%;
  border-size: 1px;
  border-color: #57886C;
  border-radius: 8px;
  color: #57886C;
  font-weight: bold;
  font-size: ${FONT_SIZE}px;  
  
  background: transparent;
  cursor: pointer;
  transition: color .5s, border-color .5s;
  &:hover {
    color: blue;
    border-color: blue;
  }
  :disabled {
    color: #F00;
    border-color: #F00;
  }
  ${({started}) => started && 'color: blue; border-color: blue;' }
`;

export default Button;
