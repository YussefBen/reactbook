import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function FeedPage() { return <div>FEED</div>; }
function LoginPage() { return <div>LOGIN</div>; }

test("ProtectedRoute: redirige vers /login si user est null", () => {
  // On simule un utilisateur non connecté (user = null)
  render(
    <AuthContext.Provider value={{ user: null, login: jest.fn(), logout: jest.fn() }}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <FeedPage />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  //On vérifie que la page LOGIN est affichée et pas le FEED
  expect(screen.getByText("LOGIN")).toBeInTheDocument();
  expect(screen.queryByText("FEED")).not.toBeInTheDocument();
});