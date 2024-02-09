// React
import React, { useContext } from "react";

// MUI
import { Container } from "@mui/material";

// APP
import { CacheContext } from "../../states/global/cache_context";
import { ProfileCard } from "../../components/data_display/profile_card";
import { LogoutButton } from "../../components/inputs/button/logout_button";

export const SettingPage = React.memo(() => {
  const { user } = useContext(CacheContext);

  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", flexDirection: "column", gap: 40 }}
    >
      <ProfileCard label="user ID" value={user.userID} />
      <ProfileCard label="user name" value={user.userName} />
      <ProfileCard label="email" value={"sample@example.com"} />
      <ProfileCard label="password" value={"********"} />
      <LogoutButton />
    </Container>
  );
});
