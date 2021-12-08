/* For pinning practice */

import React from 'react';
import { updateTables } from 'reducers/pin'
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import styles from './Pinning.module.scss';


const Pinning = () => {
  const dispatch = useDispatch()
  const pinnedTables = useSelector((state) => state.pin.pinnedTables)
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const onBtnClick = (e) => {
    dispatch(updateTables(e.target.id))
  }

  return (
    <div className={styles.wrapper}>
      {nums.map((num) => {
        return <button key={num} id={num} className={classNames(styles.box, pinnedTables.includes(num.toString()) && styles.pinned)} onClick={onBtnClick}>{num}</button>
      })}
    </div>
  );
}

export default Pinning;
