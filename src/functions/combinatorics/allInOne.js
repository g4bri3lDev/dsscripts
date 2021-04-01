export function ank(n, k) {
	if(n === 0 || k === 0) return 0;
	if(n > k) return NaN;
	return fact(k)/fact(k-n);
}

export function bnk(n, k) {
	return fact(n)/(fact(n-k)*fact(k));
}

export function cnk(n, k) {
	return bnk(n+k-1, k);
}

export function dnk(n, k) {
	return bnk(n+k-1, n);
}

export function enk(n, k) {
	return bnk(n+k, n);
}

export function fnk(n, k) {
	return fact(n) * snk2(k, n); // swap n and k
}

export function gnk(n, k) {
	return bnk(n-1, k-1);
}

export function hnk(n, k) {
	return pnk(n+k, k)
}

export function pnk(n, k) {
    if (k > n || k === 0) {
        return 0;
    }
    if (k === n) {
        return 1
    }
    return pnk(n - 1, k - 1) + pnk(n - k, k)
}

export function snk2(n,k) {
	if (n < k) return NaN;
    if (k === n) return 1
	if (n > 0 && k === 0) return 0;
    return snk2(n - 1, k - 1) + k*snk2(n - 1, k)
}

export function sumOfSnk(n, k) {
	let result = 0;
	for(let i=0; i<n; i++) {
		result += snk2(k, n);
	}
	return result;
}

export function fact(n) {
	let f = 1;
	for(let i=2; i<=n; i++) {
		f = f * i;
	}
	return f;
}

export function allInOne(n, k, kugelnUnterscheidbar, urnenUnterscheidbar, bedingung) {
	switch(bedingung){
		case "beliebig":
			if(urnenUnterscheidbar) {
				if(kugelnUnterscheidbar) {
					return (<span>nᵏ={n}^{k}={Math.pow(n,k)}</span>)
				} else {
					return (<span>Dn,k=Bn+k-1,k={dnk(n,k)}</span>)
				}
			} else {
				if(kugelnUnterscheidbar) {
					return (<span>sum(i=0,n,Si,k)=sum(i=0,{n},S_i,{k})={sumOfSnk(n,k)}</span>)
				} else {
					return (<span>Hn,k=H{n},{k}=Pn+k,k={hnk(n,k)}</span>)
				}
			}
		case "injektiv":
			if(urnenUnterscheidbar) {
				if(kugelnUnterscheidbar) {
					return (<span>An,k({n},{k})={ank(n,k)}</span>)
				} else {
					return (<span>Bn,k({n},{k})={bnk(n,k)}</span>)					
				}
			} else {
				if(kugelnUnterscheidbar) {
					return (<span>1</span>)
				} else {
					return (<span>1</span>)
				}
			}
		case "surjektiv":
			if(urnenUnterscheidbar) {
				if(kugelnUnterscheidbar) {
					return (<span>Fn,k=n!*Sk,n={fnk(n,k)}</span>)
				} else {
					return (<span>Gn,k=Bk-1,n-1={gnk(n,k)}</span>)
				}
			} else {
				if(kugelnUnterscheidbar) {
					return (<span>Sn,k={snk2(n,k)}</span>)
				} else {
					return (<span>Pn,k={pnk(n,k)}</span>)
				}
			}
		case "bijektiv":
			if(urnenUnterscheidbar) {
				if(kugelnUnterscheidbar) {
					return (<span>k!={k}!={fact(k)}</span>)
				} else {
					return (<span>1</span>)
				}
			} else {
				if(kugelnUnterscheidbar) {
					return (<span>1</span>)
				} else {
					return (<span>1</span>)
				}
			}
		default:
			return "Error, unknown state "+bedingung;
	}
}
