export interface AksaraChar {
  char: string;
  latin: string;
  description: string;
  type: 'nglegena' | 'pasangan' | 'sandhangan';
  pasangan?: string; 
}

export interface WordExample {
  javanese: string;
  latin: string;
  meaning: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice';
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface GameState {
  score: number;
  level: number;
  streak: number;
}