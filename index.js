const RPC = require('discord-rpc')
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        // use dev portal's rich presence visualizer so its easier for you
        pid: process.pid,
        activity: {
            details: "Details",
            state: "State",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "css", // large image name from developer portal > rich presence > art assets
                large_text: "large image text"
            },
            buttons: [
                { label: "GitHub", url: "https://github.com/rumenblajev" },
                { label: "Discord Server", url: "https://discord.com/invite/ZJnhfr3rZX" }
            ]
        }
    });
});

client.login({
    clientId: '', // client id from dev portal
    clientSecret: '' // client secret from dev portal
});