import Image from 'next/image'
import styles from './styles.module.scss'

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={150}
        height={48}
        priority
      />
      <div className={styles.description}>
        <p>
          Get started by editing
        </p>
      </div>
    </div>
  )
}
