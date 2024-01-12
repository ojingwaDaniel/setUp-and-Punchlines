import './App.css';
import Jokes from './jokes';

function App() {
  return (
    <div className="App">
      <Jokes
        setUp="My wife told me to stop acting like a flamingo."
        punchlines="I had to put my foot down."
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
      />
    </div>
  );
}

export default App;
