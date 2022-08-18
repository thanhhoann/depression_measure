import { Wrap, WrapItem, Button, useToast } from "@chakra-ui/react";
export default function ToastComponent({ status }) {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];

  return (
    <Wrap>
      {toast({
        title: `${status} toast`,
        status: status,
        isClosable: true,
      })}
    </Wrap>
  );
}
