"use client";

import { Button } from "@mantine/core";
import { useState } from "react";

const DemoPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Demo</h1>
      <p>{counter}</p>
      <Button onClick={() => setCounter((prev) => prev + 1)}>Click me</Button>
    </div>
  );
};

export default DemoPage;
