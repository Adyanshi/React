import Smile from "./01"

function App() {
  const username = "Life & Hopes"
  return (
  <>
    <h1>REACT with vite ({username}) | Adyanshi Singh</h1>
    {/* this is evaluated expression written in'{}' */}
    <p>This is a simple react app created with vite:</p>
    <Smile/>
  </>
  )
}

export default App