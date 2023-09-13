import React from 'react'
import styles from "./footer.module.css"
import { BsFacebook } from 'react-icons/bs'
import Link from "next/link";

function getBuildDate() {
  return new Date();
}
const Footer = () => {
  const buildDate = getBuildDate();
  return (
    // <div className='bg-gray-500 h-10 py-2 pb-3 md:px-12 px-2 text-white'>
    //   ©2023 PandaLove. All rights reserved. 
    // </div>
    <div className='bg-gray-500 h-10 py-2 pb-3 md:px-12 px-2 text-white text-sm flex items-center justify-between'>
    <div>©2023 PandaLove. All rights reserved.</div>
    <div>Last modified: {buildDate.toDateString()}</div>
    <div className={styles.social}>
      <Link href="https://www.facebook.com/groups/776804497331764">
      <BsFacebook styles={{color: "white"}} className="icon"/>
      </Link>
    </div>
  </div>
  )
}

export default Footer
//https://images.unsplash.com/photo-1598032604570-d65c6680d246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZHMlMjBjb21wdXRlcnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60