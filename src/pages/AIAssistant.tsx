import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Send,
  Mic,
  MicOff,
  Bot,
  User,
  Lightbulb,
  Sprout,
  Cloud,
  TrendingUp,
} from "lucide-react";

// Mock chat messages
interface Message {
  id: number;
  type: "bot" | "user";
  message: string;
  timestamp: string;
  suggestions?: string[];
  attachments?: { type: string; title: string }[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: "bot",
    message: "Hello! I'm your AI farming assistant. How can I help you today?",
    timestamp: "10:30 AM",
    suggestions: [
      "What's the best crop for my soil?",
      "Check weather forecast",
      "Fertilizer recommendations",
      "Disease diagnosis help",
    ],
  },
  {
    id: 2,
    type: "user",
    message: "What should I plant in my 5-acre field this season?",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    type: "bot",
    message: "Based on your soil analysis (pH 6.8, good organic matter) and current market prices, I recommend wheat for 60% of your field and mustard for 40%. Here's why:\n\n• Wheat: High demand, good profit margin (45%), suited for your soil type\n• Mustard: Quick growing (90 days), excellent oil content demand\n• Both crops complement each other in crop rotation",
    timestamp: "10:33 AM",
    attachments: [
      { type: "chart", title: "Profit Analysis" },
      { type: "document", title: "Crop Rotation Guide" },
    ],
  },
];

const quickActions = [
  {
    title: "Crop Recommendation",
    description: "Get AI-powered crop suggestions",
    icon: Sprout,
    prompt: "What crops should I plant this season?",
  },
  {
    title: "Weather Insights",
    description: "Weather impact on your crops",
    icon: Cloud,
    prompt: "How will this week's weather affect my crops?",
  },
  {
    title: "Market Analysis",
    description: "Price trends and selling advice",
    icon: TrendingUp,
    prompt: "What are the current market trends for my crops?",
  },
  {
    title: "Problem Diagnosis",
    description: "Identify crop diseases and pests",
    icon: Lightbulb,
    prompt: "Help me diagnose issues with my crops",
  },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      type: "user",
      message: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newUserMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        message: "I understand you're asking about " + inputMessage.toLowerCase() + ". Let me analyze your farm data and provide you with the best recommendations based on current conditions, market prices, and your soil health data.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickAction = (prompt: string) => {
    setInputMessage(prompt);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            AI Assistant
          </h1>
          <p className="text-muted-foreground mt-2">
            Get instant advice on crops, weather, market prices, and farm management.
          </p>
        </div>
        <Badge variant="outline" className="gap-2">
          <Bot className="h-4 w-4" />
          Online & Ready
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Actions */}
        <Card className="glass-card lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  onClick={() => handleQuickAction(action.prompt)}
                  className="p-3 bg-surface-elevated rounded-lg cursor-pointer hover-lift border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <action.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{action.title}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {action.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="glass-card lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Chat with AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-3 max-w-[80%] ${
                      message.type === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface-elevated"
                      }`}
                    >
                      {message.type === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <div
                        className={`p-4 rounded-lg ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-surface-elevated"
                        }`}
                      >
                        <div className="text-sm whitespace-pre-wrap">
                          {message.message}
                        </div>
                        <div className="text-xs opacity-70 mt-2">
                          {message.timestamp}
                        </div>
                      </div>

                      {/* Suggestions for bot messages */}
                      {message.type === "bot" && message.suggestions && (
                        <div className="flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, idx) => (
                            <Button
                              key={idx}
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuickAction(suggestion)}
                              className="text-xs"
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}

                      {/* Attachments for bot messages */}
                      {message.type === "bot" && message.attachments && (
                        <div className="space-y-2">
                          {message.attachments.map((attachment, idx) => (
                            <div
                              key={idx}
                              className="p-3 bg-primary/10 rounded-lg border border-primary/20"
                            >
                              <div className="flex items-center gap-2">
                                {attachment.type === "chart" ? (
                                  <TrendingUp className="h-4 w-4 text-primary" />
                                ) : (
                                  <Sprout className="h-4 w-4 text-primary" />
                                )}
                                <span className="text-sm font-medium">
                                  {attachment.title}
                                </span>
                                <Button size="sm" variant="ghost" className="ml-auto">
                                  View
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-surface-elevated">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="p-4 rounded-lg bg-surface-elevated">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-border">
              <div className="flex gap-3">
                <div className="flex-1 flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me about crops, weather, prices, or farming advice..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleRecording}
                    className={isRecording ? "bg-destructive/10 text-destructive" : ""}
                  >
                    {isRecording ? (
                      <MicOff className="h-4 w-4" />
                    ) : (
                      <Mic className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <Button onClick={handleSendMessage} className="gradient-primary">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              {isRecording && (
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                  Recording... Speak your question
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}