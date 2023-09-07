import { useState } from 'react';
import ButtonClick from './ButtonClick';
import GetCount from './GetCount';
import { useCountClick } from './useCountClick';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: 50,
  lineHeight: '60px',
}));

export default function CardCount() {
  const [count, setCount] = useState(0);
  const { isLoading } = useCountClick(count);

  const clickCounter = (e: any) => {
    e.preventDefault();
    setCount(count + 1);
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 275,
            height: 175,
          },
        }}
      >
        <Paper elevation={3}>
          <ButtonClick props={{ clickCounter: clickCounter, isLoading: isLoading }} />
          <Stack spacing={2}>
            <Item elevation={0}>Кликнули {count} раз</Item>
            <Item elevation={0}><GetCount count={count} /></Item>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}