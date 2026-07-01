import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock Next.js and Lucide React imports before importing PropertyCard
vi.mock('next/image', () => ({
  __esModule: true,
  default: () => null,
}));
vi.mock('next/link', () => ({
  __esModule: true,
  default: () => null,
}));
vi.mock('lucide-react', () => ({
  Heart: () => null,
  Star: () => null,
}));

import { getFavorites } from '../PropertyCard';
import { Property } from '@/lib/dummy-data';

// Mock localStorage in global scope
class MockLocalStorage {
  private store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}

const mockLocalStorage = new MockLocalStorage();

describe('favorites helper functions', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    vi.stubGlobal('window', {});
    vi.stubGlobal('localStorage', mockLocalStorage);
  });

  it('should return empty list when no favorites are saved', () => {
    const favorites = getFavorites();
    expect(favorites).toEqual([]);
  });

  it('should return saved favorite properties', () => {
    const mockProperty: Property = {
      id: 'prop-1',
      title: 'Luxury Villa',
      description: 'Stunning villa.',
      image: '',
      images: [],
      location: { city: 'Paris', state: 'France', country: 'France', coordinates: { lat: 0, lng: 0 } },
      pricePerNight: 500,
      rating: 4.9,
      reviewCount: 30,
      category: 'luxury',
      type: 'Entire Place',
      capacity: { guests: 6, bedrooms: 3, beds: 3, bathrooms: 3 },
      amenities: [],
      hostId: 'host-1',
      createdAt: new Date()
    };

    mockLocalStorage.setItem('favorites', JSON.stringify([mockProperty]));
    
    const favorites = getFavorites();
    expect(favorites.length).toBe(1);
    expect(favorites[0].id).toBe('prop-1');
    expect(favorites[0].title).toBe('Luxury Villa');
  });

  it('should return empty list if favorites in localStorage is invalid JSON', () => {
    mockLocalStorage.setItem('favorites', 'invalid-json');
    const favorites = getFavorites();
    expect(favorites).toEqual([]);
  });
});
