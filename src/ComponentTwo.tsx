import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilCount, recoilSelector, modifier } from './state';
import './App.css';

function ComponentTwo() {
  const [count, setCount] = useRecoilState(recoilCount);
  const [mod, setMod] = useRecoilState(modifier);
  const modifiedCount = useRecoilValue(recoilSelector);

  // Handle the change event properly by parsing the input value to a number
  const handleModifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setMod(value);
    }
  };

  return (
    <>
      <p>The counter is {count}</p>
      <div className="card">
        <input
          type='number'
          value={mod}
          onChange={handleModifierChange}
        />
        <button onClick={() => setCount((count) => count + 1)}>
          Modified count is {modifiedCount}
        </button>
      </div>
    </>
  );
}

export default ComponentTwo;

