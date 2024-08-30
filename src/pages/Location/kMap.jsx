import React, {useEffect} from 'react';
import { Map }from "react-kakao-maps-sdk"
import useKakaoLoader from './useKMapLoader';
const kMap =  () => {
  useKakaoLoader()
  
    return (
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
      </Map>
    )
  }
export default kMap;

  