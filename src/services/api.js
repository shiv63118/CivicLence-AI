const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiRequest(path, options = {}) {
    if (!API_BASE_URL) {
        throw new Error("Backend API URL is not configured.");
    }

    const { token, ...fetchOptions } = options;

    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...fetchOptions,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...fetchOptions.headers,
        },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(data?.message || `Request failed: ${response.status}`);
    }

    return data;
}