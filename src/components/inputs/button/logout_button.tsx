// React
import React from "react";

// Amplify
import { signOut } from "aws-amplify/auth";

// MUI
import { Link } from "@mui/material";

export const LogoutButton = React.memo(() => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Link component="button" underline="hover" onClick={handleSignOut}>
      Logout
    </Link>
  );
});
