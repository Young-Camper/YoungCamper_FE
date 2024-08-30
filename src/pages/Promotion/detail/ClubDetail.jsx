import React from 'react'
import { useParams } from 'react-router-dom';
import useMediaQueries from '../../../hooks/useMediaQueries';

const ClubDetail = () => {
  const { id } = useParams();
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  return (
    <>
      <div>ClubDetail{id}</div>
      
    </>

  )
}

export default ClubDetail