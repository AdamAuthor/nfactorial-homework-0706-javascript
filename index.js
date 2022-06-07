#!/usr/bin/env node

/**
 * DalidaTheSlaver
 * History about the slaver - Dalida
 *
 * @author AdamAuthor <none>
 */


const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  })

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const { printSlaver,buySlaver,sellSlaver } = require("./slavers.js");

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);	

	// В index.js мой код начинается тут. Всё остальное (не считая slavers.js) было создано командой:
	// $npx create-node-cli
	// Говоря проще, я написал slavers.js и index.js с 32 строки

	// Хотел ещё добавить бесконечный цикл с возможностью выхода вводом нуля
	// Но while и readline конфликтуют между собой
	// Жаба скрипт ужасен для ввода...

	// Ну и касательно проекта, концепт простой:
	// Далида-работорговец покупает и продаёт менторов)
	
	let boss = {
		name: "Dalida",
		age: 18,
		countOfSlavers: 0,
		money: 10000
	}

	if (input.includes('dalida')) {
			let str = `Enter "1", if you buy a slave\nEnter "2", if you want sell a slave\nEnter "3", if you want to know about all the slaves\nEnter "4", and find out about yourself\nEnter "0", if you want to exit\n\n> `;
			cheker = false
		readline.question(str, (num) => {
				switch (num) {
					case "1":
						console.log("-500$\n");

						boss.money -= 500;
						boss.countOfSlavers++;

						let slaverName, slaverAge, slaverGender;

						readline.question("Name: ", (name) => {
							slaverName = name;
							readline.question("Age: ", (age) => {
								slaverAge = age;
								readline.question("Gender: ", (gender) => {
									slaverGender = gender;
									readline.close();
									buySlaver(slaverName, slaverAge, slaverGender);	
								})
							})
						})								
						break;
					case "2":
						boss.money += 500;
						boss.countOfSlavers--;
						readline.question("Who do you want to sell?\n", (name) => {
							sellSlaver(name);
							readline.close();
						})
						break;
					case "3":
						printSlaver();
						break;
					case "4":
						console.log(boss);
						break;
					case "0":
						process.exit;
					default:
						console.log("Incorrect number!");
						break;
				}
						
		})
		}
			
	}
})();
