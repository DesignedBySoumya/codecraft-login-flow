
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import FormInput from '../components/FormInput';
import LoadingButton from '../components/LoadingButton';
import { validateEmail } from '../utils/validation';
import { toast } from '@/hooks/use-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleInputChange = (value: string) => {
    setEmail(value);
    if (error) {
      setError('');
    }
  };

  const validateForm = () => {
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSent(true);
      toast({
        title: "Reset link sent!",
        description: "Please check your email for password reset instructions.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <AuthLayout 
        title="Check Your Email" 
        subtitle="We've sent password reset instructions to your email"
      >
        <div className="text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Email Sent Successfully</h3>
            <p className="text-gray-400 text-sm">
              If an account with <strong>{email}</strong> exists, you'll receive password reset instructions shortly.
            </p>
          </div>

          <div className="space-y-4">
            <Link 
              to="/signin" 
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 text-center"
            >
              Back to Sign In
            </Link>
            
            <button
              onClick={() => setSent(false)}
              className="block w-full text-green-400 hover:text-green-300 font-medium py-2 transition-colors text-center"
            >
              Try Different Email
            </button>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Forgot Password?" 
      subtitle="Enter your email to receive reset instructions"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleInputChange}
          error={error}
          required
        />

        <LoadingButton
          type="submit"
          loading={loading}
          disabled={!email}
          variant="primary"
        >
          Send Reset Link
        </LoadingButton>

        <div className="text-center">
          <p className="text-gray-400">
            Remember your password?{' '}
            <Link 
              to="/signin" 
              className="text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-6 p-3 bg-gray-700/30 border border-gray-600/50 rounded-lg">
          <p className="text-xs text-gray-400 text-center">
            <strong>Note:</strong> This is a demo - no actual emails will be sent
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
