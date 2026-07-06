"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "919780766438"; // Primary contact number formatted with country code
  const welcomeMessage = "Hi there! Welcome to SAANJH Dairy Solutions. How can we help you set up or automate your dairy farm today?";
  
  const handleStartChat = () => {
    const text = encodeURIComponent("Hello SAANJH Dairy Solutions, I am interested in your dairy farm solutions and equipment. Please share more details.");
    const waUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Pop-up Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in-up duration-300">
          
          {/* Header */}
          <div className="bg-[#075E54] p-5 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* WhatsApp Icon wrapper */}
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                💬
              </div>
              <div>
                <h4 className="font-bold text-sm">SAANJH Dairy Solutions</h4>
                <p className="text-xs text-emerald-100">Typically replies within a few minutes</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-slate-200 transition-colors p-1.5 rounded-full hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 bg-[#ECE5DD] min-h-[140px] flex flex-col justify-end space-y-4">
            
            {/* System Message Bubble */}
            <div className="bg-white p-4 rounded-2xl shadow-sm rounded-tl-none max-w-[85%] text-left">
              <p className="text-xs font-bold text-[#075E54] mb-1">SAANJH Support</p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {welcomeMessage}
              </p>
              <p className="text-[10px] text-slate-400 text-right mt-1.5">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

          </div>

          {/* Footer Trigger */}
          <div className="p-4 bg-white border-t border-slate-150">
            <button
              onClick={handleStartChat}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base"
            >
              <MessageSquare className="h-5 w-5 fill-white" />
              <span>Start Chat on WhatsApp</span>
            </button>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group relative"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulsing decoration circle */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping group-hover:hidden" />
        
        {isOpen ? (
          <X className="h-8 w-8 animate-[spin_0.3s_ease-out]" />
        ) : (
          <svg
            className="h-9 w-9 fill-white transition-transform duration-300 group-hover:rotate-12"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <path d="M12.012 2C6.485 2 2 6.48 2 12.01c0 1.765.459 3.486 1.332 5.006L2 22l5.127-1.344a9.96 9.96 0 0 0 4.885 1.353c5.528 0 10.013-4.48 10.013-10.01C22.025 6.48 17.54 2 12.012 2zm6.056 14.542c-.273.763-1.572 1.385-2.138 1.482-.497.086-1.147.16-3.328-.742-2.79-1.157-4.577-3.996-4.717-4.18-.139-.185-1.127-1.498-1.127-2.857 0-1.36.711-2.027.962-2.3.25-.274.67-.343.882-.343.155 0 .294.004.423.01.13.006.305-.024.476.386.177.424.606 1.475.658 1.581.053.107.089.23.018.371-.072.141-.11.23-.22.357-.109.127-.23.284-.329.38-.11.107-.225.224-.096.446.129.223.57 1.037 1.222 1.617.842.748 1.554.98 1.777 1.07.223.09.353.076.485-.075.132-.15.57-.663.722-.89.152-.227.304-.192.513-.115.21.077 1.328.625 1.558.74.23.115.382.172.439.27.057.098.057.566-.216 1.33z" />
          </svg>
        )}
      </button>

    </div>
  );
}
