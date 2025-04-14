"use client";
import React from "react";
import dynamic from "next/dynamic";

const NoformChatbot = dynamic(() => import("../Components/ChatBotApp"), {
  ssr: false,
});

const ChatbotPage = () => {
  return (
    <main className="chatbot-page">
      <div className="chatbot-wrapper">
        <NoformChatbot />
      </div>

      <style jsx>{`
        .chatbot-page {
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(
            to bottom right,
            #2a003f,
            #4e086d,
            #1a002f
          );
          color: #efefef;
        }

        .chatbot-wrapper {
          width: 100%;
          max-width: 600px;
          padding: 1rem;
        }


        @media (max-width: 480px) {
        align-items: center;
          justify-content: center;
          .chatbot-wrapper {
            max-width: unset;
            padding: unset;
          }
        }
      `}</style>
    </main>
  );
};

export default ChatbotPage;
