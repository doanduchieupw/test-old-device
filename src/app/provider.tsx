"use client";
import { MantineProvider } from "@mantine/core";

export default function App({ children }: { children: React.ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>;
}
