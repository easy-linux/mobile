


export const clickOnImage = (e) => {
    if(window.cordova && navigator.device){
        navigator.device.capture.captureImage((mediaFiles) => {

            resolveLocalFileSystemURL(mediaFiles[0].localURL, (entry)=>{
                entry.file(function (file) {
                    var reader = new FileReader();
            
                    reader.onloadend = function() {
                        const imageElement = document.querySelector('#image-block')
                        const image = document.createElement('img')
                        
                        image.className = 'remote-image'
                        image.src = this.result
                        imageElement.appendChild(image)
                    };
            
                    reader.readAsDataURL(file);            
                })

            })
        }, (error) => {
            console.log(error)
        }, 
        {
            limit: 1,
        })
    }
}