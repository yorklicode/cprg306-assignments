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
      <br></br>
      <Link href="/week4">
        Week 4
      </Link>
      <br></br>
      <Link href="/week5">
        Week 5
      </Link>
      <br></br>
      <Link href="/week6">
        Week 6
      </Link>
      <br></br>
      <Link href="/week7">
        Week 7
      </Link>
      <br></br>
      <Link href="/week8">
        Week 8
      </Link>
      <br></br>
      <Link href="/week10">
        Week 10
      </Link>

    </main>
  )
}
