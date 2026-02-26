"use client";

import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

type AuthStep = "email" | "code" | "register";

export default function AuthPage() {
  const [step, setStep] = useState<AuthStep>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isNewUser, setIsNewUser] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/send-code', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // });
    // const data = await response.json();

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // check if user exists
    const userExists = false;
    setIsNewUser(!userExists);

    setIsLoading(false);
    setStep("code");
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleCodeKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleCodePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const newCode = [...code];

    for (let i = 0; i < pastedData.length; i++) {
      newCode[i] = pastedData[i];
    }

    setCode(newCode);

    // focus the next empty input or the last one
    const nextEmptyIndex = newCode.findIndex((digit) => !digit);
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    document.getElementById(`code-${focusIndex}`)?.focus();
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join("");

    if (verificationCode.length !== 6) return;

    setIsLoading(true);

    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/verify-code', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, code: verificationCode }),
    // });

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);

    if (isNewUser) {
      setStep("register");
    } else {
      console.log("Login successful!");
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/register', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, username }),
    // });

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    console.log("Registration successful!");
  };

  const handleResendCode = async () => {
    setIsLoading(true);

    // TODO: Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
  };

  const resetFlow = () => {
    setStep("email");
    setEmail("");
    setCode(["", "", "", "", "", ""]);
    setUsername("");
    setIsNewUser(false);
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
        {/* Header */}
        <div className="p-8 pb-5 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            CZN Helper
          </h1>
          <p className="mt-2 text-gray-400">
            {step === "email" && "Sign in or create an account"}
            {step === "code" && "Enter verification code"}
            {step === "register" && "Complete your profile"}
          </p>
        </div>

        {/* Email Step */}
        {step === "email" && (
          <form onSubmit={handleEmailSubmit} className="px-8 pb-8 space-y-6">
            <button
              type="button"
              className="
                group
                relative w-full
                flex items-center justify-center gap-3
                bg-[#5865F2] text-white
                font-medium text-base
                py-3.5 px-5 rounded-xl
                overflow-hidden
                transition-all duration-200 ease-out
                shadow-md shadow-indigo-950/30
                hover:shadow-lg hover:shadow-indigo-900/40
                hover:-translate-y-0.5
                hover:brightness-110
                active:translate-y-0 active:brightness-90 active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-[#5865F2]/50 focus:ring-offset-2 focus:ring-offset-gray-950
              "
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <FaDiscord
                size={22}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              Continue with Discord
            </button>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700/70" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900/60 text-gray-400">or</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/30 transition-all duration-200"
                placeholder="yourname@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-600/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? "Sending code..." : "Continue with Email"}
            </button>
          </form>
        )}

        {/* Code Verification Step */}
        {step === "code" && (
          <div className="px-8 pb-8 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">We sent a 6-digit code to</p>
              <p className="text-white font-medium">{email}</p>
              <button
                type="button"
                onClick={resetFlow}
                className="text-sm text-indigo-400 hover:text-indigo-300 transition underline-offset-4 hover:underline"
              >
                Change email
              </button>
            </div>

            <form onSubmit={handleCodeSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 text-center">
                  Verification Code
                </label>
                <div className="flex gap-2 justify-center">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleCodeKeyDown(index, e)}
                      onPaste={index === 0 ? handleCodePaste : undefined}
                      className="w-12 h-14 text-center text-2xl font-bold bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/30 transition-all duration-200"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || code.some((digit) => !digit)}
                className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-600/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </button>
            </form>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResendCode}
                disabled={isLoading}
                className="text-sm text-gray-400 hover:text-gray-300 transition disabled:opacity-50"
              >
                Didn't receive the code?{" "}
                <span className="text-indigo-400 hover:text-indigo-300 underline-offset-4 hover:underline">
                  Resend
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Registration Step (for new users) */}
        {step === "register" && (
          <form onSubmit={handleRegisterSubmit} className="px-8 pb-8 space-y-6">
            <div className="text-center space-y-1 mb-4">
              <p className="text-sm text-gray-400">
                Welcome! Let's set up your account
              </p>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                required
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/30 transition-all duration-200"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email
              </label>
              <div className="w-full px-4 py-3 bg-gray-800/40 border border-gray-700/50 rounded-xl text-gray-400">
                {email}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-600/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? "Creating account..." : "Complete Registration"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
