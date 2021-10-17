import React, { Component } from 'react'
import {CImage} from '@coreui/react'
export default class Home extends Component {
    render() {
        return (
            <CImage style={{objectFit:"cover", minHeight:'92vh'}} fluid src="images/home.jpg" />
        )
    }
}
