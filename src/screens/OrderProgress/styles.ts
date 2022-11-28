import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({theme}) => ({
    colors: theme.COLORS.GRADIENT
}))`
    height:120px;
    justify-content: center;
    padding-top:30px

`;

export const Title = styled.Text`
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const Flex = styled.View`
flex-direction: row;
flex-wrap: wrap;
`

