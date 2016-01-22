var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

item1.addEventListener("click", function(){
    info1.innerHTML = " Dr-Boom is a crucial part of Hearthstone for anydeck really because of the fact that he is a 7 mana 7 hp & attack minion that has 2 bots that have 1 hp and attack. ";
    info2.innerHTML = " When they die, they deal 2-4 random damage to the enemy or his minions. It can be used to potentially clear the board or give the enemy extra damage since the point of mid range is to be agressive but to have board control.";
    info3.innerHTML = "Though adding his boom bots makes him a very strong play for every single 7 mana turn. One weakness of the card, is that since everyone runs him now the meta has shifted with everyone running a  big game hunter. This minion kills a minion with 7 attack or higher and only costs 7 mana. So people generally hold him for the late game monsters. Dr.Boom is still a very strong play if you can get past the big game hunter.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Slyvanas Windrunner- is a very big control factor for any deck. ";
    info2.innerHTML = "It has a very strong drop at turn 6 because she has an effect of taking control of a minion when she dies.";
    info3.innerHTML = "Even though she is a 6 drop with 5,5 she has the potential to change the game since she can take control of a strong minion on the opponents side. She can control the board and shift it towards your favor if you play her at the right time";
});
item3.addEventListener("click", function(){
    info1.innerHTML = "King Krush is a very big factor because of his effect Charge.  ";
    info2.innerHTML = "This makes this card be able to attack and do 8 damage as soon as its played countering the 1 turn wait for minions. It can take down the high attack minions and since it has charge it cant be countered by big game hunter since you dont have to wait attack. ";
    info3.innerHTML = "It is an amazing board control play or just face card. The only down side is that you have to wait until turn 9 to use it.";
});
                       
item4.addEventListener("click", function(){
    info1.innerHTML = "Leroy Jankins is another strong face or control card.";
    info2.innerHTML = "Having a 5 cost mana it does have a lot of strengths for face/midrange control hunter because it can give you a 5 for 5 value";
    info3.innerHTML = "Countering this it  will spawn 2 1/1 minons that will kill this.";
});