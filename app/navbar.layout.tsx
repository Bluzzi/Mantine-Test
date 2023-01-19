import { ReactElement, useState } from "react";
import { Navbar as MantineNavbar } from "@mantine/core";

export function Navbar(): ReactElement {
  const [opened, setOpened] = useState(false);

  return (
    <MantineNavbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 300 }}>
      {/* https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/demos/core/AppShell/_mainLinks.tsx */}
    </MantineNavbar>
  );
}