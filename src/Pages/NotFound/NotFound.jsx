import React, { useEffect } from 'react';
import GangCatLoading from '../../components/Loadings/GangCatLoading';
import { useNavigate } from 'react-router';
function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000); // Redirect after 4000ms (4 seconds)
    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <div className='text-4xl text-red-600 my-42'>This Page is Not Found</div>
      <GangCatLoading />
    </>
  );
}
export default NotFound;