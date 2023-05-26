// ./pages/index.tsx

import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import PortfolioDoc from '../components/PortfolioDoc';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <PortfolioDoc />
      </Container>
    </div>
  );
}
