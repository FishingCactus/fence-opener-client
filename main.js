var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
    "host": "A39VBS6E8X41I5.iot.eu-west-1.amazonaws.com",
    "port": 8883,
    "clientId": "FrontFenceOpener",
    "thingName": "FrontFenceOpener",
    "caCert": "root-CA.crt",
    "clientCert": "cc7a15c0cd-certificate.pem.crt",
    "privateKey": "cc7a15c0cd-private.pem.key"
});


device
    .on('connect', function()
    {
        console.log('Device connected.');
        device.publish(
            'command',
            JSON.stringify(
                {
                    open: "front"
                }
            )
        );
    });
