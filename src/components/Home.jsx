import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  TextInput,
  Button,
  Group,
  Text,
  Stack,
} from "@mantine/core";

export default function Home({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, color: "black" }]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleColorChange = (index) => {
    const colors = ["red", "blue", "green", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const updated = [...tasks];
    updated[index].color = randomColor;
    setTasks(updated);
  };

  return (
    <Container size="sm" className="d-flex justify-content-center align-items-center vh-100">
      <Card shadow="md" padding="lg" radius="md" withBorder style={{ width: "100%" }}>
        <Stack>
          <Text size="xl" fw={700} ta="center">
            TODO App
          </Text>

          <Group>
            <TextInput
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              style={{ flex: 1 }}
            />
            <Button onClick={handleAdd}>Submit</Button>
          </Group>

          <Stack>
            {tasks.map((t, i) => (
              <Card key={i} withBorder>
                <Group justify="space-between">
                  <Text style={{ color: t.color }}>{t.text}</Text>

                  <Group>
                    <Button size="xs" onClick={() => navigate(`/edit/${i}`)}>
                      Update
                    </Button>

                    <Button size="xs" color="red" onClick={() => handleDelete(i)}>
                      Delete
                    </Button>

                    <Button size="xs" color="grape" onClick={() => handleColorChange(i)}>
                      Color
                    </Button>
                  </Group>
                </Group>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
}