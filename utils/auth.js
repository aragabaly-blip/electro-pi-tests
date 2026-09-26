export async function getAuthToken(request, apiBaseUrl) {

    const response = await request.post(
        `${apiBaseUrl}/auth/login`,
        {
            data: {
                email: process.env.STORE_ADMIN_EMAIL,
                password: process.env.STORE_ADMIN_PASSWORD
            }
        }
    );

    if (!response.ok()) {
        throw new Error(
            `Authentication failed. Status: ${response.status()}`
        );
    }

    const body = await response.json();

    if (!body.token) {
        throw new Error(
            'Authentication succeeded but no token was returned.'
        );
    }

    return body.token;
}