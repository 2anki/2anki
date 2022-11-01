import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: "center";
  justify-content: "center";
  background-color: rgba(83, 151, 245, 0.40);
`;

export const Title = styled.Text`
  color: #5397f5;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0.3rem 1.5rem;
  user-select: none;
`;

export const PageHeader = styled.View`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`