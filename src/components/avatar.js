import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

function AvatarComp() {
    return (
      <div style={{
          textAlign: "left"
      }}>
          <div style={{
              marginBottom:"30px"
          }}>
        <Avatar style={{
            display: "inline",
            padding: "10px",
            margin: "5px"
        }}>H</Avatar>
        <span style={{
            color: "#7d6d6d",
        }}>Good morning.</span>
        {/* <p style={{
            fontSize: "12px"
        }}>Nate!</p> */}
        </div>
        <Divider style={{
            marginBottom: "10px"
        }} />
      </div>
    );
  }
  
  export default AvatarComp;
  