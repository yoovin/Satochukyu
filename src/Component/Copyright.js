import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import React, { Component } from 'react'

export default class Copyright extends Component {
    render() {
        return (
            <div>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}<br/>
                    <Link color="inherit">
                    SubChan Production
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </div>
        )
    }
}