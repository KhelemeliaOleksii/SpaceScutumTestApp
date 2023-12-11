import React from 'react';
import { Layout } from './components/Layout';
import { Suspense } from 'react';
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout />
    </Suspense>
  );
}

export default App;
