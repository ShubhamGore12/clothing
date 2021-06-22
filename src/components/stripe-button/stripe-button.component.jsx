import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publicshableKey =
		'pk_test_51J56alSJ5QIE81E5MOpwwZDmQdAgPjB6HI0KXdAm1u6DjpFPX8944qdBjhxeZtQsx3TeAWW5QjJLoSgq8oQGSSRC00Sxjz7RNx';

	const onToken = (token) => {
		console.log(token);
		alert('Payment successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publicshableKey}
		/>
	);
};

export default StripeCheckoutButton;
