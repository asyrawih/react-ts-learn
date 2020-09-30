import React from 'react';
import useBahasa from './hooks/language-hooks';
import useSearchable from './hooks/searchable-hooks';
import useUserInput from './hooks/userinput-hooks';

const App: React.FC = () => {

  const bahasa = useBahasa()

  const userInput = useUserInput('')

  const search = useSearchable(
    bahasa,
    userInput.value,
    (item) => [item.name]
  )

  console.log(bahasa);
  return (
    <div className="App">
      <input type="text" {...userInput} />

      <ul>
        {
          search.map(item => (
            <li>{item.name}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default App;
