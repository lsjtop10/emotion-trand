import { Tooltip, Avatar, Menu, MenuItem, Typography, IconButton } from "@mui/material";
import React from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function UserProfile(props: { imageSrc: string }) {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  // 사용자 설정 메뉴 열기/닫기 함수
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // 사용자 설정 메뉴 닫기 함수
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={props.imageSrc} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

}