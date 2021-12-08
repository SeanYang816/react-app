/* For pinning practice */

import React, { useState, useEffect, useCallback } from 'react';
import { updateTables } from 'reducers/pin'
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import Modal from 'components/Modal/Modal';
import styles from './Pinning.module.scss';

const Pinning = () => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const pinnedTables = useSelector((state) => state.pin.pinnedTables)
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const onBtnClick = useCallback((e) => {
    if(!pinnedTables.includes(e.target.id.toString())) setShow(true)
    dispatch(updateTables(e.target.id))
  }, [dispatch, pinnedTables])

  useEffect(()=> {
    const delay = 1000
    const action = () => setTimeout(()=>setShow(false), delay)
    if(show) {
      action()
    }
    return () => clearTimeout(action)
  }, [show])

  return (
    <div className={styles.wrapper}>
      {nums.map((num) => {
        return (
          <div key={num}>
            <button
              id={num}
              className={classNames(styles.box, pinnedTables.includes(num.toString()) && styles.pinned)}
              onClick={onBtnClick}>{num}
            </button>
          </div>
        )
      })}
      {show && <Modal show={show}/>}
    </div>
  );
}

export default Pinning;
