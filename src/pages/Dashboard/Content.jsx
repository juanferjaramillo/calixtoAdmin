import React from 'react'
import { Box } from '@mui/material'
import useProducts from '../../hooks/useProducts'
import Card from '../../components/Card/Card.jsx'

export default function Content() {
  const products = useProducts();
  return (
    <Box>
      <Box>
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
            />
          )
        })}
      </Box>
    </Box>
  )
}
