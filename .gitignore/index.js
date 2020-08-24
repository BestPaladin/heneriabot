const Discord = require('discord.js');
var bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN);

bot.on("ready", () => {
  console.log("Le bot de Heneria est allumé !");
  bot.user.setActivity("Serveur en développement");
});

bot.on('message', function (message) {
  if (message.content == '!recrutement') {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Postes restants')
    	.setDescription('Voici les postes restant dans l\'équipe d\'Heneria.')
		.setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
		.addField('Administrateurs : 1/3', 'Il est la personne chargée de superviser le projet et garde un droit de véto sur l\'ensemble.')
		.addField('Chefs de projets : 0/2', 'Il est la personne chargée de mener un projet et de gérer son bon déroulement.')
		.addField('Développeurs : 1/3', 'Il est la personne chargée de développer des plugins Minecraft, le bot discord et plus.')
		.addField('Modérateurs : 0/5', 'Il est la personne chargée de modérer l\'espace de discution sur Discord ou en jeu.')
    .addField('Builders : 0/2', 'Il est la personne chargée de faire des constructions pour les spawns, warzones, etc.');
    message.channel.send(embed);
  } else if (message.content == '!fiche') {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Comment bien faire sa demande de recrutement ?')
    	.setDescription('Voici la méthode à suivre pour faire sa demande de recrutement.')
		.setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
		.addField('1. Introduction', 'Dans ce paragraphe, vous devrez vous décrire sur le plan IRL comme sur le plan IG.')
		.addField('2. Poste désiré', 'Dans ce paragraphe, vous devrez formuler votre souhait pour le poste, expliquer ce choix et émettre vos compétences ainsi que votre expérience.')
		.addField('3. Qualités et défauts', 'Dans ce paragraphe, vous devrez nous donnez vos qualités et vos défauts humains.')
		.addField('4. Conclusion', 'Pour conclure, vous devrez résumer tous ce qui est dit au-dessus sans donner de précision.')
    	.setFooter('Vous devez en aucun cas divulger d\'informations personnels précises. (nom de famille, adresse postale, etc)');
    message.channel.send(embed);
  } else if (message.content == '!gen') {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Salon de discution général')
    	.setDescription('Vous vous trouvez dans un salon de discution entre les joueurs et le staff. Merci d\'y rester courtois.')
		.setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
		.addField('Avant d\'utilise ce salon, vous vous devez de lire le règlement officiel du serveur.', 'Le mode lent est activé pour éviter le spam.')
		.setFooter('Vous devez en aucun cas divulger d\'informations personnels précises. (nom de famille, adresse postale, etc)');
    message.channel.send(embed);
  } else if (message.content == '!gen-staff') {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Salon de discution staff')
    	.setDescription('Vous vous trouvez dans un salon de discution entre les membres du staff. Merci d\'y rester courtois.')
		.setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
		.addField('Avant d\'utilise ce salon, vous vous devez de lire le règlement officiel du staff sur le serveur.', '\u200B')
		.setFooter('Vous devez en aucun cas divulger d\'informations personnels précises. (nom de famille, adresse postale, etc)');
    message.channel.send(embed);
  } else if (message.content.startsWith("!suggestion ")) {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('RANDOM')
    	.setTitle('Suggestion de '+message.member.user.username)
		  .setThumbnail(message.author.displayAvatarURL())
		  .addField(message.content.substring(12), 'Vous pouvez débattre de cette suggestion en restant courtois dans le salon prévu à cet effet.');
    message.channel.send(embed);
  } else if (message.content.startsWith("!avis ")) {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('RANDOM')
    	.setTitle('Avis de '+message.member.user.username)
		.setThumbnail(message.author.displayAvatarURL())
		.addField(message.content.substring(6), 'Tout débat concernant cet avis n\'a pas lieu d\'être, c\'est un avis personnel.');
    message.channel.send(embed);
  } else if (message.content == "!sugg") {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Salon de suggestion et d\'avis')
		.setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
		.addField('Pour émmetre une suggestion, tapez \'!suggestion [message]\'', 'Les suggestions sont ouvertes aux débats.')
		.addField('Pour émmetre un avis personnel, tapez \'!avis [message]\'', 'Cet avis est personnel, aucun débat ne sera accepté.')
    	.setFooter('Vous serez sanctionné si vous n\'exprimez pas d\'arguments ou de détails, en particulier dans les avis.');
    message.channel.send(embed);
  } else if (message.content == "!règles") {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Règlement officiel du serveur')
    	.setDescription('Lors de la navigation dans l\'enceinte du serveur, le joueur s\'engage à avoir lu ce réglement.')
		.setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
		.addField('1. Basiques', 'a. Toutes menaces, insultes, propos à caractère sexiste, raciste, religieux et pornographique sera sanctionné.\nb. Toute usurpation d\'identité est interdite.\nc. Faire de la publicité sans l\'accord d\'un membre du staff sera également sanctionné.\nd. Les pseudos et les photos de profil sont soumis aux règles relatives a, b et c.\ne. Le serveur est considéré comme sur le territoire francais que vous y soyez ou non, la loi francaise et européenne y est ainsi appliquée.\nf. Toute contestation à une sanction autre qu\'auprès d\'un adminstrateur sera sanctionné.\ng. Toute personne nuisant à l\'ambiance de façon négative sera sanctionnée.')
		.addField('2. Dans les salons textuels', 'a. Une écriture correcte est exigée.\nb. Le language \"SMS\" est toléré sans abus.\nc. La mention d\'un grade sans raison valable entraînera une sanction.\nd. Le flood / spam sera gravement sanctionné.\ne. Le premier message d\'un salon et les messages épinglés sont considérés comme lus et acceptés.\nf. La pub MP et la provocation seront lourdement sanctionnés.')
    	.addField('3. Dans les salons vocaux', 'a. L\'entrée et la sortie avec une intervale de moins d\'une seconde sera sanctionnée.\nb. L\'ensemble des membres connectés au salon doivent être au courant si vous rentrez dans ce salon.\nc. L\'ensemble des membres connectés dans un salon doivent être d\'accord si vous souhaitez diffusez de la musique.')
    	.setFooter(' Vous pouvez questionner un membre du staff sur la sanction appliquée pour le non respect d\'une règle en particulier.');
    message.channel.send(embed);
    message.channel.send('Pour inviter vos amis (nous vous en remercions) : https://discord.gg/FVv8T3R');
  } else if (message.content == "!règles-sanctions") {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Règlement officiel du serveur avec sanctions')
    	.setDescription('Lors de la navigation dans l\'enceinte du serveur, le joueur s\'engage à avoir lu ce réglement.')
		.setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
		.addField('1. Basiques', 'a. Toutes menaces (1hM/B), insultes(30mM/B), propos à caractère sexiste(2hM/B), raciste(2hM/B), religieux (1hM/B) et pornographique (1h30mM/B) sera sanctionné.\nb. Toute usurpation d\'identité (W/2hM/B) est interdite.\nc. Faire de la publicité sans l\'accord d\'un membre du staff (W/1hM/2hM/B) sera également sanctionné.\nd. Les pseudos et les photos de profil sont soumis aux règles relatives a, b et c (M̂).\ne. Le serveur est considéré comme sur le territoire francais que vous y soyez ou non, la loi francaise et européenne y est ainsi appliquée (B).\nf. Toute contestation à une sanction autre qu\'auprès d\'un adminstrateur (W/1hM/B) sera sanctionné.\ng. Toute personne nuisant à l\'ambiance de façon négative (W/1h30/3h/B) sera sanctionnée.')
		.addField('2. Dans les salons textuels', 'a. Une écriture correcte (W/1hM/2hM/3hM/B) est exigée.\nb. Le language \"SMS\" est toléré sans abus (2xW/3x1hM/B).\nc. La mention d\'un grade sans raison valable (W/1h/3h/B) entraînera une sanction.\nd. Le flood / spam (2xW/3x1h/B) sera gravement sanctionné.\ne. Le premier message d\'un salon et les messages épinglés sont considérés comme lus et acceptés.\nf. La pub MP (2h/B) et la provocation (W/2h/B) seront lourdement sanctionnés.')
    	.addField('3. Dans les salons vocaux', 'a. L\'entrée et la sortie avec une intervale de moins d\'une seconde sera sanctionnée (p->3hM/B).\nb. L\'ensemble des membres connectés au salon doivent être au courant si vous rentrez dans ce salon (p->3hM/B).\nc. L\'ensemble des membres connectés dans un salon doivent être d\'accord si vous souhaitez diffusez de la musique (1hM/3hM/B).');
    message.channel.send(embed);
    message.channel.send("**Marques utilisées :**\n1e sanction/2e sanction/3e sanction/etc\n`W` : Avertissement\n`[]h()M` : Mute de [] heure(s) et () minute(s)\n`[]mM` : Mute de [] minutes\n`B` : Ban définitif\n`p->` : Preuve obligatoire\n**Vous devez signaler votre sanction dans le channel <#745932478270668820> avec la forme du message épinglé.**\nExemple : `W/30m/1h/2h30/B` -> Avertissement puis 30 minutes de mute puis 1 heure  de mute puis 1 heure et demi  de mute puis un ban")
  } else if (message.content == "!sanction") {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Salon de signalement des sanctions')
		.setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
    	.setDescription('Vous devez signaler chaque sanction effectué sur un joueur en renseignant le pseudo et l\'id du sanctionné, le motif de la sanction et la preuve.');
    message.channel.send(embed);
    message.channel.send("__Exemple :__\n**Pseudo du sanctionné :** TheDarkPlague\n**Id du sanctionné :** 559266874924335115\n**Motif de la sanction :** Spam\n**Sanction :** W (ou avertissement)\n**Preuve :**", {files: ["https://www.dropbox.com/s/jra121jfdxn6vn0/Preuve%20SPAM.png?dl=1"]})
  } else if (message.content == "!règles-staff") {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Règlement officiel du serveur en tant que staff')
    	.setDescription('En tant que STAFF sur le serveur Heneria, je m\'engage à respecter 3 règles simples.')
		  .setThumbnail('https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1')
		  .addField('1. Respecter le règlement officiel du serveur', 'Si jamais un acte de non respect de ce règlement est commis, un administrateur s\'ocuppera de vous sanctionner. Cette sanction peut aller d\'un simple avertissement à un dérank.')
		  .addField('2. Être présent', 'Ce n\'est peut-être pas facile pour tout le monde mais la présence est cruciale dans ce rôle. Malgrès tout, un dérank due à une inactivité est très rare.')
    	.addField('3. Signaler ses sanction sous 24h', 'Cela non plus ce n\'est pas simple mais aussi cruciale, si une sanction a été faite sur un joueur et que celle-ci n\'est pas répertoriée sous 24h, vous risquez un dérank.')
    	.setFooter('Ce sont 3 règles simples qu\'il faut absolument respecter en tant que staff sur le serveur.');
    message.channel.send(embed);
  } else if (message.content.startsWith('!annonce')) {
    message.delete();
    let rest_of_the_string = message.content.slice('!announce'.length); //removes the first part
    let array_of_arguments = rest_of_the_string.split(','); //[title, description]

    if(array_of_arguments.length != 2) return message.channel.send("Annonce incorrect (!annonce [titre],[description])");

    let embed = new Discord.MessageEmbed()
      .setTitle(array_of_arguments[0])
      .setDescription(array_of_arguments[1])
      .setThumbnail("https://www.dropbox.com/s/36tfibb77n9vbxz/logo.png?dl=1")
      .setColor(0xff0000)
      .setFooter(message.member.user.username)
      .setTimestamp();
    message.channel.send(embed);
  }
});

bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'arrivés');
  if (!channel) return;
  const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Bienvenue ' + member.user.username)
    	.setDescription('Soyez le bienvenue sur le serveur discord d\'Heneria !\nAvant de découvrir le serveur, n\'oubliez pas de lire le <#745833372231794689>.\nSi vous voulez faire une demande de recrutement dirigez-vous vers le salon <#745827900841787518>.\nBonne journée sur le serveur discord d\'Heneria !')
		.setThumbnail(member.user.avatarURL);
  channel.send(embed)
  const role = member.guild.roles.cache.find(rol => rol.name === 'Joueurs');
  member.roles.add(role);
});
