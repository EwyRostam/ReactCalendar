import { Calendar } from './components/Calendar';
export default function App() {
  return (
    <>
    < Calendar />
    <button className="border border-black rounded m-1 px-1 bg-green-400 hover:bg-green-500">Happy</button>
    <button className="border border-black rounded m-1 px-1 bg-red-400 hover:bg-red-500">Sad</button>
    </>
  );
}

