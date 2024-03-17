'use client';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

import { Location } from '@/types';

const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null | unknown>(null);

  async function searchLocation(searchText: string) {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}&q=${searchText}&format=json`
      );
      const mData = data.map((el: any) => {
        return {
          placeId: el?.place_id,
          latLong: [parseFloat(el?.lat), parseFloat(el?.lon)],
          icon: el?.icon,
          displayName: el?.display_name,
        };
      });
      setLocations(mData);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    searchLocation,
    isLoading,
    error,
    locations,
  };
};

export default useLocations;
