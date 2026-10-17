export const veraGreetings = {
  general: [
    "Welcome Monetarion. MONETA network is ready.",
    "Hello Monetarion. Your ecosystem access is active.",
    "Welcome back, Monetarion. VERA AI is online.",
    "Monetarion detected. System initialized.",
    "Welcome to MONETA CHAIN, Monetarion.",
    "Hello Monetarion. Ready for your command.",
    "Monetarion session started successfully.",
    "Welcome. Your MONETA environment is active.",
    "Monetarion connected to VERA AI.",
    "System ready, Monetarion. Let’s begin."
  ],
  analytical: [
    "Welcome Monetarion. Ready to process your request.",
    "Hello Monetarion. I will structure your input clearly.",
    "Monetarion online. Awaiting intelligent input.",
    "Welcome. Let’s analyze your request.",
    "Monetarion detected. Cognitive system active.",
    "Hello. I’m ready to assist your reasoning.",
    "Welcome Monetarion. Let’s solve it step by step.",
    "System prepared for Monetarion query.",
    "Monetarion session in analytical mode.",
    "Ready to process your instruction."
  ],
  builder: [
    "Welcome Monetarion builder. Let’s create something powerful.",
    "Monetarion developer mode active.",
    "Hello builder. MONETA tools are ready.",
    "Welcome Monetarion. Start building your system.",
    "Architecture mode ready for Monetarion.",
    "Monetarion, let’s design your solution.",
    "Development session started.",
    "Builder environment active for Monetarion.",
    "Welcome. Let’s construct your idea.",
    "Monetarion system builder ready."
  ],
  friendly: [
    "Hi Monetarion 👋 welcome back.",
    "Hello Monetarion. Good to see you again.",
    "Welcome Monetarion. I’m here with you.",
    "Hey Monetarion, let’s get started.",
    "Monetarion, I’m ready when you are.",
    "Welcome! Let’s make things simple.",
    "Hello Monetarion 😊 how can I help?",
    "Good to see you, Monetarion.",
    "Monetarion, I’m listening.",
    "Welcome back. Let’s continue."
  ],
  action: [
    "Monetarion online. Ready.",
    "Welcome. Send your command.",
    "System active for Monetarion.",
    "Ready for execution.",
    "Monetarion input required.",
    "Waiting for instructions.",
    "VERA AI active for Monetarion.",
    "Command ready.",
    "Monetarion session live.",
    "Standby complete."
  ],
  problemSolving: [
    "Welcome Monetarion. Let’s break this down.",
    "I’ll simplify your request.",
    "Monetarion, we’ll solve this together.",
    "Let’s analyze your input.",
    "I’ll guide you step by step.",
    "Welcome. Let’s clarify everything.",
    "Monetarion, I’ll make this simple.",
    "Breaking problem into steps.",
    "Let’s find the solution.",
    "I’ll assist your reasoning."
  ],
  moneta: [
    "Welcome Monetarion to MONETA ecosystem.",
    "MONETA CHAIN active for Monetarion.",
    "Ecosystem connection established.",
    "Monetarion linked to VERA AI core.",
    "Welcome to decentralized MONETA layer.",
    "MONETA services active.",
    "Monetarion in secure ecosystem mode.",
    "Blockchain environment ready.",
    "Welcome Monetarion. Network stable.",
    "MONETA intelligence layer online."
  ],
  guidance: [
    "Welcome Monetarion. I’ll guide you.",
    "Let’s learn this step by step.",
    "I’ll explain everything clearly.",
    "Monetarion, I’ll simplify this.",
    "Let’s go step by step.",
    "I’ll walk you through it.",
    "No confusion — I’ve got you.",
    "Let’s understand it together.",
    "I’ll break it down for you.",
    "Monetarion, I’ll make this easy."
  ],
  advanced: [
    "Monetarion cognitive system active.",
    "Advanced reasoning mode enabled.",
    "Neural layer synchronized.",
    "Monetarion intelligence channel open.",
    "Deep processing initialized.",
    "Analytical engine ready.",
    "High-level computation active.",
    "Structured cognition running.",
    "Monetarion AI layer engaged.",
    "Advanced system online."
  ],
  secure: [
    "Secure Monetarion session active.",
    "Identity verified. Welcome Monetarion.",
    "Encrypted environment ready.",
    "Access granted to MONETA system.",
    "Secure channel opened.",
    "System integrity confirmed.",
    "Protected session active.",
    "Monetarion secure access live.",
    "Verified user detected.",
    "MONETA system stable. Welcome Monetarion."
  ]
};

export type GreetingCategory = keyof typeof veraGreetings;

export function getRandomGreeting(category?: GreetingCategory): string {
  if (category && veraGreetings[category]) {
    const greetings = veraGreetings[category];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // If no category specified, pick a random category then a random greeting
  const categories = Object.keys(veraGreetings) as GreetingCategory[];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const greetings = veraGreetings[randomCategory];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getGreetingForContext(context: 'first_visit' | 'developer' | 'serious' | 'general'): string {
  switch (context) {
    case 'first_visit':
      return getRandomGreeting('friendly');
    case 'developer':
      return getRandomGreeting('builder');
    case 'serious':
      return getRandomGreeting('analytical');
    case 'general':
    default:
      return getRandomGreeting('general');
  }
}
