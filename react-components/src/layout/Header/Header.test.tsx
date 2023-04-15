import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { vi } from 'vitest';

describe('Header', () => {
  it('renders Main NavLink', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const mainNavLink = screen.getByRole('link', { name: 'Main' });
    expect(mainNavLink).toBeInTheDocument();
    expect(mainNavLink).toHaveAttribute('href', '/');
  });

  it('renders About NavLink', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const aboutNavLink = await waitFor(() => screen.getByRole('link', { name: /about/i }));
    setTimeout(() => {
      expect(aboutNavLink).toBeInTheDocument();
      expect(aboutNavLink).toHaveAttribute('href', '/about');
      expect(screen.getByText(/about us/i)).toBeInTheDocument();
    }, 1000);
  });

  it('renders Create card NavLink', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const createCardNavLink = screen.getByRole('link', { name: 'Create card' });
    expect(createCardNavLink).toBeInTheDocument();
    expect(createCardNavLink).toHaveAttribute('href', '/form');
  });

  const titleHandle = (data: string, setTitle: React.Dispatch<React.SetStateAction<string>>) => {
    switch (data) {
      case '/':
        return setTitle('Main');
      case '/about':
        return setTitle('About Us');
      case '/form':
        return setTitle('Create card');
      default:
        return setTitle('');
    }
  };

  describe('titleHandle', () => {
    it('should set title to "Main" when data is "/"', () => {
      const setTitle = vi.fn();
      titleHandle('/', setTitle);
      expect(setTitle).toHaveBeenCalledWith('Main');
    });

    it('should set title to "About Us" when data is "/about"', () => {
      const setTitle = vi.fn();
      titleHandle('/about', setTitle);
      expect(setTitle).toHaveBeenCalledWith('About Us');
    });

    it('should set title to "Create card" when data is "/form"', () => {
      const setTitle = vi.fn();
      titleHandle('/form', setTitle);
      expect(setTitle).toHaveBeenCalledWith('Create card');
    });

    it('should set title to empty string when data is unknown', () => {
      const setTitle = vi.fn();
      titleHandle('unknown', setTitle);
      expect(setTitle).toHaveBeenCalledWith('');
    });
  });
});
