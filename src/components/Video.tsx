import React from 'react';
export const Video = ({src, id, ratio}: {src: any, id: string, ratio: string}) => {
    let mutedParam = 'muted';
    let autoplayParam = 'autoplay';
    let loopParam = 'loop';
    return (
        <div className={`videoContainer ratio-${ratio}`} dangerouslySetInnerHTML={{
            __html: `
          <video
            width="500em"
            ${mutedParam}
            ${autoplayParam}
            ${loopParam}           
            playsinline
            src="${src}"   
            id="${id}"
          />`
        }}
        />
    );
}