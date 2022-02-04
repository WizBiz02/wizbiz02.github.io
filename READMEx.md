--- 
title: A Brief Intro to Token Graphs
description: This is for the talk that I want to give this week
date: 220204
---
TOKEN GRAPHS

Ruy Famila University of Mexico

My active problem is Total Domination on Token Graphs, this is a taste

There will be attention checks and a quiz

There are a lot of definitions.

# Introduction of the problem

## Refresh of a graph

Vertex (Nodes or Points), Sometimes named, sometimes numbered,
***Draws Vertices***


Edges:Unordered pairs connecting two vertices. (Can be directed, or weighted)
***Draws Edges***

Graph, $G= ({1,2,3,4}, {(1,2),(1,3),(3,4),(2,3)})$


This graph is special, Call it $G^*=(V^*,E^*)$

Graph Rules 
- Finite
- No Loops
- No Multiple Edges

Adjacency
: $v\sim w$

Order, $|V|$ 

Size, $|E|$

(This is all just recall)

---
## New to Token Graphs

Let's say we have two PHYSICAL tokens, indistinguishable.

Place them around our graph

Each unique collection of verteces (denoted by tokens) is a vertex in the token graph. 

***Make Nodes in Token Graph***

Vertices are adjacent you can slide one token in the original graph 

***Make Edges in Token Graph***

Rectangle + diagonal lines from bL to tR

Called $F_2(G)$ (F for Fichas)

---
# Into the thick of it

## Johnson Graphs

Named after the guy, not the body part.

Over $K_5$ and $k=2$ (Complete and tokens, respectivly) 

It's complicated and big, too big to draw

If you'd like to see it, google "Huge Johnson"

Coding Theory

1977 - Steinhaus–Johnson–Trotter algorithm
Find a Hamiltonian Cycle in permutohedron

permutohedron - 



(YEAR?)


WHY?

This is limit
More than $K_n$
More than

---
## Time to Generalize, Tokens
Given some graph $G=(V,E)$, let's talk about $F_k(G)$



### Order 
Throughout this paper, $G$ is a graph with $n$ vertices and $k$ is a positive integer. To avoid trivial cases, we assume that . The number of vertices in $F_{k}(G)$ is:
$$
\left|V\left(F_{k}(G)\right)\right|=\left(\begin{array}{l}
n \\
k
\end{array}\right) .
$$

$|V| \geq k+1$

    proof

### Size 
To calculate the number of edges in $F_{k}(G)$, charge each edge $A B$ of $F_{k}(G)$ to the unique edge $a b$ of $G$, for which $A \triangle B=\{a, b\}$. The number of edges of $F_{k}(G)$ charged to $a b$ is $\left(\begin{array}{c}n-2 \\ k-1\end{array}\right)$. Hence
$$
\left|E\left(F_{k}(G)\right)\right|=\left(\begin{array}{l}
n-2 \\
k-1
\end{array}\right)|E(G)| .
$$

    proof    

### Trivial Cases 
$$
F_{1}(G) \simeq G .
$$

    Proof

What about the case of $k=0$

Since two vertices $A$ and $B$ are adjacent in $F_{k}(G)$ if and only if $V(G) \backslash A$ and $V(G) \backslash B$ are adjacent in $F_{n-k}(G)$,

$$
F_{k}(G) \simeq F_{n-k}(G)
$$

    proof

***I DON'T KNOW WHAT THIS NEXT PART MEANS YET***  
We sometimes use (2) to assume that $k \leq \frac{n}{2}$. Also note that (1) and (2) imply two known properties of the Johnson graph: $J(n, 1) \simeq K_{n}$ and $J(n, k) \simeq J(n, n-k) .$
At times, we study the token graph that arises when tokens are fixed at certain vertices. Given a set $X \subseteq V(G)$ with $|X|=r \leq k$, we define $F_{k}(G, X)$ to be the subgraph of $F_{k}(G)$ induced by the vertices of $F_{k}(G)$ that contain $X$ as a subset. This definition can be interpreted as having $r$ tokens fixed at $X$, and $k-r$ tokens moving on $G-X$. Hence
$$
F_{k}(G, X) \simeq F_{k-r}(G-X)
$$







--- 
# Advanced Topics

### Connectedness

Theorem 1 Let $G$ be a connected graph with diameter $\delta$. Then $F_{k}(G)$ is connected with diameter at least $k(\delta-k+1)$ and at most $k \delta$.

    Proof of the thing

If $G$ is $t$-connected, then $F_{k}(G)$ is $t$-connected for all $k \geq 1$.

    Proof of the thing
---
### Chromatic Number

Upper Bound

$\chi\left(F_{k}(G)\right) \leq \chi(G)$.

    Proof of the thing

Lower Bound

    Proof of the thing

$\chi\left(F_{k}(G)\right) \geq \frac{n-k+2}{n} \chi(G)-1$.

---
### Cliques

Lemma 4 Let $A, B, C$ be three pairwise adjacent vertices in $F_{k}(G)$. Then either $B \cap C \subset A$ or $A \subset B \cup C$ (but not both).

    Proof of the thing
---
### Hamiltonicity

Theorem 9 If a graph $G$ contains a Hamiltonian path and $n$ is even and $k$ is odd, then $F_{k}(G)$ contains a Hamiltonian path.





---
---
---
---
---


---
### Symmetry and Isomorphisms
With only one token, the resulting token graph is isomorphic to $G$. Thus
$$
F_{1}(G) \simeq G .
$$
Since two vertices $A$ and $B$ are adjacent in $F_{k}(G)$ if and only if $V(G) \backslash A$ and $V(G) \backslash B$ are adjacent in $F_{n-k}(G)$,
$$
F_{k}(G) \simeq F_{n-k}(G)
$$

---
## Advanced

---

---
### (Total) Domination

## Graph Family Specifics


### Bipartite Graphs

### Stars

### Path Graphs


## Computational Complexity

2^n

---
# Open Problems and Quiz

We now consider some open problems regarding $F_{k}(G)$ that are related to graph reconstruction. Does a given token graph uniquely determine the original graph? We conjecture that this is indeed so.

Conjecture 2 Let $G$ and $H$ be two graphs, such that $F_{k}(G) \simeq F_{k}(H)$ for some $k$. Then $G \simeq H$.


https://en.wikipedia.org/wiki/Graph_isomorphism_problem


## Proving Total Domination

## Graph Isomorphisms

This is the place where I am one to type with the things and stuff





http://go.fiu.edu/quiz


Lol what is that

https://www.youtube.com/watch?v=WgIvDKeyl8Y&ab_channel=WolframDemonstrationsProject



# Things that are getting cut

## Irregularity
