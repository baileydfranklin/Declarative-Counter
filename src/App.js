import React from 'react'
import { useState } from 'react'

// import React, { useState } from 'react'  <-- Same thing just in one line.

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter // to make this variable global. ONLY for testing and debugging

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  )
}

export default App;