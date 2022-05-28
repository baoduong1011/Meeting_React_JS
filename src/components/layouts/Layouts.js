import React from 'react'
import classes from './Layouts.module.css';
import MainNagivation from './MainNagivation';
const Layouts = (props) => {
  return (
    <div>
        <MainNagivation/>
        <main className={classes.main} >
            {props.children}
        </main>
    </div>
  )
}

export default Layouts