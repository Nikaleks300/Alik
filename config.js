const TOKEN = "422c69ffc3c5e437a3e401f4fb80e1c5e7b59348b7ccea78ce7b46399359022eabb01c98503cad72c6095"; // Токен группы, в которой будет стоять бот
const GROUP_ID = 204430202; // Айди группы, в которой будет стоять бот
const BTN_TEXT = ["ОНИК МИРЗАЯН", "АЛИК МИРЗАЯН", "САУЛ ОГУРЦОВ"];
const TIME = 300;
const CHAT_SPAM = ["ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!ВЫ ВСЕ ШЛЮХИ ЕБАНЫЕ, МЫ ТУТ КОРОЛИ НАХУЙ! АЛИЧКА, САУЛЬЧИК И ОНИЧКА ЛУЧШИЕ! ЗАВИДУЙТЕ ТУПЫ ПИДОРЫ!!!", "😄😁😊😃🤣😆😉😜😋🤗😍😎😒😏🙂🙃😔😢😭😩😨😐😌🤤😇😰🤧😲🤢😳😷😂❤💋😚😕😯😦😵🙄🤔😠😡😝😴😘😗😙😟🙁☹😬😶🤐😫☺😄1�7😥😛😖😤😣😧😑😅😮😞😓😱🤓🤑😪🤒🤕🤥🤠😈👿👽👻😸😹😼😽😾😿😻🙀😺🙈🙉🙊💩💀👹👺👍👎☝✌👌🖕🏻🤘🏻👏👊💪✋🖐🏻🖖🏻🙏🙌✊👆👇👈👉👋👐🤞🏻🤝🤙🏻🤛🏻🤜🏻👀👂👃✍🏻👅👫👬👭💏💑👯👪👰👦👧👨👩👱👮👲👳💂👴👵👶👷👸👼🙇🤰🏻💅💄👄💃🎎🎅🚶👱�1�7�♀️👮�1�7�♀️👷�1�7�♀️🕵�1�7�♀️🙇�1�7�♀️🙋�1�7�♂️🙋💁�1�7�♂️💁🙅�1�7�♂️🙅🙆�1�7�♂️🙆🙎�1�7�♂️🙎💆�1�7�♂️💆💇�1�7�♂️💇🤷🏻�1�7�♂️🤷🏻�1�7�♀️🤦🏻�1�7�♂️🤦�1�7�♀️🙍�1�7�♂️🚶�1�7�♀️🤳🏻🏃�1�7�♀️👯�1�7�♂️🏌�1�7�♀️🐱🤡🕺👳�1�7�♀️💂�1�7�♀️🤵🤴🤹�1�7�♂️🤹�1�7�♀️👨�1�7�⚖️👩�1�7�⚖️👨�1�7�✈️👩�1�7�✈️👨�1�7�🚒️👩‍🚒️👨‍🎤️👩‍🎤️👨‍🎓️👩‍🎓️👨‍🏫️👩‍🏫️👨‍🌾️👩‍🌾️👨‍🍳️👩‍🍳️👨‍🔧️👩‍🔧️👨‍🏭️👩‍🏭️👨‍💼️👩‍💼️👨‍🔬️👩‍🔬️👨‍💻️👩‍💻️👨‍🎨️👩‍🎨️👨‍🚄1�7️👩�1�7�🚄1�7️👨�1�7�⚕️👩�1�7�⚕️💓💔💕💖💗💘💙💚💛💜💝💞💟💬💭🔞⚠⛔🐩🆘🌚🖤💨🔥☀☁⛄❄⛅✨🌍🌛🌝🌞☄🌈🌖⚕🌱🌲🌳🌴🌷🌸🍅🍆🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🐄1�7🐁🐂🐃🐄🐅🐆🐇🐈🐉🐊🐋🐌🐍🐎🐏🐐🐑🐒🐓🐔🐕🐖🐗🐘🐙🐚🐛🐜🐝🐞🐟🐠🐡🐢🐣🐤🐥🐦🐧🐨🐪🐫🐬🐭🐮🐯🐰🐲🐳🐴🐵🐶🐷🐸🐹🐺🐻🐼🐽🐾🌰🌵🌹🌺🌻🌼🌽🌾🌿🍀🍁🍂🍃🍄💦💧🦉🦍🦏🦋🦊🦈🦆🦅🦇🦎🦐🦑🥀🦌🍒🍓🍔🍕🍖🍗🍚🍛🍜🍝🍧🍦🍥🍤🍣🍢🍡🍠🍟🍞🍨🍩🍪🍫🍬🍭🍮🍯🍰🍱🍻🍺🍹🍸🍷🍶🍵🍴🍳🍲🍼🥙🥝🥜🥘🥗🥖🥓🥐🥂🥛🥚🥞🥒🥔🥕🥃🥑⚽⚾🎯🎱🎽🎾🎿🏀🏁🏂🚴🚣👟🏊🏉🏈🏇🏆🏄🏃🚵⛳⛪🤽🏻‍♂️🤽🏻�1�7�♀️🤾🏻�1�7�♂️🤼�1�7�♂️🤸🏻�1�7�♂️🏋�1�7�♀️⛹‍♀️🥅🥋🥊🛶🛴🤺🚴�1�7�♀️🚵�1�7�♀️🏊�1�7�♀️🏄�1�7�♀️🥁🚅🚆🚇🚈🚊🚌🚍🚎🚏🚐🚚🚙🚘🚗🚖🚕🚔🚓🚒🚑🚛🚜🚝🚞🚟🚠🚡🚤🚨🚧🛵🏜✈⛽🚄🚃🚂🚁🚄1�7⛵⏰⏳☎☕♻⚡✂✉✏✒🎈🎄🎃🎂🎁🎄1�7🌟🌂🃏�1�7�🎉🎊🎋🎌🎍🎏🎐🎒🎓🎣🎲🎰🎭🎬🎫🎪🎩🎨🎧🎤🎳🎴🎷🎸🎹🎺🎻👑👒👓👜👠👛👚👙👘👗👖👕👔👝👞👡👢👣👾💈💉💊💌💴💳💰💥💣💡💒💐💎💍💵💶💷💸💺💻💼💽💾💿📎📍📌📋📊📉📈📇📅📄📐📑📒📓📔📕📖📗📘📙📮📭📦📢📡📠📟📝📜📚📯🔑🔭🥇🥈🔮🔔📰📱🔖🔱🥉🛒🗿🔦📷📹🔧🚪🚬🔨📺📻🔩🚽🚿🔪📼🔆🔫🛄1�7🥄🔬🔎🇨🇳🇺🇦🇮🇱🇳🇿🇫🇮🇮🇷🇹🇳🇲🇦🇨🇱🇳🇴🇮🇳🇰🇿🇩🇪🇪🇸🇧🇾🇮🇩🇦🇪🇨🇭🇳🇬🇵🇦🇸🇪🇵🇱🇮🇪🇦🇺🇫🇷🇬🇧🇦🇹🇨🇦🇵🇹🇿🇦🇵🇪🇷🇸🏳‍🌈️🇵🇷🇨🇴🇧🇪🇮🇹🇯🇵🇧🇷🇲🇴🇸🇦🇦🇷🇸🇳🏴󠁧󠁢󠁥󠁮󠁧󠁿🇨🇷🏴󠁧󠁢󠁥󠁮󠁧󠁿🇨🇷🇸🇬🇲🇾🇻🇳🇰🇷🇷🇺🇭🇰🇲🇽🇹🇷🇪🇬🇺🇾🇮🇸🇭🇷🇵🇭🇳🇱🇩🇰🇩🇰🇺🇸😄😁😊😃🤣😆😉😜😋🤗😍😎😒😏🙂🙃😔😢😭😩😨😐😌🤤😇😰🤧😲🤢😳😷😂❤💋😚😕😯😦😵🙄🤔😠😡😝😴😘😗😙😟🙁☹😬😶🤐😫☺😄1�7😥😛😖😤😣😧😑😅😮😞😓😱🤓🤑😪🤒🤕🤥🤠😈👿👽👻😸😹😼😽😾😿😻🙀😺🙈🙉🙊💩💀👹👺👍👎☝✌👌🖕🏻🤘🏻👏👊💪✋🖐🏻🖖🏻🙏🙌✊👆👇👈👉👋👐🤞🏻🤝🤙🏻🤛🏻🤜🏻👀👂👃✍🏻👅👫👬👭💏💑👯👪👰👦👧👨👩👱👮👲👳💂👴👵👶👷👸👼🙇🤰🏻💅💄👄💃🎎🎅🚶👱�1�7�♀️👮�1�7�♀️👷�1�7�♀️🕵�1�7�♀️🙇�1�7�♀️🙋�1�7�♂️🙋💁�1�7�♂️💁🙅�1�7�♂️🙅🙆�1�7�♂️🙆🙎�1�7�♂️🙎💆�1�7�♂️💆💇�1�7�♂️💇🤷🏻�1�7�♂️🤷🏻�1�7�♀️🤦🏻�1�7�♂️🤦�1�7�♀️🙍�1�7�♂️🚶�1�7�♀️🤳🏻🏃�1�7�♀️👯�1�7�♂️🏌�1�7�♀️🐱🤡🕺👳�1�7�♀️💂�1�7�♀️🤵🤴🤹�1�7�♂️🤹�1�7�♀️👨�1�7�⚖️👩�1�7�⚖️👨�1�7�✈️👩�1�7�✈️👨�1�7�🚒️👩‍🚒️👨‍🎤️👩‍🎤️👨‍🎓️👩‍🎓️👨‍🏫️👩‍🏫️👨‍🌾️👩‍🌾️👨‍🍳️👩‍🍳️👨‍🔧️👩‍🔧️👨‍🏭️👩‍🏭️👨‍💼️👩‍💼️👨‍🔬️👩‍🔬️👨‍💻️👩‍💻️👨‍🎨️👩‍🎨️👨‍🚄1�7️👩�1�7�🚄1�7️👨�1�7�⚕️👩�1�7�⚕️💓💔💕💖💗💘💙💚💛💜💝💞💟💬💭🔞⚠⛔🐩🆘🌚🖤💨🔥☀☁⛄❄⛅✨🌍🌛🌝🌞☄🌈🌖⚕🌱🌲🌳🌴🌷🌸🍅🍆🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🐄1�7🐁🐂🐃🐄🐅🐆🐇🐈🐉🐊🐋🐌🐍🐎🐏🐐🐑🐒🐓🐔🐕🐖🐗🐘🐙🐚🐛🐜🐝🐞🐟🐠🐡🐢🐣🐤🐥🐦🐧🐨🐪🐫🐬🐭🐮🐯🐰🐲🐳🐴🐵🐶🐷🐸🐹🐺🐻🐼🐽🐾🌰🌵🌹🌺🌻🌼🌽🌾🌿🍀🍁🍂🍃🍄💦💧🦉🦍🦏🦋🦊🦈🦆🦅🦇🦎🦐🦑🥀🦌🍒🍓🍔🍕🍖🍗🍚🍛🍜🍝🍧🍦🍥🍤🍣🍢🍡🍠🍟🍞🍨🍩🍪🍫🍬🍭🍮🍯🍰🍱🍻🍺🍹🍸🍷🍶🍵🍴🍳🍲🍼🥙🥝🥜🥘🥗🥖🥓🥐🥂🥛🥚🥞🥒🥔🥕🥃🥑⚽⚾🎯🎱🎽🎾🎿🏀🏁🏂🚴🚣👟🏊🏉🏈🏇🏆🏄🏃🚵⛳⛪🤽🏻‍♂️🤽🏻�1�7�♀️🤾🏻�1�7�♂️🤼�1�7�♂️🤸🏻�1�7�♂️🏋�1�7�♀️⛹‍♀️🥅🥋🥊🛶🛴🤺🚴�1�7�♀️🚵�1�7�♀️🏊�1�7�♀️🏄�1�7�♀️🥁🚅🚆🚇🚈🚊🚌🚍🚎🚏🚐🚚🚙🚘🚗🚖🚕🚔🚓🚒🚑🚛🚜🚝🚞🚟🚠🚡🚤🚨🚧🛵🏜✈⛽🚄🚃🚂🚁🚄1�7⛵⏰⏳☎☕♻⚡✂✉✏✒🎈🎄🎃🎂🎁🎄1�7🌟🌂🃏�1�7�🎉🎊🎋🎌🎍🎏🎐🎒🎓🎣🎲🎰🎭🎬🎫🎪🎩🎨🎧🎤🎳🎴🎷🎸🎹🎺🎻👑👒👓👜👠👛👚👙👘👗👖👕👔👝👞КЄ1�7 ОТ ПИЗДЕЦ РП ШАВКИ НАХУЙ ЕБАНЫЕ😆 😆", "卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐"];
const HELLO_TEXT = `ALIK BOT
`;

module.exports = {
    TOKEN, CHAT_SPAM, GROUP_ID, BTN_TEXT, HELLO_TEXT, TIME
};