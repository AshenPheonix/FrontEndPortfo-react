import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Brandon Porter" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
