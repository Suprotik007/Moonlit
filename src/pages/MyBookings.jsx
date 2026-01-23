import React, { useContext, useEffect, useState, useCallback } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import MyBookingsList from '../Components/MyBookingsList';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const BACKEND_URL = 'https://cozy-room-server.vercel.app';

    useEffect(() => {
        let isMounted = true;
    

        const fetchBookings = async () => {
            try {
               

                if (!user?.email) {
                    if (isMounted) {
                        setError('Please login to view bookings');
                        setLoading(false);
                    }
                    return;
                }

                const url = `${BACKEND_URL}/bookedRooms?email=${encodeURIComponent(user.email)}`;
               

                const response = await fetch(url);
           

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
               
                
                if (isMounted) {
                    setMyBookings(data);
                    setError(null);
                    setLoading(false);
                }
            } catch (err) {
                console.error('Failed to fetch bookings:', err);
                if (isMounted) {
                    setError(err.message || 'Failed to fetch bookings');
                    setLoading(false);
                }
            }
        };

        if (user?.email) {
            fetchBookings();
        } else {
            if (isMounted) {
                setLoading(false);
                setError('Please login to view bookings');
            }
        }

        return () => {
            isMounted = false;
        };
    }, [user?.email]); 

    const removeBooking = useCallback(async (id) => {
        try {
           
            const response = await fetch(`${BACKEND_URL}/bookedRooms/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user.email })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setMyBookings(prev => prev.filter(booking => booking._id !== id));
        } catch (err) {
            console.error("Failed to delete booking:", err);
            alert('Failed to delete booking. Please try again.');
        }
    }, [user?.email]);

    

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="text-xl">Loading bookings...</div>
        </div>
    );
    
    if (error) return (
        <div className="text-center p-8">
            <div className="text-red-600 text-xl mb-4">Error</div>
            <div className="text-gray-700">{error}</div>
            {user && (
                <button 
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Retry
                </button>
            )}
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='text-4xl text-center font-semibold text-gray-600 mt-8 border-b-2 pb-5 w-full md:w-4/12 mx-auto mb-8'>
                Booking History
            </h1>
            
            {myBookings.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No bookings found for your account.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {myBookings.map(bookings => (
                        <MyBookingsList 
                            key={bookings._id} 
                            onDelete={removeBooking}  
                            bookings={bookings}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookings;