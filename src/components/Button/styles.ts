import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
flex: 1;
max-height: 56px;
min-height: 56px;
border-radius: 12px;
justify-content: center;
align-items: center;
background-color: ${( {theme} ) => theme.COLORS.PRIMARY_800};

`

export const Title = styled.Text`
font-size: 14px;
color: ${( {theme} ) => theme.COLORS.TITLE};
font-family: ${( {theme} ) => theme.FONTS.TEXT};

`