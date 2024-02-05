import { useState } from 'react';
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please?",
  " Kouny mo e?",
  " Dont' do this to me",
  "I'm begging you",
  " I'm gonna cry",
  "Valentine is so much better with you.",
  "You're breaking my heart...",
]



function App() {
  const[noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
    //setYesPressed(false);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <div className="valentine-containter">
      {yesPressed ? (
        <>
          <img
            alt="Bears kissing"
            
            src="	https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <h2>Yay!!!</h2>
        </>
      ) : (
        <>
          <img
            alt="Bear with hearts"
            className='centered-image'
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />

          <h1>Will you be my valentine?</h1>
          <div>

            <button
              className="yes-button"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}>
              Yes
            </button>

            <button
              className="no-button"
              onClick={handleNoClick}>
              {getNoButtonText()}
            </button>

          </div>
        </>

      )}

    </div>

  );
}

export default App;
