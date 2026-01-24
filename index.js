(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    const ms = require("ms")
    let https = require("https")
    const S4D_APP_write = require('write');
    var eventEmitter = new events.EventEmitter();
    const S4D_APP_PKG_axios = require('axios')
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
    const S4D_WEBSITECREATION_EXPRESS = require('express')
const S4D_WEBSITECREATION_bodyParser = require('body-parser');
const S4D_WEBSITECREATION_cors = require('cors');
var S4D_WEBSITECREATION_path = require('path');
const S4D_WEBSITECREATION_EXPRESS_app = S4D_WEBSITECREATION_EXPRESS();
    const Database  = require("easy-json-database")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord.js'] = '^13.16.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.16.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord-logs'] = '^2.0.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    s4d.database = new Database('./database.json')

    // blockly code
    var temps_on, id_role_maintenance, membres_debut_jour, temps_on_min, id_role_mute, membre_parti, membre_nouveau, id_salon_log, temps_avant_bump, id_serveur, temps_on_beau, Aujourd_hui, nombre_starboard, id_salon_bienvenu, anecdote_1, id_role_modo, temps_on_court, heure_temps_on, id_salon_sanction, temps_on_jour, ann_C3_A9e;
    
    
    eventEmitter.on('jour', async => {
          s4d.client.channels.cache.get(id_salon_log).send({content:String((['#','\n',((s4d.client.guilds.cache.get(id_serveur)).memberCount) >= membres_debut_jour ? '🔼' : '🔽',' Résumé du jour :','\n','Membres au début de journée :**',membres_debut_jour,'\n','**Nombres de nouveaux membres :**',membre_nouveau,'\n','**Nombres d\'ancien membres :**',membre_parti,'\n','**Nombre de membres maintenant :**',(s4d.client.guilds.cache.get(id_serveur)).memberCount,'\n','**Résultat du jour :**',membre_nouveau + -membre_parti,'** membre(s).'].join('')))});
      membres_debut_jour = ((s4d.client.guilds.cache.get(id_serveur)).memberCount);
      membre_nouveau = 0;
      membre_parti = 0;
      Aujourd_hui = ((new Date().getDate()));
      anecdote_1 = 0;
    
      });
    
    s4d.client.on('messageReactionAdd', async (reaction,user) => {
      if ((reaction.emoji.name) != '⭐') {
        (reaction.message).react((reaction.emoji.name))
            }
    
    });
    
    s4d.client.on('messageReactionAdd', async (reaction,user) => {
      if ((reaction.emoji.name) == '⭐' && (reaction.count) >= nombre_starboard && !(String((reaction.users.cache.map(rec => rec))).includes(String('<@1369648140483039403>')))) {
        (s4d.client.guilds.cache.get('1199715873871638620')).channels.cache.get('1390255373943836744').send({content:String((['⭐ Message de **',((reaction.message).member.user).username,'** :','\n','> ',(reaction.message).content,'\n',['https://discord.com/channels/',id_serveur,'/',((reaction.message).channel).id,'/',(reaction.message).id].join('')].join('')))});
        (reaction.message).react((reaction.emoji.name))
            }
      if ((reaction.emoji.name) == '⭐' && (reaction.count) >= nombre_starboard && !(String((reaction.users.cache.map(rec => rec))).includes(String('<@1369648140483039403>')))) {
        (s4d.client.guilds.cache.get('1199715873871638620')).channels.cache.get('1390255373943836744').send({content:String((String(((reaction.message).attachments.at(Number(1) - 1)).url)))});
        (reaction.message).react((reaction.emoji.name))
            }
    
    });
    
    eventEmitter.on('min', async => {
          temps_on = temps_on + 1;
      temps_on_min = temps_on_min + 1;
      temps_avant_bump = temps_avant_bump - 1;
      if (temps_avant_bump == 0) {
        s4d.client.channels.cache.get('1199727716023414794').send({content:String((['<@&1451864854221815908>, vous pouvez bump !','\n','Fait </bump:947088344167366698> pour bump le serveur.'].join('')))});
      }
      if (((new Date().getUTCHours())) == 17 && anecdote_1 == 0) {
        eventEmitter.emit('anectdote');
        anecdote_1 = 1;
      }
      if (temps_on_min == 60) {
        heure_temps_on = heure_temps_on + 1;
        temps_on_min = 0;
      }
      if (heure_temps_on == 24) {
        temps_on_jour = temps_on_jour + 1;
        heure_temps_on = 0;
      }
      temps_on_beau = [temps_on_min,' minutes, ',heure_temps_on,' heures et ',temps_on_jour,' jours'].join('');
      temps_on_court = [temps_on_min,'m ',heure_temps_on,'h ',temps_on_jour,'j'].join('');
      console.log(('Allumé depuis ' + String(temps_on_beau)));
      if (((new Date().getFullYear())) != ann_C3_A9e) {
        (s4d.client.guilds.cache.get(id_serveur)).roles.create({ name: ann_C3_A9e,color:'#ffffff' });
        ann_C3_A9e = ((new Date().getFullYear()));
        s4d.client.channels.cache.get('1312773834415276104').send({content:String('bonne annannée ')});
      }
      if (temps_on_jour >= 7) {
        console.log('En attendant de 4h du matin pour redémarrer ');
        if (((new Date().getHours())) + 2 == 4) {
          s4d.client.channels.cache.get(id_salon_log).send({content:String((['#','\n','Redémarrage du bot...'].join('')))});
          S4D_APP_PKG_axios({
                  method: "get",
                  url: (process.env[String('render')]),
    
                  headers: {
    
                  },
    
                })
                .then(async (response) => {
                    console.log('Redémarrage en cours...');
            s4d.client.channels.cache.get('1413899996691955755').send({content:String('Redémarrage en cours...(Automatique 7 jours)')});
    
                })
                .catch(async (err) => {
                    console.log((err));
    
                });
              temps_on_jour = 0;
        }
      }
      if (Aujourd_hui != ((new Date().getDate()))) {
        eventEmitter.emit('jour');
      }
    
      });
    
    eventEmitter.on('anectdote', async => {
          s4d.client.channels.cache.get('1456601685760938077').permissionOverwrites.edit(((s4d.client.guilds.cache.get(id_serveur)).roles.cache.get('1199727151721746555')), { SEND_MESSAGES: true });s4d.client.channels.cache.get('1456601685760938077').send({content:String('C\'est l\'heure de l\'<@&1456604350536220745> !')});
    
      });
    
    await s4d.client.login((process.env[String('TOKEN')])).catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    s4d.client.on('ready', async () => {
      id_role_maintenance = '1305546306399244399';
      id_role_mute = '1349476144872820747';
      id_salon_log = '1200526723347922986';
      id_serveur = '1199715873871638620';
      id_salon_bienvenu = '1199718873927270524';
      id_role_modo = '1275442929175105577';
      id_salon_sanction = '1369377323757080587';
      nombre_starboard = 2;
      temps_on = 0;
      ann_C3_A9e = 0;
      ann_C3_A9e = ((new Date().getFullYear()));
      heure_temps_on = 0;
      temps_on_min = 0;
      temps_on_jour = 0;
      temps_on_beau = 'Viens de s\'allumer...';
      temps_on_court = 'démarrage';
      membres_debut_jour = ((s4d.client.guilds.cache.get(id_serveur)).memberCount);
      membre_nouveau = 0;
      membre_parti = 0;
      Aujourd_hui = ((new Date().getDate()));
      temps_avant_bump = 120;
      anecdote_1 = 0;
      S4D_APP_PKG_axios({
              method: "get",
              url: (process.env[String('render_bot_2')]),
    
              headers: {
    
              },
    
            })
            .then(async (response) => {
    
            })
            .catch(async (err) => {
                console.log((err));
    
            });
    
    });
    
    synchronizeSlashCommands(s4d.client, [
      {
          name: 'restart',
      		description: 'Redémarrer le bot',
      		options: [
    
          ]
      },{
          name: 'say',
      		description: 'Envoyez un message grâce au bot',
      		options: [
              {
            type: 3,
        	name: 'message',
            required: true,
        	description: 'message a envoye',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'serveur',
      		description: 'Obtenez des informations sur le serveur.',
      		options: [
    
          ]
      },{
          name: 'help',
      		description: 'Obtenez toutes les commandes du bot',
      		options: [
    
          ]
      },{
          name: 'heures',
      		description: 'Obtenez l\'heures et la date',
      		options: [
    
          ]
      },{
          name: 'ping',
      		description: 'Pong!',
      		options: [
    
          ]
      },{
          name: 'statut',
      		description: 'Voit le statut du bot',
      		options: [
    
          ]
      },{
          name: '51966',
      		description: 'Voit par toi même',
      		options: [
    
          ]
      },{
          name: 'maintenance-on',
      		description: 'maintenance',
      		options: [
              {
            type: 3,
        	name: 'raison',
            required: true,
        	description: 'Pouquoi ?',
            choices: [
    
            ]
        },
          ]
      },{
          name: 'maintenance-off',
      		description: 'arrête la maintenance',
      		options: [
    
          ]
      },{
          name: 'report',
      		description: 'Signaler un message problématique au staff',
      		options: [
              {
            type: 3,
        	name: 'lien',
            required: true,
        	description: 'Le lien message problematique',
            choices: [
    
            ]
        },
          ]
      },
    ],{
        debug: false,
    
    });
    
    /* IMPORTED - S4D Website Hosting Dependencies */
    let S4D_APP_WEBSITE_HOSTING_PORT = 8080
    
    S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_cors());
    S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_bodyParser.urlencoded({
        extended: false
    }));
    S4D_WEBSITECREATION_EXPRESS_app.use(S4D_WEBSITECREATION_bodyParser.json());
    
      S4D_WEBSITECREATION_EXPRESS_app.all('/ping', async function(req, res) {
          res.send(String((String(s4d.client.ws.ping) + 'ms ping.')))
    
      })
      S4D_WEBSITECREATION_EXPRESS_app.all('/heures', async function(req, res) {
          res.send(String(([((new Date().getHours())) + 2,'h',(new Date().getMinutes()),'min',(new Date().getSeconds()),'s','  | Bot créé en ','2025-',(new Date().getFullYear())].join(''))))
    
      })
      S4D_WEBSITECREATION_EXPRESS_app.all('/', async function(req, res) {
          S4D_APP_write.sync(String('home.html'), String(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html>
        <head>
        <title>~~==Bienvenue sur Ma Super Page Web!==~~</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
        </head>
    
        <body bgcolor="#000080" text="#FFFFFF" link="#FFFF00" vlink="#FF00FF" alink="#FF0000" background="https://www.gwenael.org/IMG/jpg/informatique-texture-fond-ecran-bleu.jpg">
    
        <table width="760" border="1" align="center" cellpadding="10" cellspacing="0" bgcolor="#000033">
          <tr>
            <td colspan="2">
              <h1 align="center">
                <font face="Comic Sans MS, cursive" color="#00FF00" size="+4">
                  ~~==** Bienvenue sur Mon Super Site Perso !! **==~~
                </font>
              </h1>
    
            </td>
          </tr>
          <tr valign="top">
            <td width="150" bgcolor="#333399">
              <p><font face="Arial, Helvetica, sans-serif" size="-1"><b><u>Menu Principal</u></b></font></p>
              <ul>
                <li><a href="https://botttttte.onrender.com/ping">Ping du bot</a></li>
                <li><a href="https://botttttte.onrender.com/on">Temps allumé</a></li>
                <li><a href="https://botttttte.onrender.com/nitro">Nitro</a></li>
                <li><a href="https://botttttte.onrender.com/51966">51966</a></li>
                <li><a href="https://botttttte.onrender.com/discord">Discord</a></li>
                <li><a href="https://botttttte.onrender.com/heures">L'heure</a></li>
                <li><a href="https://botttttte.onrender.com/statut">Statut</a></li>
              </ul>
              <hr>
              <p align="center">
                <img src="https://i.gifer.com/origin/c8/c837651066d628833d74c83b7f141416_w200.gif" width="80">
                <br>
                <font size="-2" face="Courier New, Courier, mono">Mon site est optimisé pour Netscape Navigator 4.0 !</font>
              </p>
            </td>
            <td width="610" bgcolor="#000066">
              <h2><font face="Georgia, Times New Roman, Times, serif">Salut à tous les surfeurs du web !</font></h2>
              <p><font face="Comic Sans MS, cursive">Bienvenue sur mon tout nouveau site perso. C'est ici que je vais partager avec vous toutes mes passions, mes photos de vacances et mes pensées les plus profondes. N'oubliez pas de laisser un petit mot dans mon livre d'or avant de partir !</font></p>
              <p><font face="Comic Sans MS, cursive">Ce site est actuellement en construction, alors revenez souvent pour voir les nouveautés !</font></p>
              <p align="center">
    
              </p>
              <hr>
              <h3><font face="Georgia, Times New Roman, Times, serif">Dernières nouvelles :</font></h3>
              <marquee behavior="scroll" direction="left" scrollamount="4">
                <font color="#FFFF00">*** GRANDE NOUVELLE : J'ai enfin eu une connexion 56k ! Le téléchargement va plus vite maintenant ! *** Prochainement : une section blagues ! ***</font>
              </marquee>
              <br>
              <p align="center">
                <font size="-1">2025</font><br>
                <a href="mailto:monemail@aol.com">
                  <img src="`), { overwrite: true });res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String('home.html')))
    
      })
      S4D_WEBSITECREATION_EXPRESS_app.all('/on', async function(req, res) {
          S4D_APP_write.sync(String('on.html'), String(([`<!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Temps de fonctionnement du bot</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    text-align: center;
                }
                .container {
                    background-color: #fff;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #555;
                    font-size: 1.5em;
                }
                .uptime-value {
                    font-size: 3em;
                    font-weight: bold;
                    color: #28a745;
                }
                .unit {
                    font-size: 1em;
                    color: #777;
                }
            </style>
        </head>
        <body>
    
            <div class="container">
                <h1>Temps de fonctionnement du bot</h1>
                <p class="uptime-value">
        </html>`,temps_on_beau,`</p>
                <p class="unit"> </p>
            </div>
    
        </body>
        </html>`].join(''))), { overwrite: true });res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String('on.html')))
    
      })
      S4D_WEBSITECREATION_EXPRESS_app.all('/statut', async function(req, res) {
          S4D_APP_write.sync(String('statutt.html'), String(`<!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Statut</title>
            <style>
                /* Styles pour que la page remplisse l'écran */
                body, html {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    overflow: hidden; /* Empêche les barres de défilement */
                }
            </style>
        </head>
        <body>
    
            <iframe
                src="https://antoine.betteruptime.com"
                style="width: 100%; height: 100vh; border: none;">
            </iframe>
    
        </body>
        </html>`), { overwrite: true });res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String('statutt.html')))
    
      })
      S4D_WEBSITECREATION_EXPRESS_app.all('/nitro', async function(req, res) {
          S4D_APP_write.sync(String('nitro.html'), String(`<!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Free Nitro !</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #000000;
                    color: #333;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    text-align: center;
                }
                .container {
                    background-color: #888;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 500px;
                    width: 90%;
                }
                h1 {
                    color: #555;
                }
                .message {
                    font-size: 1.2em;
                    margin-bottom: 20px;
                }
                #obtainButton {
                    background-color: #f47fff;
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    transition: background-color 0.3s;
                }
                #obtainButton:hover {
                    background-color: #218838;
                }
                #video-container {
                    margin-top: 20px;
                    display: none; /* Cache le conteneur de la vidéo par défaut */
                }
                video {
                    width: 100%;
                    border-radius: 8px;
                }
            </style>
        </head>
        <body>
    
            <div class="container">
                <h1>Free nitro ici !!!</h1>
                <p class="message">C'est gratuit et pour tout le monde !!!!</p>
                <button id="obtainButton">Obtenir le nitro !</button>
    
                <div id="video-container">
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1111709526?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
    
            <script>
                document.getElementById('obtainButton').addEventListener('click', function() {
                    const videoContainer = document.getElementById('video-container');
                    const videoElement = document.getElementById('surpriseVideo');
    
                    // Affiche le conteneur de la vidéo
                    videoContainer.style.display = 'block';
    
                    // Met à jour la vidéo pour qu'elle puisse se lancer automatiquement
                    // Important : certains navigateurs modernes exigent le son coupé (muted) pour l'autoplay
                    videoElement.muted = false;
                    videoElement.play().catch(error => {
                        // Gestion de l'erreur si la lecture automatique est bloquée
                        console.error('La lecture automatique a été bloquée :', error);
                    });
    
                    // Optionnel : masquer le bouton après le clic
                    this.style.display = 'none';
                });
            </script>
    
        </body>
        </html>`), { overwrite: true });res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String('nitro.html')))
    
      })
      S4D_WEBSITECREATION_EXPRESS_app.all('/discord', async function(req, res) {
          S4D_APP_write.sync(String('discord.html'), String(`<!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Redirection en cours...</title>
            <meta http-equiv="refresh" content="3; url=https://discord.gg/95twM4Rked">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f2f5;
                    color: #333;
                    text-align: center;
                }
                .container {
                    background-color: #fff;
                    padding: 2rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                p {
                    font-size: 1rem;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Redirection en cours...</h1>
                <p>Veuillez patienter, vous allez être redirigé vers une nouvelle page.</p>
                <p>Si la redirection ne se fait pas, <a href="https://discord.gg/95twM4Rked">cliquez ici</a>.</p>
            </div>
        </body>
        </html>`), { overwrite: true });res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String('discord.html')))
    
      })
      S4D_WEBSITECREATION_EXPRESS_app.all('/51966', async function(req, res) {
          S4D_APP_write.sync(String('51966.html'), String(`<!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Qué cé cé</title>
            <style>
                body {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    background-color: #f0f0f0;
                    color: #333;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    text-align: center;
                }
    
                .container {
                    background-color: #fff;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    width: 90%;
                    transition: transform 0.3s ease-in-out;
                }
    
                .container:hover {
                    transform: translateY(-5px);
                }
    
                h1 {
                    font-size: 3rem;
                    color: #4CAF50;
                    margin-bottom: 20px;
                }
    
                .number {
                    font-size: 4rem;
                    font-weight: bold;
                    color: #d9534f;
                    margin-bottom: 20px;
                }
    
                .button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 12px 24px;
                    font-size: 1.1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
    
                .button:hover {
                    background-color: #0056b3;
                }
    
                .fun-fact-content {
                    display: none; /* Cache le contenu par défaut */
                    margin-top: 30px;
                    animation: fadeIn 1s ease-in-out;
                }
    
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
    
                p {
                    font-size: 1.2rem;
                    line-height: 1.6;
                }
    
                strong {
                    color: #d9534f;
                }
            </style>
        </head>
        <body>
    
            <div class="container">
                <h1>C'est quoi</h1>
                <div class="number">51966 ?</div>
    
                <button id="revealButton" class="button">Cliquez pour le découvrir (no rick roll promis)</button>
    
                <div id="funFactContent" class="fun-fact-content">
                    <p>
                        Saviez-vous que le nombre <strong>51966</strong>, en base 10 (décimal), est en fait un mot ?
                    </p>
                    <p>
                        En informatique, le système de base 16 (hexadécimal) utilise des chiffres de 0 à 9 et des lettres de A à F.
                    </p>
                    <p>
                        Lorsque vous convertissez 51966 en base 16, vous obtenez le mot <strong>CAFE</strong> !
                    </p>
                </div>
            </div>
    
            <script>
                document.getElementById('revealButton').addEventListener('click', function() {
                    document.getElementById('funFactContent').style.display = 'block';
                    this.style.display = 'none'; // Cache le bouton après le clic
                });
            </script>
    
        </body>
        </html>`), { overwrite: true });res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String('51966.html')))
    
      })
      S4D_WEBSITECREATION_EXPRESS_app.use(function(req, res) {
          S4D_APP_write.sync(String('404.html'), String(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 Tu es au mauvais endroit !</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    text-align: center;
                }
                .container {
                    padding: 2rem;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    max-width: 500px;
                    width: 90%;
                }
                h1 {
                    font-size: 5rem;
                    margin: 0;
                    color: #d9534f;
                }
                h2 {
                    font-size: 1.5rem;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
                p {
                    font-size: 1rem;
                    margin-bottom: 2rem;
                }
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 1rem;
                    color: #fff;
                    background-color: #5cb85c;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                .button:hover {
                    background-color: #4cae4c;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>404</h1>
                <h2>Page non trouvée</h2>
                <p>
                    Désolé, la page que vous recherchez est introuvable. Il se peut qu'elle ait été supprimée ou que son nom ait changé.
                </p>
                <a href="https://botttttte.onrender.com/" class="button">Homrpage</a>
            </div>
        </body>
        </html>`), { overwrite: true });res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String('404.html')))
    
      })
    
    
    S4D_WEBSITECREATION_EXPRESS_app.listen(S4D_APP_WEBSITE_HOSTING_PORT);
    s4d.client.on('messageCreate', async (s4dmessage) => {
            if (s4dmessage.author.bot) {
                return;
            }
              if ((s4dmessage.content) == '!date') {
        (s4dmessage.channel).sendTyping();
            s4dmessage.reply({content:String((['Il est **',((new Date().getHours())) + 2,'**h**',(new Date().getMinutes()),'**.','\n','-# Nous sommes le **',(new Date().getDate()),'**/**',((new Date().getMonth())) + 1,'**/**',(new Date().getFullYear()),'**.'].join(''))), allowedMentions: {
                repliedUser: false
            }});
      }
      if ((s4dmessage.content) == '!ping') {
        (s4dmessage.channel).sendTyping();
            s4dmessage.reply({content:String((['Pong 🏓','\n','-# Ma latence est de **',s4d.client.ws.ping,'**ms. Le bot est en ligne depuis **',temps_on_beau,'**.'].join(''))), allowedMentions: {
                repliedUser: false
            }});
      }
      if ((s4dmessage.content) == '!help' || (String((s4dmessage.content)).includes(String('<@1369648140483039403>')))) {
        (s4dmessage.channel).sendTyping();
            s4dmessage.reply({content:String((['### Commande sans permission.','\n','``/report`` - Signaler un message.','\n','``!serveur`` - Obtenez des informations sur le serveur.','\n','``!help`` - Obtenez les commande du bot.','\n','``!date`` - Obtenez l\'heure.','\n','``!ping`` - Obtenez la latence du bot.','\n','### Commande avec les permission administrateur.','\n','``!say`` - Envoyez un message si vous êtes administrateur.','\n','-# Bot créé par **',(s4d.client.users.cache.get(String('746069923465527339'))).username,'**.'].join(''))), allowedMentions: {
                repliedUser: false
            }});
      }
      if ((s4dmessage.content) == '!serveur') {
        (s4dmessage.channel).sendTyping();
            s4dmessage.reply({content:String((['Le serveur **',(s4dmessage.guild).name,'** créé par **',(s4d.client.users.cache.get(String((String((s4dmessage.guild).ownerId))))).username,'** à **',(s4dmessage.guild).memberCount,'** membres.','\n','-# Le serveur a était créé <t:',Math.floor(((s4dmessage.guild).createdAt).getTime()/1000),':R>.'].join(''))), allowedMentions: {
                repliedUser: false
            }});
      }
      if (String((s4dmessage.content)).includes(String('Ok'))) {
        (s4dmessage).react('🆗')
            }
      if ((String((s4dmessage.content)).includes(String('Slt'))) || (String((s4dmessage.content)).includes(String('Bjr'))) || (String((s4dmessage.content)).includes(String('Yo'))) || (String((s4dmessage.content)).includes(String('Hey'))) || (String((s4dmessage.content)).includes(String('Salut'))) || (String((s4dmessage.content)).includes(String('Bonjour'))) || (String((s4dmessage.content)).includes(String('Bienvenue')))) {
        (s4dmessage).react('👋')
            }
      if (((s4dmessage.channel).id) == '1456601685760938077' && !((s4dmessage.author).bot)) {
        s4d.client.channels.cache.get('1456601685760938077').permissionOverwrites.edit(((s4d.client.guilds.cache.get(id_serveur)).roles.cache.get('1199727151721746555')), { SEND_MESSAGES: false });s4d.client.channels.cache.get('1456601685760938077').messages.fetch({ limit: 2 }).then(async (last_messages_in_channel) => {
              if ('1369648140483039403' == (((last_messages_in_channel.at(2 - 1)).author).id)) {
            (last_messages_in_channel.at(2 - 1)).delete()
                }
    
        });
      }
    
        });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (((s4dmessage.channel).id) == '1434169035842519112') {
        s4dmessage.delete();
        (s4dmessage.author).send({content:String((['**Vous avez été banni** car vous avez envoyé un message dans le salon lien.','\n','Vous êtes considérait comme un bot.'].join('')))});
        (s4dmessage.guild).members.ban((s4dmessage.author), { reason: String('un bot.') })
      }
      if ((s4dmessage.author.id) == '302050872383242240') {
        (s4dmessage.channel).sendTyping();
            s4dmessage.delete();
        (s4dmessage.channel).send({content:String(([' Merci d\'avoir bump le serveur !','\n','[Donnez votre avis sur le serveur discord](https://disboard.org/fr/review/create/1199715873871638620).'].join('')))});
        temps_avant_bump = 121;
      }
      if (s4d.client.channels.cache.get('1408798931219120269') == (s4dmessage.channel) && 'null' == (String((s4dmessage).embeds[0].description))) {
        s4d.client.channels.cache.get('1374039978404741250').send({content:String((['**Aujourd\'hui, <t:',Math.floor(new Date().getTime()/1000),':D>** :','\n','**',String((s4dmessage).embeds[0].title),'**'].join('')))});
      } else if (s4d.client.channels.cache.get('1408798931219120269') == (s4dmessage.channel)) {
        s4d.client.channels.cache.get('1374039978404741250').send({content:String((['-# ||<@&1407026953726328893>||','\n','**Aujourd\'hui, <t:',Math.floor(new Date().getTime()/1000),':D>** :','\n','##','\n',String((s4dmessage).embeds[0].title),'\n','**',String((s4dmessage).embeds[0].description),'**'].join('')))});
      }
      if ((s4dmessage.author.id) == '338222603829510164' && !((s4dmessage).embeds != null && (s4dmessage).embeds.length > 0) && ((s4dmessage.channel).id) != '1200526723347922986') {
        s4dmessage.channel.send({content:String((s4dmessage.content))});
        s4dmessage.delete();
      }
    
    });
    
    s4d.client.on('guildMemberRemove', async (param1) => {
    s4d.leavingMember = param1;
      if ((s4d.leavingMember.guild) == id_serveur) {
        membre_parti = membre_parti + 1;
        s4d.client.user.setPresence({status: "idle",activities:[{name:([(s4d.client.guilds.cache.get(id_serveur)).memberCount,' membres - ',temps_on,'min.'].join('')),type:"WATCHING"}]});
        s4d.client.channels.cache.get(id_salon_log).send({content:String(([s4d.leavingMember.user,' (',(s4d.leavingMember.user).username,') est partie du serveur.','\n','-# il nous laisse avec **',(s4d.leavingMember.guild).memberCount,'** membres.'].join('')))});
      }
    s4d.leavingMember = null
    });
    
    s4d.client.on('interactionCreate', async (interaction) => {
              if ((interaction.commandName) == 'ping') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: (['Pong 🏓','\n','-# Ma latence est de **',s4d.client.ws.ping,'**ms. Le bot est en ligne depuis **',temps_on_beau,'**.'].join('')), ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == 'heures') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: (['Il est **',((new Date().getHours())) + 2,'**h**',(new Date().getMinutes()),'**.','\n','-# Nous sommes le **',(new Date().getDate()),'**/**',((new Date().getMonth())) + 1,'**/**',(new Date().getFullYear()),'**.'].join('')), ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == 'say' && ((interaction.member).id) == ((s4d.client.users.cache.get(String('746069923465527339'))).id)) {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: 'Message envoyé.', ephemeral: true, components: [] });
        (interaction.channel).send({content:String((interaction.options.getString('message')))});
      } else if ((interaction.commandName) == 'say' && ((interaction.member).id) != ((s4d.client.users.cache.get(String('746069923465527339'))).id)) {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: 'Vous n\'avez pas les permission.', ephemeral: true, components: [] });
      }
      if ((interaction.commandName) == 'serveur') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: (['Le serveur **',(interaction.guild).name,'** créé par **',(s4d.client.users.cache.get(String((String((interaction.guild).ownerId))))).username,'** à **',(interaction.guild).memberCount,'** membres.','\n','-# Le serveur a était créé <t:',Math.floor(((interaction.guild).createdAt).getTime()/1000),':R>.'].join('')), ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == 'help') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: (['### Commande sans permission.','\n','``/report`` - Signaler un message.','\n','``!serveur`` - Obtenez des informations sur le serveur.','\n','``!help`` - Obtenez les commande du bot.','\n','``!date`` - Obtenez l\'heure.','\n','``!ping`` - Obtenez la latence du bot.','\n','### Commande avec les permission administrateur.','\n','``!say`` - Envoyez un message si vous êtes administrateur.','\n','-# Bot créé par **',(s4d.client.users.cache.get(String('746069923465527339'))).username,'**.'].join('')), ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == 'statut') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: '[Ma page de statut](https://botttttte.onrender.com/statut).', ephemeral: false, components: [] });
      }
      if ((interaction.commandName) == '51966') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: '[51966 c\'est pas par hasard !](https://botttttte.onrender.com/51966)', ephemeral: true, components: [] });
      }
      if ((interaction.commandName) == 'report') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: ('Le message à été signalé au staff. ' + String(interaction.options.getString('lien'))), ephemeral: true, components: [] });
        s4d.client.channels.cache.get('1275519873086259322').send({content:String(([interaction.member,' à signaler un message :',interaction.options.getString('lien')].join('')))});
      }
      if ((interaction.commandName) == 'maintenance-on') {
        if ((interaction.member)._roles.includes((id_serveur.roles.cache.get(id_role_modo)).id)) {
          id_salon_log.send({content:String((['Le serveurs est en maintenance car **',interaction.options.getString('raison'),'**.','\n','La maintenance à été activé par ',interaction.member,'**.'].join('')))});
          // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: 'maintenance activé...', ephemeral: false, components: [] });
          s4d.database.set(String('maintenance'), 'on');
          (interaction.guild).members.cache.forEach(async m =>{
                     (m).roles.add(((interaction.guild).roles.cache.get(id_role_maintenance)));
    
                  })
                  } else {
          // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: 'Tu n\'a pas la permission.', ephemeral: true, components: [] });
        }
      }
      if ((interaction.commandName) == 'maintenance-off') {
        if ((interaction.member)._roles.includes((id_serveur.roles.cache.get(id_role_modo)).id)) {
          // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: 'maintenance  off', ephemeral: false, components: [] });
          s4d.database.set(String('maintenance'), 'off');
          (interaction.guild).members.cache.forEach(async m =>{
                     (m).roles.remove(((interaction.guild).roles.cache.get(id_role_maintenance)));
    
                  })
                  } else {
          // true - only the person who t=did the comamnd can see it
          //
          // false - everyone can see it
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          await interaction.reply({ content: 'Tu n\'a pas la permission.', ephemeral: true, components: [] });
        }
      }
      if ((interaction.commandName) == 'restart' && ((interaction.member).id) == '746069923465527339') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: 'Redémarrage en cours...', ephemeral: true, components: [] });
        S4D_APP_PKG_axios({
                method: "get",
                url: (process.env[String('render')]),
    
                headers: {
    
                },
    
              })
              .then(async (response) => {
                  console.log('Redémarrage en cours...');
          s4d.client.channels.cache.get('1413899996691955755').send({content:String('Redémarrage en cours...(Commande /)')});
    
              })
              .catch(async (err) => {
                  console.log((err));
    
              });
            } else if ((interaction.commandName) == 'restart' && ((interaction.member).id) != '746069923465527339') {
        // true - only the person who t=did the comamnd can see it
        //
        // false - everyone can see it
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        await interaction.reply({ content: 'Hop hop hop ! Redémarre pas mon bot, stp.', ephemeral: true, components: [] });
      }
    
        });
    
    s4d.client.on('ready', async () => {
      s4d.client.channels.cache.get('1413899996691955755').send({content:String('Démarrage du bot...')});
    
              while(s4d.client && s4d.client.token) {
                  await delay(50);
                    await delay(Number(60)*1000);
        eventEmitter.emit('min');
    
                  console.log('ran')
              }
    
    });
    
    s4d.client.on('guildMemberAdd', async (param1) => {
    s4d.joiningMember = param1;
      if ((s4d.joiningMember.guild) == id_serveur) {
        membre_nouveau = membre_nouveau + 1;
        if (s4d.database.get(String('maintenance')) == 'on') {
          (s4d.joiningMember).roles.add(((s4d.client.guilds.cache.get(id_serveur)).roles.cache.get(id_role_maintenance)));
        }
        s4d.client.channels.cache.get(id_salon_bienvenu).send({content:String((['Salut **',(s4d.joiningMember.user).username,'**, bienvenue sur le serveur !','\n','-# Il y a **',(s4d.client.guilds.cache.get(id_serveur)).memberCount,'** membres.'].join('')))});
        s4d.client.channels.cache.get(id_salon_log).send({content:String(([s4d.joiningMember.user,' à rejoint le serveur','\n','-# Il y a **',(s4d.client.guilds.cache.get(id_serveur)).memberCount,'** membres.'].join('')))});
        s4d.client.user.setPresence({status: "idle",activities:[{name:([(s4d.client.guilds.cache.get(id_serveur)).memberCount,' membres - ',temps_on,'min.'].join('')),type:"WATCHING"}]});
      }
    s4d.joiningMember = null
    });
    
    s4d.client.on('guildBanAdd', async (ban) => {
       s4d.client.channels.cache.get('1369377323757080587').send({content:String((['L\'utilisateur <@',String(ban.user.id),'> (',ban.user.username,') à été **banni**.'].join('')))});
    
     });
    
    s4d.client.on('ready', async () => {
    
              while(s4d.client && s4d.client.token) {
                  await delay(50);
                    if ([(new Date().getDate()),'/',((new Date().getMonth())) + 1].join('') == '1/4') {
          s4d.client.user.setActivity('Error!', {
                   type: "STREAMING",
                    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'});
                    console.log((err));
          await delay(Number(500)*1000);
        } else if ([(new Date().getDate()),'/',((new Date().getMonth())) + 1].join('') != '1/4') {
          s4d.client.channels.cache.get('1387514903778295940').send({content:String((['Pong 🏓','\n','-# Ma latence est de **',s4d.client.ws.ping,'**ms. Le bot est en ligne depuis **',temps_on_beau,'**.'].join('')))});
          s4d.client.user.setPresence({status: "dnd",activities:[{name:([(s4d.client.guilds.cache.get(id_serveur)).memberCount,' membres - ',temps_on_court,'.'].join('')),type:"WATCHING"}]});
          await delay(Number(30)*1000);
          s4d.client.channels.cache.get('1411675609809289236').setName(('2024-' + String((new Date().getFullYear()))))
              await delay(Number(30)*1000);
          s4d.client.user.setPresence({status: "online",activities:[{name:([(s4d.client.guilds.cache.get(id_serveur)).channels.cache.get('1266707172373434369').name,' - ',(s4d.client.guilds.cache.get(id_serveur)).channels.cache.get('1266707102030893158').name].join('')),type:"PLAYING"}]});
          await delay(Number(30)*1000);
          s4d.client.user.setPresence({status: "online",activities:[{name:([(s4d.client.guilds.cache.get(id_serveur)).channels.cache.get('1276570331204550658').name,' - ',(s4d.client.guilds.cache.get(id_serveur)).channels.cache.get('1266706833431728199').name].join('')),type:"PLAYING"}]});
          await delay(Number(30)*1000);
          s4d.client.user.setPresence({status: "online",activities:[{name:([(s4d.client.guilds.cache.get(id_serveur)).channels.cache.get('1266707010385346641').name,' - ',(s4d.client.guilds.cache.get(id_serveur)).channels.cache.get('1266706921331884035').name].join('')),type:"PLAYING"}]});
          await delay(Number(30)*1000);
          s4d.client.user.setPresence({status: "online",activities:[{name:([(s4d.client.guilds.cache.get(id_serveur)).channels.cache.get('1266706921331884035').name,' - ',(s4d.client.guilds.cache.get(id_serveur)).channels.cache.get('1333084501739438131').name].join('')),type:"PLAYING"}]});
          await delay(Number(30)*1000);
        }
    
                  console.log('ran')
              }
    
    });
    
    s4d.client.on('messageDelete', async (s4dmessage) => {
      if ('302050872383242240' != ((s4dmessage.member.user).id)) {
        s4d.client.channels.cache.get(id_salon_log).send({content:String((['Le message de **',(s4dmessage.member.user).username,'** à été supprimer, son message :`',s4dmessage.content,'` dans le salon <#',(s4dmessage.channel).id,'>.'].join('')))});
      }
    
    });
    
    s4d.client.on('channelCreate', async (channel) => {
      (channel).permissionOverwrites.edit(((s4d.client.guilds.cache.get(id_serveur)).roles.cache.get(id_role_mute)), { SEND_MESSAGES: false });(channel).permissionOverwrites.edit(((s4d.client.guilds.cache.get(id_serveur)).roles.cache.get(id_role_maintenance)), { VIEW_CHANNEL: false });
    });
    
    s4d.client.on('messageUpdate', async (oldMessage, newMessage) => {
        s4dmessage = newMessage
          s4d.client.channels.cache.get(id_salon_log).send({content:String((['**',((newMessage).author).username,'** à modifier son message :`',(oldMessage).content,'` en `',(newMessage).content,'` dans le salon https://discord.com/channels/1199715873871638620/',(newMessage.channel).id,'/',(newMessage).id,'.'].join('')))});
    
    });
    
    s4d.client.on("guildMemberBoost",async (member) => {
      s4d.client.channels.cache.get('1199715874370769028').send({content:String((['Nouveau boost sur le serveur !','\n','Merci à ',member,' d\'avoir booster le serveur !','\n','-# Le serveur à **',(s4d.client.guilds.cache.get(id_serveur)).premiumSubscriptionCount,'** boost.'].join('')))});
      s4d.client.channels.cache.get('1278050036227244055').send({content:String((['Nouveau boost sur le serveur !','\n','Merci à ',member,' d\'avoir booster le serveur !','\n','-# Le serveur à **',(s4d.client.guilds.cache.get(id_serveur)).premiumSubscriptionCount,'** boost.'].join('')))});
    
    });
    
    return s4d
})();