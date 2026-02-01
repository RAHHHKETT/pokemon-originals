"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const playPokeballSound = () => {
  const audio = new Audio("/sounds/captured.mp3");
  audio.volume = 0.7;
  audio.play();
};
