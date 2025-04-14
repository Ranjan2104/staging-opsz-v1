"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NoformChatbot = () => {
  const pathname = usePathname();
  const isChatbotPage = pathname === "/chatbot";

  useEffect(() => {
    const embScript = document.createElement("script");
    embScript.src = "https://emb-chat.noform.ai/snippet-bundle.js";
    embScript.type = "text/javascript";
    document.body.appendChild(embScript);

    return () => {
      document.body.removeChild(embScript);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <iframe
        id="ai-chat-frame"
        src="https://emb-chat.noform.ai/?pid=67eab192038da2eaa2d2fea5&backendURL=https://app.noform.ai"
        style={{
          width: "100%",
          maxWidth: isChatbotPage ? "100%" : "600px",
          height: isChatbotPage ? "75vh" : "418px",
          border: "none",
          borderRadius: "12px",
        }}
      />
      <style jsx>{`
        @media (max-width: 768px) {
          #ai-chat-frame {
            height: 70vh !important;
          }
        }
        @media (max-width: 480px) {
          #ai-chat-frame {
            height: 65vh !important;
            width: 100% !important;
            maxWidth: 100% !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NoformChatbot;
