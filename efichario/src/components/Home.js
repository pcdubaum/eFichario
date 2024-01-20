import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Signup from '../pages/auth/Signup';

import styles from "./Home.module.css"

const Home = () => {

  return (
    <div className={styles.janelao}>
      
      <div className={styles.janela} id={styles.left}>
        <Signup />
      </div>

      <div className={styles.janela} id={styles.right}>
        <Signup />
      </div>

    </div>
  )
}

export default Home