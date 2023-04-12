import { StepType } from "../App";

export const RATING = {
  TITLE: "Rate your experinece",
  NOT_SATISFIED: "NOT SATISFIED",
  VERY_SATISFIED: "VERY SATISFIED",
};
export const QUETIONNAIRE = {
  TELL_US_MORE: "Tell us more",
  MOST_LIKED: "What did you like the most?",
  MOST_LIKED_PLACEHOLDER: "Tell us your experience (optional)",
  LEAST_LIKED: "What did you like the least?",
  LEAST_LIKED_PLACEHOLDER: "Tell us know how we can improve (optional)",
  EMAIL: "Your email",
  EMAIL_PLACEHOLDER: "Your email address (optional)",
};
export const SUBMISSION_FEEDBACK = {
  THANK_YOU: "Thank you! Tell us more.",
};
export const SUBMIT = "SUBMIT";
export const MENU = "Help us improve";

export const STEPS: StepType[] = [
  "menu",
  "feedback",
  "rating",
  "questionnaire",
];
