import React from 'react'
import Message from './Message'

const ImportMsgs = () => {
  return (
    <div className=' scroll-bar overflow-y-auto' style={{maxHeight: "calc(82vh - 12vh)"}}>
      <Message />
      <Message />
      <Message />

    </div>
  )
}

export default ImportMsgs