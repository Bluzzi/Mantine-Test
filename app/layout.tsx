"use client";

import { useThemeStore } from "$lib/store/theme";
import { AppShell, MantineProvider } from "@mantine/core";
import { PropsWithChildren, ReactElement } from "react";
import { Header } from "./header.layout";
import { Navbar } from "./navbar.layout";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  const theme = useThemeStore();

  return (
    <html>
      <head />

      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
          colorScheme: theme.value
        }}>
          <AppShell
            header={<Header />}
            navbar={<Navbar />}
            styles={theme => ({
              main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] }
            })}
          >
            {children}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}