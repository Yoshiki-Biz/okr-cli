// React
import React from "react";

// Amplify
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

// App
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/root_layout.tsx";
import { HomePage } from "./pages/home/index.tsx";
import { SettingPage } from "./pages/setting/index.tsx";
import { OKRPage } from "./pages/okr/index.tsx";
import { ReportLinePage } from "./pages/report_line/index.tsx";
import { OKRCompanyPage } from "./pages/okr/company/index.tsx";
import { OKRGroupPage } from "./pages/okr/group/index.tsx";
import { OKRMemberPage } from "./pages/okr/member/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="okr" element={<OKRPage />}>
            <Route path="company" element={<OKRCompanyPage />} />
            <Route path="group" element={<OKRGroupPage />} />
            <Route path="member" element={<OKRMemberPage />} />
          </Route>
          <Route path="report-line" element={<ReportLinePage />}>
            <Route path=":id" element={<ReportLinePage />} />
          </Route>
          <Route path="setting" element={<SettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
