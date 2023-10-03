import React from 'react'
import StudentInfo from './StudentInfo/page'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="Home">
      <h2>CPRG 306: Web Development 2 - Assignments</h2>
      <StudentInfo />
      <Link href="/week2">
        Week 2 
      </Link><br></br>
      <Link href="/week3">
        Week 3 
      </Link>

    </main>
  )
}
