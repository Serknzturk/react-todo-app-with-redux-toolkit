import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function ToDoListSkeleton() {
  return (
    <Stack spacing={1} style={{marginTop:'30px'}}>
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
    </Stack>
  );
}