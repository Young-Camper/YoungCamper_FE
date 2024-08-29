import React, { useState } from 'react';
import * as S from "../style";
import useMediaQueries from '../../../hooks/useMediaQueries';
import clubData from "../../../data/clubData.json";
import ClubCard from './ClubCard';

const Club = () => {
    const { isMobile, isTablet, isDesktop } = useMediaQueries();
    const itemsPerPage = isDesktop ? clubData.length : 8;
    const [currentPage, setCurrentPage] = useState(1);

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(clubData.length / itemsPerPage);

    // 현재 페이지에 맞는 데이터 계산
    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return clubData.slice(startIndex, startIndex + itemsPerPage);
    };

    const currentItems = getCurrentPageItems();

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 현재 페이지에 맞는 페이지 번호 범위 계산
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <S.gridContainer isMobile={isMobile} isTablet={isTablet}>
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
