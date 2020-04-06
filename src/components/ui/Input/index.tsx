import styled from "@emotion/styled";
import { FONT_SIZE } from 'components/ui/constants';

type InputType = {
  isError?: boolean;
}

const Input = styled.input<InputType>`
  ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  height: 63px;
  outline: 0;
  border: 1px solid ${({isError}) => isError ? '#f00' : '#57886C'};
  border-radius: 8px;
  font-size: ${FONT_SIZE}px;
  color: ${({isError}) => isError ? '#f00' : '#57886C'};
  padding: 0px;
  padding-left: 16px;
  transition: color .5s, border-color .5s;
`;

export default Input;
