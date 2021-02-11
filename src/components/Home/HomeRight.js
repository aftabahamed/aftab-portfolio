import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

const HomeRight = () => {

    const times = [1,2,3,4,5,6];

    return (
        <div className="homeRightWrapper">
            {times.map((item) => {
                return(
                    <React.Fragment key={item}>
                        <ProjectCard />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default HomeRight
