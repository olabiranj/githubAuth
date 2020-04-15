import axios from 'axios';

export const getItems = () => dispatch => {

    axios({
        method: 'get',
        baseURL: 'https://sandboxapi.fsi.ng',
        url: '/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry?',
        params: {
            Referenceid: "01",
            RequestType: "01",
            Translocation: "01",
            ToAccount: "0037514056",
            destinationbankcode: "000001"
        },
        headers: {
            "Sandbox-Key": "5fb3f96f935ad14a24bde72d6a6dd619",
            "Ocp-Apim-Subscription-Key": "1cc664165bd4490e97019c61a492d19a",
            "Ocp-Apim-Trace": "true",
            "Appid": "69",
            "Content-Type": "application/json",
            "ipval": 0
        }
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))

};


