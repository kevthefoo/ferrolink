import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us20'
});

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Valid email address is required' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify environment variables are loaded
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    
    if (!audienceId) {
      console.error('MAILCHIMP_AUDIENCE_ID is not set in environment variables');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Server configuration error. Please contact support.' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('Adding subscriber to list:', audienceId);
    
    // Add subscriber to Mailchimp list
    const response = await mailchimp.lists.addListMember(
      audienceId,
      {
        email_address: email,
        status: 'subscribed',
        tags: ['Website Newsletter'],
        merge_fields: {
          SOURCE: 'FerroLink Website',
          SIGNUP_DATE: new Date().toISOString().split('T')[0]
        }
      }
    );

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Mailchimp subscription error:', error);

    // Handle already subscribed
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'This email is already subscribed!' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to subscribe. Please try again later.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
