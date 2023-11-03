import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css";

const data=["https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww",
" https://t3.ftcdn.net/jpg/03/80/04/40/360_F_380044050_8MmkUv5aT6CEs4NSNzch4BepNl3lzo2y.jpg",
"https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk3OTQ0NzUxOTMxMDA4MTcy/10-uses-of-banana-plants.jpg",
"https://thumbs.dreamstime.com/b/banana-tree-bunch-growing-bananas-alanya-turkey-71214312.jpg"]

const Banner = () => {
  return (
    <Carousel
    className='carousel'>
         {
            data.map((imag,i)=>{
                return(
                    <>
                    <img src={imag} className='banner_img' style={{width:"640px",height:"320px",marginLeft:"auto",marginRight:"auto",display:"flex",paddingTop:"10px"}} />
                    </>
                )
            })
         }   
        </Carousel>
  )
}

export default Banner