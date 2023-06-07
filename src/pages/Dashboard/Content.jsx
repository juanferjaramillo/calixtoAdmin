import React from 'react'
import { Box } from '@mui/material'
import useProducts from '../../hooks/useProducts'
import Card from '../../components/Card/Card.jsx'

export default function Content({ setModalOpen, modalOpen }) {
  const products = useProducts();
  return (
    <Box sx={{display: "flex", flexWrap:"wrap", padding:"10px", marginTop:"20px", justifyContent:"space-around"}}>
      {products?.map((product, index) => {
        return (
          <Card
            key={index}
            codigo={product.codigo}
            nombre={product.nombre}
            Barras={product.codigoBarras}
            precio_base={product.precioBase}
            prodImg={product.prodUrl}
            descripcion={product.descripcion}
            categorias={product.categories}
            iva={product.tax?.tax}
            icons={product.icons}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
        )
      })}
    </Box>
  )
}
