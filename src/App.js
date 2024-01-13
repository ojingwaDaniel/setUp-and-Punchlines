import './App.css';
import Jokes from './jokes';
import jokesData from './jokesData';

function App() {
  const DataElement = jokesData.map(jokes => {
    return <Jokes setUp={jokes.setUp} punchlines={jokes.punchlines}/>
  })
    return (
      <div className = "App" >
      {DataElement}
    </div >
  )
}
export default App;
{/* <Jokes punchlines="It's hard to explain puns to kleptomaniacs because they always take things literally." />
      <Jokes
        setUp="My wife told me to stop acting like a flamingo."
        punchlines="I had to put my foot down."
        votes={() => {
          const numOfVote = 1
          <but
        }}
      />
      <Jokes
        setUp="What is Whitney Houston’s favorite type of coordination?"
        punchlines="HAAANNNNND EYEEEEEEE.

"
      />
      <Jokes
        setUp="Why are gay people always smiling?"
        punchlines="Because they can’t keep a straight face."
      />
      <Jokes
        setUp="Why did David Hasselhoff change his name to “The Hoff?”"
        punchlines="It’s less hassle."
      /> */}