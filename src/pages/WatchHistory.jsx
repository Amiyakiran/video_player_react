import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
          <h3>Watch History</h3>
          <Link to={'/home'}className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontSize:'20px'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i> Back to Home</Link>
      </div>
      <table className='table mt-5 mb-5 container'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
            </tr>
          </thead>
          <tBody>
            <tr>
              <td>1</td>
              <td>Kanban</td>
              <td><a href="https://fontawesome.com/search?q=Arrow&o=r">https://fontawesome.com/search?q=Arrow&o=r</a></td>
              <td>4/10/23</td>
            </tr>
          </tBody>
      </table>
    </>
  )
}

export default WatchHistory