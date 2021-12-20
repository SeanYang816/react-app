import React, { useRef } from 'react'
import Sidebar from 'MUI/Sidebar/Sidebar'
import Header from './Header/Header'
import useStyles from './index.style'
import { Fade } from '@mui/material'
import useCompareIndicator from 'hooks/useCompareIndicator'

function MUI() {
  const refEl = useRef()

  const isShow = useCompareIndicator(refEl)
  console.log(isShow)

  return (
    <div ref={refEl} id="material-ui" style={{ height: "100vh", width: "100vw", overflow: "auto" }}>
      <Fade in={isShow} appear="false">
        <div>
          <Header />
        </div>
      </Fade>
      <Sidebar />
      <div style={{ height: '500vh' }}>1</div>
    </div>
  )
}

export default MUI
