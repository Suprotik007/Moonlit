import React from 'react';

const FaqBox = () => {
    return (
        <div>
            <div className="collapse collapse-plus bg-base-100 border border-gray-500">
  <input type="radio" name="hotel-accordion" defaultChecked />
  <div className="collapse-title font-semibold">How do I book a room?</div>
  <div className="collapse-content text-sm">
    Select your desired dates and location, choose a hotel, and click "Book Now." Follow the prompts to complete your reservation.
  </div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-gray-500">
  <input type="radio" name="hotel-accordion" />
  <div className="collapse-title font-semibold">Can I cancel or modify my booking?</div>
  <div className="collapse-content text-sm">
    Yes, go to "My Bookings" in your account dashboard. Select the booking you want to change and follow the cancellation or modification instructions. Please check the hotel's cancellation policy for details.
  </div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-gray-500">
  <input type="radio" name="hotel-accordion" />
  <div className="collapse-title font-semibold">How do I know if my booking is confirmed?</div>
  <div className="collapse-content text-sm">
    After completing your booking, you will receive a confirmation email with all the details. You can also view your booking status in the "My Bookings" section of your account.
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 border border-gray-500">
  <input type="radio" name="hotel-accordion" />
  <div className="collapse-title font-semibold">What payment methods are accepted?</div>
  <div className="collapse-content text-sm">
    We accept major credit cards, debit cards, and select digital wallets. Payment options are displayed during the checkout process.
  </div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-gray-500">
  <input type="radio" name="hotel-accordion" />
  <div className="collapse-title  font-semibold">Can I request special amenities or services?</div>
  <div className="collapse-content text-sm">
    Yes, you can add special requests (such as late check-in, airport transfer, or extra beds) during the booking process or by contacting the hotel directly after booking.
  </div>
</div>

        </div>
    );
};

export default FaqBox;