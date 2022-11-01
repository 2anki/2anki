import { StatusBar } from 'expo-status-bar';
import { Container, PageHeader, Title } from './shared/styled';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <PageHeader>
        <Title>2Anki.</Title>
      </PageHeader>
    </Container>
  );
}