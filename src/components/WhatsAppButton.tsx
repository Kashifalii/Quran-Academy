"use client";

import { MessageCircleMore } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "923120702891";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <MessageCircleMore size={30} />
    </a>
  );
}