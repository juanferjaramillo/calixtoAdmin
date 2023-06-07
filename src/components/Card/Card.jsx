import React from 'react';
import { useState } from "react";
import { Box, Grid, Typography, Divider, useTheme, useMediaQuery, Avatar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { handleOpen } from '../Modals/EditModal/Modal';
import Badge from "@mui/material/Badge";
import style from "./card.module.css"
import { deleteProduct } from './../../redux/actions'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

// const colorDot = "green";
// const colorDot = "orange"
const colorDot = "red"
// const colorDot = "blue"
// const colorDot = '#44b700'

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: colorDot,
    color: colorDot,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

//-------------------------COMPONENT------------------------
function Card(props) {
  const dispatch = useDispatch()
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let PB = Number(props.precio_base).toFixed();
  let PT = ((1 + Number(props.iva) / 100) * Number(PB)).toFixed();
  PB = PB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  PT = PT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const cats = props.categorias?.map((cat) => cat.name.toString().split("/")[3]);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  const deleteHandler = () => {
    Swal.fire({
      title: '¿Are you sure you want to delete this product?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(props.codigo))
      }
    });
  }

  return (
    <Box
      key={Date()}
      margin={1}
      border={1}
      className={flipped ? style.backCard : style.frontCard}
      sx={{
        width: isMobile ? "80vw" : "25vw",
        minWidth: isMobile ? "250px" : "290px",
        bgcolor: theme.palette.background.paper,
        boxShadow: 8,
        borderRadius: 2,
        p: 1,
        borderColor: "lightgray",

      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton onClick={() => { handleOpen(props.codigo) }}>
          <ModeEditIcon />
        </IconButton>
        <IconButton onClick={deleteHandler}>
          <DeleteIcon />
        </IconButton>
      </Box>
      {flipped ? (
        //-------------------------------BACK CARD-----------------------------------

        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          onMouseLeave={handleClick}
          onClick={handleClick}
          sx={{
            minHeight: "65vh",
            className: "style.turn"
          }}
        >
          <Typography variant="body1">{`Codigo: ${props.Barras}`}</Typography>

          <Typography fontSize={11} textAlign="center" p={1} boxShadow={2}>
            {props.descripcion}
          </Typography>

          <img
            style={{ objectFit: "contain" }}
            src={props.prodImg}
            height="150vh"
            width="240vh"
            alt="producto"
          // border="1"
          />

          <Divider sx={{ width: "80%" }} />
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            marginTop={1}
          >
            {props.icons?.map((icon, i) => {
              return (
                <Avatar
                  alt="icon"
                  src={icon.iconUrl}
                  key={i}
                  sx={{
                    width: 35,
                    height: 35,
                    marginRight: 0.5,
                    marginLeft: 0.5,
                  }}
                ></Avatar>
              );
            })}
          </Grid>
        </Grid>
      ) : (
        //-------------------------------FRONT CARD-----------------------------------
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          onClick={handleClick}
          sx={{
            minHeight: "65vh",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {`Codigo: ${props.codigo}`}
          </Typography>

          <img
            style={{ objectFit: "contain" }}
            src={props.prodImg}
            height="220vh"
            width="240vw"
            alt="producto"
          />

          <Typography
            variant="body1"
            fontWeight={"500"}
            sx={{
              textAlign: "center",
              p: 1,
            }}
          >
            {props.nombre}
          </Typography>
          <Divider sx={{ width: "80%" }} />
          <Typography variant="body2">{`Precio sin IVA: $ ${PB}`}</Typography>
          <Typography variant="body2">{`Precio con IVA: $ ${PT}`}</Typography>

          <StyledBadge
            overlap="rectangular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Grid item width={200} textAlign={"center"}>
              {cats?.map((k, index) => {
                return <Typography key={index} variant="body2">{k}</Typography>;
              })}
            </Grid>
          </StyledBadge>
        </Grid>
      )}
    </Box>
  );
}

export default Card;