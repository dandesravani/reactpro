export const dummyApiResponse = {
    showAccordian:false,
    showCustomTabs:true,
    showQrGenerator:true,
    showRandomColor:true,
    showThemeChanging:false
}
const dummyApiResponseCall = () => {
    return new Promise((resolve,reject) => {
        if(dummyApiResponse) {
        setTimeout(resolve(dummyApiResponse),500)
        }else {
        reject("Some error occured! please try again later!")
        }
    })
}


export default dummyApiResponseCall;