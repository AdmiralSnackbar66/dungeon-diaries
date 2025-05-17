<style>

/* Background */
  .phb{ background-image: url('https://gmbinder.com/images/KN1O92T.png') }
  .phb{ background-size: cover }

/* Notes */
  .phb section blockquote {background-color: #cae5de}
  .phb hr + section blockquote tr:nth-child(odd) td {background-color: transparent;}

.phb .descriptive{
    display:block-inline;
    margin-bottom:1em;
    background-color:#e5cadb;
    font-family:ScalySans;
    border-style:solid;
    border-width:7px;
    border-image:url('/assets/img/sidebars.png') 12 round;
    border-image-outset:4px;
    box-shadow:0 0 2px #e56e98
}
.phb .descriptive p{
    display:block;
    padding-bottom:0;
    line-height:1.5em
}
.phb .descriptive p+p{
    padding-top:.8em
}
.phb .descriptive em{
    font-family:ScalySans;
    font-style:italic
}
.phb .descriptive strong{
    font-family:ScalySans;
    font-weight:800;
    letter-spacing:-0.02em
}
.phb pre+.descriptive{
    margin-top:8px
}

/* Tables */
  table tr:nth-child(odd) td {background-color: #cccccc}

/* Footer */
  .phb .pageNumber {color: rgba(0, 0, 0, 0.5)}
  .phb .footnote {color: rgba(0, 0, 0, 0.5)}
  .phb:nth-child(odd):after{ 
    content          : '';
    position         : absolute;
    bottom           : -3px;
    left             : 10px;
    z-index          : -1;
    height           : 336px;
    width            : 100%;
    background-image : url('https://gmbinder.com/images/p7wvb4z.png');
    background-size  : cover;
}

.phb:nth-child(even):after{ 
    content          : '';
    position         : absolute;
    bottom           : -3px;
    left             : -10px;
    z-index          : -1;
    height           : 336px;
    width            : 100%;
    background-image : url('https://gmbinder.com/images/p7wvb4z.png');
    background-size  : cover;
    transform: scaleX(-1)
}

/* Page Number */
.phb .pageNumber{
    position   : absolute;
    bottom     : 30px;
    width      : 50px;
    text-align : center;
}
.phb:nth-child(even) .pageNumber{
    left      : 12px;
}
.phb:nth-child(odd) .pageNumber{
    right      : 12px;
}

.phb .pageNumber.auto{
    position   : absolute;
    bottom     : 41px;
    width      : 50px;
    text-align : center;
}
.phb:nth-child(even) .pageNumber.auto{
    left      : 12px;
}
.phb:nth-child(odd) .pageNumber.auto{
    right      : 12px;
}

</style>


## *Strixhaven Mysteries* #2:
# Mazfroth's Mighty Digressions

In this adaptation of *Candlekeep Mysteries*' 2nd-level adventure, the basic story progression remains more or less the same from the original. However, the backstory, setting, and NPC motivations have been altered drastically to fit with the themes presented in *Strixhaven*. Most importantly, this adaptation can serve to properly introduce the Oriq as a faction within the world

It is advised to read the [previous entry](https://www.gmbinder.com/share/-Mpisc7LAfpmewMGOJDN) in this series beforehand, as certain elements from that adaptation are referenced here.

#### Sources of Inspiration

* [***Admissions & Tuition.***](https://www.gmbinder.com/share/-MgNimhvpIrNl9tUmkqm) R.B. Skald
* ***Avatar: The Legend of Korra.*** Michael Dante DiMartino & Bryan Konietzko
* [***Plane Shift: Amonkhet.***](http://media.wizards.com/2017/downloads/magic/plane-shift_amonkhet.pdf) James Wyatt
* ***"Mazfroth's Mighty Digressions".*** Alison Huang
* [***Strixhaven Mysteries #1.***](https://www.gmbinder.com/share/-Mpisc7LAfpmewMGOJDN) R.B. Skald
* ***Volo's Guide to Monsters.*** Wizards RPG Team


## Finding the Book

*Mazfroth's Mighty Digressions* is one of the required texts for the characters' Magical Physiologies course. To be specific, the copy of *Mazfroth's* which will be relevant to this adventure has been purchased from a used book store situated within the Central Campus area.

Before running this adapted adventure, determine first where the characters would have purchased their textbooks. If it's unlikely that any of the characters would have shopped at a used bookstore, have one of their Friends or Beloveds ask to join in on a study session before the Owlbear Exam.

During the Study Phase for the Owlbear Exam, one character or Fellow Student with a used copy of *Mazfroth's* will discover that their "book" is actually a **gingwatzim**, which attacks as written in the adventure.

### Helpful Knowledge

A readthrough of *Mazfroth's* is a convenient way to present the facts listed in the Exam's "All About Owlbears" sidebar.


## What's Going On?

The used bookstore which sold the fake textbook is run by Korvala and the Amberdune Pack, who were once Strixhaven students. Each of them had received partial financial sponsorship from the lamia Nidalia, the original owner of Amberdune Books who is herself a graduate of the university.

Months ago, Nidalia was apprehended by the Dragonsguard on suspicion of conspiring with Oriq extremists. Although the lamia is innocent of these charges, the local authorities believe there is enough evidence to prosecute and convict her. In the meantime, Nidalia languishes in a dungeon awaiting trial.

Fiercely loyal to their sponsor and mentor, the Amberdune Pack has tried to raise 1,000 gp to cover Nidalia's legal expenses. To do so, each member dropped out of Strixhaven to work full time at the used bookstore. Unfortunately, the pack's decision to leave school meant they would now be ceaselessly hounded by creditors over student loan payments.

Drowning in debt and embittered with the system which enabled these injustices, Korvala raised no objections when she was contacted by an Oriq recruiter. The arcane cult made a offer Korvala couldn't refuse: create gingwatzims for the Oriq to sell as fake textbooks, and they'd pay off all the pack's debts plus provide a legal defense fund for Nidalia.

Although the Oriq taught Korvala the ritual to create gingwatzims, she knows little about these creates aside from a few basic facts. Nor does Korvala care to learn more; her desire above all else is seeing her lamina mentor walk free. 


## Monstrous Books

Whether by conferring with classmates or listening to gossip before the Exam, the characters will likely ascertain that two other students — **Cadoras Damellawar** and **Javenesh Stoutclaw** (see *Strixhaven*'s Fellow Student section) — each have had one of their books transform into monsters during the last several days. Alternatively, their Magical Physiologies professor (see Serafina Onyx's entry in ["Strixhaven Mysteries #1"](https://www.gmbinder.com/share/-Mpisc7LAfpmewMGOJDN)) questions the characters about rumors she's heard of monstrous books attacking students.

Having kept tabs on the adventures her students have taken part in, Professor Onyx asserts that the characters are more likely to get to the bottom of the situation than campus administration. If any characters failed the Owlbear Exam, Onyx offers to award them extra credit if they investigate the mystery. While these characters won't be eligible to earn Student Dice, they will receive passing grades on their Exam and won't have to attend tutoring.

At your discretion, Professor Onyx may also offer one or both of the following inducements:

* A *lantern of revealing*.
* Restored access to the extradimensional mansion found in "[Strixhaven Mysteries #1](https://www.gmbinder.com/share/-Mpisc7LAfpmewMGOJDN)", for the characters to use as they deem fit.

### Questioning Students

If asked the right questions, Cadoras Damellawar can provide the following information:

* Cadoras bought his false textbook, *Fallen Tethyamar*, at the start of the school year from a used bookstore nestled in the Diamond Grove; a trendy market district to the immediate southwest of Strixhaven Stadium.
* He recalls the store's name had "dune" in it, but nothing more about the district. Most shops in the Grove are out of his price range, anyway.


<div class='footnote'>STRIXHAVEN MYSTERIES #2 </div>

\pagebreakNum


Javenesh Stoutclaw can disclose the following information:

* Javenesh purchased a different used copy of *Mazfroth's Mighty Digressions* from a bookstore in the Diamond Grove. He doesn't remember much other than that the shop was off in an out-of-the-way section.
* He was studying in the Biblioplex when his textbook transformed and attacked. The library's senior staff eventually vanquished the monster, but not before it took out a gargoyle assistant and attempted to flee by turning into a spider.

When a student mentions finding their monstrous textbook at a used bookstore, the character who got attacked before the Exam can make a DC 10 Intelligence (History) ability check. On a success, the character perfectly recalls buying their book from Amberdune Books and remembers its location. On a failure, the students' descriptions feel vaguely familiar to the character, but cannot remember much else.


## The Diamond Grove

Aside from a reduced emphasis on corruption and enforcement of economic divides, the general vibe of this shopping district is very much the same as that of the Wide from the original adventure. Located right at the southwestern edge of the Central Campus, the Diamond Grove is strategically placed to lure in customers who attend games at Strixhaven Stadium next door.

Since the Grove is adjacent to the Central Campus, there is no need to run the "Lycanthrope Looter" encounter.

### Campus Security

Instead of veterans, two **Lorehold professors of order** and a **Prismari professor of expression** (see *Strixhaven* chapter 7 for both) provide watch over the Grove.

### Thunderous Orator

When the characters arrive at the Diamond Grove, they see a gathering off to the side of the main road clustered in front of a small portable platform.

<div class='descriptive'>
 
On top of the platform is a young man with white hair, gray skin, and a barbeled chin. Wearing the garb of a Silverquill student, the speaker shouts with deafening passion as he rouses the audience with a dithering tirade.
 
 </div>

The student's name is **Handen Proudspire** (see his Fellow Student entry in the Appendix section), and he is railing against the policies of Strixhaven's administration. While a few people within the crowd are adamant supporters, most spectators who drop by to listen in show casual interest for a minute or two before resuming shopping or social activities.

If the characters decide to listen in on Handen's protest, here are a few of the claims he may make:

* Strixhaven is prohibitively expensive for students and too stringent with financial aid, leaving many graduates with crushing debt (see ["Admissions & Tuition"](https://www.gmbinder.com/share/-MgNimhvpIrNl9tUmkqm)).
* People have the right to receive a magical education anywhere they want and still benefit from the same career opportunities as Strixhaven alumni.
* Strixhaven's administrators are more interested in lining their pockets and censoring speech than attending to the needs of students.
* Handen is a member of Save Our Strixhaven (SOS), an activist group committed to tearing down the corrupt establishment and ending the tyranny of Strixhaven's elite.

In secret, Handen Proudspire is an agent of the Oriq. Like many other struggling students before him, Handen has been sold a whitewashed version of the arcane cult's ideology, and thus he earnestly believes that the Oriq cause is a just and righteous one.

#### Relationship Encounter
At any time, the characters may choose to interject either by expressing support or showing opposition. If a character interjects, treat this as a Relationship encounter. Have players note the results of this encounter on their copies of the tracking sheet.

#### A Heated Debate
Handen will not back down from his protest if heckled by the characters. In fact, Handen will goad them into debating him on the spot, accusing the characters of cowardice should they decline. If the characters manage to do a good job of refuting at least one of Handen's points, he will resort to making *ad hominem* attacks, straw man arguments, and appeals to emotion.

If the characters still keep on debating past this point, the character who spoke up the most must succeed on a Charisma (Persuasion) contest against Handen or have the crowd turn against the characters. On a success, most of the onlookers begin heckling Handen, forcing him and his three buddies leave.

Should a characters appear they intend to harm Handen or cast a debilitating spell on him, Handen's buddies come to his defense and proceed to attack. These three students use the **apprentice wizard** stat block (see *Volo's Guide to Everything*).

After 1d4 rounds, the professors on security detail arrive on the scene to break up the fight. Handen and his allies use this opportunity to hightail it.

### Finding the Store

Most businesses in the Diamond Grove operate as stores instead of stalls, although a few booths and catering wagons are present on the premises. Otherwise, this market is more or less the same as its original version.

### Amberdune Books and Pack

In this version of the adventure, the Amberdune Pack's members are all jackal-like khenra (see ["Plane Shift: Amonkhet"](http://media.wizards.com/2017/downloads/magic/plane-shift_amonkhet.pdf)) who use the **Lorehold Apprentice** stat block, with the additional ability to cast *sleep* once per day. Each member hails from Amonkhet; a desert world said to be ruled by a God-Pharaoh.


The pack leader, Korvala, is uniquely gifted in her ability to change shape, giving her the following trait:


<div class='footnote'>STRIXHAVEN MYSTERIES #2 </div>

\pagebreakNum


<p>

***Shapechanger.*** Korvala can use her action to polymorph into a specific Medium khenra or human, or into a Small jackal. Other than her size, her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies.

___

<p>

Korvala assumes a human form whenever working at the bookstore, and returns back to her true khenra form outside her managerial shift. 

#### Roleplaying the Khenra
If forced to defend themselves, the khenra cast *sleep* to subdue the characters before fleeing.

#### Korvala

The Oriq were the ones to cast a *geas* spell on Korvala fairly recently, and she's still under its effect in this conversion.


## Amberdune Hovel

The Amberdune Pack are currently squatting in an isolated, heavily refurbished ruin on untamed land just outside the Central Campus, within a few minutes' walking distance of the road leading to Lorehold College. A range of small barren hills blocks direct line-of-sight between the Hovel and the road. However, footprints left by the pack — spottable with a successful DC 13 Wisdom (Survival) check — indicate the unmarked trail they use to reach the Hovel from the road.

As "Lycanthrope Looter" is omitted from this adaptation, there is also no need to run the "Wererat's Revenge" encounter during the journey to the Hovel.

### Friends or Foes

Since this version of the Amberdune Pack are spellcasters instead of jackalweres, they do not use scimitars to defend themselves. 

### A4. Korvala's Office

Aside from the changes covered elsewhere, the information Korvala shares with the characters is further modified in the following ways:

* Korvala was under the impression that while gingwatzims require life energy for subsistence, they could lie dormant for a very long time. The recent attacks on students seem to prove otherwise; an oversight Korvala didn't count on.
* Understanding that her involvement in an Oriq plot to endanger students may end up making Nidalia guilty by association, Korvala vows to stop making gingwatzims to pass off as used textbooks. To make amends, she's willing to recall and replace all false textbooks sold to students, albeit in a discrete manner to avoid raising suspicion.

### Resolving Negotiations

If the characters insist on paying fair market price for the replacement textbooks to help fund Nidalia's legal defense, Korvala will set her initial price for the used books at 125 gp each.


\columnbreak

<div style='margin-top:360px'></div>

## A Visit From the Oriq

Unless the characters gave friendly responses to Handen Proudspire earlier in the adventure, they are flagged down by an unfamiliar student upon their return to the dormitories, seemingly with an urgent request for help from one of the characters' Friends or Beloveds. If the characters follow, they are led into a deserted room, whereupon the "student" and an older individual in laborer's clothes block the way out.

These figures are Oriq agents who've casted *disguise self* upon themselves. The "laborer" is an **Oriq recruiter**, while the "student" is an **apprentice wizard** who shares the recruiter's Oriq Mask trait and uses a custom spell list:

* Cantrips (at will): *friends*, *minor illusion*, *poison spray*
* 1st level (2 slots): *disguise self*, *shield*, *witch bolt*

### Roleplaying the Oriq

Assuming the characters allow a parley to occur, the Oriq agents don't disclose their names or affiliation, but they address all members of the party by name. They show gruffness and menace towards the characters, employing ominous euphemisms when making threats.

The two agents state that they know the characters have been meddling in business they shouldn't be involved in, and that this is their only warning to quit snooping. If the characters continue to interfere in their affairs, the agents suggest they'll pay one of the characters' friends a "social visit" to convince the group to change their minds. Before departing, the agents boast they have "people everywhere", and that they'll always know what the characters are up to.

Should combat break out, the Oriq agents will attempt a fighting retreat. Rather than defeating the characters, their escape plan is to attract the attention of authority figures and falsely accuse the party of vandalism and assault. By the time the characters can prove their side of the story, the Oriq duo will have long since made their getaway.  


<img src='https://www.gmbinder.com/images/1IJmQ4I.jpg' style='position:absolute;top:-16px;right:-160px;width:819px; mix-blend-mode:multiply; filter:brightness(100%)'>

<!-- XGE Top Right Stain #1 -->
<img src='https://watercolors.giantsoup.com/xgte/xgte_top-right/0001.png'
     style='position:absolute; top:0px; left:0px; width:816px' />



<div class='footnote'> STRIXHAVEN MYSTERIES #2 </div>

\pagebreakNum


<img src='https://www.gmbinder.com/images/uPpHp03.jpg' style='position:absolute;top:0px;right:0px;width:816px; mix-blend-mode:multiply; filter:brightness(100%)'>

<!-- XGE Top Stain #1 -->
<img src='https://watercolors.giantsoup.com/xgte/xgte_top-left/0001.png'
     style='position:absolute; top:0px; left:0px; width:816px' />

<div style='margin-top:300px'></div>


## Conclusion

If the characters report back to Professor Onyx and ask about the Oriq, she explains that they are a secret society obsessed with acquiring magical power at any cost. Campus administration regards the group as a mere nuisance for the Dragonsguard to handle, but Onyx suspects they pose more of a threat than anyone realizes. She advises the characters to take seriously the possibility of an Oriq attack one day.

### Further Adventures

___

#### Oriq's Revenge
The Oriq make heavy use of scrying magic; once the characters become an active thorn in the secret society's side, they'll strive to acquire the necessary material components to maintain a stronger scrying connection with the party. The cult will do whatever it takes to keep troublesome characters under surveillance. 

Should the Oriq suspect treachery on the Amberdune Pack's part, they may retaliate in a number of ways, including setting fire to the used bookstore or kidnapping Korvala. In the latter scenario, the khenra may call upon the characters to investigate Korvala's disappearance and find their leader.

Continued interference in Oriq plots will not go unanswered. True to its word, the group will rage a shadow campaign against both the characters and the friends they've made at Strixhaven. At first, these scare tactics take the form of false rumors, threatening letters, stalking, and property crime. As the Oriq's overarching schemes near fruition, they'll turn towards more violent methods such as abductions and assassinations.

#### Administrative Interference
Despite Handen Proudspire's accusations against Strixhaven administration being largely rooted in propaganda, there is an element of truth in his words. Although the college deans are not selfishly greedy, they are almost entirely dysfunctional as a governing body. More often than not, the deans' thirst for neverending debate overrides the necessity of enacting policy changes in a timely manner.

In practice, this leaves Director Taiva much latitude to run the school of mages as he deems fit. A staunch believer in Strixhaven's mission, Taiva feels it his moral responsibility as the Voice of the Founders to prevent any interference to day-to-day university life. In fulfillment of this end, the director goes to great lengths to downplay dangerous incidents and to keep the Dragonsguard as far away from Strixhaven as possible.

Director Taiva may very well become an antagonistic force in the event the characters become publicly vocal about the lack of safety at Strixhaven. Taiva fears that if news of campus kerfuffles become widespread, grant money will dry up and students will stop enrolling. And if gifted young adults are not attending Strixhaven, that leaves them that much more vulnerable to Oriq manipulation.

At no time should characters face expulsion except for egregious conduct like mind control, torture, and murder. However, a vocally outspoken party that keeps spreading "disruptive misinformation" may find itself at higher risk of administrative measures such as detention, academic probation, bans of problematic extracurriculars, and even the loss of financial aid (see ["Admissions & Tuition"](https://www.gmbinder.com/share/-MgNimhvpIrNl9tUmkqm)).

#### Returning to Extradimensional Space
A week after the adventure's conclusion, Professor Onyx informs the characters that the private study hall from ["Strixhaven Mysteries #1"](https://www.gmbinder.com/share/-Mpisc7LAfpmewMGOJDN) has been reopened to students. Indeed, the extradimensional mansion can still be accessed using the proper command word. However, changes will have occurred:

* None of the surviving constructs in the mansion will attack or threaten the characters.
* The **faerie dragons** from the Arboretum have escaped the mansion.
* Liliana Vess's personal books in the Study have all been removed. In secret, Professor Onyx stores them within a *Leomund's secret chest*.
* Cumin the **homunculus** is gone from the Kitchen, along with the clay figures in the Alchemical Laboratory. Investigative players may find a chance to come across a labeled box containing Cumin's supposed remains in the Faculty Storage room of Captain Dapplewing's Manor, but the remains are made from Liliana's failed homunculi. The real Cumin covertly serves its true master from the confines of Professor Onyx's private residence.
* Likewise, the mansion's **cats** have been "adopted" by Professor Onyx and now reside in her residence.


__

##### Image Credits

* ***D&D Watercolor Stains.*** Jared Ondricek ([watercolors.giantsoup.com](https://watercolors.giantsoup.com/))
* ***Nimble-Blade Khenra.*** Tomasz Jedruszek ([artstation.com/morano](https://www.artstation.com/morano))
* ***Professor's Warning'.*** Kieran Yanner ([kieranyanner.com](https://www.kieranyanner.com))
* ***Thunderous Orator.*** Brian Valeza ([artstation.com/tots](https://www.artstation.com/tots))
* ***Oriq Mage.*** Wizards of the Coast Concept Artists ([magic.wizards.com](https://magic.wizards.com/en))
* ***Art Deco Frame.*** 100ker ([shutterstock.com/g/100ker](https://www.shutterstock.com/g/100ker))





<div class='footnote'> STRIXHAVEN MYSTERIES #2 </div>

\pagebreakNum


<img src='https://www.gmbinder.com/images/MwZC01z.png' style='position:absolute;top:80px;left:70px;width:300px; mix-blend-mode:multiply; filter:brightness(100%)'>


## Appendix Fellow Student:

<div style='margin-top:420px'></div>

#### Handen Proudspire
*Lawful Neutral Half-Elf Second Year (Silverquill)*
___
Purportedly born with a spoon in his hand as silvery as his skin, Handen never felt comfortable in the shoes of nobility. As a young child, he was perceptive of the injustice and inequality which exist in the world, and always questioned how his family could have so much when masses of others struggled with so little. Once Handen came of age, he swore to graduate from Strixhaven on his own without relying on any support from his noble parents.

Handen has a special gift for public speaking and speechwriting; talents he puts to good use as a leading member of Save Our Strixhaven. His fiery orations have earned him the attention of the Oriq, who covertly sponsor Handen in exchange for directing his focus towards undermining students' faith in campus administration. Despite his reputation as a firebrand, Handen can't feel at ease without spending many hours each day quietly reading literature.
___
___
- **Extracurriculars:** Save Our Strixhaven
- **Job:** Oriq pamphleteer
- **Bond Boon:** If you land in disciplinary trouble for any reason other than poor Exam grades, Handen will stir up a public shaming campaign that forces campus administrators to lessen your punishment. 
- **Bond Bane:** You are always booed by a small throng of protesters when performing in public. 
___

\columnbreak

### New Extracurricular Option:

___

#### Save Our Strixhaven
___
- **Skills:** Intimidation, Persuasion
- **Member:** Handen Proudspire
___
These rabble-rousing muckrakers direct their energies towards unearthing on-campus corruption, along with advocacy for a more equitable society filled with kindness.

### New Job Option:

___

#### Oriq
___
- **Jobs:** Gambling parlor worker, informant, pamphleteer, rumor mongerer, underground dueling promoter
- **Member:** Handen Proudspire
- **Extra Benefit:** A student who works a job supporting the Oriq gains 10 gp per week instead of 5.


<img src='https://www.gmbinder.com/images/gzeWJPR.jpg?1' style='position:absolute;bottom:60px;right:0px;width:310px; mix-blend-mode:multiply; filter:brightness(100%)'>


<div class='footnote'> STRIXHAVEN MYSTERIES #2 </div>