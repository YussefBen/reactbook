import { fireEvent, render, screen } from '@testing-library/react';
// On utilise MemoryRouter au lieu de BrowserRouter pour les tests
import { MemoryRouter } from 'react-router-dom';
import PostCard from './PostCard';

test('Vérification de la carte et des commentaires', () => {
  render(
    <MemoryRouter>
      <PostCard author="Yussef" content="Mon premier post" />
    </MemoryRouter>
  );

  expect(screen.getByText(/Yussef/i)).toBeInTheDocument();

  
  const input = screen.getByPlaceholderText(/Ajouter un commentaire/i);
  const bouton = screen.getByText(/Poster/i);

  fireEvent.change(input, { target: { value: 'Génial !' } });
  fireEvent.click(bouton);

  expect(screen.getByText('Génial !')).toBeInTheDocument();
});