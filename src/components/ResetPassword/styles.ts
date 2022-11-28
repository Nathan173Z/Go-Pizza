import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';

export const Container = styled.TouchableOpacity`
margin-right:42px;
align-items: flex-end;
`;

export const Text = styled.Text`
color: ${( {theme} ) => theme.COLORS.TITLE};
font-size: 14px;
margin-top: 20px;

`;