import NextLink from "next/link";

import { Typography, Grid, Chip, Link } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import { ShopLayout } from '../../components/layouts'

const columns:GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra informacion si esta pagada la orden o no',
    width: 200,
    renderCell: (params) => {
      return (
        params.value
          ? <Chip color="success" label="Pagada" variant='outlined' />
          : <Chip color="error" label="No Pagada" variant='outlined' />
      )
    }
  },
  {
    field: 'orden',
    headerName: 'Ver oden',
    sortable: false,
    width: 200,
    renderCell: (params) => {
      return (
        <NextLink href={`/orders/${ params.row.id }`} passHref>
          <Link underline="always">
            Ver orden
          </Link>
        </NextLink>
      )
    }
  }
]

const rows = [
  { id: 1, paid: true, fullName: 'Jose Pardo' },
  { id: 2, paid: false, fullName: 'Melissa Flores' },
  { id: 3, paid: true, fullName: 'Hernando Vallejo' },
  { id: 4, paid: true, fullName: 'Emin Reyes' },
  { id: 5, paid: false, fullName: 'Eduardo Rios' },
  { id: 6, paid: true, fullName: 'Natalia Herrera' },
]

const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de Ordenes' pageDescription='Historial de ordenes del cliente'>
      <Typography variant='h1' component='h1'>Historial de ordenes</Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height:650, width: '100%' }}>
          <DataGrid 
            columns={ columns } 
            rows={ rows }
            pageSize={ 10 }
            rowsPerPageOptions={ [10] } 
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage