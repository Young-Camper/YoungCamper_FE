import React, { useState, useEffect } from 'react';
import * as S from "../style";
import { useLocation, useNavigate } from 'react-router-dom'; 
import useMediaQueries from '../../../hooks/useMediaQueries';
import clubData from "../../../data/clubData.json";
import ClubCard from './ClubCard';

const Club = () => {
    const { isMobile, isTablet, isDesktop } = useMediaQueries();
    const itemsPerPage = isDesktop ? clubData.length : 8;
    
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate
    const location = useLocation(); // 현재 URL 정보 가져오기

    // URL에서 page 값 가져오기, 없으면 1로 설정
    const query = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(query.get('page'), 10) || 1;

    const [currentPage, setCurrentPage] = useState(pageFromUrl); // 페이지 상태 관리

    const totalPages = Math.ceil(clubData.length / itemsPerPage); // 총 페이지 수 계산

    // 현재 페이지 아이템 계산
    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return clubData.slice(startIndex, startIndex + itemsPerPage);
    };

    const currentItems = getCurrentPageItems();

    // 페이지 변경 시 호출
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // URL에 페이지 번호 업데이트
        navigate(`?page=${pageNumber}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 페이지 번호 리스트 생성
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // URL에 맞춰 currentPage 상태 업데이트
    useEffect(() => {
        setCurrentPage(pageFromUrl);
    }, [pageFromUrl]);

    return (
        <>
            <S.gridContainer $isMobile={isMobile} $isTablet={isTablet}>
                {currentItems.map((club) => (
                    <ClubCard key={club.id} club={club} />
                ))}
            </S.gridContainer>
            {(isTablet || isMobile) && totalPages > 1 && (
                <S.Pagination>
                    {pageNumbers.map(number => (
                        <S.PageNumber
                            key={number}
                            $isActive={number === currentPage}
                            onClick={() => handlePageChange(number)}
                        >
                            {number}
                        </S.PageNumber>
                    ))}     
                </S.Pagination>
            )}
        </>
    );
};

export default Club;
