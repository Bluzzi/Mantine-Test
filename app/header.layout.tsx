import { ActionIcon } from "@mantine/core";
import { IconBrightnessUp, Icon3dCubeSphere } from "@tabler/icons";
import { Header as MantineHeader, Text, Flex, Group } from "@mantine/core";
import { ReactElement } from "react";
import { useThemeStore } from "$lib/store/theme";

export function Header(): ReactElement {
  const theme = useThemeStore();

  return (
    <MantineHeader height={60}>
      <Flex justify="space-between" align="center" style={{ height: "100%", padding: "0 20px" }}>
        <Group>
          <Icon3dCubeSphere size="34" />
          <Text size="lg">Todo App</Text>
        </Group>

        <ActionIcon variant="light" size="xl" onClick={() => theme.toggle()}>
          <IconBrightnessUp size="34" />
        </ActionIcon>
      </Flex>
    </MantineHeader>
  );
}