import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAppDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useAppDrawerContext();
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button onClick={toggleDrawerOpen} color="primary" variant="contained">
            Teste
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
