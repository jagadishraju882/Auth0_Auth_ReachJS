import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
//import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return ( 
    isAuthenticated && ( 
    
        <div>
           
            <img src={user.picture} alt={user.name} />
            <br/>
            {
            //<h2>{user.name}</h2>
            //<p>{user.email}</p>
           // <JSONPretty data ={user} />
            }
            <div className="details-table">
            <table width='300px' cellPadding='1' border='1' align='left' bgcolor='#ffffff' > 
                <tr> 
                    <th align='left'> Nickname </th>
                    <td>{user.nickname} </td>
                </tr>
                <tr> 
                    <th align='left'> email </th>
                    <td>{user.name} </td>
                    
                </tr>
                <tr> 
                    <th align='left'> Picture </th>
                    <td>{user.picture} </td>
                </tr>
                <tr> 
                    <th align='left'> Updated_at </th>
                    <td>{user.updated_at} </td>
                </tr>
                <tr> 
                    <th align='left'> Email_verified </th>
                    <td>{user.email_verified.toString()} </td>
                </tr>
                <tr> 
                    <th align='left'> Email </th>
                    <td>{user.email} </td>
                </tr>
                <tr> 
                    <th align='left'> Sub </th>
                    <td>{user.sub} </td>
                </tr>
                

            </table>
            </div>
            { /*JSON.stringify(user, null, 2)} */}
        </div>
        
    )
  )
}

export default Profile