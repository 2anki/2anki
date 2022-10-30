import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { Container, PageHeader, Title } from './shared/styled';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <PageHeader>
        <Title>2anki.</Title>
      </PageHeader>
    </Container>
  );
}