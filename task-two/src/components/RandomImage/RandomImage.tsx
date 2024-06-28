"use client";

import React, { useState, useEffect } from "react";
import { getDogData } from "@/api";

const RandomImage: React.FC = () => {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const data = await getDogData(controller.signal);
        setDogImage(data.message);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error("Fetch data Error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <div className="flex justify-center items-center">
      {dogImage && (
        <img src={dogImage} alt="Random Dog" className="rounded shadow-lg" />
      )}
    </div>
  );
};

export default RandomImage;
