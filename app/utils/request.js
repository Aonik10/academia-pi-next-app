export async function request(url, method = "GET", body = {}) {
    const response = await fetch(url, {
        method: method,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        ...(method !== "GET" && { body: JSON.stringify(body) }),
    });
    let status = response.status;
    if (status > 299) throw new Error("Invalid status: " + status);
    return await response.json();
}
