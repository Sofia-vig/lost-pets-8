import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuState, setRoute, useUpdate } from "hooks";
import { getToken } from "lib/api";

export default function Link({ route, children }) {
  const navigate = useNavigate();
  const setMenuOpen = menuState();
  const [token, setToken] = useState("");
  const setRouteValue = setRoute();
  const [updateValue, setUpdate] = useUpdate();

  const handleClick = () => {
    setMenuOpen(false);
    setRouteValue(route);
    setUpdate(false);
    !token && navigate("/login");
    token && navigate(route);
  };

  useEffect(() => {
    setToken(getToken());
  }, []);

  return <h4 onClick={handleClick}>{children}</h4>;
}
