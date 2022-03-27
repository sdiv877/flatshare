import React from 'react';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/outline';

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      className="flex justify-center items-center py-3 h-fit hover:bg-gray-700 hover:bg-opacity-5 transition-all"
      auto
      light
      icon={<ChevronLeftIcon className="w-10" />}
    />
  );
};

export default BackButton;
