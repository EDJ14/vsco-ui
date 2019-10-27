import React from 'react';
import styled from 'styled-components';

import video_1 from '../../scss/img/video.mp4';

const VidBackground = styled.div`
  grid-row: 1 / 2;
  position: sticky;
  top: 0;
  z-index: -1;

  & .bg-video {
    height: 100%;
    width: 100%;
    opacity: 0.85;
    overflow: hidden;

    &__content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default () => {
  return (
    <VidBackground>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video_1} type="video/mp4" />
          <source src="../../scss/img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
    </VidBackground>
  );
};
