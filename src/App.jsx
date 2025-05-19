
import './App.css';
import { Heading } from '@chakra-ui/react';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Outlet, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import Profile from './comonents/Profile';
import Create from './comonents/Create';
import Dashboard from './comonents/dashboard';
import Layout from './comonents/Layout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
