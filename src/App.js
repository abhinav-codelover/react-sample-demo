import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './common/routes/Root';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
