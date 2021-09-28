const DATA = [{
    status: 'OK'
}];

export const mock_request = (url) => {

    // Создание истории

    if (url === 'http://si-cat.ru/tasks/?developer=admin') {
        return Promise.resolve(
            DATA
        );
    }


    return Promise.resolve(['Mock not found']);
};
