
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import { mockAuth } from '../utils/mockAuth';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const user = mockAuth.getCurrentUser();
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return <SignIn />;
};

export default Index;
