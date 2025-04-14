"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      loadTrackingScripts();
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookie_consent", "accepted", 365);
    setShowBanner(false);
    loadTrackingScripts();
  };

  const rejectCookies = () => {
    setCookie("cookie_consent", "rejected", 365);
    setShowBanner(false);
  };

  const openCookieSettings = () => {
    alert("Custom preferences modal not yet implemented.");
  };

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const getCookie = (name) =>
    document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="))
      ?.split("=")[1];

  const loadTrackingScripts = () => {
    const script = document.createElement("script");
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID";
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "GA_MEASUREMENT_ID");
  };

  if (!showBanner) return null;

  return (
    <div id="cookie-banner" className="show">
      <style jsx>{`
        #cookie-banner {
          position: fixed;
          bottom: 0;
          width: 100%;
          background: #fff;
          border-top: 1px solid #ccc;
          padding: 16px;
          z-index: 9999;
          font-family: sans-serif;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
        }
        #cookie-banner button {
          margin: 0 8px;
          padding: 8px 16px;
          border: none;
          background: #0070f3;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }
        #cookie-banner button.reject {
          background: #999;
        }
        #cookie-banner button.settings {
          background: #e2e2e2;
          color: #333;
        }
      `}</style>
      <p>
        We use cookies to improve your experience. By clicking "Accept", you
        consent to the use of non-essential cookies.{" "}
        <a href="/privacy-policy" target="_blank">
          Learn more
        </a>
        .
      </p>
      <button onClick={acceptCookies}>Accept</button>
      <button className="reject" onClick={rejectCookies}>
        Reject
      </button>
      <button className="settings" onClick={openCookieSettings}>
        Manage Preferences
      </button>
    </div>
  );
}
