import "@testing-library/dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PostCard from "./PostCard";

test("PostCard: le clic sur J'aime incrémente et Reset réinitialise le compteur", () => {
  render(
    <MemoryRouter>
  <PostCard author="Alice" content="Hello" initialLikes={2} />
    </MemoryRouter>
  );

 expect(screen.getByText("2")).toBeInTheDocument();

 fireEvent.click(screen.getAllByRole("button", { name: /j'aime/i })[0]);

 expect(screen.getByText("3")).toBeInTheDocument();

 fireEvent.click(screen.getByRole("button", { name: /reinitialiser/i }));
 expect(screen.getByText("2")).toBeInTheDocument();
});