import styled, { css } from "styled-components/native";

type ContainerProps = {
  index: number;
}

export type StatusTypesProps = 'Preparando' | 'Pronto' | 'Entregue';

type StatusProps = {
  status: StatusTypesProps;
}


export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 24px;
  width: 50%;
  align-items: center;
  

  ${({ theme, index }) => css`
      border-right-width: ${index % 2 > 0 ? 0 : 1}px;
      border-right-color: ${theme.COLORS.SHAPE};
  `};
`;

export const Image = styled.Image`
  width: 104px;
  height: 104px;
`;

export const Name = styled.Text`
  font-size: 20px;
  margin-top: 1px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.SECONDARY_900};
`;

export const Description = styled.Text`
  font-size: 14px;
  margin-top: 11px;
  font-family: ${({theme}) => theme.FONTS.TEXT};
  color: ${({theme}) => theme.COLORS.SECONDARY_400};
`;

export const StatusContainer = styled.View<StatusProps>`
  padding: 4px 16px;
  border-radius: 12px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  
  ${({ status, theme }) => status === 'Preparando' && css`
    background-color: ${theme.COLORS.ALERT_50};
    border: 1px solid ${theme.COLORS.ALERT_900};
  `};

  ${({ status, theme }) => status === 'Pronto' && css`
    background-color: ${theme.COLORS.SUCCESS_900};
  `};

  ${({ status, theme }) => status === 'Entregue' && css`
    background-color: ${theme.COLORS.SECONDARY_900};
  `};
`;

export const StatusLabel = styled.Text<StatusProps>`
  font-size: 12px;
  line-height: 20px;
  font-family: ${({theme}) => theme.FONTS.TEXT};
  color: ${({theme}) => theme.FONTS.TITLE};

  ${({ status, theme }) => css`
    color: ${status === 'Preparando' ? theme.COLORS.ALERT_900 : theme.COLORS.TITLE};
  `};
`
