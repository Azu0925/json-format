import React, { useState } from 'react';
import { Textarea } from '@chakra-ui/react'
import './App.css';

function App() {
    const [jsonText, setJsonText] = useState("")
    const handleChangeInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => setJsonText(JSON.stringify(JSON.parse(e.target.value), null, 2))
  return (
    <div className="App">
        <div>
            <form>
                <Textarea onChange={handleChangeInputText} />
            </form>
        </div>
        <div>
            <form>

                <Textarea value={jsonText} />
            </form>
        </div>
    </div>
  );
}

export default App;
