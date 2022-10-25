import React from "react";
import {
  Drawer,
  Box,
  useTheme,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
} from "@mui/material";

interface IMenu {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenu> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12),
              }}
              src="https://i.picsum.photos/id/731/100/100.jpg?hmac=pq7gWefNAmqDV_aZ8h04uQZmB26wgeBI4HJ63b_nF-Y"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                  <ListItemText>Página inicial</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
