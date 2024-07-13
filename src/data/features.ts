import customizeList from '../assets/images/edit-list.png';
import flashCard from '../assets/images/flash-card.png';
import testVocab from '../assets/images/online-test.png';

export const CORE_FEATURES = [
  {
    image: customizeList,
    title: "Customize Vocab List",
    description:
      "is personalized vocabulary lists tailored to their specific needs and interests",
  },
  {
    image: flashCard,
    title: "Flashcard",
    description:
      "is a powerful tool designed to enhance learning and retention through active recall and spaced repetition",
  },
  {
    image: testVocab,
    title: "Test Vocab",
    description:
      "is an interactive tool designed to assess and enhance your vocabulary knowledge",
  },
];

export const TAB_FEATURE_MENU = [
  { key: "customize", menu: "Customize List" },
  { key: "flashcard", menu: "Flashcard" },
  { key: "test", menu: "Test" },
];

export const TAB_FEATURES = {
  customize: {
    menu: "Customize List",
    content:
      "Allows users to create personalized vocabulary. Users can add new words, phrases, and definitions, organize them into categories, and add notes or example sentences for better understanding.",
  },
  flashcard: {
    menu: "Flashcard",
    content:
      "Users can create digital flashcards with customizable content, including text and images",
  },
  test: {
    menu: "Test",
    content:
      "Users can take customized quizzes that draw from their personalized vocabulary lists, with options for multiple-choice, fill-in-the-blank, and matching questions",
  },
};
