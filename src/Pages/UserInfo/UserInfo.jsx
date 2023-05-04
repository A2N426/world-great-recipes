import React, { useContext } from 'react';
import { UserContext } from '../../Providers/AuthProviders';

const UserInfo = () => {

    const {user}=useContext(UserContext)
    console.log(user)
    return (
        <div>
            
        </div>
    );
};

export default UserInfo;