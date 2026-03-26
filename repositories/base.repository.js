class BaseRepository { 
    constructor(model) {
        this.model = model
    }
    
    async find(filters={}){
        return await this.model.find(filters)
    }
    async create(){}
    async update(){}
    async delete(){}
}

export default BaseRepository