import { useState } from 'preact/hooks';
import Styles from '../styles/botton.css'

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Grazie per aver visitato il sito di prova!</h3>
      <button class='glowing-btn'   onClick={() => setGreeting(randomMessage())}><span class='glowing-txt'>C<span class='faulty-letter'>L</span>ICK</span>
      </button>
    </div>
  );
}

