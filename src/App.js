import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import { Box, Container, Typography } from '@mui/material';

function App() {
  return (
    <>
      <Router>
        <Container maxWidth='sm'>
          <Box textAlign='center' mt={5}>
            <Typography variant="h2" fontWeight='bold'>Quiz App</Typography>
            <Routes>
              <Route path='/' element={<Settings />} />
              <Route path='/questions' element={<Questions />} />
              <Route path='/score' element={<FinalScreen />} />
            </Routes>
          </Box>
        </Container>
      </Router>

    </>
  );
}

export default App;