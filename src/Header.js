import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
import React from 'react';

// const navItems = ['Home', 'About', 'Experience', 'ContactMe'];
const navItems = [
  { navigate: '/', name: 'Home' },
  { navigate: '/About', name: 'About' },
  { navigate: '/Experience', name: 'Experience' },
  { navigate: '/ContactMe', name: 'Contact' },
];

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const toolBar = navItems.map((item) => (
    <ListItem key={item.name} translate="yes">
      <ListItemButton
        sx={{ textAlign: 'left' }}
        LinkComponent="a"
        href={item.navigate}
      >
        <ListItemText primary={item.name} />
      </ListItemButton>
    </ListItem>
  ));

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 200, textAlign: 'left' }}>
      <Box padding={4}></Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton
              sx={{ textAlign: 'left' }}
              LinkComponent="a"
              href={item.navigate}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const name = (
    <Typography variant="h6" marginLeft={8}>
      Vanessa Wong
    </Typography>
  );

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  onClick={() => {
                    setDrawerOpen((previousValue) => !previousValue);
                  }}
                >
                  <MenuIcon />
                </IconButton>
                {name}
              </>
            ) : (
              <Grid
                container
                flexDirection="row "
                alignContent="center"
                justifyContent="center"
              >
                <Stack flex={0.8} justifyContent="center">
                  {name}
                </Stack>
                <Stack flex={1} flexDirection="row">
                  {toolBar}
                </Stack>
              </Grid>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
