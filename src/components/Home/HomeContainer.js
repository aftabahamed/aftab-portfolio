import React from 'react'
import './home-styles.css'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const HomeContainer = () => {
    return (
        <section className="homeContainerWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <HomeLeft />
                    </div>
                    <div className="col-md-7">
                        <HomeRight />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeContainer