import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoBlack from '/logo-black.svg';

import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router";


import LoginButton from './LoginButton';
import UserProfile from './UserProfile';
import { useUserAccessToken } from '../stores/clientState';
import { useGoogleLogin, TokenResponse } from '@react-oauth/google';
import { handleLoginByGoogle } from '../service/login';

/**
 * name:사용자에게 표시되는 페이지의 이름
 */

const pages: string[] = ["Chart", "Detail", "Settings"]


function Header() {

  // 상단 네비게이션 메뉴와 사용자 설정 메뉴의 상태 관리
  const [navAnchorElement, setNavAnchorElement] = React.useState<HTMLElement | null>(null);
  const navigation = useNavigate();

  const {setToken} = useUserAccessToken();
  const googleLogin = useGoogleLogin({
    onSuccess: async (res: TokenResponse) => {
      try {
        const token = await handleLoginByGoogle(res)
        setToken(token);
        navigation("/chart");
      } catch (e) {
        console.error(e);
      }
    }
  });

  // 네비게이션 메뉴 열기
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchorElement(event.currentTarget);
  };

  // 네비게이션 메뉴 닫기
  const handleCloseNavMenu = (e: React.MouseEvent) => {

    const target = e.currentTarget;

    switch (target.id) {
      case "chart-nav-button":
      case "chart-nav-item":
        navigation("\chart");
        break;
      case "detail-nav-button":
      case "detail-nav-item":
        navigation("\detail");
        break;
      case "settings-nav-button":
      case "settings-nav-item":
        navigation("\settings");
        break;
    }

    setNavAnchorElement(null);
  };

  const {accessToken} = useUserAccessToken()

  const logoSrc = logoBlack;
  const theme = useTheme();
  const isLoggedIn: boolean = !!accessToken;

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, zIndex: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 데스크탑 로고 */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1.5 }}>
            <img src={logoSrc} style={{ height: "35px" }} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              // 로고 텍스트 스타일
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "rgba(0, 0, 0, 0.87)",
              textDecoration: "none",
            }}
          >
            Track Emotion
          </Typography>
          {/* 데스크탑에서 보이는 페이지 버튼 */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                id={page.toLowerCase() + "-nav-button"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "rgba(0, 0, 0, 0.87)", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* 모바일에서 보이는 왼쪽 햄버거 메뉴 */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* 모바일용 네비게이션 메뉴 */}
            <Menu
              id="menu-appbar"
              anchorEl={navAnchorElement}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(navAnchorElement)}
              /*onClose={handleCloseNavMenu}*/
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} id={page.toLowerCase() + "-nav-item"}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* 모바일에서 보이는 로고 */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              // 모바일용 로고 텍스트 스타일
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Track Emotion
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {
              isLoggedIn ?
                <UserProfile imageSrc=' ' /> :
                <LoginButton onClick={googleLogin}/>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}

export default Header;
