import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';

import "./userList.css";

const UserList = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'user', headerName: 'User', width: 180, renderCell:(params)=>{
          return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username }
              </div>
          )
        } },
        { field: 'email', headerName: 'Email', width: 150 },
        {
          field: 'status',
          headerName: 'Status',
          width: 150  ,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 190,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 195,
          renderCell: (params) =>{
            return (
            <> 
              <button className="userListEdit">Edit</button>
              <DeleteOutline className="userListDelete" />
            </>
            )
          }
        }
      ];
      
      
    return (
        <div className="userList">
            <DataGrid
                rows={userRows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList
