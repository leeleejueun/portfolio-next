import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div>
        <div>HOPE YOU’RE HAVING A GREAT DAY!</div>
        <div>
            <p>LEE JUEUN -  PORTFOLIO 2023</p>
            <ul>
                <li>
                    <p>/01</p>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <p>/01</p>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <p>/01</p>
                    <Link href="/Works">Works</Link>
                </li>
                <li>
                    <p>/01</p>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu