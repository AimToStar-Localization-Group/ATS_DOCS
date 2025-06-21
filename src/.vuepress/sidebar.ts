import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "指星公益服",
      icon: "line-md:cloud-alt-loop",
	  collapsible: true,
      prefix: "Server/",
      children: [
		  "Intro"
      ],
    },
    {
      text: "指星汉化组",
      icon: "line-md:pencil-alt-twotone",
      prefix: "LG/",
      collapsible: true,
      children: [
        {
          text: "DarkRPG 汉化包",
          icon: "fa-solid:dungeon",
          prefix: "DarkRPG/",
          collapsible: true,
          children: [
            "7.8.8hf"
          ],
        },
        {
          text: "BCG 汉化包",
          icon: "fa-solid:dragon",
          prefix: "BCG/",
          collapsible: true,
          children: [
            "1.1.11",
			"2.12.1",
			"2.12.1-QA"
          ],
        },
        {
          text: "Aged 汉化包",
          icon: "fa-solid:tree",
          prefix: "Aged/",
          collapsible: true,
          children: [
            "3.0.2"
          ],
        },
      ],
    },
    {
      text: "汉化组文档",
      icon: "line-md:folder",
      link: "LG-docs/",
	  prefix: "LG-docs/",
	  collapsible: true,
	  children: [
		"TransRules",
		"Private"
	  ]
    },
  ],
});
