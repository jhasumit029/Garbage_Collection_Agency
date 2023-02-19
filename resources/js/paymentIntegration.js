var config = {
    // replace the publicKey with yours
    "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
    "productIdentity": "1234567890",
    "productName": "Dragon",
    "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
    "paymentPreference": [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
        ],
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        onError (error) {
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    }
};

var checkout = new KhaltiCheckout(config);
var btn = document.querySelectorAll("#payment-button");
btn.forEach(e => {
    e.onclick = function () {
        // minimum transaction amount must be 10, i.e 1000 in paisa.
        checkout.show({amount: 1000});
    }
})