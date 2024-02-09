import React from "react";
import { Card, Typography } from "@mui/material";

interface Props {
  /**ラベル */
  label: string;
  /**値 */
  value: string;
}

/**
 * プロフィール情報を表示するカード部品
 * @param label ラベル
 * @param value 値
 */
export const ProfileCard = React.memo(({ label, value }: Props) => {
  return (
    <Card
      raised={false}
      sx={{
        // 配置
        display: "flex",
        flexDirection: "column",
        gap: 16,
        p: 24,

        // ボーダー
        borderColor: "#ebeef2",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,

        // 影
        boxShadow: "none",
      }}
    >
      <Typography variant="subtitle1" color="inherit" letterSpacing={1}>
        {label}
      </Typography>
      <Typography variant="body1" color="#798184" letterSpacing={1}>
        {value}
      </Typography>
    </Card>
  );
});
