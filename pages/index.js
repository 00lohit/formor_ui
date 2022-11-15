import Head from "next/head";
import HomeScreens from "../components/HomeScreens";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (function (botId) {
      var s = document.createElement("script");
      s.async = true;
      s.type = "text/javascript";
      s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
      s.onload = function () {
        window.loadChat360Bot(botId);
      };
      s.onerror = function (err) {
        console.error(err);
      };
      document.body.appendChild(s);
    })("dd73a60a-4504-4e50-9a1d-b98f3c79a289");
  }, []);

  return (
    
      <HomeScreens></HomeScreens>
   
  );
}
