import React from 'react';

const TracksComponent = (props) => {
    const activityNodes = props.topTracks.map((item, index)=> {
        return (
          <h2 key={index}>{item.artists[0].name}</h2>
        )
      });
      return(
        <>
        {activityNodes}
        </>
      )
    }

export default TracksComponent;

