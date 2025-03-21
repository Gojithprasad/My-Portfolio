import React from 'react'
import './MyWork.css'
import mywork_data from '../../Assets/mywork_data'
//import arrow_icon from '../../Assets/arrow_icon.svg'

function MyWork() {
    return (
        <div id='work' className='mywork'>
            <div className='mywork-title'>
                <h1>
                    My Projects
                </h1>

            </div>
            <div className='mywork-container'>
                {mywork_data.map((work, index) => (
                    <img key={index} src={work.w_img} alt={`Work ${index + 1}`} />
                ))}
            </div>
            <div className='mywork-showmore'>
                <p>Show More</p>
                { /*<img src={arrow_icon} alt=''></img>*/}

            </div>

        </div>
    )
}

export default MyWork
