import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class ProjectItems extends Component {
    render() {
        return (
            <Card raised="true" >
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                        <h2>{this.props.project.name}</h2> 
                    </Typography>
                    <Typography component="p">
                        <p>{this.props.project.description}</p>
                        <p>{this.props.project.thumbnail}</p>
                        <pre>{this.props.project.website}</pre>
                        <a href={this.props.project.github} >Github</a>
                        <pre>{this.props.project.date_completed}</pre>
                        <pre>{this.props.project.tag_id}</pre>
                    </Typography>
                
                </CardContent>

            </Card>
        );
    }
}

export default connect()(ProjectItems);