import { AsgardeoSPAClient } from "@asgardeo/auth-react";

// Initialize the AsgardeoSPAClient.
const auth = AsgardeoSPAClient.getInstance();

export async function getSelfInformation() {
    const requestConfig = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
        url: "https://api.asgardeo.io/t/omal/scim2/Me",
    };

    try {
        const response = await auth.httpRequest(requestConfig);
        
        return response.data;
    } catch (error) {
        // Log the error.
        console.error("Failed to fetch external API.", error);
    }
}
