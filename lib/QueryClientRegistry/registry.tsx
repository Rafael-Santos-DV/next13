'use client';

import React from 'react';
import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const QueryClientRegistry = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientRegistry;
