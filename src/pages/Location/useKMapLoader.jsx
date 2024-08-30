import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
    useKakaoLoader({
        appkey: "52e0a70ef16233851b12c8a41ddf0691", // 발급 받은 APPKEY
        ...options // 추가 옵션
      })
}