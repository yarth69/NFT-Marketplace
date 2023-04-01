import { render, screen } from '@testing-library/react';
import NFTMarketplace from './NFTMarketplace';

describe('NFTMarketplace', () => {
  test('renders NFTMarketplace component', () => {
    render(<NFTMarketplace />);
    const linkElement = screen.getByText(/NFT Marketplace/i);
    expect(linkElement).toBeInTheDocument();
  });
});

//modifications may be needed to the above code to make it work with your project