import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main>Content</main>
      </div>
    </BrowserRouter>
  );
}
