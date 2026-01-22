
// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
// import MyBookingsList from '../Components/MyBookingsList';

// const MyBookings = () => {
//     const { user } = useContext(AuthContext);
//     const [myBookings, setMyBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBookings = async () => {
//             let url = '';
//             let response = null;

//             try {
//                 console.log('Current user email:', user?.email);

//                 if (!user?.email) {
//                     setError('Please login to view bookings');
//                     setLoading(false);
//                     return;
//                 }

//                 // Fetch bookings with email as query parameter
//                 url = `/bookedRooms?email=${encodeURIComponent(user.email)}`;
//                 console.log('Fetching from URL:', url);

//                 response = await fetch(url);
//                 console.log('Response status:', response.status);
//                 console.log('Response headers:', response.headers.get('content-type'));

//                 if (!response.ok) {
//                     const errorText = await response.text();
//                     console.log('Error response text:', errorText);
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const contentType = response.headers.get('content-type');
//                 if (contentType && contentType.includes('application/json')) {
//                     const data = await response.json();
//                     console.log('Bookings response:', data);
//                     setMyBookings(data);
//                 } else {
//                     const text = await response.text();
//                     console.log('Non-JSON response:', text);
//                     throw new Error('Server returned non-JSON response');
//                 }

//                 setError(null);
//             } catch (err) {
//                 console.error('Failed to fetch bookings:', err);
//                 console.error('Error details:', {
//                     message: err.message,
//                     status: response?.status,
//                     url: url
//                 });

//                 if (err.message.includes('401') || err.message.includes('Unauthorized')) {
//                     setError('Access denied. Please check your authentication.');
//                 } else {
//                     setError(err.message || 'Failed to fetch bookings');
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (user) {
//             fetchBookings();
//         } else {
//             setLoading(false);
//             setError('Please login to view bookings');
//         }
//     }, [user]);

//     const removeBooking = async (id) => {
//         try {
//             console.log('Deleting booking:', id);
//             console.log('User email:', user.email);

//             const response = await fetch(`/bookedRooms/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email: user.email })
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             setMyBookings(prev => prev.filter(booking => booking._id !== id));
//         } catch (err) {
//             console.error("Failed to delete booking:", err);
//             alert('Failed to delete booking. Please try again.');
//         }
//     };

//     if (loading) return (
//         <div className="flex justify-center items-center h-64">
//             <div className="text-xl">Loading bookings...</div>
//         </div>
//     );
    
//     if (error) return (
//         <div className="text-center p-8">
//             <div className="text-red-600 text-xl mb-4">Error</div>
//             <div className="text-gray-700">{error}</div>
//             {user && (
//                 <button 
//                     onClick={() => window.location.reload()}
//                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 >
//                     Retry
//                 </button>
//             )}
//         </div>
//     );

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className='text-4xl text-center font-semibold text-gray-600 mt-8 border-b-2 pb-5 w-full md:w-4/12 mx-auto mb-8'>
//                 Booking History
//             </h1>
            
//             {myBookings.length === 0 ? (
//                 <div className="text-center py-12">
//                     <p className="text-gray-500 text-lg">No bookings found for your account.</p>
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     {myBookings.map(bookings => (
//                         <MyBookingsList 
//                             key={bookings._id} 
//                             onDelete={removeBooking}  
//                             bookings={bookings}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyBookings;

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import MyBookingsList from '../Components/MyBookingsList';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Your backend URL
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                console.log('Current user email:', user?.email);

                if (!user?.email) {
                    setError('Please login to view bookings');
                    setLoading(false);
                    return;
                }

                // Use full backend URL
                const url = `${BACKEND_URL}/bookedRooms?email=${encodeURIComponent(user.email)}`;
                console.log('Fetching from URL:', url);

                const response = await fetch(url);
                console.log('Response status:', response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Bookings response:', data);
                setMyBookings(data);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch bookings:', err);
                setError(err.message || 'Failed to fetch bookings');
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchBookings();
        } else {
            setLoading(false);
            setError('Please login to view bookings');
        }
    }, [user]);

    const removeBooking = async (id) => {
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
    };

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