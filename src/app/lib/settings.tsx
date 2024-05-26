export const getAppSettings = (): Promise<{ theme: string; language: string }> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: "dark",
                language: "en"
            });
        }, 2000);
    });
}

export const getUserDate = (): Promise<{ name: string; email: string }> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                email: "john@john.com"
            });
        }, 2000);
    });
}

export async function getUserById(id: number): Promise<any> {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = response.json();
    return user;

}