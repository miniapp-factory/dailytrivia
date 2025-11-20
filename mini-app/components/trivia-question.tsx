"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TriviaQuestion() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnswer(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Trivia Question</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium">What is the capital of France?</p>
        {showAnswer && <CardDescription className="mt-4 text-green-600">Answer: Paris</CardDescription>}
      </CardContent>
    </Card>
  );
}
