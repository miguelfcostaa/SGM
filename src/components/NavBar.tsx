import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = ['Home','Biography','Career','Videos','Photos'];


const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


const NavBar = (() => {


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                    <img height='53' width='68' src='https://cdn.discordapp.com/attachments/707687832239603863/1167114537376419951/cr7_logo.png?ex=654cf31d&is=653a7e1d&hm=d24f4a58bbae0f2f4fa9719682fa593a00eef09621c851548b08a54df2162e58&'/>
            
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 5 }}>
                        
                        <Button
                          sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/'
                        >
                          Home
                        </Button>
                        <Button
                          sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/bio'
                        >
                          Biography
                        </Button>
                        <Button
                          sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/career'
                        >
                          Career
                        </Button>
                        <Button
                          sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/video'
                        >
                          Videos
                        </Button>
                        <Button
                          sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/photo'
                        >
                          Photos
                        </Button>
                    </Box>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>            
                </Toolbar>
            </Container>
            </AppBar>
        </ThemeProvider>
    )
})

export default NavBar;