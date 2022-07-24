import React, { useEffect, useState } from 'react'
import { GetImgRequest } from '../API'
import Img_component from './Img_component'
import Button from '@mui/material/Button';

export default function Search_bar() {
    const [HandleSearch, SetHandleSearch] = useState()
    const [search, SetSearch] = useState()
    const [counting, setCounting] = useState()
    const [image, setImage] = useState([])

    useEffect(() => {
        GetImgRequest(counting, search).then((e) => setImage(e?.data))
    }, [counting, search])

    const countfun = (e) => {
        setCounting(e)
    }
    const HandleClick = () => {
        SetSearch(HandleSearch)
    }
    console.log(image, "data")
    return (
        <>

            <div style={{ justifyContent: 'center', display: 'flex' }} >
                <input placeholder='Search' onChange={(e) => SetHandleSearch(e.target.value)} style={{ paddingLeft: "20px", borderRadius: "10px", border: "1px solid rgb(156, 20, 17)", width: '200px', height: '30px', }} type="text" />

                <div style={{ paddingLeft: "10px" }}><Button onClick={HandleClick} variant="outlined" color="error">search</Button>
                </div>  </div>
            <Img_component props={image} search={search} countfun={countfun} />
        </>
    )
}
