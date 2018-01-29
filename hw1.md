1. When Brooks references essential difficulties, he is describing problems that will always be present in software engineering because they arise from fundamental properties of software. 
These problems are not caused by inexperience or mistakes but by the complex nature of software engineering.
One example of a problem caused by the complexity of software is the security vulnerability exploited by buffer overflow attacks.
While a piece of software may function flawlessly for most inputs, some inputs (in this case a maliciously formed one) can compromise the entire system.
While buffer overflow attacks can be easily prevented by checking the size of the input, this example illustrates the fact that software engineers need to consider the nearly infinite number of possible states for their program.


2. Accidental difficulties are problems that are created when techniques or tools are implemented to address a separate problem.
Part of the difficulty in attempting to address accidental problems is that often tackling one problem introduces a different one.
The new accidental difficulty may be less burdensome than the previous one, but this phenomenon underlines the argument that eliminating all accidental problems is effectively impossible.
One example of an accidental problem is the increased compilation time required for higher level languages.
While the development of high level languages has been an invaluable tool in software engineering by freeing programmers from the minutia of assembly languages, it is undeniable that compilation time can be non-trivial for large projects.


3. The four types of essential difficulties in software engineering that Brooks describes are complexity, conformity, changeability, and invisibility.

    * Complexity - The complexity of software engineering comes from the fact that the building blocks of software (functions, classes, modules, etc.) are all unique.
Other than statements, no two parts of software are the same.
Furthermore, there are countless (nearly infinite) states in which computers can be.
Software needs to be able to handle any input.
Finally, the real world with which software interacts is inherently complex.
For example, facial recognition software is still a developing field after decades of research partially because the features of faces vary so dramatically.
It is impossible for a program to anticipate the infinite number of faces it could be presented with, so software engineers must employ a variety of other fields (biology, physics, sociology) to intelligently handle any input.

    * Conformity - Software needs to be developed and modified to account for what Brooks refers to as arbitrary complexity. 
Rules and regulations for how software needs to be written are constantly in flux, changing with politics or the whims of personnel.
It is also often necessary for software to smoothly interface with older code that a software engineer had absolutely no hand in creating.
These challenges are impossible to predict due to their arbitrary and flexible nature.
A real world example of this challenge is the different privacy and censorship laws across different countries.
A massive, global company like Facebook has to consider all of these laws, even as they change, in order to have an international presence.

    * Changeability - Because it is possible to patch and repair software, there is enormous pressure for software to be updated to meet new demands.
These demands could be driven by customers requesting new functionality, new hardware demands, or a variety of other reasons.
Software engineers contend with the expectation that these changes will occur at a significantly faster time scale than in other industries.
A car manufacturer can wait a year before releasing a new model with improvements while software engineers feel pressure to improve products that are in use within weeks of deployment.
One of the most common areas of software engineering that requires changeability is security.
If a security exploit is discovered, it is crucial that the developers create and distribute a patch for the exploit as quickly as possible.

    * Invisibility - Large software projects are often so massive and convoluted that it is not possible to represent them visually.
The systems can easily grow so complex across different scales that any attempt at visualization would be impossibly dense.
This is unfortunate because tools that utilize our natural visualization skills, such as blueprints or graphs, are not applicable in software engineering.
An example of a consequence of this problem is conflicting dependencies.
If it were easy to arrange the various components of software so that the dependencies of each routine were mapped out, conflicts would become readily apparent.


4. When Brooks describes a silver bullet, a reference to a single bullet that can take down a werewolf, he is discussing a hypothetical technique or tool that would single-handedly increase the efficiency and productivity of a field.
While hardware constantly develops silver bullets (most notably with new transistor technologies that have continually allowed Moore's Law to hold true), Brooks argues that there is no silver bullet possible for software engineering.
The heart of Brooks' argument is that single advances will always target the accidental difficulties of software engineering, the challenges that are not inherent to software.
These challenges, such as syntax errors and testing requirements, do not constitute a significantly large enough part of the software engineering process that eliminating one would lead to an order of magnitude change.
Additionally, solutions to accidental difficulties often produce accidental difficulties of their own.
Instead, Brooks argues that we need to focus on the essential difficulties of software engineering, the features of software that define its inherent complexity.
Brooks considers several proposed silver bullets for the essence of software engineering but argues that each one is insufficient in some way.
Ultimately he concludes that a variety of new techniques and technologies working in tandem will allow the greatest success in creating an order of magnitude improvement.


5. Software engineering is the process of creating and maintaining new software for real world applications. 
Doing so requires drawing upon a number of different fields (from physics to sociology) and applying engineering principles to develop new software in a methodical and disciplined way.
Software engineering can therefore be considered the application of computer science.
While computer scientists seek to understand the very limits of what computers are capable of, software engineers have to ask how that knowledge can be utilized in a useful and affordable manner.
In the same way that chemists explore new reactions and seek a deeper understanding of the science to empower chemical engineers to develop cutting edge technology, computer scientists are continually inventing and refining the tools used by software engineers in software development.
The key caveat is that not all discoveries by chemists or computer scientists are immediately useful.
Just as a chemist's new rapid reaction might require a prohibitively expensive substance for industrial use, a computer scientist might invent a new algorithm that while elegant and powerful requires far more computational power than is available to most software companies.


6.

    * Abstractions are ways of redefining problems in more understandable ways.
This might happen through higher level programming languages with more intuitive syntax, GUIs for managing file systems, or a variety of other tools used to simplify interactions with the software.
Software engineering utilizes abstraction as both a tool and a goal.
The abstractions created by others allow software engineers to maximize their workflow and focus on innovations without being encumbered by fine details.
In turn, software engineers are often creating new abstractions to improve the usability of their software and appeal to an audience with diverse programming experience.

    * Conversations are the discussions about software between software engineers and customers, marketers, other software engineers, and countless others.
This can happen face to face, through message boards, or simply through commit logs.
Conversations are invaluable throughout software engineering.
They encourage the dissemination of more efficient development techniques.
They help guarantee that the software is providing the desired service.
They allow large, widely distributed teams to work together for massive software projects.
Countless other examples stress that communication is one of the key aspects of software engineering.

    * Specification requires explicitly stating how things should be built, run, tested, etc.
Good specification removes the ambiguity in what something will produce and help streamline the development process.
By checking specifications for a project at every step, software engineers can ensure that they are meeting the demands of the client and they can hold themselves up to a coding standard.
Specification can also help manage project directories by defining what each file type is used for and how it should be handled.

    * Translation refers to the ability to move between different levels of abstraction, different types of structures, across different specifications, and so on.
This is necessary in software engineering because software engineers are forced to consider their work across different scales and for different consumers.
While the engineer might totally understand their code at the assembly level, they also need to understand if their highest level of abstraction is functioning well for their target audience.
A variety of different customers might impose different specifications that a software engineers needs to be comfortable with.
A comprehensive understanding of how the different structures (statements, modules, functions, etc.) of their code interact with each other is crucial to development and testing.

    * Iteration describes the practice of building software step by step, testing each step to make sure even the smallest parts of the code function as expected.
This ensures quality control throughout a software project and makes debugging substantially easier: if every part of the code has previously worked perfectly, the most recent addition is likely the source of the bug.
Additionally, as Brooks argues, the practice of growing software has tremendous benefits for software development.
By testing each component of the software, programmers are able to more rapidly create prototypes and their morale is often bolstered by the incremental successes.
