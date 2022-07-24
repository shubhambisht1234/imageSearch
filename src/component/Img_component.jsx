import { Pagination } from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';

export default function Img_component({ props, search, countfun }) {
    const imgData = props?.results
    return (<>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-around' }}>
            {search == null ? <div style={{ color: "white", width: '100%', height: '350px' }}> <h1 style={{ width: '320px', margin: '120px auto' }}> SELECT YOUR IMAGE</h1></div> : imgData?.map((val) => {
                return (<div className='imagebox' style={{ marginTop: '20px', border: "2px solid red", width: '350px', height: '200px' }}>
                    <img style={{ width: '350px', height: '200px' }} src={val.urls.small} />
                </div>)
            })}
        </div >
        <div style={{ color: 'white' }}>
            <Stack spacing={2} >
                <Pagination count={search == null ? null : props?.total} onChange={(e) => countfun(e.currentTarget.textContent)} color="secondary" />
            </Stack></div>
    </>
    )
}
