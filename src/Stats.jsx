function wordCount(text) {
    if (text.trim() === "") {
        return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
}

function countSentences(text) {
    const sentences = text.trim().split(/[.!?]+/);
    const validSentences = sentences.filter(sentence => sentence.trim().length > 0);
    return validSentences.length;
}


export default function Stats({ text }) {

  const numberOfCharacter = text.length;
  const numberOfWords = wordCount(text);
  const numberOfSentences = countSentences(text);
  const countTwitter = 280 - text.length;
  const countInstagram = 2200 - text.length;
  const countFacebook = 63206 - text.length;

  return (
    <section className="stats">
      <Stat label = "Characters" number = {numberOfCharacter}/>
      <Stat label = "Words" number = {numberOfWords}/>
      <Stat label = "Sentences" number = {numberOfSentences}/>
      <Stat label = "Twitter" number = {countTwitter}/>
      <Stat label = "Instagram" number = {countInstagram}/>
      <Stat label = "Facebook" number = {countFacebook}/>
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className={number >= 0 ? "stat__number" : "stat__number stat__number--limit"}>{ number }</span>
      <h2 className="second-heading">{ label }</h2>
    </section>
  );
}
