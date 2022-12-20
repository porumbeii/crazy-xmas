export const storyLine =
`
bg play
! bg none

say Wake up!
say Did daddy get my Christmas tree?
say Huh? What tree?
say You promised to gimme a Christams tree.
say I didn't.

! play christmasTree
say Well here's the tape!
say Whatever, I'm not gonna go get a tree. 
say It's expensive, hard to carry, and a pain in the back. 
say Plus it's messy! Last time when we had one, there where needles all over the joint!
say But dad!
say No!
say In 2020 we put up a tree and I got 101 prezzies, last year we didn't and I got just 100! 
say Please daddy! I promise I'll be good and get high grades...
say No more Es and Fs?
say No more Es and Fs. Nor Ds! And barely a C! Straight A! I swear.
say Ok, just lemme alone. I'll get one to shut that mouth up.
say Go to the woodman!
removebubble

halt GOTO_WOODMAN
say Hello, d'you have any Christmas trees that I could buy?
say Sure thing, mate, I have trees for all!
say What do you think of this fine fir? Just five thousand bucks!
say Umm... Its kinda big. D'you have one that could fit in a house and not demolish it?
say Huh, my smallest fir is thirty-two feet tall for 300 dollars.
say Thanks, but no thanks!
say Sorry I can't help you but d'you know there is a Christmas tree shop nearby?
say Umm... Yeah I always knew, I came here because you have... um... great prices! Yeah!
say Gee, thanks! By the way a coupon code for 'em: XMAS. Capital letters. It gives you like 20% off! Hope It helps.
removebubble 

halt GOTO_SHOP
! bg closed
await
! bg none
say Kill me! It's closed? C'mon! It's the 24th of december, aren't they expecting customers?
say Maybe they have a tree at the market.
say I hope there's somethin' behind those fences...
say If not my little rascal (I meant kid) will tear me apart!
removebubble

halt GOTO_MARKET
say Hello, what would you like to buy?
say A Christmas tree please.
say Sorry, we don't have any.
say You're kidding, right?
say No. They haven't arrived yet. They said it will be here before 21st of December 20022
say Erm... Twenty thousand  twenty-two?
say Yes sir, wait, what?
say You ordered it to be delivered in 20022.
say Really?
! say 
bg document
! bg none
say Curse that keyboard! Next time I'll get a Logitech one next time, no more cheap Chineese junk.
say Kill me, now where will I get a tree from?
say Umm... ask Santa Claus.
say Yeah, yeah very funny mister! I searched the whole town and no Christmas trees!
say But Santa gave us a tree last year!
say Yeah, yeah you're saying that to make this story "child-frendly" but he doesn't exist.
say Who dosen't believe doesn't...
say Whatever, just drop it! I'll guess I'll have to go home
removebubble

halt GOTO_HOME
bg tree
say What just happened?
say Santa came and left us the tree!
say And he told you, dad, that you should get the tree earlier and not be lazy!
removebubble
bg end
`