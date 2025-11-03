import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Mic, MicOff, X } from "lucide-react";

interface VoiceAgentProps {
  mode?: "inline" | "floating";
  onClose?: () => void;
}

export function VoiceAgent({ mode = "floating", onClose }: VoiceAgentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleAgent = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      // Cleanup when closing
      setIsListening(false);
      setIsConnected(false);
    }
  };

  const toggleListening = () => {
    // TODO: Integrate with smallest.ai voice agent
    // This is where you'll add the smallest.ai API integration
    setIsListening(!isListening);
    if (!isConnected) {
      setIsConnected(true);
    }
  };

  if (mode === "floating") {
    return (
      <>
        {/* Floating Button */}
        {!isOpen && (
          <div className="fixed bottom-8 right-8 z-50 group">
            <Button
              onClick={toggleAgent}
              size="lg"
              className="h-20 w-20 rounded-full shadow-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:scale-110 transition-all animate-pulse hover:animate-none relative"
            >
              <Mic className="h-10 w-10" />
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
            </Button>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                Talk to AI Assistant
              </div>
            </div>
          </div>
        )}

        {/* Floating Voice Agent Card */}
        {isOpen && (
          <Card className="fixed bottom-6 right-6 w-80 md:w-96 shadow-2xl z-50 overflow-hidden">
            <div className="bg-gradient-to-br from-primary to-primary/80 p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white">Voice Agent</h3>
                <Button
                  onClick={toggleAgent}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-white/90 text-sm">
                Speak with our AI assistant about positions, applications, or any questions
              </p>
            </div>

            <div className="p-6">
              <div className="flex flex-col items-center gap-4">
                {/* Status Indicator */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isConnected
                        ? isListening
                          ? "bg-green-500 animate-pulse"
                          : "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  <span>
                    {isConnected
                      ? isListening
                        ? "Listening..."
                        : "Connected"
                      : "Not connected"}
                  </span>
                </div>

                {/* Microphone Button */}
                <Button
                  onClick={toggleListening}
                  size="lg"
                  variant={isListening ? "destructive" : "default"}
                  className={`h-20 w-20 rounded-full transition-all ${
                    isListening ? "animate-pulse" : ""
                  }`}
                >
                  {isListening ? (
                    <MicOff className="h-8 w-8" />
                  ) : (
                    <Mic className="h-8 w-8" />
                  )}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  {isListening
                    ? "Click to stop recording"
                    : "Click to start speaking"}
                </p>

                {/* Integration Instructions */}
                <div className="mt-4 p-3 bg-muted rounded-lg text-xs">
                  <p className="mb-2">
                    <strong>To integrate smallest.ai:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                    <li>Add your smallest.ai API key</li>
                    <li>Initialize the voice agent SDK</li>
                    <li>Connect toggleListening to the SDK</li>
                    <li>Handle voice responses</li>
                  </ol>
                </div>
              </div>
            </div>
          </Card>
        )}
      </>
    );
  }

  // Inline mode for embedding in pages (e.g., Careers page)
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <h3 className="mb-2">Apply via Voice</h3>
          <p className="text-muted-foreground text-sm">
            Speak with our AI assistant to apply for positions
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div
            className={`w-2 h-2 rounded-full ${
              isConnected
                ? isListening
                  ? "bg-green-500 animate-pulse"
                  : "bg-green-500"
                : "bg-gray-300"
            }`}
          ></div>
          <span>
            {isConnected
              ? isListening
                ? "Listening..."
                : "Connected"
              : "Not connected"}
          </span>
        </div>

        {/* Microphone Button */}
        <Button
          onClick={toggleListening}
          size="lg"
          variant={isListening ? "destructive" : "default"}
          className={`h-20 w-20 rounded-full transition-all ${
            isListening ? "animate-pulse" : ""
          }`}
        >
          {isListening ? (
            <MicOff className="h-8 w-8" />
          ) : (
            <Mic className="h-8 w-8" />
          )}
        </Button>

        <p className="text-sm text-center text-muted-foreground">
          {isListening
            ? "Click to stop recording"
            : "Click to start speaking"}
        </p>

        {/* Integration Instructions */}
        <div className="mt-4 p-3 bg-muted rounded-lg text-xs w-full">
          <p className="mb-2">
            <strong>To integrate smallest.ai:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
            <li>Add your smallest.ai API key</li>
            <li>Initialize the voice agent SDK</li>
            <li>Connect toggleListening to the SDK</li>
            <li>Handle voice responses</li>
          </ol>
        </div>
      </div>
    </Card>
  );
}
