import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import AppLogo from '../util/AppLogo';
import UserDisplay from '../util/UserDisplay';
import BackButton from '../util/BackButton';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 shadow mb-8">
      <div className="flex justify-between mx-10">
        {location.pathname != '/dashboard' && (
          <div className="-ml-11 mr-2">
            <BackButton />
          </div>
        )}
        <Button
          className="bg-transparent w-auto h-auto"
          onClick={() => navigate('/dashboard')}
        >
          <AppLogo />
        </Button>
        <div className="ml-auto">
          <UserDisplay />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
