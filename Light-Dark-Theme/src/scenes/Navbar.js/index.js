import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <IconButton onClick={() => dispatch(authActions.setMode())}>
        {useSelector((state) => state.mode) === "dark" ? (
          <LightMode />
        ) : (
          <DarkMode />
        )}
      </IconButton>
    </div>
  );
};

export default Navbar;
