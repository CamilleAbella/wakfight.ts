import { TextChannel, Message, RichEmbed } from "discord.js"
import { Page } from "../interfaces/types";

// pagination
// s'auto-dédruit (effacement du message) au bout de 10 minutes
// peut se fermer avec une réaction croix

export default class Book {

    private message:Message
    private index:number = 0

    constructor(
        public channel:TextChannel,
        public title:string,
        public pages:Page[]
    ){}

    public async turn( toRight:boolean ): Promise<Message> {
        if(toRight){
            this.index ++
            if(this.index >= this.pages.length)
            this.index = 0
        }else{
            this.index --
            if(this.index < 0)
            this.index = this.pages.length - 1
        }
        return this.send()
    }

    public async send(): Promise<Message> {
        if(this.message) await this.message.edit(this.embed)
        else this.message = await this.channel.send(this.embed) as Message
        return this.message
    }

    public get embed(): RichEmbed {

        const page = this.page

        const embed = new RichEmbed()
            .setAuthor(this.title,this.channel.client.user.avatarURL)
            .setDescription(page.content)

        if(page.image)
        embed.setThumbnail(page.image)

        if(page.fields)
        for(const field of page.fields)
        embed.addField(field.name,field.value,field.inline)
        
        return embed
    }

    public get page(): Page {
        return this.pages[this.index]
    }

}