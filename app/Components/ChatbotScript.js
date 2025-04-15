"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ChatbotScript() {
  const pathname = usePathname();

  useEffect(() => {
    const scriptId = "chatbot-initials-script";

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

    // Add or remove based on route
    if (pathname === "/chatbot") {
      removeScript();
    } else {
      addScript();
    }

    // Clean up on unmount or route change
    return () => {
      removeScript();
    };
  }, [pathname]);

  return null;
}
