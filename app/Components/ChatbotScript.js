"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ChatbotScript() {
  const pathname = usePathname();

  useEffect(() => {
    const scriptId = "chatbot-initials-script";
    let timeoutId;

    const removeScript = () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
        console.log("Chatbot script removed");
      }
    };

    const addScript = () => {
      const existing = document.getElementById(scriptId);
      if (!existing) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.defer = true;
        script.type = "text/javascript";
        script.src = "https://chat-bbl.noform.ai/script-chatbot.js";
        script.setAttribute("data-server-url", "https://app.noform.ai");
        script.setAttribute("data-bot-id", "67eab192038da2eaa2d2fea5");
        document.body.appendChild(script);
        console.log("Chatbot script added");
      }
    };

    if (pathname !== "/chatbot") {
      timeoutId = setTimeout(addScript, 30000);
    } else {
      removeScript();
    }

    return () => {
      clearTimeout(timeoutId);
      removeScript();
    };
  }, [pathname]);

  return null;
}
