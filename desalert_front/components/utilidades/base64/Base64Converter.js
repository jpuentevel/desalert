const imageToBase64 = require('image-to-base64');

imageToBase64(path).then(
    (response) => {
        return response;
    }
)
.catch(
    (error) => {
        console.log(error);
    }
)

export { imageToBase64 }