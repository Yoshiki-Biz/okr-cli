// React
import { useState } from "react";

// Amplify
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

// App
import { Outlet } from "react-router-dom";
import {
  CacheContext,
  useCacheContext,
} from "../../states/global/cache_context";
import { ConfirmDialog } from "../feedback/dialog/confirm_dialog";
import { ResponsiveDrawer } from "../navigation/drawer/drawer";

// MUI: テーマ設定
const theme = createTheme({
  palette: {
    primary: {
      main: "#a8c5d7",
      light: "",
      dark: "",
      contrastText: "",
    },
    secondary: {
      main: "#e7eef4",
      light: "",
      dark: "",
      contrastText: "",
    },
  },
  spacing: 1,
  typography: {
    fontFamily: "monospace",
    fontSize: 12,
  },
});

const RootLayout = ({ signOut }: WithAuthenticatorProps) => {
  const [isShowLogoutDialog, setIsShowLogoutDialog] = useState<boolean>(false);

  const cacheContextValue = useCacheContext();

  return (
    <ThemeProvider theme={theme}>
      <CacheContext.Provider value={cacheContextValue}>
        {/* アップバー */}
        {/* <AppBar logout={() => setIsShowLogoutDialog(true)} /> */}

        {/* デスクトップ用サイドバー */}
        <ResponsiveDrawer />

        {/* メインコンテンツ */}
        <Box
          width="100%"
          height="100%"
          display={"flex"}
          flexDirection={"column"}
          gap={40}
          sx={{
            paddingTop: { xs: 16, md: 40 },
            paddingBottom: { xs: 16, md: 40 },
            paddingLeft: { xs: 16, md: 280 },
            paddingRight: { xs: 16, md: 40 },
          }}
        >
          <Outlet />
        </Box>

        {/* ログアウトダイアログ */}
        <ConfirmDialog
          isShow={isShowLogoutDialog}
          title={""}
          content={"logout?"}
          handleOK={signOut ? signOut : () => {}}
          handleCancel={() => setIsShowLogoutDialog(false)}
        />
      </CacheContext.Provider>
    </ThemeProvider>
  );
};

export default withAuthenticator(RootLayout);
