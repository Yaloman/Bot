
const config = require("./config");

const { Client, Intents, Permissions, MessageEmbed } = require("discord.js");


const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES],
});



client.config = config;



client.on("ready", async () => {
  console.log("Fetching members...");
  for (const [id, guild] of client.guilds.cache) {
    await guild.members.fetch();
  }
  console.log("Fetched members.");
  
  

  let guilds = await client.guilds.fetch({force: true})
  const memb = await guilds.members
  const MemberCount = await guilds.memberCount
  
  const channels = await guilds.channels
  
  
   
    console.log(`START UP LOG: \N\N MemberCount: ${MemberCount} \n ChannelCount: ${channels}`)
  

  console.log(`${memb}`)
 


  
  


  console.log(
    `Bot is ready. (${client.guilds.cache.size} Guilds - ${client.channels.cache.size} Channels - ${client.users.cache.size} Users)`,
  );

  client.user.setActivity(
    "Blackies",
    { type: "LISTENING" },
  );

  
});






client.on("messageCreate", async (message) => {

  if (message.author.bot) return;
  if (!message.channel.permissionsFor(message.guild.me).has(Permissions.FLAGS.SEND_MESSAGES)) {
    return;
  }


  const prefix = "!"
  

 
  const args = message.content
    .slice(prefix)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  
  if (command === "ping") {
    const roundtripMessage = await message.channel.send({ content: "Pong!" });
     roundtripMessage.edit(
      `*${roundtripMessage.createdTimestamp - message.createdTimestamp}ms*`,
    );

    const ch1 = await message.client.channels.fetch("1092080355026141205")

    if(ch1.isText()) {
      
    }
   

  }

  if(command === "shutdown") {
    

     await message.channel.send({
      content: "Shutting down...."
    })



   await client.destroy()
  }

  if(command === "server") {
    message.guild.name()
  }
});

// I tilfelle for error ellr noe
client.on("error", console.error);
client.on("warn", console.warn);

// Laste inn
client.login(config.token);