import React from 'react';

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <h1 style={{ color: props.textColor }}>Name: {props.name}</h1>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Profile