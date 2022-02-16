<head>
  <title>5407 - Homework 2</title>
</head>
<html lang="en">

1. Let $P_{2}$ be the space of polynomials of degree $\leq 2$. Let $L: P_{2} \rightarrow \mathbf{R}$, $L(f)=f(1)+f(0)+f(-1) .$

    1. Show that $\mathrm{L}$ is linear and injective
    2. Show that $\|f\|_{\infty}=\max _{x \in[0,1]}|f(x)|$ is a norm on $P_{2}$ and that $\mathrm{L}$ is bounded with this norm
    3. Show that $\|f\|_{1}=\int_{0}^{1}|f(x)| d x$ is a norm on $P_{2}$, but that $\mathrm{L}$ is not bounded with this norm


2. Let $(E,\|\|)$ be a normed space. A linear function $L:(E,\|\|) \rightarrow$ $(E, \mid \|)$ is called isometry if $\|L(x)\|=\|x\|$. For which values of a, b is the function $L: \mathbf{R}^{2} \rightarrow \mathbf{R}^{2}, L(x, y)=(a x+b y, c y+d x)$ an isometry? The norm in $\mathbf{R}^{2}$ is the standard norm $\|(x, y)\|_{2}^{2}=x^{2}+y^{2}$. 
Note: this is not ${ }^{*}$ quite $^{*}$ the same as the problem in the warmup

3. Let $1<p<\infty$. Show that $\ell^{2} \subset \ell^{p} \subset \ell^{\infty}$ and that the inclusions are strict. Deduce that $\ell^{p}$ can also be equipped with $\|\|_{q}$ for every $q \geq p$
   
4. Let $L: \ell^{1} \rightarrow \mathbf{K}, \quad L(x)=\sum_{n=1}^{\infty} \frac{x_{n}}{n^{2}}$.
   1.  Show that $\mathrm{L}$ is well defined and bounded (the norm on $\ell^{1}$ is the standard $\|\|_{1}$ )
   2.  Is $L$ well defined and bounded if $\ell^{1}$ is equipped with $\|\|_{\infty}$ ?

5. Use Holders inequality to find a range of $p, q \geq 1$ for which the function $L: \ell^{p} \rightarrow \ell^{q}, L(x)=\left(\frac{x_{n}}{n^{2}}\right)_{n \in \mathbf{N}}$ is bounded.
   
6. 
   1. Show that, for every injective function $f: \mathbf{R} \rightarrow K$ (not necessarily continuous), the function $d_{f}(x, y)=|f(x)-f(y)|$ is a metric in R.
   2.  Show that the function $d(x, y)=\left|\frac{x}{\sqrt{x^{2}+1}}-\frac{y}{\sqrt{y^{2}+1}}\right|$ is a metric on R.
   3. Is the function $d(x, y)=\left|\frac{x}{\sqrt{x^{2}+y^{2}}}-\frac{y}{\sqrt{y^{2}+x^{2}}}\right|$ a metric in $\mathbf{R}$ ? Prove or disprove

7. Let $f_{n}(t)=\frac{1}{1+n t}$ for $t \in(0, \infty)$ and $n \in \mathbf{N}$.
   1. What is the pointwise limit of the sequence $\left(f_{n}\right)_{n \in \mathbf{N}}$ ?
   2. Show that for each $a>0$, the sequence $\left(f_{n}\right)_{n \in \mathbf{N}}$ converges uniformly in $C[a, \infty]$ but that it is not uniformly convergent in $C(0, \infty)$.

8. (The traveling trapezoid) Let $f_{n}(t): \mathbf{R} \rightarrow \mathbf{R}, f_{n}(t)=t-n$ if $t \in$ $(n, n+1], f_{n}(t)=1$ if $t \in(n+1, n+2], f_{n}(t)=n+3-t$ if $t \in$ $(n+2, n+3]$ and $f_{n}(t)=0$ otherwise. Sketch a picture of the functions $f_{n}$. Then, show that the sequence $n \rightarrow f_{n}(t)$ converges to zero for every $t \in(-\infty, \infty)$ but it does not converge with any of the norms $\|\|_{1}, \quad\|\|_{\infty}$ and $\|\|_{2}$
   
9.  (The traveling triangle) Let $f_{n}(t): \mathbf{R} \rightarrow \mathbf{R}, f_{n}(t)=n(t-n)$ if $t \in$ $\left(n, n+\frac{1}{n}\right], f_{n}(t)=n\left(n+\frac{2}{n}-t\right)$ if $t \in\left(n+\frac{1}{n}, n+\frac{2}{n}\right]$ and $f_{n}(t)=0$ otherwise. Sketch a picture of the functions $f_{n}$. Then, show that the sequence $n \rightarrow f_{n}(t)$ converges to zero for every $t \in(-\infty, \infty)$. Does it converge with any of the norms $\|\|_{1}, \quad\|\|_{\infty}$ and $\|\|_{2}$ ?
    
10. Let $[a, b] \subset \mathbf{R}$ be a finite interval. Show that the set $H=\{f \in C[a, b]:$ $f(a)=f(b)=0\}$ is a subspace of $C[a, b]$. Then, show that every function $f \in C[a, b]$ is the pointwise limit of a sequence $\left(f_{n}\right)_{n \in \mathbf{N}} \subset H$. Is the limit also uniform (i.e, is it true that $\lim _{n \rightarrow \infty}\left\|f-f_{n}\right\|_{\infty}=0$ ?  
A pictorial proof is more than enough
