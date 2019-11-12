import React from 'react';

const TracksComponent = (props) => {
    const activityNodes = props.topTracks.map((item, index)=> {
        return (
            <div key={index}>
          <h2 >{item.artists[0].name}</h2>
          <h3>{item.name}</h3>
          </div>
        )
      });
      return(
        <>
        {activityNodes}
        </>
      )
    }

export default TracksComponent;

