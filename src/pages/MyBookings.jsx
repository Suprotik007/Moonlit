import React, { useContext, useEffect, useState } from 'react';
import MyBookingsList from '../Components/MyBookingsList';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from '../provider/useAxiosSecure';
import { auth } from '../Firebase';


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                if (user?.email) {
                    const response = await axiosSecure.get(`bookedRooms?email=${user.email}`);
                    setMyBookings(response.data);
                }
            } 
            finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [user, axiosSecure]);

    const removeBooking = async (id) => {
        try {
            await axiosSecure.delete(`bookedRooms/${id}`);
            setMyBookings(prev => prev.filter(booking => booking._id !== id));
        } catch (err) {
            console.error("Failed to delete booking:", err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 className='text-4xl text-center font-semibold text-gray-600 mt-15 border-b-2 pb-5 w-4/12 mx-auto mb-5'>
                Booking History
            </h1>
            {myBookings.length === 0 ? (
                <p>No bookings found</p>
            ) : (
                <div>
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