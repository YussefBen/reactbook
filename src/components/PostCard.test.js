import "@testing-library/dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PostCard from "./PostCard";

test("PostCard: le clic sur J'aime incrémente et Reset réinitialise le compteur", () => {
  render(
    <MemoryRouter>
  <PostCard author="Alice" content="Hello" initialLikes={0} />
    </MemoryRouter>
  );

  // Vérifie que le compteur de likes initial est à 0
  expect(screen.getByText(/Likes: 0/i)).toBeInTheDocument();
  
  // Simule un clic sur le bouton J'aime
  fireEvent.click(screen.getByRole("button", { name: /j'aime/i }));
  
  // Vérifie que le compteur de likes est maintenant à 1
  expect(screen.getByText(/Likes: 1/i)).toBeInTheDocument();

  // Simule un clic sur le bouton Reset
  fireEvent.click(screen.getByRole("button", { name: /reinitialiser/i }));
  
  // Vérifie que le compteur de likes est réinitialisé à 0
  expect(screen.getByText(/Likes: 0/i)).toBeInTheDocument();
});