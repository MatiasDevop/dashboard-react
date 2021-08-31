 import React from 'react'
 import "./productList.css"
 import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
 import { DeleteOutline } from '@material-ui/icons';
 import { productRows } from '../../dummyData';
 import { Link } from 'react-router-dom';
 import { useState } from 'react';
 

const ProductList = () => {
    const [data, setData] = useState(productRows);
    return (
        <div className="productList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList
