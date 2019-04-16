import React from 'react'
import {connect} from 'react-redux'

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <p>Welcome Message</p>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        
    }
}
export default connect(
    mapStateToProps,
    {}
)(Home);