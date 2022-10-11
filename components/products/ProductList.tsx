import { FC } from "react"

import { Grid } from "@mui/material"
import { IProduct } from "../../interfaces"
import { ProductCard } from "./ProductCard";

interface IProductList {
  products:IProduct[];
}

export const ProductList:FC<IProductList> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {
        products.map(product => (
          <ProductCard 
            key={ product.slug }
            product={ product } 
          />
        ))
      }
    </Grid>
  )
}
