//breakpoint에 따른 화면 설정 위한 hook

import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px) ",
  });

  return { isMobile, isTablet, isDesktop };
};

export default useMediaQueries;
