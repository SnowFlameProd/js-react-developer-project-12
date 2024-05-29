const routes = {
    root: '/',
    login: '/login',
    signup: '/signup',
    others: '*',
    server: {
        login: '/api/v1/login',
        data: '/api/v1/data',
        signup: '/api/v1/signup',
        channels: '/api/v1/channels',
        messages: '/api/v1/messages',
        socket: {
            newMessage: 'newMessage',
            newChannel: 'newChannel',
            removeChannel: 'removeChannel',
            renameChannel: 'renameChannel'
        },
    },
};

export default routes;