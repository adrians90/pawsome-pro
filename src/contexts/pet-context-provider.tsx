"use client";

import { Pet } from "@/lib/types";
import { useState, createContext } from "react";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  selectedPet: Pet | undefined;
  numberOfPets: number;
  handleChangeSelectedPetId: (id: string) => void;
  handleCheckoutPet: (id: string) => void;
  handleAddPet: (newPet: Omit<Pet, "id">) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  //derived state
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = pets.length;

  //event handlers / actions

  const handleAddPet = (newPet: Omit<Pet, "id">) => {
    setPets((prev) => [
      ...prev,
      {
        ...newPet,
        id: Date.now().toString(),
      },
    ]);
  };

  const handleCheckoutPet = (id: string) => {
    setPets((prev) => prev.filter((pet) => pet.id !== id));
    setSelectedPetId(null);
  };

  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };
  return (
    <PetContext.Provider
      value={{
        selectedPetId,
        selectedPet,
        numberOfPets,
        pets,
        handleAddPet,
        handleChangeSelectedPetId,
        handleCheckoutPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
