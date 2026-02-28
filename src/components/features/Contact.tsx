"use client";
import { useState, useRef } from "react";
import { toast } from "sonner";
import Script from "next/script";
import { RiCheckboxCircleFill, RiCloseLine, RiSendPlaneFill } from "react-icons/ri";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const formData = new FormData(e.currentTarget);
    const hCaptchaResponse = formData.get("h-captcha-response");

    // 1. Validasi Captcha dengan Toast
    if (!hCaptchaResponse) {
      toast.error("VERIFICATION_REQUIRED", {
        description: "Please complete the captcha first, bro!",
      });
      setStatus("IDLE");
      return;
    }

    // 2. Loading State Toast
    const toastId = toast.loading("TRANSMITTING_DATA...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        // 3. Success Toast & Reset
        toast.success("SUCCESS: MESSAGE_SENT", {
          id: toastId,
          description: "Got it! Wait for Kanda's response within 24 hours.",
        });
        setStatus("SUCCESS");
        formRef.current?.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      // 4. Error Toast
      toast.error("TRANSMISSION_FAILED", {
        id: toastId,
        description: "Something went wrong. Please try again later.",
      });
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <Script src="https://web3forms.com/client/script.js" strategy="lazyOnload" async defer />

      {/* SUCCESS MODAL - Neo-Brutalist Style */}
      {status === "SUCCESS" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neo-green border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full text-center rotate-1">
            <RiCheckboxCircleFill className="text-6xl mx-auto mb-4 text-black" />
            <h3 className="text-2xl font-black uppercase mb-4 text-black italic">Message Sent!</h3>

            <p className="font-mono text-sm mb-8 uppercase text-black font-bold leading-loose">
              Transmission successful. Please wait for a response from{" "}
              <span className="bg-neo-yellow px-2 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block -rotate-2 mx-1 text-black">
                Kanda
              </span>{" "}
              within{" "}
              <span className="bg-neo-pink px-2 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block rotate-2 mx-1 text-black">
                24 hours
              </span>.
            </p>

            <button
              onClick={() => setStatus("IDLE")}
              className="w-full bg-black text-white py-4 font-black uppercase border-2 border-black hover:bg-white hover:text-black transition-all shadow-hard-sm active:translate-y-1 active:shadow-none"
            >
              BACK_TO_TERMINAL
            </button>
          </div>
        </div>
      )}

      <div className="bg-white border-4 border-black shadow-hard-lg p-8 md:p-12 relative">
        <div className="absolute -top-10 -left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard rotate-[-5deg]">
          <span className="font-black text-2xl uppercase">Start a Project</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl font-black uppercase mb-6 leading-[0.85]">Let's<br />Talk.<br /></h2>
            <div className="space-y-4 mb-8">
              <p className="font-mono text-lg text-black font-bold">
                Open for freelance or full-time roles as a <span className="bg-neo-green px-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Fullstack Engineer</span>.
              </p>
              {/* Side Quest Ticker */}
              <div className="mt-8">
                <p className="font-mono text-xs font-black uppercase mb-2">// Side_Quests_Radar:</p>
                <div className="relative border-4 border-black bg-neo-pink py-2 overflow-hidden shadow-hard rotate-1">
                  <div className="flex whitespace-nowrap animate-scroll font-mono font-bold text-xs uppercase text-black w-max">
                    <span className="mx-4">/// Anime_Projects ///</span>
                    <span className="mx-4">Community_Building ///</span>
                    <span className="mx-4">Let's_Vibe! ///</span>
                    <span className="mx-4">/// Anime_Projects ///</span>
                    <span className="mx-4">Community_Building ///</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-6 border-2 border-black"
          >
            <input type="hidden" name="access_key" value="2a52a25d-692e-4789-9ead-a24291e3c68f" />
            <input type="hidden" name="subject" value="New Inquiry from Portfolio [2026]" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="space-y-4">
              <input type="text" name="name" required placeholder="NAME / COMPANY" className="w-full bg-white border-2 border-black p-3 font-bold focus:bg-neo-yellow outline-none transition-all" />
              <input type="email" name="email" required placeholder="EMAIL ADDRESS" className="w-full bg-white border-2 border-black p-3 font-bold focus:bg-neo-yellow outline-none transition-all" />
              <textarea name="message" required rows={4} placeholder="PROJECT DETAILS..." className="w-full bg-white border-2 border-black p-3 font-bold focus:bg-neo-yellow outline-none resize-none transition-all"></textarea>
            </div>

            {/* hCaptcha Verification */}
            <div className="h-captcha" data-captcha="true"></div>

            <button
              type="submit"
              disabled={status === "SENDING"}
              className="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === "SENDING" ? "TRANSMITTING..." : "TRANSMIT DATA"}
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};