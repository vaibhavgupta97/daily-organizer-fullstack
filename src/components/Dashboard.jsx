import React from 'react';
import {connect} from 'react-redux';
import {ConnectedTaskList} from './TaskList';
export const Dashboard=({groups})=>(
    <div>
        {groups.map(group=>(
            <ConnectedTaskList key={group.id} id={group.id}
            name={group.name}/>
        ))}
    </div>
);

function mapStateToProps(state){
    return{
        groups:state.groups
    }
}

//const mapStateToProps = ({groups})=>({groups});
export const ConnectedDashboard=connect(mapStateToProps)(Dashboard);