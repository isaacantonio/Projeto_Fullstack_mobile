import styled from '@emotion/native';
import { Button } from 'react-native-paper';

export const ButtonStyled = styled(Button)`
    margin: 0 auto;
    padding:8px;
    width: 100%;
    max-width: 300px;
    border-radius: 3px;
`;

ButtonStyled.defaultProps = {
    dark: true,
    uppercase: false,
};
