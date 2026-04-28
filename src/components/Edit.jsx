import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Card,
  TextInput,
  Button,
  Stack,
  Text,
  Group,
} from "@mantine/core";

export default function Edit({ tasks, setTasks }) {
  const { index } = useParams();
  const navigate = useNavigate();

  const currentTask = tasks[index];
  const [newText, setNewText] = useState(currentTask?.text || "");

  const handleUpdate = () => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
    navigate("/");
  };

  return (
    <Container size="sm" className="d-flex justify-content-center align-items-center vh-100">
      <Card shadow="md" padding="lg" radius="md" withBorder style={{ width: "100%" }}>
        <Stack>
          <Text size="xl" fw={700} ta="center">
            Edit Task
          </Text>

          <TextInput
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />

          <Group justify="center">
            <Button onClick={handleUpdate}>Save</Button>
            <Button color="gray" onClick={() => navigate("/")}>
              Cancel
            </Button>
          </Group>
        </Stack>
      </Card>
    </Container>
  );
}