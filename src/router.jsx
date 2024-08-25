import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/index";
import Location from "./pages/Location/index";
import Performance from "./pages/Performance/index";
import Notification from "./pages/Notification/main/index";
import Promotion from "./pages/Promotion/main/index";
import NotificationDetail from "./pages/Notification/detail/index";
import PromotionDetail from "./pages/Promotion/detail/index";
import FAQ from "./pages/FAQ/index";
import Review from "./pages/Review/index";
import About from "./pages/About/index";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 홈 페이지
      { path: "/", element: <Home /> },

      // 장소 안내 페이지
      { path: "/location", element: <Location /> },

      // 공연 페이지
      { path: "/performance", element: <Performance /> },

      // 공지 페이지
      { path: "/notification", element: <Notification /> },
      { path: "/notification/:num", element: <NotificationDetail /> },

      // 홍보 페이지
      { path: "/promotion", element: <Promotion /> },
      { path: "/promotion/:id", element: <PromotionDetail /> },

      // FAQ 페이지
      { path: "/FAQ", element: <FAQ /> },

      // 후기 페이지
      { path: "/review", element: <Review /> },

      // 영캠퍼 소개 페이지
      { path: "/about", element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
