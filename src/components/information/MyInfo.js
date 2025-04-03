import styles from './MyInfo.module.css';

function MyInfo() {
  return (
    <div className={styles.info}>
      <h2>Another Successful Job Completed!</h2>
      <p>
        Fred had been struggling with a broken fence and a power outage in his
        backyard for weeks. The unstable fence was swaying dangerously in the
        wind, and the lack of electricity made his evenings quite inconvenient.
        Our team stepped in to handle the repairs. First, we reinforced and
        rebuilt the fence, ensuring it was sturdy and secure. Then, our
        electricians restored the power supply, identifying and fixing the issue
        quickly. Now, Fred can enjoy his backyard again without worries. If you
        need carpentry, locksmith, or electrical services, feel free to leave a
        comment!
      </p>
    </div>
  );
}

export default MyInfo;
