import React from 'react'
import './style.css'

function Companies() {
    const companiesData = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
        "https://companieslogo.com/img/orig/WIT-1453b096.png?t=1739861069",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
        "https://download.logo.wine/logo/IBM_India/IBM_India-Logo.wine.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVYHKeBmM8N9YMgEUTvLiiZ-ctm4vq7XAKg&s",
        "https://upload.wikimedia.org/wikipedia/commons/3/38/MSFT_logo_png_grey.png",
        "https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo.jpg",
        "https://cdn.cookielaw.org/logos/03fc55fe-0057-4b2f-817d-763e7ecdb316/ad0fee7c-eecb-4e6d-b90f-8b6ca3a1e95c/cisco-logo-transparent.png",
        "https://www.capgemini.com/wp-content/uploads/2025/02/default-logo.webp",
        "https://mma.prnewswire.com/media/633364/Mindtree_Logo.jpg?p=twitter",
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Mphasis_-_The_Next_Applied.png",
        "https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P4V000015GC4CUAW",
        "https://www.opentext.com/assets/images/partners/cognizant-logo-416x274.png",
        "https://static.brandfinance.com/wp-content/uploads/2016/01/HCL-Logo.png",
        "https://work4freshers.com/wp-content/uploads/2022/06/job4freshers-2022-06-22T223604.039.webp",
        "https://pimwp.s3-accelerate.amazonaws.com/2022/06/LarsenToubro_logo.svg_.png",
        "https://mma.prnewswire.com/media/2171380/4200840/Brillio_Logo.jpg?p=facebook",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJUg62MuGIgotpuAUyv-V4E-0_TiaStUOSQ&s"
    ]
  return (
   <section className="container fluid p-3 p-md-5">
    <h1 className="fs-1 fw-bold text-center my-5">Our Trusted <span className="text-main">Clients</span></h1>
        <div className="row align-items-center">
            {
                companiesData.map((item, index)=>(
                    <div className="col-md-2 col-4">
                        <div className="card p-1 mb-3 border-0">
                            <img src={item} alt="Novanex clients" className="w-100" />
                        </div>
                    </div>
                ))
            }
        </div>
   </section>
  )
}

export default Companies