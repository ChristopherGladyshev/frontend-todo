const DATA = [{
    status: 'OK'
}];

export const mock_request = (url) => {

    // Создание истории

    if (url === 'http://194.87.214.215/tasks/?developer=admin') {
        return Promise.resolve(
            DATA
        );
    }


    return Promise.resolve(['Mock not found']);
};
