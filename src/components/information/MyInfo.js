import styles from './MyInfo.module.css';

function MyInfo() {
  return (
    <div className={styles.info}>
      <h2>
        There's a pervasive belief in the Netherlands that this unconventional
        meal helps lift the national mood.
      </h2>
      <p>
        "I think I'm an addict, basically," says Marije Nicklin, who grew up on
        the Dutch island of Terschelling. The Dutch expat, who has been based in
        West Yorkshire, UK, since 2002, is obsessed with hagelslag, carefully
        rationing the packets her parents post to her and the bag-loads she
        brings back on the ferry. "I've got quite a lot in storage," she says.
        "I do start to twitch when I see the end is coming."
      </p>
    </div>
  );
}

export default MyInfo;
