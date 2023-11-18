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
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

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

  const options = ['Career', 'Club Career', 'International Career'];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);


  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                    <img height='53' width='68' src='https://cdn.discordapp.com/attachments/707687832239603863/1167114537376419951/cr7_logo.png?ex=654cf31d&is=653a7e1d&hm=d24f4a58bbae0f2f4fa9719682fa593a00eef09621c851548b08a54df2162e58&'/>
            
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 5 }}>
                        
                        <Button
                          sx={{ paddingTop: 3, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/'
                          className='btnNavBar'
                        >
                          Home
                        </Button>
                        <Button
                          sx={{ paddingTop: 3, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/bio'
                          className='btnNavBar'
                        >
                          Biography
                        </Button>
                        <Button
                          sx={{ paddingTop: 3, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/career'
                          className='btnNavBar'
                        >
                          Career
                        </Button>
                        <ButtonGroup variant="outlined" ref={anchorRef} >
                          <Button 
                            variant="text"
                            onClick={handleToggle}
                            sx={{ my: 0, color: 'white', display: 'block', textTransform: 'capitalize', fontSize: 17 }}
                            className='btnNavBar'
                          >
                            {options[selectedIndex]}
                             
                            <ArrowDropDownIcon />
                          </Button>
                        </ButtonGroup>
                        <Popper
                          sx={{
                            zIndex: 1,
                          }}
                          open={open}
                          anchorEl={anchorRef.current}
                          role={undefined}
                          transition
                          disablePortal
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{
                                transformOrigin:
                                  placement === 'bottom' ? 'center top' : 'center bottom',
                              }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option, index) => (
                                      <MenuItem
                                        key={option}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                      >
                                        {option}
                                      </MenuItem>
                                    ))}
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                        
                        <Button
                          sx={{ paddingTop: 3, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/video'
                          className='btnNavBar'
                        >
                          Videos
                        </Button>
                        <Button
                          sx={{ paddingTop: 3, paddingBottom: 2.4, color: 'white', display: 'block', textTransform: 'capitalize', marginRight: 2, fontSize: 17, paddingLeft: 2, paddingRight: 2 }}
                          href='/photo'
                          className='btnNavBar'
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