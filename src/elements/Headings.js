import styled from 'styled-components';
import { above } from '../utilities';
export const Heading = styled.h1`
	color: red;
	${above.med`
    color: blue;
  `}
`;
