// src/pages/Login.jsx
import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [stage, setStage] = useState(1);
  const lightColors = ['#ff00ff', '#00ffff'];
  const infoTexts = [
    'We collect this information to send you open source projects based on interest, Weekly challenge, Weekly newsletter right to your inbox.',
    'Add other social channels. You are already doing the work. Now get credit & gain points.',
  ];

  const handleNext = () => {
    if (stage < 2) {
      setStage(stage + 1);
    }
  };

  return (
    <AuthLayout
      stage={stage}
      lightColor={lightColors[stage - 1]}
      infoText={infoTexts[stage - 1]}
    >
      <LoginForm stage={stage} onNext={handleNext} />
    </AuthLayout>
  );
};

export default Login;
