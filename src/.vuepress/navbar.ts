import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指星公益服",
    icon: "line-md:cloud-alt-loop",
    prefix: "/Server/",
    children: [
		"Intro"
    ],
  },
  {
    text: "指星汉化组",
    icon: "line-md:pencil-alt-twotone",
    prefix: "/LG/",
    children: [
      {
        text: "DarkRPG",
        prefix: "DarkRPG/",
        children: ["7.8.8hf"],
      },
      {
        text: "BCG",
        prefix: "BCG/",
        children: ["2.12.1"],
      },
      {
        text: "Aged",
        prefix: "Aged/",
        children: ["3.0.2"],
      },
    ],
  },
  "/LG-docs/",
]);
