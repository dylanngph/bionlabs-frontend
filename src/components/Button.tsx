"use client";

import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

const StyledButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default StyledButton;
