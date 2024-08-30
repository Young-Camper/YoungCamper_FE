import React from 'react';
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";

const Category = ({ children }) => {
  const { isDesktop } = useMediaQueries();

  return <S.Category $isDesktop={isDesktop}>{children}</S.Category>;
};

export default Category;