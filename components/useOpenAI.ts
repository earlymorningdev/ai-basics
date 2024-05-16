import { useChat } from "ai/react";
import { useEffect, useId, useRef, useState } from "react";

export const useOpenAI = () => {
  const id = useId();

  const { messages, append, isLoading } = useChat({
    id: id,
    body: {
      id,
    },
    async onFinish(message) {
      console.log('messaage', message)
    },
  });

  const lastAssistantMessage = messages
    .filter((it) => it.role === "assistant")
    .pop();

  return { lastAssistantMessage, append, id, isLoading };
};
