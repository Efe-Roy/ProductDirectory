import React from 'react'

const TopCompany = () => {
  return (
    <React.Fragment>
        <div className="container-fluid my-4" style={{maxWidth: "97%"}}>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                <div className="col">
                <div className="p-3 border bg-white">Row column</div>
                </div>
                <div className="col">
                <div className="p-3 border bg-white">Row column</div>
                </div>
                <div className="col">
                <div className="p-3 border bg-white">Row column</div>
                </div>
                <div className="col">
                <div className="p-3 border bg-white">Row column</div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default TopCompany