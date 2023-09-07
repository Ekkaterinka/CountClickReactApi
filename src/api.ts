export const fetchPostCount = async (count: number) => {
    try {
        const response = await fetch('https://zont-online.ru/api/button_count', {
            method: 'POST',
            body: JSON.stringify({
                "count": count
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-ZONT-Client': 'Ekkaterinka.b@yandex.ru'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }}