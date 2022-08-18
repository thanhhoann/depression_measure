import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ColorModeSwicher({
  light = "white",
  light_hover,
  dark = "white",
  dark_hover,
}) {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue(light, dark);
  return (
    <IconButton
      size="lg"
      variant="ghost"
      aria-label="open menu"
      icon={useColorModeValue(
        <FiMoon color={color} />,
        <FiSun color={color} />
      )}
      onClick={toggleColorMode}
      mr="1rem"
      _hover={{
        background: useColorModeValue(light_hover, dark_hover),
      }}
    />
  );
}
