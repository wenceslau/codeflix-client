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