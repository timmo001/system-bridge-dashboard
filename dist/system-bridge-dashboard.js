// ../../../node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: ee, getOwnPropertyNames: te, getOwnPropertySymbols: ne, getPrototypeOf: re } = Object, d = globalThis, ie = d.trustedTypes, ae = ie ? ie.emptyScript : "", oe = d.reactiveElementPolyfillSupport, f = (e, t) => e, p = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ae : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, m = (e, t) => !l(e, t), se = {
	attribute: !0,
	type: String,
	converter: p,
	reflect: !1,
	useDefault: !1,
	hasChanged: m
};
Symbol.metadata ??= Symbol("metadata"), d.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var h = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = se) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = ee(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? se;
	}
	static _$Ei() {
		if (this.hasOwnProperty(f("elementProperties"))) return;
		let e = re(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(f("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(f("properties"))) {
			let e = this.properties, t = [...te(e), ...ne(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? p : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? p : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? m)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
h.elementStyles = [], h.shadowRootOptions = { mode: "open" }, h[f("elementProperties")] = /* @__PURE__ */ new Map(), h[f("finalized")] = /* @__PURE__ */ new Map(), oe?.({ ReactiveElement: h }), (d.reactiveElementVersions ??= []).push("2.1.2");
// ../../../node_modules/lit-html/lit-html.js
var ce = globalThis, le = (e) => e, g = ce.trustedTypes, ue = g ? g.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, de = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, fe = "?" + _, pe = `<${fe}>`, v = document, y = () => v.createComment(""), b = (e) => e === null || typeof e != "object" && typeof e != "function", me = Array.isArray, he = (e) => me(e) || typeof e?.[Symbol.iterator] == "function", ge = "[ 	\n\f\r]", x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _e = /-->/g, ve = />/g, S = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), ye = /'/g, be = /"/g, xe = /^(?:script|style|textarea|title)$/i, Se = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), C = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), Ce = /* @__PURE__ */ new WeakMap(), T = v.createTreeWalker(v, 129);
function we(e, t) {
	if (!me(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ue === void 0 ? t : ue.createHTML(t);
}
var Te = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = x;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === x ? c[1] === "!--" ? o = _e : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = S) : (xe.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = S) : o = ve : o === S ? c[0] === ">" ? (o = i ?? x, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? S : c[3] === "\"" ? be : ye) : o === be || o === ye ? o = S : o === _e || o === ve ? o = x : (o = S, i = void 0);
		let ee = o === S && e[t + 1].startsWith("/>") ? " " : "";
		a += o === x ? n + pe : l >= 0 ? (r.push(s), n.slice(0, l) + de + n.slice(l) + _ + ee) : n + _ + (l === -2 ? t : ee);
	}
	return [we(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, E = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Te(t, n);
		if (this.el = e.createElement(l, r), T.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = T.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(de)) {
					let t = u[o++], n = i.getAttribute(e).split(_), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Oe : r[1] === "?" ? ke : r[1] === "@" ? Ae : O
					}), i.removeAttribute(e);
				} else e.startsWith(_) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (xe.test(i.tagName)) {
					let e = i.textContent.split(_), t = e.length - 1;
					if (t > 0) {
						i.textContent = g ? g.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], y()), T.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], y());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === fe) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(_, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += _.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = v.createElement("template");
		return n.innerHTML = e, n;
	}
};
function D(e, t, n = e, r) {
	if (t === C) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = b(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = D(e, i._$AS(e, t.values), i, r)), t;
}
var Ee = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? v).importNode(t, !0);
		T.currentNode = r;
		let i = T.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new De(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new je(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = T.nextNode(), a++);
		}
		return T.currentNode = v, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, De = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = D(this, e, t), b(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== C && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? he(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== w && b(this._$AH) ? this._$AA.nextSibling.data = e : this.T(v.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = E.createElement(we(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Ee(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Ce.get(e.strings);
		return t === void 0 && Ce.set(e.strings, t = new E(e)), t;
	}
	k(t) {
		me(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(y()), this.O(y()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = le(e).nextSibling;
			le(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, O = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = w;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = D(this, e, t, 0), a = !b(e) || e !== this._$AH && e !== C, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = D(this, r[n + o], t, o), s === C && (s = this._$AH[o]), a ||= !b(s) || s !== this._$AH[o], s === w ? e = w : e !== w && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Oe = class extends O {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === w ? void 0 : e;
	}
}, ke = class extends O {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== w);
	}
}, Ae = class extends O {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = D(this, e, t, 0) ?? w) === C) return;
		let n = this._$AH, r = e === w && n !== w || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== w && (n === w || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, je = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		D(this, e);
	}
}, Me = ce.litHtmlPolyfillSupport;
Me?.(E, De), (ce.litHtmlVersions ??= []).push("3.3.3");
var Ne = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new De(t.insertBefore(y(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, k = globalThis, A = class extends h {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ne(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return C;
	}
};
A._$litElement$ = !0, A.finalized = !0, k.litElementHydrateSupport?.({ LitElement: A });
var Pe = k.litElementPolyfillSupport;
Pe?.({ LitElement: A }), (k.litElementVersions ??= []).push("4.2.2");
// ../../../node_modules/@lit/reactive-element/decorators/custom-element.js
var j = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer(() => {
		customElements.define(e, t);
	});
}, Fe = {
	attribute: !0,
	type: String,
	converter: p,
	reflect: !1,
	hasChanged: m
}, Ie = (e = Fe, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function Le(e) {
	return (t, n) => typeof n == "object" ? Ie(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
// ../../../node_modules/@lit/reactive-element/decorators/state.js
function Re(e) {
	return Le({
		...e,
		state: !0,
		attribute: !1
	});
}
// src/cards.ts
var M = (e, t, n) => {
	let r = {
		type: "tile",
		entity: e,
		name: n ?? [{ type: "entity" }]
	};
	return t && (r.features = t), r;
}, ze = (e) => {
	switch (e) {
		case "bar": return [{ type: "bar-gauge" }];
		case "trend": return [{ type: "trend-graph" }];
		case "none": return;
	}
}, N = (e, t) => {
	let n = {
		type: "heading",
		heading: e
	};
	return t && (n.icon = t), n;
}, Be = (e, t, n) => {
	let r = {
		type: "history-graph",
		hours_to_show: t,
		entities: e
	};
	return n && (r.title = n), r;
}, Ve = (e, t, n) => {
	let r = e.single.get("version");
	return !e.webClientUrl || !r ? [] : [{
		type: "entity",
		entity: r,
		name: `${n} | System Bridge`,
		icon: "mdi:open-in-new",
		show_name: !0,
		show_state: !1,
		tap_action: {
			action: "url",
			url_path: `${e.webClientUrl}/${t === "overview" ? "" : t}`
		}
	}];
}, He = [
	["update", "Update"],
	["version", "Version"],
	["os", "OS"],
	["kernel", "Kernel"],
	["boot_time", "Booted"],
	["pending_reboot", "Pending reboot"],
	["displays_connected", "Displays"]
], Ue = (e) => He.flatMap(([t, n]) => {
	let r = e.single.get(t);
	return r ? [{
		type: "entity",
		entity: r,
		name: n,
		show_name: !0,
		show_state: !0
	}] : [];
}), P = (e, t, n) => [...e.items[t].keys()].map((e) => ({
	section: n,
	item: e
})), F = [
	{
		page: "overview",
		title: "Overview",
		icon: "mdi:view-dashboard-outline",
		diagnostics: !0,
		sections: () => [
			{ section: "storage" },
			{ section: "now-playing" },
			{ section: "overview-load" },
			{ section: "network" },
			{ section: "overview-power" },
			{ section: "overview-temperatures" }
		]
	},
	{
		page: "battery",
		title: "Battery",
		icon: "mdi:battery",
		sections: () => [{ section: "battery" }, { section: "device-batteries" }]
	},
	{
		page: "cpu",
		title: "CPU",
		icon: "mdi:cpu-64-bit",
		sections: () => [
			{ section: "cpu" },
			{ section: "cpu-history" },
			{ section: "cpu-cores" }
		]
	},
	{
		page: "desktop",
		title: "Desktop",
		icon: "mdi:application-outline",
		sections: () => [{ section: "desktop" }]
	},
	{
		page: "disks",
		title: "Disks",
		icon: "mdi:harddisk",
		sections: (e) => [...P(e, "mount", "mount"), { section: "disk-activity" }]
	},
	{
		page: "displays",
		title: "Displays",
		icon: "mdi:monitor",
		sections: (e) => P(e, "display", "display")
	},
	{
		page: "gpus",
		title: "GPUs",
		icon: "mdi:expansion-card-variant",
		sections: (e) => P(e, "gpu", "gpu")
	},
	{
		page: "media",
		title: "Media",
		icon: "mdi:play-circle-outline",
		sections: () => [{ section: "now-playing" }]
	},
	{
		page: "memory",
		title: "Memory",
		icon: "mdi:memory",
		sections: () => [{ section: "memory" }, { section: "memory-history" }]
	},
	{
		page: "networks",
		title: "Networks",
		icon: "mdi:lan",
		sections: (e) => [{ section: "network" }, ...P(e, "interface", "interface")]
	},
	{
		page: "processes",
		title: "Processes",
		icon: "mdi:application-cog-outline",
		sections: () => [{ section: "processes" }]
	},
	{
		page: "system",
		title: "System",
		icon: "mdi:information-outline",
		diagnostics: !0,
		sections: () => [{ section: "system" }, { section: "commands" }]
	}
], We = "2026.10", Ge = /* @__PURE__ */ new Map([
	["disk_device_read_rate", "2026.11"],
	["disk_device_write_rate", "2026.11"],
	["disk_read_rate", "2026.11"],
	["disk_write_rate", "2026.11"],
	["load_average", "2026.11"],
	["load_average_5", "2026.11"],
	["load_average_15", "2026.11"],
	["network_download_rate", "2026.11"],
	["network_upload_rate", "2026.11"],
	["network_interface_download_rate", "2026.11"],
	["network_interface_upload_rate", "2026.11"],
	["network_interface_ssid", "2026.11"],
	["network_interface_signal_strength", "2026.11"],
	["network_interface_link_rate", "2026.11"],
	["ac_connected", "2026.11"],
	["battery_info", "2026.11"],
	["battery_info_state", "2026.11"],
	["battery_power", "2026.11"],
	["battery_state", "2026.11"],
	["battery_voltage", "2026.11"],
	["display_brightness", "2026.12"],
	["display_power", "2026.12"],
	["gpu_decoder_usage_percentage", "2026.12"],
	["gpu_encoder_usage_percentage", "2026.12"],
	["gpu_fan_speed_percentage", "2026.12"],
	["gpu_memory_total", "2026.12"],
	["gpu_performance_state", "2026.12"],
	["gpu_power_limit", "2026.12"],
	["swap_used", "2026.12"],
	["swap_used_percentage", "2026.12"],
	["idle_time", "2026.12"],
	["locked", "2026.12"],
	["power_hibernate", "2026.12"],
	["power_lock", "2026.12"],
	["power_logout", "2026.12"],
	["power_restart", "2026.12"],
	["power_shutdown", "2026.12"],
	["power_sleep", "2026.12"]
]), Ke = (e) => {
	let [t = 0, n = 0] = e.split(".").map((e) => Number.parseInt(e, 10));
	return t * 100 + n;
}, qe = (e, t) => Ke(e) >= Ke(t), Je = "system_bridge", Ye = [
	{
		kind: "mount",
		translationPrefix: "space_used",
		keyPrefix: "filesystem_"
	},
	{
		kind: "disk",
		translationPrefix: "disk_device_",
		keyPrefix: "disk_"
	},
	{
		kind: "interface",
		translationPrefix: "network_interface_",
		keyPrefix: "network_"
	},
	{
		kind: "gpu",
		translationPrefix: "gpu_",
		keyPrefix: "gpu_"
	},
	{
		kind: "display",
		translationPrefix: "display_",
		keyPrefix: "display_"
	},
	{
		kind: "battery",
		translationPrefix: "battery_info_",
		keyPrefix: "battery_"
	},
	{
		kind: "battery",
		translationPrefix: "battery_info",
		keyPrefix: "battery_"
	},
	{
		kind: "core",
		translationPrefix: "processes_load_cpu",
		keyPrefix: "processes_load_cpu_"
	},
	{
		kind: "core",
		translationPrefix: "cpu_power_core",
		keyPrefix: "cpu_power_core_"
	}
], Xe = (e) => e.identifiers.find(([e]) => e === Je)?.[1], Ze = (e) => Object.values(e.devices).filter((e) => e !== void 0 && Xe(e) !== void 0), I = (e, t) => {
	if (!qe(e.config.version, "2026.10")) return { error: "release" };
	let n = Ze(e);
	if (t) {
		let e = n.find(({ id: e }) => e === t);
		return e ? { device: e } : { error: "not_found" };
	}
	let [r, ...i] = n;
	return r ? i.length > 0 ? { error: "several" } : { device: r } : { error: "none" };
}, Qe = (e, t) => {
	if (t) for (let n of Ye) {
		if (!t.startsWith(n.translationPrefix) || !e.startsWith(n.keyPrefix)) continue;
		let r = t.slice(n.translationPrefix.length), i = e.slice(n.keyPrefix.length, r ? -(r.length + 1) : void 0);
		return {
			kind: n.kind,
			id: i,
			field: r || t
		};
	}
}, $e = (e) => {
	let [t, ...n] = e.map((e) => e.split(" "));
	if (!t || n.length === 0) return;
	let r = t.findIndex((e, t) => n.some((n) => n[t] !== e));
	return (r === -1 ? t : t.slice(0, r)).join(" ") || void 0;
}, et = (e, t, n) => {
	let r = Xe(t) ?? "", i = /* @__PURE__ */ new Map(), a = {
		battery: /* @__PURE__ */ new Map(),
		core: /* @__PURE__ */ new Map(),
		disk: /* @__PURE__ */ new Map(),
		display: /* @__PURE__ */ new Map(),
		gpu: /* @__PURE__ */ new Map(),
		interface: /* @__PURE__ */ new Map(),
		mount: /* @__PURE__ */ new Map()
	};
	for (let o of n) {
		let n = o.unique_id.slice(r.length + 1), s = Ge.get(o.translation_key ?? n);
		if (s !== void 0 && !qe(e.config.version, s) || o.platform !== Je || o.device_id !== t.id || o.hidden_by !== null || e.states[o.entity_id] === void 0 || !o.unique_id.startsWith(r)) continue;
		let c = Qe(n, o.translation_key);
		if (!c) {
			i.set(n || o.entity_id.slice(0, o.entity_id.indexOf(".")), o.entity_id);
			continue;
		}
		let l = a[c.kind].get(c.id) ?? {
			name: c.id,
			fields: /* @__PURE__ */ new Map(),
			labels: /* @__PURE__ */ new Map()
		};
		l.fields.set(c.field, o.entity_id), o.original_name && l.labels.set(c.field, o.original_name), a[c.kind].set(c.id, l);
	}
	for (let [e, t] of a.gpu) t.name = $e([...t.labels.values()]) ?? `GPU ${e}`;
	return {
		device: t,
		webClientUrl: t.configuration_url ? URL.parse(t.configuration_url)?.origin : void 0,
		single: i,
		items: a
	};
}, tt, nt = (e) => (tt?.entities !== e.entities && (tt = {
	entities: e.entities,
	entries: e.connection.sendMessagePromise({ type: "config/entity_registry/list" })
}), tt.entries), L = async (e, t) => et(e, t, await nt(e)), R = (e, t) => {
	let n = e.filter((e) => e !== void 0);
	if (n.every((e) => e.type === "heading")) return;
	let r = {
		type: "grid",
		cards: n
	};
	return t && (r.column_span = t), r;
}, z = ({ single: e }, ...t) => t.flatMap((t) => e.get(t) ?? []), B = (e, ...t) => t.flatMap((t) => e?.fields.get(t) ?? []), V = ({ items: e }, t, n) => [...e[t].values()].flatMap((e) => B(e, n)), H = (e, t, n) => e.length > 0 ? Be(e, t, n) : void 0, rt = (e) => e ? M(e) : void 0, U = (e, t) => e ? M(e, t) : void 0, W = (e, t, n, r) => n.flatMap((n) => {
	let i = e?.fields.get(n);
	if (!i) return [];
	let a = e?.labels.get(n), o = a?.startsWith(t) ? a.slice(t.length).trim() : "";
	return [M(i, r, o ? `${o.charAt(0).toUpperCase()}${o.slice(1)}` : void 0)];
}), it = {
	storage: ({ entities: e }) => R([N("Storage", "mdi:harddisk"), ...V(e, "mount", "space_used").map((e) => M(e))]),
	"now-playing": ({ entities: e }) => R([N("Now playing", "mdi:play-circle-outline"), ...z(e, "media").map((e) => M(e, [{ type: "media-player-playback" }, { type: "media-player-volume-slider" }]))]),
	"overview-load": ({ entities: e, hours: t }) => R([N("CPU and memory", "mdi:cpu-64-bit"), H(z(e, "processes_load", "memory_used_percentage"), t)]),
	"overview-power": ({ entities: e, hours: t }) => {
		let n = z(e, "power_usage", "cpu_power_package");
		return R([
			N("Power", "mdi:flash"),
			...n.map((e) => M(e)),
			H(n, t)
		]);
	},
	"overview-temperatures": ({ entities: e, hours: t }) => {
		let n = [...z(e, "cpu_temperature"), ...V(e, "gpu", "temperature")];
		return R([
			N("Temperatures", "mdi:thermometer"),
			...n.map((e) => M(e)),
			H(n, t)
		]);
	},
	battery: ({ entities: e, percentage: t }) => R([
		N("Battery", "mdi:battery"),
		U(e.single.get("battery"), t),
		...z(e, "battery_state", "battery_time_remaining", "battery_is_charging", "ac_connected", "battery_power", "battery_voltage").map((e) => M(e))
	]),
	"device-batteries": ({ entities: e, percentage: t }) => R([N("Devices", "mdi:battery-bluetooth"), ...[...e.items.battery.values()].flatMap((e) => [...B(e, "battery_info").map((e) => M(e, t)), ...B(e, "state").map((e) => M(e))])]),
	cpu: ({ entities: e, percentage: t }) => R([
		N("Usage", "mdi:cpu-64-bit"),
		U(e.single.get("processes_load"), t),
		...z(e, "cpu_speed", "cpu_power_package", "load_average", "cpu_temperature", "cpu_voltage").map((e) => M(e))
	]),
	"cpu-history": ({ entities: e, hours: t }) => R([
		N("Usage over time"),
		H(z(e, "processes_load"), t, "Usage"),
		H(z(e, "cpu_speed"), t, "Frequency"),
		H(z(e, "cpu_power_package"), t, "Power"),
		H(z(e, "load_average", "load_average_5", "load_average_15"), t, "Load average"),
		H(z(e, "cpu_temperature"), t, "Temperature")
	], 2),
	"cpu-cores": ({ entities: e }) => R([
		N("Cores"),
		...V(e, "core", "processes_load_cpu").map((e) => M(e)),
		...V(e, "core", "cpu_power_core").map((e) => M(e))
	]),
	memory: ({ entities: e, percentage: t }) => R([
		N("In use", "mdi:memory"),
		U(e.single.get("memory_used_percentage"), t),
		...z(e, "memory_free", "memory_used").map((e) => M(e)),
		U(e.single.get("swap_used_percentage"), t),
		rt(e.single.get("swap_used"))
	]),
	"memory-history": ({ entities: e, hours: t }) => R([N("Usage over time"), H(z(e, "memory_used_percentage", "swap_used_percentage"), t)], 2),
	mount: ({ entities: e, item: t, percentage: n }) => {
		let r = t === void 0 ? void 0 : e.items.mount.get(t), i = r?.name ?? "";
		return R([N(i, "mdi:harddisk"), ...W(r, i, ["space_used"], n)]);
	},
	"disk-activity": ({ entities: e, hours: t }) => {
		let n = z(e, "disk_read_rate", "disk_write_rate");
		return R([
			N("Activity", "mdi:swap-vertical"),
			...n.map((e) => M(e)),
			H(n, t),
			H([...e.items.disk.values()].flatMap((e) => B(e, "read_rate", "write_rate")), t, "Per disk")
		]);
	},
	display: ({ entities: e, item: t }) => {
		let n = t === void 0 ? void 0 : e.items.display.get(t), r = `Display ${n?.name ?? ""}`;
		return R([
			N(r, "mdi:monitor"),
			...W(n, r, ["power"], [{ type: "toggle" }]),
			...W(n, r, ["brightness"], [{
				type: "numeric-input",
				style: "slider"
			}]),
			...W(n, r, [
				"resolution_x",
				"resolution_y",
				"refresh_rate"
			])
		]);
	},
	gpu: ({ entities: e, item: t, hours: n, percentage: r }) => {
		let i = t === void 0 ? void 0 : e.items.gpu.get(t), a = i?.name ?? "";
		return R([
			N(a, "mdi:expansion-card-variant"),
			...W(i, a, [
				"usage_percentage",
				"memory_used_percentage",
				"encoder_usage_percentage",
				"decoder_usage_percentage"
			], r),
			...W(i, a, [
				"memory_used",
				"memory_free",
				"memory_total",
				"power_usage",
				"power_limit",
				"temperature",
				"core_clock_speed",
				"memory_clock_speed",
				"fan_speed",
				"fan_speed_percentage",
				"performance_state"
			]),
			H(B(i, "usage_percentage", "memory_used_percentage", "encoder_usage_percentage", "decoder_usage_percentage"), n, "Load over time"),
			H(B(i, "power_usage", "temperature"), n, "Power and temperature")
		]);
	},
	network: ({ entities: e, hours: t }) => {
		let n = z(e, "network_download_rate", "network_upload_rate");
		return R([
			N("Network", "mdi:lan"),
			...n.map((e) => M(e)),
			H(n, t)
		]);
	},
	interface: ({ entities: e, item: t, hours: n }) => {
		let r = t === void 0 ? void 0 : e.items.interface.get(t), i = r?.name ?? "";
		return R([
			N(i, "mdi:ethernet"),
			...W(r, i, [
				"download_rate",
				"upload_rate",
				"ssid",
				"signal_strength",
				"link_rate"
			]),
			H(B(r, "download_rate", "upload_rate"), n)
		]);
	},
	desktop: ({ entities: e, hours: t }) => R([
		N("Session", "mdi:account-clock-outline"),
		...z(e, "locked", "idle_time").map((e) => M(e)),
		H(z(e, "idle_time"), t)
	]),
	processes: ({ entities: e, hours: t }) => R([
		N("Processes", "mdi:application-cog-outline"),
		rt(e.single.get("processes_count")),
		H(z(e, "processes_count"), t)
	]),
	commands: ({ entities: e }) => R([N("Commands", "mdi:power"), ...z(e, "power_lock", "power_logout", "power_sleep", "power_hibernate", "power_restart", "power_shutdown").map((e) => M(e))]),
	system: ({ entities: e }) => R([N("Device", "mdi:information-outline"), ...z(e, "power_usage", "camera_in_use").map((e) => M(e))])
}, at = (e) => Object.hasOwn(it, e), G = (e, t, n, r, i, a = 2) => `<rect x="${e}" y="${t}" width="${n}" height="${r}" rx="${a}" fill="currentColor" fill-opacity="${i}"/>`, K = (e, t, n, r, i = 3) => `<rect x="${e}" y="${t}" width="${n}" height="${r}" rx="${i}" stroke="currentColor" stroke-opacity="0.48" stroke-width="2"/>`, q = (e, t, n, r) => `<circle cx="${e}" cy="${t}" r="${n}" fill="currentColor" fill-opacity="${r}"/>`, J = (e, t) => `<path d="${e}" stroke="currentColor" stroke-opacity="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`, Y = (e, t) => `<path d="${e}" fill="currentColor" fill-opacity="${t}"/>`, X = (e, t) => Array.from({ length: e }, (e, n) => t(n)).join(""), ot = "M8 28 L22 24 L36 30 L50 14 L64 20 L78 10 L86 12", st = {
	storage: G(8, 10, 78, 6, .12, 3) + G(8, 10, 52, 6, .4, 3) + G(8, 19, 78, 6, .12, 3) + G(8, 19, 30, 6, .4, 3) + G(8, 28, 78, 6, .12, 3) + G(8, 28, 64, 6, .4, 3),
	"now-playing": Y("M12 12 L12 32 L28 22 Z", .48) + G(36, 17, 50, 3, .12, 1.5) + G(36, 17, 28, 3, .4, 1.5) + G(36, 25, 30, 3, .24, 1.5),
	"overview-load": J("M8 30 L22 24 L36 28 L50 16 L64 22 L78 12 L86 14", .72) + J("M8 34 L22 32 L36 33 L50 28 L64 30 L78 26 L86 27", .32),
	"overview-power": Y("M46 6 L34 24 L43 24 L40 38 L56 18 L46 18 Z", .48),
	"overview-temperatures": G(24, 8, 8, 22, .24, 4) + q(28, 32, 6, .48) + G(26, 14, 4, 18, .48, 2) + J("M46 32 L56 24 L66 28 L78 12", .72),
	battery: K(24, 11, 44, 22, 4) + G(70, 18, 4, 8, .48, 1) + G(28, 15, 26, 14, .48),
	"device-batteries": X(3, (e) => K(10 + e * 26, 14, 18, 12, 3) + G(29 + e * 26, 18, 2, 4, .48, 1) + G(13 + e * 26, 17, [
		12,
		6,
		9
	][e] ?? 8, 6, .48, 1)),
	cpu: K(34, 10, 26, 24, 4) + G(41, 17, 12, 10, .48) + X(3, (e) => G(39 + e * 8, 5, 2, 5, .32, 1)) + X(3, (e) => G(39 + e * 8, 34, 2, 5, .32, 1)),
	"cpu-history": Y(`${ot} L86 34 L8 34 Z`, .12) + J(ot, .72),
	"cpu-cores": X(8, (e) => G(8 + e % 4 * 20, 10 + Math.floor(e / 4) * 14, 18, 10, [
		.48,
		.24,
		.4,
		.12,
		.32,
		.48,
		.12,
		.24
	][e] ?? .24)),
	memory: K(8, 12, 78, 20, 3) + X(6, (e) => G(14 + e * 12, 18, 8, 8, e < 4 ? .48 : .12, 1)),
	"memory-history": J("M8 32 L24 32 L24 24 L40 24 L40 28 L58 28 L58 14 L72 14 L72 18 L86 18", .72),
	mount: G(8, 12, 78, 20, .12, 4) + G(14, 20, 40, 4, .32, 2) + q(76, 22, 3, .48),
	"disk-activity": X(11, (e) => {
		let t = [
			8,
			16,
			12,
			22,
			10,
			18,
			26,
			14,
			20,
			9,
			15
		][e] ?? 10;
		return G(10 + e * 7, 36 - t, 5, t, e % 2 == 0 ? .48 : .24, 1);
	}),
	display: K(24, 8, 46, 24, 3) + G(42, 32, 10, 3, .4) + G(36, 35, 22, 2, .4),
	gpu: K(12, 10, 70, 22, 3) + q(34, 21, 7, .32) + q(34, 21, 2.5, .48) + G(50, 16, 24, 3, .24, 1.5) + G(50, 23, 14, 3, .24, 1.5) + G(18, 32, 14, 3, .32),
	network: Y("M30 8 L40 20 L34 20 L34 34 L26 34 L26 20 L20 20 Z", .48) + Y("M64 36 L74 24 L68 24 L68 10 L60 10 L60 24 L54 24 Z", .32),
	interface: q(20, 22, 6, .48) + q(74, 22, 6, .48) + G(26, 21, 42, 2, .32, 1) + G(43, 14, 8, 16, .24, 2),
	desktop: G(36, 20, 22, 16, .48, 3) + "<path d=\"M41 20 V15 A6 6 0 0 1 53 15 V20\" stroke=\"currentColor\" stroke-opacity=\"0.48\" stroke-width=\"2\"/>",
	processes: X(4, (e) => G(8, 9 + e * 8, 6, 5, .4, 1) + G(18, 9 + e * 8, [
		60,
		44,
		52,
		30
	][e] ?? 40, 5, .24)),
	commands: X(3, (e) => G(10 + e * 26, 12, 22, 20, e === 0 ? .48 : .24, 4)),
	system: "<circle cx=\"47\" cy=\"22\" r=\"13\" stroke=\"currentColor\" stroke-opacity=\"0.48\" stroke-width=\"2\"/>" + q(47, 15.5, 2, .48) + G(45, 20, 4, 11, .48, 1)
}, ct = (e, t) => {
	let n = t ? "white" : "black", r = `<svg width="94" height="44" viewBox="0 0 94 44" fill="none" color="${n}" xmlns="http://www.w3.org/2000/svg"><rect width="94" height="44" rx="8" fill="${t ? "#1C1C1C" : "white"}"/><rect x="0.5" y="0.5" width="93" height="43" rx="7.5" stroke="${n}" stroke-opacity="${t ? .24 : .12}"/>${st[e]}</svg>`;
	return `data:image/svg+xml,${encodeURIComponent(r)}`;
}, lt = "custom:system-bridge", ut = [
	"none",
	"bar",
	"trend"
];
// \0@oxc-project+runtime@0.155.0/helpers/esm/decorate.js
function Z(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
// src/editor.ts
var dt = /* @__PURE__ */ new Map([
	["device_id", "Device"],
	["hours_to_show", "History"],
	["tile_feature", "Percentage tiles"],
	["page", "Page"],
	["section", "Section"],
	["item", "Item"],
	["show_icon_and_title", "Icon and title"],
	["show_top_links", "Web client link"],
	["pages_options", "Page options"],
	["pages", "Pages"],
	["icon_and_title_pages", "Icon and title"],
	["top_links_pages", "Web client link"]
]), ft = /* @__PURE__ */ new Map([
	["none", "None"],
	["bar", "Bar"],
	["trend", "Trend"]
]), pt = /* @__PURE__ */ new Map([
	["none", "Only the value"],
	["bar", "The percentage as a bar"],
	["trend", "Recent values as a graph"]
]), mt = /* @__PURE__ */ new Map([
	["none", () => ""],
	["bar", (e) => `<rect x="8" y="32" width="78" height="6" rx="3" fill="${e}" fill-opacity="0.24"/><rect x="8" y="32" width="46" height="6" rx="3" fill="${e}" fill-opacity="0.48"/>`],
	["trend", (e) => `<path d="M8 37 L20 33 L32 36 L46 30 L60 34 L72 29 L86 32" stroke="${e}" stroke-opacity="0.72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`]
]), ht = (e, t) => {
	let n = t ? "#1C1C1C" : "white", r = t ? "white" : "black", i = mt.get(e)?.(r) ?? "", a = `<svg width="94" height="44" viewBox="0 0 94 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="94" height="44" rx="8" fill="${n}"/><rect x="0.5" y="0.5" width="93" height="43" rx="7.5" stroke="${r}" stroke-opacity="${t ? .24 : .12}"/><circle cx="17" cy="15" r="7" fill="${r}" fill-opacity="${t ? .24 : .12}"/><rect x="30" y="9" width="30" height="3" rx="1.5" fill="${r}" fill-opacity="${t ? .72 : .48}"/><rect x="30" y="16" width="20" height="3" rx="1.5" fill="${r}" fill-opacity="${t ? .48 : .32}"/>${i}</svg>`;
	return `data:image/svg+xml,${encodeURIComponent(a)}`;
}, gt = {
	hours_to_show: 1,
	tile_feature: "bar",
	show_icon_and_title: !0,
	show_top_links: !0
}, Q = F.map(({ page: e }) => e), _t = (e) => ({ select: {
	multiple: !0,
	reorder: e,
	mode: "dropdown",
	options: F.map(({ page: e, title: t }) => ({
		value: e,
		label: t
	}))
} }), vt = [{
	name: "pages_options",
	type: "expandable",
	flatten: !0,
	expanded: !0,
	schema: [
		{
			name: "pages",
			selector: _t(!0)
		},
		{
			name: "icon_and_title_pages",
			selector: _t(!1)
		},
		{
			name: "top_links_pages",
			selector: _t(!1)
		}
	]
}], yt = {
	pages: Q,
	icon_and_title_pages: Q,
	top_links_pages: Q
}, bt = /* @__PURE__ */ new Map([["cpu", "CPU"], ["gpu", "GPU"]]), xt = (e) => {
	let [t = "", ...n] = e.split("-").map((e) => bt.get(e) ?? e);
	return [t.charAt(0).toUpperCase() + t.slice(1), ...n].join(" ");
}, St = {
	storage: "Space used on every mount.",
	"now-playing": "The media playing, with playback and volume controls.",
	"overview-load": "CPU and memory load in one graph.",
	"overview-power": "Power draw, with a graph.",
	"overview-temperatures": "CPU and GPU temperatures, with a graph.",
	battery: "Battery level, state, time remaining, AC power, power draw and voltage.",
	"device-batteries": "Battery level and state of connected devices, such as a wireless mouse.",
	cpu: "CPU usage, speed, power, load average, temperature and voltage.",
	"cpu-history": "Graphs of CPU usage, speed, power, load average and temperature.",
	"cpu-cores": "Load and power of each CPU core.",
	memory: "Memory and swap in use, free and used.",
	"memory-history": "Graph of memory and swap usage.",
	mount: "One mount point: space used. Set the item to the mount point.",
	"disk-activity": "Disk read and write rates, in total and per disk.",
	display: "One display: power, brightness, resolution and refresh rate. Set the item to the display name.",
	gpu: "One GPU: load, encoder and decoder, memory, power, temperature, clocks, fan and performance state. Set the item to the GPU name.",
	network: "Download and upload rates, with a graph.",
	interface: "One network interface: rates, Wi-Fi details and a graph. Set the item to the interface name.",
	desktop: "Whether the session is locked, and how long it's been idle.",
	processes: "The number of processes, with a graph.",
	commands: "Buttons to lock, log out, sleep, hibernate, restart or shut down.",
	system: "Device power usage and whether the camera is in use."
}, Ct = /* @__PURE__ */ new Map([
	["device_id", "The System Bridge device to show."],
	["page", "The web client page this view shows."],
	["item", "For sections about one thing: its mount point, GPU, display or interface name."],
	["hours_to_show", "Hours that graphs go back."],
	["tile_feature", "Shown under percentages such as CPU and memory usage."],
	["show_icon_and_title", "Show the icon next to the title in the tab."],
	["show_top_links", "Show a link to the System Bridge web client at the top."],
	["pages", "In tab order. Drag to reorder, remove to hide."],
	["icon_and_title_pages", "Pages whose tab shows the icon next to the title."],
	["top_links_pages", "Pages with a link to the web client at the top."]
]), wt = /* @__PURE__ */ new Set([
	"overview-load",
	"overview-power",
	"overview-temperatures",
	"cpu-history",
	"memory-history",
	"disk-activity",
	"gpu",
	"network",
	"interface",
	"desktop",
	"processes"
]), Tt = /* @__PURE__ */ new Set([
	"battery",
	"device-batteries",
	"cpu",
	"memory",
	"mount",
	"gpu"
]), Et = /* @__PURE__ */ new Map([
	["mount", "mount"],
	["gpu", "gpu"],
	["display", "display"],
	["interface", "interface"]
]), Dt = (e, t) => e.length === t.length && e.every((e, n) => e === t[n]), Ot = (e, t) => [
	{
		name: "device_id",
		selector: { device: { integration: "system_bridge" } }
	},
	..."page" in e ? [{
		name: "page",
		required: !0,
		selector: { select: {
			mode: "dropdown",
			options: F.map(({ page: e, title: t }) => ({
				value: e,
				label: t
			}))
		} }
	}] : [],
	..."page" in e ? [{
		name: "links_and_titles",
		type: "grid",
		flatten: !0,
		column_min_width: "200px",
		schema: [{
			name: "show_icon_and_title",
			selector: { boolean: {} }
		}, {
			name: "show_top_links",
			selector: { boolean: {} }
		}]
	}] : [],
	..."section" in e ? [{
		name: "section",
		required: !0,
		selector: { select: {
			mode: "box",
			box_max_columns: 2,
			sort: !0,
			options: Object.entries(St).flatMap(([e, t]) => at(e) ? [{
				value: e,
				label: xt(e),
				description: t,
				image: {
					src: ct(e, !1),
					src_dark: ct(e, !0)
				}
			}] : [])
		} }
	}, ...Et.has(e.section) ? [{
		name: "item",
		required: !0,
		selector: { select: {
			mode: "dropdown",
			sort: !0,
			options: t
		} }
	}] : []] : [],
	...!("section" in e) || wt.has(e.section) ? [{
		name: "hours_to_show",
		selector: { number: {
			min: 1,
			max: 48,
			mode: "slider",
			slider_ticks: !0,
			unit_of_measurement: "h"
		} }
	}] : [],
	...!("section" in e) || Tt.has(e.section) ? [{
		name: "tile_feature",
		selector: { select: {
			mode: "box",
			box_max_columns: 3,
			options: ut.map((e) => ({
				value: e,
				label: ft.get(e) ?? e,
				description: pt.get(e),
				image: {
					src: ht(e, !1),
					src_dark: ht(e, !0)
				}
			}))
		} }
	}] : []
], kt = (e) => !("page" in e) && !("section" in e), $ = class extends A {
	constructor(...e) {
		super(...e), this._computeLabel = (e) => dt.get(e.name) ?? e.name, this._computeHelper = (e) => Ct.get(e.name), this._generalChanged = (e) => {
			if (e.stopPropagation(), !this._config) return;
			let t = {
				...this._config,
				...e.detail.value
			};
			if (t.hours_to_show === 1 && delete t.hours_to_show, t.tile_feature === "bar" && delete t.tile_feature, "show_icon_and_title" in t && t.show_icon_and_title && delete t.show_icon_and_title, "show_top_links" in t && t.show_top_links && delete t.show_top_links, kt(t)) {
				t.pages && Dt(t.pages, Q) && delete t.pages;
				let e = (e) => e && Dt([...e].sort(), [...Q].sort());
				e(t.icon_and_title_pages) && delete t.icon_and_title_pages, e(t.top_links_pages) && delete t.top_links_pages;
			}
			this._emit(t);
		};
	}
	setConfig(e) {
		this._config = e;
	}
	willUpdate() {
		let e = this.hass, t = this._config;
		if (!e || !t || !("section" in t)) return;
		let n = t.device_id ?? "";
		if (this._entitiesFor === n) return;
		this._entitiesFor = n;
		let r = I(e, t.device_id);
		"device" in r ? L(e, r.device).then((e) => {
			this._entitiesFor === n && (this._entities = e);
		}) : this._entities = void 0;
	}
	_itemOptions(e) {
		if (!("section" in e)) return [];
		let t = Et.get(e.section), n = t ? [...this._entities?.items[t] ?? []].map(([e, t]) => ({
			value: e,
			label: t.name
		})) : [];
		return e.item && !n.some(({ value: t }) => t === e.item) && n.push({
			value: e.item,
			label: e.item
		}), n;
	}
	render() {
		if (!this._config) return w;
		let e = this._config, t = kt(e) ? Se`<ha-form
          .hass=${this.hass}
          .data=${{
			...yt,
			...e
		}}
          .schema=${vt}
          .computeLabel=${this._computeLabel}
          .computeHelper=${this._computeHelper}
          @value-changed=${this._generalChanged}
        ></ha-form>` : w;
		return Se`
      <ha-form
        .hass=${this.hass}
        .data=${{
			...gt,
			...e
		}}
        .schema=${Ot(e, this._itemOptions(e))}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._generalChanged}
      ></ha-form>
      ${t}
    `;
	}
	_emit(e) {
		this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: e },
			bubbles: !0,
			composed: !0
		}));
	}
	static {
		this.styles = o`
    :host {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `;
	}
};
Z([Le({ attribute: !1 })], $.prototype, "hass", void 0), Z([Re()], $.prototype, "_config", void 0), Z([Re()], $.prototype, "_entities", void 0), $ = Z([j("system-bridge-strategy-editor")], $);
// src/section-strategy.ts
var At = ["entities", "devices"], jt = {
	release: `The System Bridge dashboard needs Home Assistant ${We} or later.`,
	none: "No System Bridge devices found. Add the System Bridge integration first.",
	several: "There are several System Bridge devices. Choose one in the settings.",
	not_found: "The System Bridge device was not found. Choose another in the settings."
}, Mt = (e) => jt[e.error], Nt = (e, { section: t, item: n }, r) => it[t]({
	entities: e,
	item: n,
	hours: r.hours_to_show ?? 1,
	percentage: ze(r.tile_feature ?? "bar")
}), Pt = (e) => ({
	type: "grid",
	cards: [{
		type: "markdown",
		content: e
	}]
}), Ft = class extends h {
	static {
		this.registryDependencies = At;
	}
	static async generate(e, t) {
		if (!at(e.section)) return Pt(`Unknown System Bridge section "${e.section}".`);
		let n = I(t, e.device_id);
		return "error" in n ? Pt(Mt(n)) : Nt(await L(t, n.device), {
			section: e.section,
			item: e.item
		}, e) ?? Pt("No System Bridge entities for this section.");
	}
	static getConfigElement() {
		return document.createElement("system-bridge-strategy-editor");
	}
	static getStubConfig(e) {
		if (!qe(e.config.version, "2026.10")) return;
		let t = /* @__PURE__ */ new Map();
		for (let n of Object.values(e.entities)) n?.device_id && t.set(n.device_id, (t.get(n.device_id) ?? 0) + 1);
		let [n] = Ze(e).sort((e, n) => (t.get(n.id) ?? 0) - (t.get(e.id) ?? 0));
		return n ? {
			type: lt,
			device_id: n.id,
			section: "overview-load"
		} : void 0;
	}
};
Ft = Z([j("ll-strategy-section-system-bridge")], Ft);
// src/view-strategy.ts
var It = (e, t, n) => e.sections(t).filter((e) => Nt(t, e, n) !== void 0).map((e) => {
	let r = {
		type: lt,
		device_id: t.device.id,
		...e
	};
	return n.hours_to_show !== void 0 && (r.hours_to_show = n.hours_to_show), n.tile_feature !== void 0 && (r.tile_feature = n.tile_feature), { strategy: r };
}), Lt = (e, t, n) => ({
	type: "sections",
	title: e.title,
	path: e.page,
	icon: e.icon,
	show_icon_and_title: n.show_icon_and_title ?? !0,
	max_columns: 3,
	badges: [...n.show_top_links === !1 ? [] : Ve(t, e.page, e.title), ...e.diagnostics ? Ue(t) : []],
	sections: It(e, t, n)
}), Rt = class extends h {
	static {
		this.registryDependencies = At;
	}
	static async generate(e, t) {
		let n = F.find(({ page: t }) => t === e.page);
		if (!n) return {
			title: "System Bridge",
			cards: [{
				type: "markdown",
				content: `Unknown System Bridge page "${e.page}".`
			}]
		};
		let r = I(t, e.device_id);
		return "error" in r ? {
			title: n.title,
			cards: [{
				type: "markdown",
				content: Mt(r)
			}]
		} : Lt(n, await L(t, r.device), e);
	}
	static getConfigElement() {
		return document.createElement("system-bridge-strategy-editor");
	}
};
Rt = Z([j("ll-strategy-view-system-bridge")], Rt);
// src/dashboard-strategy.ts
var zt = class extends h {
	static {
		this.registryDependencies = At;
	}
	static async generate(e, t) {
		let n = I(t, e.device_id);
		if ("error" in n) return { views: [{
			title: "System Bridge",
			cards: [{
				type: "markdown",
				content: Mt(n)
			}]
		}] };
		let r = await L(t, n.device);
		return { views: (e.pages ?? F.map(({ page: e }) => e)).flatMap((e) => F.filter(({ page: t }) => t === e)).filter((t) => It(t, r, e).length > 0).map((t) => Lt(t, r, {
			...e,
			show_icon_and_title: e.icon_and_title_pages?.includes(t.page) ?? !0,
			show_top_links: e.top_links_pages?.includes(t.page) ?? !0
		})) };
	}
	static getCreateSuggestions() {
		return {
			title: "System Bridge",
			icon: "mdi:desktop-tower-monitor"
		};
	}
	static getConfigElement() {
		return document.createElement("system-bridge-strategy-editor");
	}
};
zt = Z([j("ll-strategy-dashboard-system-bridge")], zt);
// src/index.ts
var Bt = "https://system-bridge.timmo.dev/using/home-assistant/#dashboard", Vt = [{
	strategyType: "dashboard",
	description: "Your computer's System Bridge data, laid out like the web client."
}, {
	strategyType: "section",
	description: "One part of a System Bridge page, such as a GPU or a disk."
}];
window.customStrategies ??= [];
for (let { strategyType: e, description: t } of Vt) window.customStrategies.some((t) => t.type === "system-bridge" && t.strategyType === e) || window.customStrategies.push({
	type: "system-bridge",
	name: "System Bridge",
	description: t,
	documentationURL: Bt,
	strategyType: e
});
