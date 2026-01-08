import { createContext, useContext, useReducer } from 'react';

export const ThemeContext = createContext();

// Logique de changement de thème
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  return (
    <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  const { theme, dispatch } = context;

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return { theme, toggleTheme };
};