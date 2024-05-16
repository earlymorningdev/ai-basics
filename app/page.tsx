"use client";

import GetMovie from "@/components/GetMovie";
import Result from "@/components/Result";
import { useOpenAI } from "@/components/useOpenAI";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState("get-movie");
  const [movie, setMovie] = useState("");
  const { lastAssistantMessage, append, id, isLoading } = useOpenAI();

  const handleSetMovie = (movie: string) => {
    setStep("result");
    append({
      id,
      content: `${movie}`,
      role: "user",
    });
  };
  const handleReviewAnother = () => {
    setStep("get-movie");
  };

  const renderStep = () => {
    switch (step) {
      case "get-movie":
        return <GetMovie onSetMovie={handleSetMovie} />;
      case "result":
        return (
          <Result
            onReviewAnother={handleReviewAnother}
            verdict={"Good Stuff"}
            review={lastAssistantMessage?.content ?? ""}
            isLoading={isLoading}
          />
        );

      default:
        return <GetMovie onSetMovie={handleSetMovie} />;
    }
  };
  return <>{renderStep()}</>;
}
