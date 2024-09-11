"use client";

import { NextUIProvider } from "@nextui-org/react";

const ProviderWrapper = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default ProviderWrapper;
