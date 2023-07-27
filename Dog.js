// Create the Dog class here

class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    
    getDog(){
        const {name, age, bio} = this
        return `
             <div class="information">
                    <h2>${name}, ${age}</h2>
                    <p class="bio">${bio}</p>
                </div>
        `
    }
    
    setBadgeHtml(){
        if(this.hasBeenSwiped){
            if(this.hasBeenLiked){
                return `<img src="images/badge-nope.png">`
            } else {
                return `<img src="images/badge-like.png">`
            } 
        } else{
            return ""
        }
    }
    
    getDogHtml(){
        return `
        <div class ="dog-card" id="dog-card">
            ${this.getDog()}
        </div>
        
        <div class="Badge-images">
            ${this.setBadgeHtml()}
        </div>
        
       `
    }
}

export default Dog