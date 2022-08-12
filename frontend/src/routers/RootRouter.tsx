import MainNavBar from "@components/common/MainNavBar";

import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./RootLayout.scss";

const Main = lazy(() => import("@screens/Main"));
const FeedPage = lazy(() => import("@screens/FeedPage"));
const PageNotFound = lazy(() => import("@screens/common/PageNotFound"));
const KakaoOauthHandler = lazy(
  () => import("@screens/common/KakaoOauthHandler")
);
const NaverOauthHandler = lazy(
  () => import("@screens/common/NaverOauthHandler")
);
const Letters = lazy(() => import("@screens/Letters"));
const ChatRoom = lazy(() => import("@screens/ChatRoom"));
const ChkPw = lazy(() => import("@screens/AccountSetting/ChkPw"));
const AccountSettingPage = lazy(
  () => import("@screens/AccountSetting/AccountSettingPage")
);
const Withdrawal = lazy(() => import("@screens/AccountSetting/Withdrawal"));
const DealDetailPage = lazy(() => import("@screens/DealPage/DealDetailPage"));
const TipDetail = lazy(() => import("@screens/TipPage/TipDetail"));
const TipEdit = lazy(() => import("@screens/TipPage/TipEdit"));
const TipUpdate = lazy(() => import("@screens/TipPage/TipUpdate"));
const DealEdit = lazy(() => import("@screens/DealPage/DealEdit"));
const DealUpdate = lazy(() => import("@screens/DealPage/DealUpdate"));

const TipPage = lazy(() => import("../screens/TipPage/TipPage"));
const DealPage = lazy(() => import("../screens/DealPage/DealPage"));
const Join = lazy(() => import("../screens/Join/Join"));
const ChkEmail = lazy(() => import("../screens/ChkEmail"));
const JoinDetail = lazy(() => import("../screens/Join/JoinDetail"));
const JoinMore = lazy(() => import("../screens/Join/JoinMore"));
const Welcome = lazy(() => import("../screens/Join/Welcome"));
const Login = lazy(() => import("../screens/Login/Login"));
const ResetPw = lazy(() => import("../screens/Login/ResetPw"));
const FindPw = lazy(() => import("../screens/Login/FindPw"));
const UserFeedPage = lazy(() => import("../screens/UserFeedPage"));

function RootRouter() {
  return (
    <>
      <MainNavBar />
      <div id="root-layout">
        <Suspense fallback={<div>로딩중</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tip">
              <Route index element={<TipPage />} />
              <Route path="detail/:id" element={<TipDetail />} />
              <Route path="create" element={<TipEdit />} />
              <Route path="edit/:id" element={<TipUpdate />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/deal">
              <Route index element={<DealPage />} />
              <Route path="detail/:id" element={<DealDetailPage />} />
              <Route path="create" element={<DealEdit />} />
              <Route path="edit/:id" element={<DealUpdate />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/userfeed/:nickName" element={<UserFeedPage />} />
            <Route path="/account/*">
              <Route index element={<ChkPw />} />
              <Route path="set" element={<AccountSettingPage />} />
              <Route path="withdrawal" element={<Withdrawal />} />
            </Route>
            <Route path="/join/*">
              <Route index element={<Join />} />
              <Route path="chkEmail" element={<ChkEmail type="login" />} />
              <Route path="detail" element={<JoinDetail />} />
              <Route path="more" element={<JoinMore />} />
              <Route path="welcome" element={<Welcome />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/find/pw">
              <Route index element={<FindPw />} />
              <Route path="chkEmail" element={<ChkEmail type="findPw" />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/reset/pw" element={<ResetPw />} />
            <Route path="/oauth/kakao" element={<KakaoOauthHandler />} />
            <Route path="/oauth/naver" element={<NaverOauthHandler />} />
            <Route path="letters">
              <Route index element={<Letters />} />
              <Route path="detail" element={<ChatRoom />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default RootRouter;
