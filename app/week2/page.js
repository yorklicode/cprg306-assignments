import Link from 'next/link';
import React from 'react';
import './page.css';

export default function Week2() {
    return(
        <main className="week2">
        <div className="container">
        <div className="left">
        <h1>My Shopping List</h1>
        </div>
       
       <div className="right">
        <p>Name: Ting Yau Li York</p>
        <p>Course section: CPRG 306 C</p>
        <Link href="https://github.com/yorklicode/cprg306-assignments">
        https://github.com/yorklicode/cprg306-assignments</Link>
    </div></div>
        </main>
    )
}  