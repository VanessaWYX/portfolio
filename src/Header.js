import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
  Stack,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const navItems = [
  { navigate: '/', name: 'Vanessa Wong' },
  { navigate: '/About', name: 'About' },
  { navigate: '/Experience', name: 'Experience' },
  { navigate: '/ContactMe', name: 'Contact' },
];

export default function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [title, setTitle] = React.useState('Vanessa Wong');
  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const toolBar = navItems.map((item) => (
    <ListItem key={item.name}>
      <ListItemButton
        onClick={() => {
          navigate(item.navigate);
        }}
        alignItems="flex-start"
        selected={false}
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
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText
                primary={item.name}
                onClick={() => {
                  navigate(item.navigate);
                  setTitle(item.name);
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ height: 100 }}>
          {isMobile ? (
            <Stack direction="row" spacing={4} alignItems="center">
              <IconButton
                onClick={() => {
                  setDrawerOpen((previousValue) => !previousValue);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" textAlign="center">
                {title}
              </Typography>
            </Stack>
          ) : (
            <>{toolBar}</>
          )}
        </Toolbar>
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
}
