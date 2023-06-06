import React, { useEffect, useState } from 'react'
import './Modal.modules.css'
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
let handleOpen;

function Modal({ children }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  handleOpen = (id) => {
    setId(id);
    setOpen(!open)
  }

  const renderChildrenWithProps = (renderProps) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, renderProps);
      }
      return child;
    });
  };

  return open && (
    <div className='modal'>
      <div className='overlay'></div>
      <div className="modal-content">
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => { handleOpen() }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
          {renderChildrenWithProps({ id })}
        </Box>
      </div>
    </div >
  )
}

export { Modal, handleOpen };
