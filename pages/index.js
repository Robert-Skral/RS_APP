import { useState } from 'react'
import styles from '../styles/Home.module.css'

const handleClick = () => {
  const value = '1+2 + 4 -1 '
  const operators = value.split(/[0-9]/).filter((item) => item !== '').map((item) => item.trim())
  const num = value.split(/[+-]/).filter((item) => item !== '')


  const res = operators.reduce((memo, param, index) => {
    if (param === '+') {
      return memo = memo + parseInt(num[index + 1])
    }
    if (param === '-') {
      return memo = memo - parseInt(num[index + 1])
    }
    return memo
  }, parseInt(num[0]))

  console.log('==res==', res)
}

export default function Home() {
  const [res, setRes] = useState('second')

  handleClick()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={handleClick}>cllisk</button>
        <span>{res}</span>
      </main>
    </div>
  )
}
