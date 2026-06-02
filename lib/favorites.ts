// lib/favorites.ts

import { Property } from './dummy-data';

const FAVORITES_KEY = 'favoriteProperties';

export function getFavorites(): Property[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export function addFavorite(property: Property) {
  const favorites = getFavorites();
  if (!favorites.find((p) => p.id === property.id)) {
    favorites.push(property);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(propertyId: string) {
  const favorites = getFavorites();
  const updated = favorites.filter((p) => p.id !== propertyId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

export function isFavorite(propertyId: string): boolean {
  const favorites = getFavorites();
  return favorites.some((p) => p.id === propertyId);
}